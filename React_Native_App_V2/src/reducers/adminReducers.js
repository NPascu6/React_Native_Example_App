import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED
}
    from '../actions/adminActions';

let newState = {
    users: [],
    error: '',
    addSuccess: false,
};

const adminReducers = (state = newState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                error: '',
                addSuccess: true
            }

        case SIGN_UP_FAILED:
            newState.error = action.payload
            return newState

        case GET_USERS_SUCCESS:
            newState.users = action.payload
            return newState

        case GET_USERS_FAILED:
            newState.error = action.payload
            return newState

        default:
            return state || newState;
    }
};


export default adminReducers;