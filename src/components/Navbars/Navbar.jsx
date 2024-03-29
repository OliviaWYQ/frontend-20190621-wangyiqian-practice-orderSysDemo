/*
 * @Name: NavBar.jsx
 * @Description: NavBar
 * @Creation Time: 2019/07/09 18:30.
 * @Author: wangyiqian
 * @Since: OderSysDemo 0.1.0
 */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerStyle from "../../assets/jss/material-dashboard-react/components/headerStyle.jsx";

import Radium, { StyleRoot } from "radium";

// change styles with different size windows
const blank = {
  float: "left",
  display: "block",
  width: "260px",
  "@media (max-width: 991px)": {
    float: "left",
    display: "block",
    width: 0
  }
};
// 首页标题
function Header({ ...props }) {
  // router name of the page
  var name;
  function makeBrand() {
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      {/*change styles with different size windows*/}
      <StyleRoot>
        <div style={blank}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </StyleRoot>
      {/*the top nav bar*/}
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(headerStyle)(Radium(Header));
