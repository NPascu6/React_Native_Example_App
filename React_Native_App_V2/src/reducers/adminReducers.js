import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED
}
    from '../actions/adminActions';

let newState = {
    users: [],
    error: '',
    addSuccess: false,
    isModalVisible: false,
    editSuccess: false,
    deleteSucces: false
};

const adminReducers = (state = newState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                error: '',
                addSuccess: true,
                isModalVisible: true
            }

        case SIGN_UP_FAILED:
            return {
                ...state,
                error: action.payload,
                addSuccess: false,
                isModalVisible: true
            }

        case EDIT_USER_SUCCESS:
            return {
                ...state,
                error: '',
                editSuccess: true,
            }

        case EDIT_USER_FAILED:
            return {
                ...state,
                error: action.payload,
                editSuccess: false,
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                error: '',
                deleteSucces: true,
            }

        case DELETE_USER_FAILED:
            return {
                ...state,
                error: action.payload,
                deleteSucces: false,
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }

        case GET_USERS_FAILED:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state || newState;
    }
};


export default adminReducers;