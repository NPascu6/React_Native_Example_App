import {
    LOGIN_SUCCESS
} from '../actions/loginAction';

let cloneObj = (obj) =>{
    return JSON.parse(JSON.stringify(obj));
}

let newState = { user: { loggedIn: false } };

export default (state, action) =>{
    debugger;
    switch(action.type){
        case LOGIN_SUCCESS:
            newState = cloneObj(state);
            newState.user.loggedIn = true;
            return newState
        default:
            return state || newState;
    }
};
