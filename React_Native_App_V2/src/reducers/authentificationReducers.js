import { LOGIN_SUCCESS, LOGOUT } from '../actions/authentificationActions';

let newState = { user: { loggedIn: false } };

export default (state, action) => {
    debugger;
    switch (action.type) {
        case LOGIN_SUCCESS:
            newState.user.loggedIn = true;
            return newState;
        case LOGOUT:
            newState.user.loggedIn = false;
            return newState;
        default:
            return state || newState;
    }
};
