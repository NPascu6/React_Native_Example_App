export const LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

import { users as userList } from '../components/Login/login_components/userList.json';


const API_URL = 'http://192.168.122.104:4000';
const URL = `${API_URL}/login`;


/*export default getLoginResult = (payload) => {
    return {
        type: LOGIN_SUCCESS_USER,
        payload
    }
}
*/

export function login(userCredentials) {
debugger;
    for (let user of userList) {
        if (userCredentials.userName === user.userName
            && userCredentials.password === user.Password
            && user.Role === "Admin") {
                debugger;
            return {
                type: LOGIN_SUCCESS_ADMIN,
                payload: user
            }
        }
        else if (userCredentials.userName === user.userName
            && userCredentials.password === user.Password
            && user.Role === "User") {
            return {
                type: LOGIN_SUCCESS_USER,
                payload: user
            }
        }
    };

    /*try {
        const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: userCredentials
                })
            });

        const result = await response.json();
        return {
            type: LOGIN_SUCCESS_USER,
            payload: result
        }
        /*.then((response) => response.json())
        .done((responseJson) => {
            return {
                type: LOGIN_SUCCESS_USER,
                payload: responseJson
            }
        })
        .catch(
            (error) => {
                debugger;
                return {
                    type: LOGIN_ERROR,
                    payload: error
                }
            });
    }*/
    return {
        type: LOGIN_ERROR,
    }
};

/*export function login(userCredentials) {
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
    }
}*/

export function logout() {
    debugger;
    return {
        type: LOGOUT
    }
}