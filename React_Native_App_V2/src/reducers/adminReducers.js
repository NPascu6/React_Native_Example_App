import {
    ADD_USER,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED
}
    from '../actions/adminActions';

let newState = {
    users: []
};

const adminReducers = (state = newState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: action.payload
            }

        case GET_USERS_SUCCESS:
            debugger;
            return {
                ...state,
                users: action.payload
            }

        case GET_USERS_FAILED:
            return {
                ...state,
                users: action.payload
            }

        default:
            return state || newState;
    }
};


export default adminReducers;