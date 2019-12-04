import { createStore, combineReducers } from 'redux';
import authentificationReducers from '../reducers/authentificationReducers'

var store = createStore(combineReducers({ authentificationReducers }))

export default store;