export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const loginAction = (userCredentials) => {
    return {
        type: LOGIN,
        payload: userCredentials
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
}