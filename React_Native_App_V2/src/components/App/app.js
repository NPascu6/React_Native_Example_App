import React from 'react';

import { Provider } from 'react-redux';
import Navigation from '../Navigation/navigation';
import store from '../../config/store'

const MyApp = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

export default MyApp;
