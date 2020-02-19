import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class LogInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("Log in post:");
    console.log(this.state);
    axios({
      method: "post",
      url: "https://us-central1-maintenance-genie.cloudfunctions.net/api/login",
      data: this.state,
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => {
      console.log("Log in reponse:");
      console.log(res);

      if (res.data.ticket) {
        this.props.history.push("/createticket");
      }
    })
    .catch((res) => {
      console.log("Log in error:");
      console.log(res)
    });

    this.props.history.push("/createticket");
  }

  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <NavLink exact to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Log In</NavLink>
          <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>

            <div className="FormFieldCenter">
              <button className="FormField__Button mr-20">Log In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogInForm;
