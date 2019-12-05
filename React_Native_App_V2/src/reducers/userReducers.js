import { 
    USER_ACTION_1,
    USER_ACTION_2,
    USER_ACTION_3
} 
from '../actions/userActions';

let newState = {
    userState: {
        action: "init"
    }
};

export default (state, action) => {
    debugger;
    switch (action.type) {
        case USER_ACTION_1:
            newState.userState.action = "Action 1 from redux";
            return newState;

        case USER_ACTION_2:
            newState.userState.action = "Action 2 from redux";
            return newState;

        case USER_ACTION_3:
            newState.userState.action = "Action 3 from redux";
            return newState;
        default:
            return state || newState;
    }
};

