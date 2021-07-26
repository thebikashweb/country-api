import React from 'react'
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux'

import {removeCountryFromCart} from '../../redux/actions'


import './cartmenu.scss'

type CartMenuProps={
    cart:{}[]
    onClick:Function
    menuOpen:boolean
    anchorEl:null | HTMLElement

}

const CartMenu=({cart, onClick, menuOpen, anchorEl}:CartMenuProps)=> {


    const dispatch=useDispatch()
  
    const handleClose = () => {
      onClick()
    };
  

    return (
        <div className="cart-menu">            
      <Menu
        className="cart-menu__menu"
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
          <h2 >Cart items</h2>

          {/* items */}
          <div className="cart-menu__menu-items">

                  {/* each item/country */}
                  {cart.length===0 && 
                    <div className="cart-menu__empty">
                        <h2>No items in the cart</h2>
                    </div>
                  }

                  {cart && cart.map((country:any)=>(
                      <div className="cart-menu__menu-item">
                      <img src={country.flag} alt={country.name} />
                      <h2>{country.name}</h2>
                      <DeleteIcon className="cart-menu__delete-icon" onClick={()=>dispatch(removeCountryFromCart(country))}/>
                    </div>

                  ))}

                  

          </div>
       
      </Menu>
        </div>
    )
}

export default CartMenu




