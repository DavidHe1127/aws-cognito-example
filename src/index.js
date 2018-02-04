import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import Signin from './Signin';
import Confirm from './Confirm';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
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
    <div>
      <ul
        style={{
          padding: '10px',
          width: '10%',
          background: '#f0f0f0',
        }}
      >
        <li>
          <Link to="/">Signup</Link>
        </li>
        <li>
          <Link to="/confirm">Confirm</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
      <Route exact path="/" component={Signup} />
      <Route path="/confirm/:username?" component={Confirm} />
      <Route path="/signin" component={Signin} />
    </div>
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();