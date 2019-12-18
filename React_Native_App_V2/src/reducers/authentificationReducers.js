import {
    LOGIN_SUCCESS_ADMIN,
    LOGIN_SUCCESS_USER,
    LOGOUT,
    LOGIN_ERROR
} from '../actions/authentificationActions';

let newState = {
    user: {
        loggedIn: false,
        errorMessage: '',
        role: '',
        currentUser: {}
    }
};

export default (state, action) => {
    debugger;
    switch (action.type) {
      
        case LOGIN_SUCCESS_ADMIN:
            newState.user.loggedIn = true;
            newState.user.role = "Admin";
            newState.user.errorMessage = "";
            newState.user.currentUser = action.payload;

            return newState;

        case LOGIN_SUCCESS_USER:
            newState.user.loggedIn = true;
            newState.user.role = "User";
            newState.user.errorMessage = "";
            newState.user.currentUser = action.payload;

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
