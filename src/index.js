import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import Confirm from './Confirm';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// cognito
import Amplify from 'aws-amplify';
import config from './config.json';

Amplify.configure({
  Auth: {
    ...config,
  },
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/confirm/:username" component={Confirm} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();