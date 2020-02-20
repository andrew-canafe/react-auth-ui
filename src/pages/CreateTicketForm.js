import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class CreateTicketForm extends Component {
  constructor() {
    super();

    this.state = {
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  handleChange(e) {
    let target = document.getElementsByTagName("textarea")[0];
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let target = document.getElementsByTagName("textarea")[0];
    let value = target.value;
    let name = target.name;
    let authVal = "Bearer "+window.sessionStorage.token;

    console.log("Ticket post:");
    console.log(value);
    axios({
      method: "post",
      url: "https://us-central1-maintenance-genie.cloudfunctions.net/api/ticket",
      data: {[name]: value},
      headers: {
        "Authorization": authVal,
        "Content-Type": "application/json"
      }
    })
    .then((res) => { console.log(res) })
    .catch((res) => { console.log(res) });
  }

  setActive(e) {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    console.log(e);
    e.className += " active";
  }

  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <NavLink exact to="/createticket" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Create Ticket</NavLink>
          <NavLink exact to="/tickethistory" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Ticket History</NavLink>
          <NavLink to="/myaccount" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">My Account</NavLink>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <textarea rows="3" name="description" placeholder="Enter your problem description">
            </textarea>

            <div className="FormFieldCenter">
              <button className="FormField__Button mr-20">Submit Ticket</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTicketForm;
