
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const EDIT_USER = 'EDIT_USER';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';

export const signUpAction = (user) => {
    return {
        type: SIGN_UP,
        payload: user
    }
}

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const editUserAction = (user) => {
    return {
        type: EDIT_USER,
        payload: user
    }
}