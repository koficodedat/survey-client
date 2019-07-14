import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f // add support for Redux dev tools, if enabled. Otherwise, do nothing.
    )
);

export default store;