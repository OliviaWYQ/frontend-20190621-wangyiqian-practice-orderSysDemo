import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    paper: {
        marginTop: theme.spacing(3),
        width: "100%",
        overflowX: "auto",
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 650
    }
}));

function createData(id, name, food, price, time, user) {
    return { id, name, food, price, time, user };
}

const rows = [
    createData(
        89382741,
        "鱼若初为酸菜鱼",
        "招牌无骨酸菜鱼",
        53,
        "2019-06-13",
        "小明"
    ),
    createData(
        89382742,
        "湘味特色木桶饭庄",
        "凉瓜肉片饭",
        13,
        "2019-07-01",
        "小明"
    ),
    createData(
        89382743,
        "湘味特色木桶饭庄",
        "腐竹炒肉饭",
        13,
        "2019-07-04",
        "悟空"
    ),
    createData(
        89382743,
        "湘味特色木桶饭庄",
        "茄子肉沫饭",
        14,
        "2019-07-04",
        "悟空"
    ),

    createData(89382744, "鱼若初为酸菜鱼", "酸汤肥牛", 23.8, "2019-07-07", "悟空")
];

export default function DenseTable() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>订单号</TableCell>
                            <TableCell align="right">商家名称</TableCell>
                            <TableCell align="right">菜品名称</TableCell>
                            <TableCell align="right">价格</TableCell>
                            <TableCell align="right">时间</TableCell>
                            <TableCell align="right">用户名</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.food}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.user}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
