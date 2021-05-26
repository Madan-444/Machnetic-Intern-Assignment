import { FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST,FETCH_USERS_FAILURE } from "./actionType"

export const fetchUserRequest = (name)=> {
    return {
        type: FETCH_USERS_REQUEST,
        payload: name
    }
} 

export const fetchUserSuccess = users=> {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error)=> {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}