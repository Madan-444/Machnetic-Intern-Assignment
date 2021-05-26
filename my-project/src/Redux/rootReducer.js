import {combineReducers} from 'redux'
import {combineEpics} from 'redux-observable'
import {fetchUserEpic} from './myEpics';


import fetchUsersReducer from './Reducer'

export const rootReducer = combineReducers({
    app: fetchUsersReducer,
    // fetching: dataReducer
});



export const rootEpic = combineEpics(
    fetchUserEpic,
)
