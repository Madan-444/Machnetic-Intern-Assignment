import {FETCH_USERS_SUCCESS} from './actionType'


const initialState = {

    users: [],
    fetchStatus: true
}

const fetchUsersReducer = (state = initialState,action)=> {

    if(action.type === FETCH_USERS_SUCCESS) {
        return {
            ...state,
            users: action.payload
          };
    }
    return state;
}

export default fetchUsersReducer