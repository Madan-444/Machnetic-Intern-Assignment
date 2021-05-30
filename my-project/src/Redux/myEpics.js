import {mergeMap,map,catchError, startWith} from 'rxjs/operators'
import { ofType } from 'redux-observable';
import axios from 'axios'
import { from, of } from 'rxjs';

// import action types
import { FETCH_USERS_REQUEST, HANDLE_ERROR } from './actionType';
import {fetchUserSuccess, handleLoading} from './actions'

// fetching data epic
  export const fetchUserEpic = action$ => action$.pipe(
    ofType(FETCH_USERS_REQUEST),
    mergeMap(action =>
     from(axios.get(`https://api.github.com/users/${action.payload}`)).pipe(
       map(response=> fetchUserSuccess(response.data)),
       catchError((error)=> of({
         type: HANDLE_ERROR,
         payload: error
       })),
       startWith(handleLoading())
     )
      )
  )
