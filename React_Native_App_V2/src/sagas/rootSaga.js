import { LOGIN_ERROR, LOGIN_SUCCESS_ADMIN, LOGIN_SUCCESS_USER } from '../actions/authentificationActions';
import { takeLatest, put, all } from 'redux-saga/effects';
import { users as userList } from '../components/Login/login_components/userList.json';

function* getUsers() {
}

function* addUser(action) {
}

function* deleteUser(action) {
}

function* editUser(action) {
}

function* login(action) {
    try {
        for (let user of userList) {
            debugger;
            if (action.payload.userName === user.userName
                && action.payload.password === user.Password
                && user.Role === "Admin") {
                yield put({
                    type: LOGIN_SUCCESS_ADMIN,
                    payload: user
                })
            }
            else if (action.payload.userName === user.userName
                && action.payload.password === user.Password
                && user.Role === "User") {
                yield put({
                    type: LOGIN_SUCCESS_USER,
                    payload: user
                })
            }
        };
    }
    catch (err) {
        yield put({
            type: LOGIN_ERROR,
            payload: err
        })
    }

}

function* actionWatcher() {
    yield takeLatest('GET_USERS', getUsers);
    yield takeLatest('LOGIN', login)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
} 
