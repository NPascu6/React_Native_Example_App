import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from '../actions/authentificationActions';

let newState = { user: { loggedIn: false, errorMessage: '' } };

export default (state, action) => {
    debugger;
    switch (action.type) {
        case LOGIN_SUCCESS:
            newState.user.loggedIn = true;
            newState.user.errorMessage = "";
            return newState;
        case LOGOUT:
            newState.user.loggedIn = false;
            newState.user.errorMessage = "";
            return newState;
        case LOGIN_ERROR:
            newState.user.loggedIn = false;
            newState.user.errorMessage = 'Incorrect user or password';
            return newState;
        default:
            return state || newState;
    }
};
