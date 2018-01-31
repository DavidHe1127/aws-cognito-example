import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import registerServiceWorker from './registerServiceWorker';

// cognito
import Amplify from 'aws-amplify';
import config from './config.json';

Amplify.configure({
  Auth: {
    ...config
  }
});

ReactDOM.render(<Signup />, document.getElementById('root'));
registerServiceWorker();
