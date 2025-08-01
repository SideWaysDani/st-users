import React, { Component } from 'react';
import './userOnboarding.css';

class UserOnboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      full_name: '',
      email: '',
      alpaca_api_key: '',
      alpaca_secret_key: '',
      popupMessage: '',
      showPopup: false,
    };
  }

  showPopup = (message) => {
    this.setState({ popupMessage: message, showPopup: true });
    setTimeout(() => {
      this.setState({ showPopup: false, popupMessage: '' });
    }, 2000); // Popup disappears after 2 seconds
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password,
      full_name: this.state.full_name,
      email: this.state.email,
      alpaca_api_key: this.state.alpaca_api_key,
      alpaca_secret_key: this.state.alpaca_secret_key,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/adduser`, 
      // const response = await fetch(`http://localhost:5000/adduser`,
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        this.showPopup('User submitted successfully!');
        this.setState({
          username: '',
          password: '',
          full_name: '',
          email: '',
          alpaca_api_key: '',
          alpaca_secret_key: '',
        });
      } else {
        const errorData = await response.json();
        this.showPopup('Error: ' + (errorData.message || 'Failed to add user'));
      }
    } catch (error) {
      this.showPopup('Network error: ' + error.message);
    }
  };

  render() {
    return (
      <div className="form-container">
        <h2>User Onboarding</h2>
        {this.state.showPopup && (
          <div className="popup-message">
            {this.state.popupMessage}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            maxLength="100"
            onChange={this.handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            value={this.state.full_name}
            maxLength="100"
            onChange={this.handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            maxLength="100"
            onChange={this.handleChange}
            required
          />

          <label>Alpaca API Key</label>
          <input
            type="text"
            name="alpaca_api_key"
            value={this.state.alpaca_api_key}
            onChange={this.handleChange}
            required
          />

          <label>Alpaca Secret Key</label>
          <input
            type="text"
            name="alpaca_secret_key"
            value={this.state.alpaca_secret_key}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
}

export default UserOnboarding;
