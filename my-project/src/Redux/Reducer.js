import {FETCH_USERS_SUCCESS, INPUT_NAME} from './actionType'


const initialState = {

    users: [],
    fetchStatus: true,
    input_name: ""
}

const fetchUsersReducer = (state = initialState,action)=> {

    if(action.type === FETCH_USERS_SUCCESS) {
        return {
            ...state,
            users: action.payload
          };
    }
    if(action.type === INPUT_NAME) {
        return {
            ...state,
            input_name: action.payload.inputname
        }
    }
    return state;
}

export default fetchUsersReducer