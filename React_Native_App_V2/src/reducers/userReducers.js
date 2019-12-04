import { USER_ACTION_1 } from '../actions/userActions';

let newState = { 
    action: "initialStateFrom R"
};

export default (state, action) => {
    debugger;
    switch (action.type) {
        case USER_ACTION_1:
            newState.action = "ActionFrom Redux State";
            return newState;
        default:
            return state || newState;
    }
};
