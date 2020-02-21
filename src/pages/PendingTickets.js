import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import pending from "./pending.png";
import inprogress from "./inprogress.png";
import resolved from "./resolved.png";

class PendingTickets extends Component {
    constructor() {
        super();

        this.state = {
            tickets: []
        };
    }

    componentDidMount() {
        this.generateTickets().then((res) => {
            this.setState({
                tickets: res.data
            });
        });
    }

    generateTickets() {
        return axios.get("https://us-central1-maintenance-genie.cloudfunctions.net/api/unassigned_tickets", {
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
                    <NavLink exact to="/pendingtickets" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Pending Tickets</NavLink>
                    <NavLink exact to="/resolvedTickets" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Resolved Tickets</NavLink>
                    <NavLink to="/myaccount" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">My Account</NavLink>
                </div>
                <div className="FormDual">
                    <div className="FormChain">
                        {this.state.tickets ? this.state.tickets.slice(0, 4).map((dat) => {
                            let tmp = "NAME: " + dat.full_name + "\nADDRESS: " + dat.address + "\nDESCRIPTION: " + dat.description + "\nSUBMITTED ON: " + dat.submit_time;

                            if (dat.is_closed) {
                                return (
                                    <div key={dat.ticket_id} className="FormLink">
                                        <button><img src={resolved} alt="Resolved"></img></button>
                                        <textarea disabled value={tmp}></textarea>
                                    </div>
                                );
                            } else if (dat.is_assigned) {
                                return (
                                    <div key={dat.ticket_id} className="FormLink">
                                        <button><img src={inprogress} alt="In Progress"></img></button>
                                        <textarea disabled value={tmp}></textarea>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={dat.ticket_id} className="FormLink">
                                        <button><img src={pending} alt="Pending"></img></button>
                                        <textarea disabled value={tmp}></textarea>
                                    </div>
                                );
                            }
                        }) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default PendingTickets;