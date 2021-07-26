import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import {fetchAllCountries, addCountryToCart} from '../../redux/actions'
import {AppState} from '../../types'

import './country.scss'

const Country=()=> {

    const {name}=useParams() as any
    const history=useHistory()

    const dispatch=useDispatch()

    
    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    //cart state
    const cart= useSelector((state:AppState)=>state.cartReducer.cart)

    const [currentCountry, setCurrentCountry]=React.useState(countries.filter(country=>country.name===name)[0])
     //dispatch fetchAllCountries when page loads
     React.useEffect(()=>{
        dispatch(fetchAllCountries())
    },[dispatch])

    //update currentCountry when we have countries data

    React.useEffect(()=>{
  
        setCurrentCountry(countries.filter(country=>country.name===name)[0])
    },[countries, name])


    return (
        <div className="country-page">

          <div className="country-page__go-back">
             <Button onClick={()=>history.push('/')} className="btn btn__text" size="small" variant="text"> 
             <ArrowBackIosIcon/>
             Go back</Button>
          </div>
          {
              currentCountry && currentCountry.name && 
                <div className="country-page__details">
                <div className="country-page__details-left">
                <img src={currentCountry.flag} alt={currentCountry.name} />
                <h2 className="country-card__name">{currentCountry.name}</h2>
    
                </div>
                <div className="country-page__details-right">

                    <div className="country-page__details-right-list">

                    <h2>Population: </h2> <h2 className="right">{currentCountry.population.toLocaleString('en')}</h2>
                    </div>
                    <div className="country-page__details-right-list">

                    <h2>Region: </h2> <h2 className="right">{currentCountry.region}</h2>
                    </div>
                    <div className="country-page__details-right-list">
                    <h2>Sub-region: </h2> <h2 className="right">{currentCountry.subregion}</h2>

                    </div>
                    <div className="country-page__details-right-list">

                    <h2>Native name: </h2> <h2 className="right">{currentCountry.nativeName}</h2>
                    </div>
                    <div className="country-page__details-right-list">
                    <h2>Capital city: </h2> <h2 className="right">{currentCountry.capital}</h2>

                    </div>
                    <div className="country-page__details-right-list">
                        <h2>Languages:</h2>
                    {currentCountry.languages.map(language=>(
                        <h2 className="right" key={language.name}>{language.name}</h2>
                    ))}
                    </div>


                </div>
                </div>
          }
          <div className="country-page__actions">
          <Button className="btn btn__primary" onClick={()=>dispatch(addCountryToCart(currentCountry))} disabled={cart.includes(currentCountry)} > Add to cart </Button>
          </div>

         
          
        </div>
    )
}

export default Country
