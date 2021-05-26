import {createStore,applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'

import {rootEpic,rootReducer} from './rootReducer'
// import rootEpic from './rootReducer'


const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)
epicMiddleware.run(rootEpic)

export default store;

console.log("The initial store",store.getState())