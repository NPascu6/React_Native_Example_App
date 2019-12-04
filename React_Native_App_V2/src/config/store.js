import { createStore, combineReducers } from 'redux';
import authentificationReducers from '../reducers/authentificationReducers'
import userReducers from '../reducers/userReducers'

var store = createStore(combineReducers({ authentificationReducers, userReducers }))

export default store;