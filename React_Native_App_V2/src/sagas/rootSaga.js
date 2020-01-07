import axios from 'axios'

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


const API_URL = ' http://192.168.122.104:4000'
const url1 = `${API_URL}/users`;
const url2 = `${API_URL}/login`;

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
    try {
        //var user = yield axios.get(url2, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }).then(response => response.json());
        var user = yield axios.post(url2, { body: action.payload });
        debugger;
        user.data.rowsAffected[0] === 1 ? yield put({ type: LOGIN_SUCCESS_ADMIN, payload: user.data.recordset[0] }) : yield put({ type: LOGIN_ERROR, payload: "Authentification failed" });
    }
    catch (err) {
        yield put({ type: LOGIN_ERROR, payload: err, error: true });
    }
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
