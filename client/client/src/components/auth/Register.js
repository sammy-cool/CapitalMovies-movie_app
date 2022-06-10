import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRegisterUser } from "../../action/userAction";
import "./login.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      return this.props.history.push("/discover");
    };

    this.props.dispatch(startRegisterUser(formData, redirect));
    // this.props.dispatch(startRegisterUser(formData, this.props))
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="box">
        <h2> Register with us </h2>
        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="username"> username </label> */}
          <input
            type="text"
            id="username"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
            required
            placeholder="Username"
          />
          {/* <label htmlFor="email"> email </label> */}
          <input
            type="text"
            id="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            required
            placeholder="Email"
          />
          {/* <label htmlFor="password"> password </label> */}
          <input
            type="password"
            id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            required
            placeholder="Password"
          />
          <input type="submit" value="register" />
          <small>
            already have an account ? sign in
            <Link to="/discover/login">
              <strong>here</strong>
            </Link>
          </small>
        </form>
      </div>
    );
  }
}

export default connect()(Register);
