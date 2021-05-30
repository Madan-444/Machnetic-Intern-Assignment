import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, HANDLE_ERROR, HANDLE_LOADING, INPUT_NAME} from './actionType'


const initialState = {
    loadingFlag: false,
    users: [],
    fetchSuccessStatus: false,
    input_name: "",
    error: ''
}

const fetchUsersReducer = (state = initialState,action)=> {
    if(action.type=== HANDLE_LOADING) {
        return {
            ...state,
            loadingFlag: true,
        }
    }
    if(action.type===FETCH_USERS_REQUEST) {
        return {
            ...state,
        }
    }

    if(action.type === FETCH_USERS_SUCCESS) {
        return {
            ...state,
            users: action.payload,
            fetchSuccessStatus: true,
            loadingFlag: false,
          };
    }
    if(action.type === INPUT_NAME) {
        return {
            ...state,
            input_name: action.payload.inputname
        }
    }
    if(action.type === HANDLE_ERROR) {
        alert("Ups!! We cann't find with this name. Try again.")
        return {
            ...state,
            fetchSuccessStatus: false,
            error: action.payload
        }
    }
    return state;
}

export default fetchUsersReducer