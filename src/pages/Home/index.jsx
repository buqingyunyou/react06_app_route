import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Message from "../../pages/Message";
import News from "../../pages/News";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="right-con">
          <h3>Home...</h3>
          <div>
            <NavLink to="/home/news" className="home-nav">
              News
            </NavLink>
            <NavLink to="/home/message" className="home-nav">
              Message
            </NavLink>
          </div>

          <hr />

          <Switch>
            <Route path="/home/message" component={Message}></Route>
            <Route path="/home/news" component={News}></Route>
            <Redirect to="/home/message"></Redirect>
          </Switch>

          
        </div>
      </div>
    );
  }
}
