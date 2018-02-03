import React from 'react';

import {Auth} from 'aws-amplify';

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

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Password"
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="text"
            value={this.state.given_name}
            name="given_name"
            placeholder="Given Name"
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="text"
            value={this.state.family_name}
            name="family_name"
            placeholder="Family Name"
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="text"
            value={this.state.profile}
            name="profile"
            placeholder="Profile"
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="text"
            value={'m'}
            placeholder="Gender"
          />
          <input
            type="number"
            value={this.state.phone_number}
            placeholder="Phone"
            name="phone_number"
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default SignUp;