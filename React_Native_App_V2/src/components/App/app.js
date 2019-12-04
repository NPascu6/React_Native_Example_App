import React from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import loginReducer from '../../reducers/loginReducer'

import DetailsScreen from '../Details/detailsScreen';
import LoginScreen from '../Login/loginScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

let store = createStore(combineReducers({ loginReducer }))

let MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Details: { screen: DetailsScreen }
});

let Navigation = createAppContainer(MainNavigator);

const MyApp = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

export default MyApp;
