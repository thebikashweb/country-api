
import {UPDATE_SEARCH_KEYWORD,UiReducerState,UiActions} from '../../types'
//initial state

const initState:UiReducerState={
    searchKeyWord:''
}

//cart reducer function 

export default function uiReducer(state:UiReducerState=initState, action:UiActions):UiReducerState{

    switch(action.type){

        //adding country to cart

        case UPDATE_SEARCH_KEYWORD:{
             
            return {
                ...state, 
                searchKeyWord:action.payload
            }
        }
        
        default:
            return state
    }

}