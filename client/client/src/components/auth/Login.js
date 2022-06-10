import React from "react";
import { connect } from "react-redux";
import { startLoginUser } from "../../action/userAction";
import { Link } from "react-router-dom";

import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };

    const redirect = () => {
      return this.props.history.push("/discover");
    };

    this.props.dispatch(startLoginUser(formData, redirect));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="box">
        <h2> Login </h2>
        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="email">email</label> */}
          <input
            type="text"
            id="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            placeholder="email"
            required
          />
          {/* <br /> */}
          {/* <label htmlFor="password">password</label> */}
          <input
            type="password"
            id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <div>
            <input type="submit" value="login" />
            <small>
              don't have an account ? sign up
              <Link to="/discover/register">
                <strong>here</strong>
              </Link>
            </small>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
