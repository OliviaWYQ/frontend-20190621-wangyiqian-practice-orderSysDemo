import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(4)
    },
    button: {
        margin: theme.spacing(2)
    },
    title: {
        display: "flex",
        fontWeight: 500,
        fontSize: 22,
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(",")
    }
}));

export default function InputWithIcon() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.margin}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Typography className={classes.title}>订单管理系统</Typography>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Username" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <i class="material-icons">https</i>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Password" />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Button color="primary" className={classes.button}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
