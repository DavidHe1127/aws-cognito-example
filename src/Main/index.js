import React from 'react';
import { Auth } from 'aws-amplify';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  signOut = () => {
    Auth.signOut()
      .then(data => {
        localStorage.removeItem('session');
        this.props.history.push('/signin');
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);

    const session = JSON.parse(localStorage.getItem('session'));

    return (
      <div className="main">
        <h2 style={{ textAlign: 'center' }}>
          Congrats you're now logged in and made the first authed api!!!
        </h2>
        <label>ID Token</label>
        <input
          type="text"
          disabled
          value={session.idToken.jwtToken}
        />
        <label>Access Token</label>
        <input
          type="text"
          disabled
          value={session.accessToken.jwtToken}
        />
        <label>Refresh Token</label>
        <input
          type="text"
          disabled
          value={session.refreshToken.token}
        />
        <button className="button button1" onClick={this.signOut}>Sign out</button>
      </div>
    );
  }
}

export default Main;
