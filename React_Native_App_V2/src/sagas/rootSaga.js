import axios from 'axios'

import {
    LOGIN_ERROR,
    LOGIN_SUCCESS_ADMIN,
    LOGIN_SUCCESS_USER,
} from '../actions/authentificationActions';

import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED
} from '../actions/adminActions';

import { takeLatest, put, all } from 'redux-saga/effects';


const API_URL = ' http://192.168.122.104:4000'
const url1 = `${API_URL}/users`;
const url2 = `${API_URL}/login`;

function* getUsers() {
    try {
        var response = yield axios.get(url1);
        if (response.data.recordset.length > 0) {
            yield put({
                type: GET_USERS_SUCCESS,
                payload: response.data.recordset
            })
        }
        else {
            yield put({
                type: GET_USERS_FAILED,
                payload: response
            })
        }
    }
    catch (err) {
        yield put({
            type: GET_USERS_FAILED,
            payload: err
        })
    }
}

function* signUp(action) {
    debugger;
    try {
        yield axios.post(url1, { body: action.payload });
        yield put({ type: SIGN_UP_SUCCESS });
    }
    catch (err) {
        yield put({ type: SIGN_UP_FAILED, payload: err, error: true });
    }
}

function* deleteUser(action) {
}

function* editUser(action) {
}

function* login(action) {
    try {
        var response = yield axios.post(url2, { body: action.payload });
        response.data.rowsAffected[0] === 1 ?
            (response.data.recordset[0].RoleName === 'admin' ? yield put({ type: LOGIN_SUCCESS_ADMIN, payload: response.data.recordset[0] })
                : yield put({ type: LOGIN_SUCCESS_USER, payload: response.data.recordset[0] }))
            : yield put({ type: LOGIN_ERROR, payload: "Authentification failed" });
    }
    catch (err) {
        yield put({ type: LOGIN_ERROR, payload: err, error: true });
    }
}

function* actionWatcher() {
    yield takeLatest('GET_USERS', getUsers);
    yield takeLatest('LOGIN', login);
    yield takeLatest('SIGN_UP', signUp);
    yield takeLatest('DELETE_USER', deleteUser);
    yield takeLatest('EDIT_USER', editUser);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
} 
