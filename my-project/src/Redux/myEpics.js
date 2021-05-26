import {mergeMap,map} from 'rxjs/operators'
import { ofType } from 'redux-observable';
import axios from 'axios'
import { from } from 'rxjs';

// import action types
import { FETCH_USERS_REQUEST } from './actionType';
import {fetchUserSuccess} from './actions'

// fetching data epic
  export const fetchUserEpic = action$ => action$.pipe(
    ofType(FETCH_USERS_REQUEST),
    mergeMap(action =>
     from(axios.get(`https://api.github.com/users/${action.payload}`)).pipe(
       map(response=> fetchUserSuccess(response.data))
     )
      )
  )