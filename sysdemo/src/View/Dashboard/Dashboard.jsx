/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "./components/Grid/GridItem.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import Table from "./components/Table.jsx";
import Card from "./components/Card/Card.jsx";
import CardHeader from "./components/Card/CardHeader.jsx";
import CardBody from "./components/Card/CardBody.jsx";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

function TableList(props) {
    // const { classes } = props;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    {/* <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader> */}
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={[
                                "订单号",
                                "商家名称",
                                "菜品名称",
                                "价格",
                                "时间",
                                "用户名"
                            ]}
                            tableData={[
                                [
                                    89382741,
                                    "鱼若初为酸菜鱼",
                                    "招牌无骨酸菜鱼",
                                    53,
                                    "2019-06-13",
                                    "小明"
                                ],
                                [
                                    89382742,
                                    "湘味特色木桶饭庄",
                                    "凉瓜肉片饭",
                                    13,
                                    "2019-07-01",
                                    "小明"
                                ],
                                [
                                    89382743,
                                    "湘味特色木桶饭庄",
                                    "腐竹炒肉饭",
                                    13,
                                    "2019-07-04",
                                    "悟空"
                                ],
                                [
                                    89382743,
                                    "湘味特色木桶饭庄",
                                    "茄子肉沫饭",
                                    14,
                                    "2019-07-04",
                                    "悟空"
                                ],
                                [
                                    89382744,
                                    "鱼若初为酸菜鱼",
                                    "酸汤肥牛",
                                    23.8,
                                    "2019-07-07",
                                    "悟空"
                                ]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

TableList.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(TableList);
