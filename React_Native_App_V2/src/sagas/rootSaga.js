import {
    LOGIN_ERROR,
    LOGIN_SUCCESS_ADMIN,
    LOGIN_SUCCESS_USER,
} from '../actions/authentificationActions';

import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    ADD_USER_SUCCESS
} from '../actions/adminActions';

import { takeLatest, put, all } from 'redux-saga/effects';
import { users as userList } from '../components/Login/login_components/userList.json';

function* getUsers() {
    let users = [];
    for (let user of userList) {
        users.push(user);
    };
    if (users.length > 0) {
        yield put({
            type: GET_USERS_SUCCESS,
            payload: users
        })
    }
    else {
        yield put({
            type: GET_USERS_FAILED,
            payload: users
        })
    }

}

function* addUser(action) {
    yield put({
        type: ADD_USER_SUCCESS,
        payload: action.payload
    })
}

function* deleteUser(action) {
}

function* editUser(action) {
}

function* login(action) {
    debugger;
    for (let user of userList) {
        if (action.payload.userName === user.userName
            && action.payload.password === user.Password
            && user.Role === "Admin") {
            return yield put({
                type: LOGIN_SUCCESS_ADMIN,
                payload: user
            })
        }
        else if (action.payload.userName === user.userName
            && action.payload.password === user.Password
            && user.Role === "User") {
            return yield put({
                type: LOGIN_SUCCESS_USER,
                payload: user
            })
        }
    };
    return yield put({
        type: LOGIN_ERROR
    })
}

function* actionWatcher() {
    yield takeLatest('GET_USERS', getUsers);
    yield takeLatest('LOGIN', login);
    yield takeLatest('ADD_USER', addUser)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
} 
