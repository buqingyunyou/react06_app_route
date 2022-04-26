import React from "react";
import "./App.css";
import {
  //主要用于单页面react应用，在主组件的最外层包裹
  BrowserRouter as Router,
  //Link //相当于a标签，阻止默认跳转的行为，作用是:改变地址栏的路由地址(to属性)
  //和Link组件一致，不同在于点击选中时,会添加active类
  NavLink,
  //根据地址栏的路由变化，动态加载指定的自定义组件（path属性，component属性）
  Route,
  //用于包裹Route和Redirect组件（只会渲染一个Route）
  Switch,
  //和React组件同级，当其他Route没有匹配上时，指定重定向路由地址(to属性)
  Redirect,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* 1.header标题 */}
          <div className="header">
            <h2>React Route, 根据路由路径切换组件</h2>
          </div>

          {/* 2.body主体 */}
          <div className="con">
            {/* 2.1左侧导航栏 */}
            <div className="nav">
              <NavLink className="nav-item" to="/about">
                About
              </NavLink>
              <NavLink className="nav-item myActive" to="/home">
                Home
              </NavLink>
            </div>

            {/* 2.2右侧主体 */}
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
