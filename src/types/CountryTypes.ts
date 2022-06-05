//reducer case constants
export const FETCH_COUNTRIES_LOADING="FETCH_COUNTRIES_LOADING"
export const FETCH_COUNTRIES_SUCCESS="FETCH_COUNTRIES_SUCCESS"
export const FETCH_COUNTRIES_FAILURE="FETCH_COUNTRIES_FAILURE"

//types 
export type CountryReducerState={
    countries:CountryState[],
    isLoading:boolean, 
    error:string
}
//langauge type
interface LanguagesType { [key: string]: string; }

//country state
export type CountryState={
    name: {
        common: string,
        official:string
    }
    region:string 
    subregion:string
    population:number 
    flags: {
        png:string
    }
    capital:string[]
    languages:LanguagesType

}



//action types
export type FetchAllCountriesLoadingAction={
    type: typeof FETCH_COUNTRIES_LOADING
    payload?: string
}
export type FetchAllCountriesSuccessAction={
    type: typeof FETCH_COUNTRIES_SUCCESS
    payload: []
}
export type FetchAllCountriesFailureAction={
    type: typeof FETCH_COUNTRIES_FAILURE
    payload: string
}

export type CountryActions= FetchAllCountriesLoadingAction | FetchAllCountriesSuccessAction | FetchAllCountriesFailureAction
