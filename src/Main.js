import React, { Component } from "react";
import {Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Male from "./Male";
import Female from "./Female";
import Nationality from "./Nationality";
import Password from "./Password";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Fetching Data API</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
			<li><NavLink exact to="/Male">Male</NavLink></li>
			<li><NavLink exact to="/Female">Female</NavLink></li>
      <li><NavLink exact to="/Nationality">Nationality</NavLink></li>
      <li><NavLink exact to="/Password">Password</NavLink></li>
 
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
			<Route exact path="/Male" component={Male}/>
			<Route exact path="/Female" component={Female}/>
      <Route exact path="/Nationality" component={Nationality}/>
      <Route exact path="/Password" component={Password}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;