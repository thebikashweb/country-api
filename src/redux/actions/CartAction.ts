import {ADD_COUNTRY_TO_CART, REMOVE_COUNTRY_FROM_CART, CartCountry, CartActions} from '../../types'

//Add a country to cart
export function addCountryToCart(country:CartCountry):CartActions{

    return {
        type:ADD_COUNTRY_TO_CART,
        payload:country
    }

}

// remove a country from the cart
export function removeCountryFromCart(country:CartCountry):CartActions{

    return {
        type:REMOVE_COUNTRY_FROM_CART,
        payload:country
    }

}
