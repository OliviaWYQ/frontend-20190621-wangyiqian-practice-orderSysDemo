/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
// import Header from "./components/Header/Header.jsx";
// import HeaderLinks from "./components/Header/HeaderLinks.jsx";
// import Footer from "./Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const db = {
    userdata: [{
        username: 'admin',
        password: 'admin',
    },
    {
        username: 'xiaoming',
        password: 'xiaoming',
    },{
        username: 'wukong',
        password: 'wukong',
    }]
}

class LoginPage extends React.Component {
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

    changeUsername(e){
        let name = e.target.value;
        this.setState({
            username: name
        });
    }

    changePassword(e){
        let passwd = e.target.value;
        this.setState({
            password: passwd
        });
    }

    handleSubmit(e){
        e.preventDefault();
        for (var i=0; i<db.userdata.length; i++) {
            if(db.userdata[i].username === this.state.username && db.userdata[i].password === this.state.password){
                this.setState({
                    next: '/admin'
                });
                this.props.history.push({ pathname:'/admin/table', state: { username: this.state.username} });
                // console.log('Success!', this.state);
            }
        }
        setTimeout(() => {
            if (this.state.next === '/login') {
                this.handleClickOpen();
                // console.log('Failed!');
            }
        }, 0)

    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card className={classes[this.state.cardAnimaton]}>
                                    <form className={classes.form}>
                                        <CardHeader color="primary" className={classes.cardHeader}>
                                            <h4>订 单 管 理 系 统</h4>
                                        </CardHeader>
                                        {/* <p className={classes.divider}>Or Be Classical</p> */}
                                        <CardBody>
                                            <CustomInput
                                                labelText="用户名"
                                                id="first"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
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
                                                            <Icon className={classes.inputIconsColor}>
                                                                lock_outline
                                                            </Icon>
                                                        </InputAdornment>
                                                    ),
                                                    autoComplete: "off"
                                                }}
                                                onChange={this.changePassword.bind(this)}
                                            />
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                                <Button
                                                    onClick={e => this.handleSubmit(e)}
                                                    simple color="primary" size="lg">
                                                    <Link
                                                        // onClick={console.log(this.state.next)}
                                                        to={{ pathname: this.state.next, state: {username: this.state.username}}}
                                                        style={{ textDecoration: "none" }}>
                                                        登陆
                                                    </Link>
                                                </Button>
                                                {/*用户名或密码错误*/}
                                                <div>
                                                    <Dialog
                                                        open={this.state.open}
                                                        onClose={this.handleClose.bind(this)}
                                                        aria-labelledby="alert-dialog-title"
                                                        aria-describedby="alert-dialog-description"
                                                    >
                                                        <DialogTitle id="alert-dialog-title">{" Invalid Username or Password! "}</DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText id="alert-dialog-description">
                                                                Please Check your input values again...
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={this.handleClose.bind(this)} color="primary">
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

export default withStyles(loginPageStyle)(LoginPage);
