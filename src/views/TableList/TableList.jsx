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
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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

const data = [
        [
            "89382741",
            "鱼若初为酸菜鱼",
            "招牌无骨酸菜鱼",
            "53",
            "2019-06-13",
            "xiaoming"
        ],
        [
            "89382742",
            "湘味特色木桶饭庄",
            "凉瓜肉片饭",
            "13",
            "2019-07-01",
            "xiaoming"
        ],
        [
            "89382743",
            "湘味特色木桶饭庄",
            "腐竹炒肉饭",
            "13",
            "2019-07-04",
            "wukong"
        ],
        [
            "89382743",
            "湘味特色木桶饭庄",
            "茄子肉沫饭",
            "14",
            "2019-07-04",
            "wukong"
        ],
        [
            "89382744",
            "鱼若初为酸菜鱼",
            "酸汤肥牛",
            "23.8",
            "2019-07-07",
            "wukong"
        ]
];

function userControl(username) {

    if (username === "admin") {
        return data;
    } else {
        var valid = [];
        for (var i=0; i<data.length; i++) {
            if (data[i].includes(username)) {
                valid.push(data[i]);
            }
        }
        // console.log('valid data:', valid);
        return (
            valid
        )
    }
};

class TableList extends React.Component {

    render() {
    // const { classes } = this.props;
    // console.log('table', this.props.location.state);
    var user = this.props.location.state === undefined? 'admin' : this.props.location.state.username;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
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
                            tableData={userControl(user)}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}}

TableList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TableList);
