/*
 * @Name: LoginPage.jsx
 * @Description: LoginPage 登陆页
 * @Creation Time: 2019/07/09 18:30.
 * @Author: wangyiqian
 * @Since: OderSysDemo 0.1.0
 */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
// import Header from "./components/Header/Header.jsx";
// import HeaderLinks from "./components/Header/HeaderLinks.jsx";
// import Footer from "./Footer/Footer.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "../CustomButtons/Button.jsx";
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
// import image from "assets/img/bg7.jpg";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";

// @withRouter
class LoginPage extends React.Component {
  // mock database for users
  // 一共3个用户
  db = {
    userdata: [
      {
        username: "admin",
        password: "admin"
      },
      {
        username: "xiaoming",
        password: "xiaoming"
      },
      {
        username: "wukong",
        password: "wukong"
      }
    ]
  };

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: "",
      password: "",
      next: "/login",
      open: false,
      setOpen: false
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  // fetch out the username typing
  changeUsername(e) {
    let name = e.target.value;
    this.setState({
      username: name
    });
  }

  // fetch out the password typing
  changePassword(e) {
    let passwd = e.target.value;
    this.setState({
      password: passwd
    });
  }
  // 检测登陆信息是否正确
  isValid(data, username, password) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].username === username && data[i].password === password) {
        return true;
      }
    }
    return false;
  }

  // check the valid username and password after submit
  handleSubmit(e) {
    e.preventDefault();
    if (
      this.isValid(this.db.userdata, this.state.username, this.state.password)
    ) {
      this.setState({
        next: "/admin"
      });
      // changing router to the right path with user control
      // eslint-disable-next-line react/prop-types
      this.props.history.push({
        pathname: "/admin/table",
        state: { username: this.state.username }
      });
    }
    // pop a window if failed
    setTimeout(() => {
      if (this.state.next === "/login") {
        this.handleClickOpen();
        // console.log('Failed!');
      }
    }, 0);
  }
  // 弹出窗口
  handleClickOpen() {
    this.setState({
      open: true
    });
  }
  // 关闭窗口
  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    // const { classes } = this.props;
    // loginPageStyle.pageHeader
    // const { classes } = this.props;
    const classes = loginPageStyle;
    // console.log(this.props);
    // console.log(theme);
    return (
      <div>
        <div
          style={{
            ...classes.pageHeader,
            backgroundImage:
              "url(https://frontend-training.oss-cn-shenzhen.aliyuncs.com/bg7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div style={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card style={classes[this.state.cardAnimaton]}>
                  <form style={classes.form}>
                    <CardHeader color="primary" style={classes.cardHeader}>
                      <h4>订 单 管 理 系 统</h4>
                    </CardHeader>
                    {/* <p className={classes.divider}>Or Be Classical</p> */}
                    <CardBody>
                      <CustomInput
                        labelText="用户名"
                        id="user"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "username",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People style={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        onChange={this.changeUsername.bind(this)}
                      />
                      <CustomInput
                        labelText="密码"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon style={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                        onChange={this.changePassword.bind(this)}
                      />
                    </CardBody>
                    <CardFooter style={classes.cardFooter}>
                      <Button
                        onClick={e => this.handleSubmit(e)}
                        simple
                        color="primary"
                        size="lg"
                        id="submit"
                      >
                        {/*<Link*/}
                        {/*  to={{*/}
                        {/*    pathname: this.state.next*/}
                        {/*    // state: { username: this.state.username }*/}
                        {/*  }}*/}
                        {/*  style={{ ...classes, textDecoration: "none" }}*/}
                        {/*>*/}
                        登陆
                        {/*</Link>*/}
                      </Button>
                      {/*用户名或密码错误*/}
                      <div>
                        <Dialog
                          open={this.state.open}
                          onClose={this.handleClose.bind(this)}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {" Invalid Username or Password! "}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Please Check your input values again...
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={this.handleClose.bind(this)}
                              color="primary"
                            >
                              OK
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          {/* <Footer whiteFont /> */}
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

// export default withStyles(loginPageStyle)(LoginPage);

// export default LoginPage;
export default withRouter(LoginPage);
