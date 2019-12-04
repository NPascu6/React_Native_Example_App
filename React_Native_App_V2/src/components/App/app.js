import React from 'react';
import LoginScreen from '../Login/loginScreen';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import loginReducers from '../../reducers/loginReducer'

let store = createStore(combineReducers({loginReducers}))

const MyApp = () => (
  <Provider store ={store}>
    <LoginScreen />
  </Provider>
)

export default MyApp;
