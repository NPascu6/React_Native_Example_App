import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import authentificationReducers from '../reducers/authentificationReducers'
import userReducers from '../reducers/userReducers'
import adminReducers from '../reducers/adminReducers'

import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const rootReducer = combineReducers({
    authentificationReducers: authentificationReducers,
    userReducers: userReducers,
    adminReducers: adminReducers
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;