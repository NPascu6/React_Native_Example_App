export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

export function getUsers() {
    return {
        type: GET_USERS
    }
}