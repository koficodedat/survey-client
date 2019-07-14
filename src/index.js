import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import * as serviceWorker from './serviceWorker';

import store from './store/create-store';

import Secure from './inpure/Secure';
import Login from './inpure/Login';
import Home from './inpure/Home';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Secure history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Secure>
        </Router>
    </Provider> ,
    document.getElementById('root')
);

serviceWorker.unregister();