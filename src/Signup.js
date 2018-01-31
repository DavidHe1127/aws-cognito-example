import React from 'react';

import {Auth} from 'aws-amplify';

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      given_name: '',
      family_name: '',
      profile: '',
      gender: 'm',
      phone_number: '',
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    const given_name = this.state.given_name.trim();
    const family_name = this.state.family_name.trim();
    const profile = this.state.profile.trim();
    const gender = this.state.gender.trim();
    const phone_number = this.state.phone_number.trim();

    Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        given_name,
        family_name,
        profile,
        gender,
        phone_number,
      },
      validationData: [],
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleEmailChange.bind(this)}
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handlePasswordChange.bind(this)}
          />
          <input
            type="text"
            value={this.state.given_name}
            placeholder="Given Name"
            onChange={this.handleEmailChange.bind(this)}
          />
          <input
            type="text"
            value={this.state.family_name}
            placeholder="Family Name"
            onChange={this.handleEmailChange.bind(this)}
          />
          <input
            type="text"
            value={this.state.profile}
            placeholder="Profile"
            onChange={this.handleEmailChange.bind(this)}
          />
          <input
            type="text"
            value={'m'}
            placeholder="Gender"
            onChange={this.handleEmailChange.bind(this)}
          />
          <input
            type="number"
            value={this.state.phone_number}
            placeholder="Phone"
            onChange={this.handleEmailChange.bind(this)}
          />
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default SignUp;