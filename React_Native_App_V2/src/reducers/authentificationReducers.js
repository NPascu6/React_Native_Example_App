import {
    LOGIN_SUCCESS_ADMIN,
    LOGIN_SUCCESS_USER,
    LOGOUT,
    LOGIN_ERROR
} from '../actions/authentificationActions';

const newState = {
    loggedIn: false,
    errorMessage: '',
    role: '',
    currentUser: {}
};

const reducer = (state = newState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS_ADMIN:
            return {
                ...state,
                loggedIn: true,
                role: 'Admin',
                errorMessage: '',
                currentUser: action.payload
            }

        case LOGIN_SUCCESS_USER:
            return {
                ...state,
                loggedIn: true,
                role: 'User',
                errorMessage: '',
                currentUser: action.payload
            }

        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                errorMessage: ''
            }

        case LOGIN_ERROR:
            return {
                ...state,
                loggedIn: false,
                errorMessage: 'Incorrect user or password'
            }

        default:
            return state;
    }
};

export default reducer;
