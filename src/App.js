import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import LogInForm from "./pages/LogInForm";
import CreateTicketForm from "./pages/CreateTicketForm";
import TicketHistoryForm from "./pages/TicketHistoryForm";
import MyAccountForm from "./pages/MyAccountForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="h1Container">
          <h1>Maintenance Genie</h1>
        </div>
        <Router basename="/react-auth-ui/">
          <div className="App">
            <div className="App__Form">
              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/login" component={LogInForm}>
              </Route>
              <Route path="/createticket" component={CreateTicketForm}>
              </Route>
              <Route path="/tickethistory" component={TicketHistoryForm}>
              </Route>
              <Route path="/myaccount" component={MyAccountForm}>
              </Route>
            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
