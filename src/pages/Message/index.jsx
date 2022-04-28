import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Detail from "../Detail";

export default class Message extends React.Component {
  state = {
    indexs: [1, 2, 3],
  };

  // 编程式导航，使用 push(url,{}) 方法进行跳转
  // 合成事件：return fn
  handlePush = (key) => {
    return () => {
      this.props.history.push(`/home/message/${key}?name=lila&age=18`, {
        name: "jack",
        age: 18,
      });
    };
  };

  handleReplace = (key) => {
    return () => {
      this.props.history.replace(`/home/message/${key}`);
    };
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  handleForward = () => {
    this.props.history.goForward();
  };

  render() {
    const { indexs } = this.state;
    return (
      <div>
        <div className="detail">
          <h4>Message</h4>
          <ul>
            {indexs.map((item) => {
              return (
                <li key={item}>
                  <NavLink to={`/home/message/${item}`}>
                    Message00{item}
                  </NavLink>
                  <button onClick={this.handlePush(item)}>跳转push</button>
                  <button onClick={this.handleReplace(item)}>
                    跳转replace
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="btn-go">
            <button onClick={this.handleBack}>上一步</button>
            <button onClick={this.handleForward}>下一步</button>
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
