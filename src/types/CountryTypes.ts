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

export type CountryState={
    name:string 
    region:string 
    subregion:string
    population:number 
    nativeName:string
    flag:string
    capital:string
    languages:[{name:string}]

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
