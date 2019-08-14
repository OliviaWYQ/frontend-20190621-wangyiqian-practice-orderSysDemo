/*
 * @Name: Admin.jsx
 * @Description: Admin 控制台首页
 * @Creation Time: 2019/07/09 18:30.
 * @Author: wangyiqian
 * @Since: OderSysDemo 0.1.0
 */
import React from "react";
// import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Navbar from "../components/Navbars/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import routes from "../routes.js";

import dashboardStyle from "../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

// import image from "../assets/img/sidebar-2.jpg";
// import logo from "../assets/img/richstone.png";

class Dashboard extends React.Component {
  state = {
    // image: image,
    color: "blue",
    hasImage: true,
    fixedClasses: "dropdown show",
    mobileOpen: false,
    isMounted: false
  };
  mainPanel = React.createRef();
  // 菜单栏
  switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/table" />
    </Switch>
  );
  // 移动端视图
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  // 移动端视图
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };
  // 移动端视图
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.mainPanel.current.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  render() {
    const classes = { dashboardStyle };
    const { ...rest } = this.props;
    // const { classes, ...rest } = this.props;
    // console.log(classes);
    // console.log({ ...rest });
    // console.log(this.props);
    // console.log('login', this.props.location.state);
    return (
      <div style={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"订单管理系统"}
          // logo={logo}
          // image={this.state.image}
          logo="https://frontend-training.oss-cn-shenzhen.aliyuncs.com/richstone.png"
          image="https://frontend-training.oss-cn-shenzhen.aliyuncs.com/sidebar-2.jpg"
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          // classes={classes}
          {...rest}
        />
        <div style={classes.mainPanel} ref={this.mainPanel}>
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <div style={classes.content}>
            <div style={classes.container}>{this.switchRoutes}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(dashboardStyle)(Dashboard);

export default Dashboard;
