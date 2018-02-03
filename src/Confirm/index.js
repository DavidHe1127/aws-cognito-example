import React from 'react';
import {Auth} from 'aws-amplify';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: '',
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const verificationCode = this.state.verificationCode.trim();

    Auth.confirmSignUp(this.props.match.params.username, verificationCode)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Confirmation</h1>
        <h5 className="subtitle">Key in your verification code you've received in the email</h5>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.email}
            name="verificationCode"
            placeholder="eg 122354"
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default Confirm;
