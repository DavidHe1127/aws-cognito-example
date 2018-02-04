import React from 'react';
import {Auth} from 'aws-amplify';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const username = this.state.username.trim();
    const password = this.state.password.trim();

    Auth.signIn(username, password)
      .then(data => {
        console.log(data.CognitoUser);
        const {CognitoUser: {signInUserSession}} = data.CognitoUser.signInUserSession;
        console.log(signInUserSession);
        localStorage.setItem('session', signInUserSession);
        this.props.history.push('/home');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">SignIn</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.username}
            name="username"
            placeholder="abc@xxx.com"
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="password"
            value={this.state.email}
            name="password"
            placeholder="eg 122354"
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default SignIn;
