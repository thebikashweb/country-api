import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import cartReducer from './CartReducer'
import uiReducer from './UiReducer'

const rootReducer = () =>
  combineReducers({
    countryReducer,
    cartReducer,
    uiReducer,
  })

export default rootReducer