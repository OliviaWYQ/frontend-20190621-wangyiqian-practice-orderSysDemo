import {
  drawerWidth,
  transition,
  container
} from "../../material-dashboard-react.jsx";
/*
 * @Name: material-ui
 * @Description: material-ui
 * @Creation Time: 2019/07/09 18:30.
 * @Author: material-ui
 * @Since: OderSysDemo 0.1.0
 */

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
