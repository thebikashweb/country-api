import {UPDATE_SEARCH_KEYWORD, SetSearchKeywordAction} from '../../types'

//Add a country to cart
export function setSearchKeyword(keyword:string):SetSearchKeywordAction{
    return {
        type:UPDATE_SEARCH_KEYWORD,
        payload:keyword
    }
}