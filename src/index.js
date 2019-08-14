/*
 * @Name: Index.jsx
 * @Description: Index
 * @Creation Time: 2019/07/09 18:30.
 * @Author: wangyiqian
 * @Since: OderSysDemo 0.1.0
 */
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
import LoginPage from "components/Login/LoginPage";
import TableList from "./views/TableList/TableList";

import "./assets/css/material-dashboard-react.css";

const hist = createBrowserHistory();
// 设置Router路径
ReactDOM.render(
  <BrowserRouter>
    <Router history={hist}>
      <Switch>
        {/*管理界面*/}
        <Route path="/admin" component={Admin} />
        {/*列表内容*/}
        <Route path="/table" component={TableList} />
        {/*登陆界面*/}
        <Route path="/login" component={LoginPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);
