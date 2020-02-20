import React, { Component } from "react";
import axios from "axios";

class ChangeName extends Component {
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

    let target = document.getElementById("full_name");
    let value = target.value;

    console.log("Change full name:");
    console.log(value);
    axios({
      method: "post",
      url: "https://us-central1-maintenance-genie.cloudfunctions.net/api/edit_account",
      data: {
        change_name: value
      },
      headers: {
        "Authorization": "Bearer "+window.sessionStorage.token,
        "Content-Type": "application/json"
      }
    })
    .then((res) => { console.log(res) })
    .catch((res) => { console.log(res) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="full_name">Full Name</label>
          <input type="text" id="full_name" className="FormField__Input" placeholder="Enter your full name" name="full_name" value={this.state.name} onChange={this.handleChange} />
        </div>

        <div className="FormFieldCenter">
          <button className="FormField__Button mr-20">Change Name</button>
        </div>
      </form>
    );
  }
}

export default ChangeName;
