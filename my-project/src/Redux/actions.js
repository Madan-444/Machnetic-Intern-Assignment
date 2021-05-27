import { FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST,FETCH_USERS_FAILURE, INPUT_NAME, HANDLE_ERROR } from "./actionType"

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

export const inputName = (inputname)=>{
    return {
        type: INPUT_NAME,
        payload: {
            inputname
        }
    }
}
export const handleError = (error)=> {
    return {
        type: HANDLE_ERROR,
        payload: error
    }
}