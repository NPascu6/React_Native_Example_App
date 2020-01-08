
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

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