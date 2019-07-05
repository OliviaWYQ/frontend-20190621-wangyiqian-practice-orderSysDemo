import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from './LoginForm/LoginForm';

function Login() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={12}>
                <Container fixed>
                    <Typography
                        component="div"
                        style={{
                            backgroundColor: "#f5f5f5",
                            height: "50vh"
                        }}
                    >
                        <LoginForm />
                    </Typography>
                </Container>
            </Grid>
        </Grid>
    );
}

export default Login;
