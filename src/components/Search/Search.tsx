import React from 'react'
import {useDispatch} from 'react-redux'
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

import {setSearchKeyword} from '../../redux/actions'

import './search.scss'



const Search=()=> {

    const dispatch=useDispatch()

    //handle input change
    const handleInputChange=(e:any)=>{           
        dispatch(setSearchKeyword(e.target.value))
       
    }

    return (
        <div className="search-box">
            <div className="search-box__wrapper">
             <Input onChange={handleInputChange} placeholder="Search" disableUnderline={true}  />
            <SearchIcon/>

            </div>
            
        </div>
    )
}

export default Search
