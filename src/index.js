import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Login from './components/Login';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

import './styles/global.css';

ReactDOM.render(
        <Router path="/" history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/First" component={First}/>
                <Route path="/Second" component={Second}/>
                <Route path="/Third" component={Third}/>
            </Route>
        </Router>, document.getElementById('root')
);

registerServiceWorker();
