import { 
    ADD_USER
} 
from '../actions/adminActions';

let newState = {
    userList: {
        users: []
    }
};

export default (state, action) => {
    debugger;
    switch (action.type) {
        case ADD_USER:
            newState.userList.users = [];
            return newState;

        default:
            return state || newState;
    }
};
