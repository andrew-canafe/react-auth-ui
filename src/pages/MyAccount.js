import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import ChangeName from "./ChangeName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangeAddress from "./ChangeAddress";
import DeleteAccount from "./DeleteAccount";
import LogOut from "./LogOut";

class MyAccount extends Component {
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
      <div>
        <div className="PageSwitcher">
          <NavLink to="/createticket" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Create Ticket</NavLink>
          <NavLink to="/tickethistory" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Ticket History</NavLink>
          <NavLink to="/myaccount" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">My Account</NavLink>
        </div>

        <div className="FormDual">
          <div className="FormLeft">
            <div className="TabSwitcher">
              <NavLink exact to="/myaccount" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Log Out</NavLink>
              <NavLink to="/myaccount/changename" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Change Name</NavLink>
              <NavLink to="/myaccount/changeaddress" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Change Address</NavLink>
              <NavLink to="/myaccount/changeemail" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Change Email</NavLink>
              <NavLink to="/myaccount/changepassword" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Change Password</NavLink>
              <NavLink to="/myaccount/deleteaccount" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Delete Account</NavLink>
            </div>
          </div>

          <div className="FormRight">
            <Route exact path="/myaccount" component={LogOut}>
            </Route>
            <Route path="/myaccount/changename" component={ChangeName}>
            </Route>
            <Route path="/myaccount/changeaddress" component={ChangeAddress}>
            </Route>
            <Route path="/myaccount/changeemail" component={ChangeEmail}>
            </Route>
            <Route path="/myaccount/changepassword" component={ChangePassword}>
            </Route>
            <Route path="/myaccount/deleteaccount" component={DeleteAccount}>
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
