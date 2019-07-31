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

ReactDOM.render(
  <BrowserRouter>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/table" component={TableList} />
        <Route path="/login" component={LoginPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);
