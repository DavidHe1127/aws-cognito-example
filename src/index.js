import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import Signin from './Signin';
import Confirm from './Confirm';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';

// cognito
import Amplify, {Auth} from 'aws-amplify';
import config from './config.json';

function signout() {
  Auth.signOut()
    .then(data => {
      console.log('signout', data)
      localStorage.setItem('session', null);
    })
    .catch(err => console.log(err));
}

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
        <li></li>
        {!localStorage.getItem('session') && (
          <li>
            <button onClick={signout}>Sign out</button>
          </li>
        )}
      </ul>
      <Route exact path="/" component={Signup} />
      <Route path="/confirm/:username?" component={Confirm} />
      <Route path="/signin" component={Signin} />
      <Route path="/home" component={Main} />
    </div>
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();