export const LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

import {users as userList} from '../components/Login/login_components/userList.json';

export function login(userCredentials) {

    debugger;
    let x = userList;
    if (userCredentials.userName === 'test' && userCredentials.password === 'test') {
        return {
            type: LOGIN_SUCCESS_ADMIN
        }
    }
    else if (userCredentials.userName === 'test' && userCredentials.password === 'test1234') {
        return {
            type: LOGIN_SUCCESS_USER
        }
    }
    else {
        return {
            type: LOGIN_ERROR
        }
    }
}

export function logout() {
    debugger;
    return {
        type: LOGOUT
    }
}