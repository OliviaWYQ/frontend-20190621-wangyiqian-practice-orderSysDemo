/*
 * @Name: Footer.jsx
 * @Description: Footer
 * @Creation Time: 2019/07/09 18:30.
 * @Author: wangyiqian
 * @Since: OderSysDemo 0.1.0
 */
/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes } = props;
  return (
      <footer className={classes.footer}>
        <div className={classes.container}>
          <p className={classes.right}>
          <span>
            Copyright &copy; {1900 + new Date().getYear()}{" "}
            <a
                href="http://richstonedt.com/en/"
                target="_blank"
                className={classes.a}
            >
              Richstone
            </a>
            . All Rights Reserved
          </span>
          </p>
        </div>
      </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
