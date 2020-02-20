import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class TicketHistoryForm extends Component {
  constructor() {
    super();

    this.state = {
      tickets: []
    };

    this.generateTickets().then((res) => {
      this.setState({
        tickets: res.data
      });
    });
  }

  generateTickets() {
    return axios.get("https://us-central1-maintenance-genie.cloudfunctions.net/api/tickets", {
      headers: {
        "Authorization": "Bearer " + window.sessionStorage.token,
        "Content-Type": "application/json"
      }
    }).then((res) => {
      return res;
    }).catch((res) => {
      return {};
    });
  }

  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <NavLink exact to="/createticket" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Create Ticket</NavLink>
          <NavLink exact to="/tickethistory" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Ticket History</NavLink>
          <NavLink to="/myaccount" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">My Account</NavLink>
        </div>
      </div>
    );
  }
}

export default TicketHistoryForm;
