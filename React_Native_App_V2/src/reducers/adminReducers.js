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
    addSuccess: false
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
            return {
                ...state,
                error: action.payload,
                addSuccess: false
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }

        case GET_USERS_FAILED:
            return{
                ...state,
                error: action.payload
            }

        default:
            return state || newState;
    }
};


export default adminReducers;