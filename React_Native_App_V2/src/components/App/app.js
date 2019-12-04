import React from 'react';
import { Provider } from 'react-redux';
//Redux
import store from '../../config/store'
//Components
import Navigation from '../Navigation/Navigation';



const MyApp = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

export default MyApp;
