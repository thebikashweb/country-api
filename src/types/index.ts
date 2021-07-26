
import {CountryReducerState} from './CountryTypes'
import {CartReducerState} from './CartTypes'
import {UiReducerState} from './UiTypes'
export * from './CountryTypes'
export * from './CartTypes'
export * from './UiTypes'


//global App state

export type AppState={
    countryReducer:CountryReducerState    
    cartReducer:CartReducerState
    uiReducer:UiReducerState
}