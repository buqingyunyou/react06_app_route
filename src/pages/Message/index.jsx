import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import Detail from "../Detail";

export default class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="detail">
          <h4>Message</h4>
          <ul>
            <li>
              <NavLink to="/home/message/1">Message001</NavLink>
              <button>跳转push</button>
              <button>跳转replace</button>
            </li>
            <li>
              <NavLink to="/home/message/2">Message002</NavLink>
              <button>跳转push</button>
              <button>跳转replace</button>
            </li>
            <li>
              <NavLink to="/home/message/3">Message003</NavLink>
              <button>跳转push</button>
              <button>跳转replace</button>
            </li>
          </ul>
          <div className="btn-go">
            <button>上一步</button>
            <button>下一步</button>
          </div>

          <Switch>
            <Route path="/home/message/:id" component={Detail}></Route>
            <Redirect to="/home/message/1"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
