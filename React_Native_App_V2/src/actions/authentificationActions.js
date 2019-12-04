export const LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

import { users as userList } from '../components/Login/login_components/userList.json';

export function login(userCredentials) {
    debugger;

    for (let user of userList) {
        if (userCredentials.userName === user.UserName
            && userCredentials.password === user.Password
            && user.Role === "Admin") {
            return {
                type: LOGIN_SUCCESS_ADMIN
            }
        }
        else if (userCredentials.userName === user.UserName
             && userCredentials.password === user.Password 
             && user.Role === "User") {
            return {
                type: LOGIN_SUCCESS_USER
            }
        }
    };
    return {
        type: LOGIN_ERROR
    }

}

export function logout() {
    debugger;
    return {
        type: LOGOUT
    }
}