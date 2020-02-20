import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import CreateTicket from "./pages/CreateTicket";
import TicketHistory from "./pages/TicketHistory";
import MyAccount from "./pages/MyAccount";
import "./App.css";
import generateAlert from "./pages/AlertMessage";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div>
          <div className="App">
            <div className="App__Form">
              <Route exact path="/" component={SignUp}>
              </Route>
              <Route path="/login" component={LogIn}>
              </Route>
              <Route path="/createticket" component={CreateTicket}>
              </Route>
              <Route path="/tickethistory" component={TicketHistory}>
              </Route>
              <Route path="/myaccount" component={MyAccount}>
              </Route>
              <Route path="/" component={e => generateAlert()}>
              </Route>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
