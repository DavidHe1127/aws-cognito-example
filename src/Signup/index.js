import React from 'react';
import {Auth} from 'aws-amplify';

import './index.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      given_name: '',
      family_name: '',
      profile: 'this is awesome',
      gender: 'm',
      phone_number: '',
      error: false
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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
    const phone = this.state.phone_number.trim();

    if (!email && !password) {
      return this.setState({
        error: true
      });
    }

    // Auth.signUp({
    //   username: 'tracyguan108@gmail.com',
    //   password: '52230365DavidHe',
    //   email: 'tracyguan108@gmail.com',
    //   given_name: 'xin',
    //   family_name: 'guan',
    //   profile: 'good',
    //   gender: 'f',
    //   phone_number: '+61430296166',
    // })
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));

    this.props.history.push(`/confirm/${email}`);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Sign Up</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.email}
            name="email"
            className={this.state.error ? "error" : null}
            placeholder="aaa@abc.com"
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            className={this.state.error ? "error" : null}
            placeholder="min length 8 and must contain lowercase letters"
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
            type="number"
            value={this.state.phone_number}
            placeholder="+61430285197"
            name="phone_number"
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default SignUp;
