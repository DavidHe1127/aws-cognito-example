import React from 'react';
import {Auth} from 'aws-amplify';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
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
        const { signInUserSession } = data;
        localStorage.setItem('session', JSON.stringify(signInUserSession));
        this.props.history.push('/main');
      })
      .catch(err => this.setState({
        error: err.message
      }));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">SignIn</h1>
        <p style={{color: "red"}}>{this.state.error}</p>
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
