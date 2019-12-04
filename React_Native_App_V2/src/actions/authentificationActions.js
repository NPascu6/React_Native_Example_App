export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export function login(userCredentials) {
    debugger;
    if (userCredentials.userName === 'test' && userCredentials.password === 'test1234') {
        return {
            type: LOGIN_SUCCESS
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