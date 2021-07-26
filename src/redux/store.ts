import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer  from './reducers'



const initState={
}

export default function makeStore(initialState=initState){

    const middlewares=[thunk]
    let composeEnhancers=compose

    // redux dev tool setup 
    if (process.env.NODE_ENV === 'development') {
        if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
          composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        }
      }

      //create redux store
    const store =createStore(rootReducer(), initialState,composeEnhancers(applyMiddleware(...middlewares)) )

    if ((module as any).hot) {
        ;(module as any).hot.accept('./reducers', () => {
          const nextReducer = require('./reducers').default
          store.replaceReducer(nextReducer)
        })
      }


    return store

}

