import { createStore, combineReducers } from 'redux';
import authentificationReducers from '../reducers/authentificationReducers'
import userReducers from '../reducers/userReducers'
import adminReducers from '../reducers/adminReducers'

var store = createStore(combineReducers({ authentificationReducers, userReducers, adminReducers }))

export default store;