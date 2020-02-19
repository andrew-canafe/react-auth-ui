import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class TicketHistoryForm extends Component {
  constructor() {
    super();

    this.state = {
      problem_type: '',
      additional_instructions: ''
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
      method: 'post',
      url: 'https://us-central1-maintenance-genie.cloudfunctions.net/api/login',
      data: this.state,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => { console.log(res) })
      .catch((res) => { console.log(res) });

    console.log('The form was submitted with the following data:');
    console.log(this.state);
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
          <textarea rows="3" disabled value="Ticket history 1">
          </textarea>
          <textarea rows="3" disabled value="Ticket history 2">
          </textarea>
          <textarea rows="3" disabled value="Ticket history 3">
          </textarea>
        </div>
      </div>
    );
  }
}

export default TicketHistoryForm;
