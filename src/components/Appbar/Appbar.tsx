import React from 'react'
import {useSelector} from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

import {AppState} from '../../types'

import Search from '../Search/Search'
import CartMenu from '../CartMenu/CartMenu'

import './appbar.scss'

interface AppbarProps{
    onClick:Function
    drawerState:boolean   
}

const Appbar=(props:AppbarProps)=> {

    const {onClick,drawerState} =props

    //cart
    const cart=useSelector((state:AppState)=>state.cartReducer.cart)
   
    //on drawer close 
    const onDrawerClick=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)

    }

    //cart menu open related state and functions

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
  
    const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCartMenuClose = () => {
        setAnchorEl(null);
      };

    

    return (
        <div className="appbar">
            <div className="appbar__content container">
                   {/* Logo area */}
                <div className="appbar__content-left">
                    <img src={process.env.PUBLIC_URL+'/images/country-api-logo-black.svg'} alt="country api text"/>
                </div>
                   {/* Search box area */}
                <div className="appbar__content-search">                    
                    {/* Search component */}
                    <Search/>
                </div>
                {/* right side items */}
                <div className="appbar__content-right">

                      {/* Cart menu */}
                      <CartMenu cart={cart} onClick={handleCartMenuClose} menuOpen={menuOpen} anchorEl={anchorEl}/>
                     {/* shopping cart related */}
                    <div className="appbar__content-cart" onClick={handleCartMenuClick}>
                        <ShoppingCartIcon  className="cursor-pointer" />
                         {/* cart counter component */}
                        
                        <div className={`appbar__content-cart-counter cursor-pointer ${cart.length>0?'active':''}`}  >
                            {cart && cart.length}
                        </div> 
                        
                      


                    </div>
                     {/* menu hamburger icon */}
                    <MenuIcon className="cursor-pointer" onClick={onDrawerClick}/>

                </div>
            </div>

          
        </div>
    )
}

export default Appbar
