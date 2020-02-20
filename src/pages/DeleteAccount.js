import React, { Component } from "react";
import axios from "axios";

class DeleteAccount extends Component {
  constructor() {
    super();

    this.state = {
      problem_type: "",
      additional_instructions: ""
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

    axios({
      method: "post",
      url: "https://us-central1-maintenance-genie.cloudfunctions.net/api/login",
      data: this.state,
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => { })
      .catch((res) => { });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Current Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your current password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>

        <div className="FormFieldCenter">
          <button style={{"backgroundColor": "red"}} className="FormField__Button mr-20">Delete Account</button>
        </div>
      </form>
    );
  }
}

export default DeleteAccount;
