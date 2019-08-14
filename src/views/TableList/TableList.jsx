/*
 * @Name: TableList.jsx
 * @Description: TableList 表格页
 * @Creation Time: 2019/07/09 18:30.
 * @Author: wangyiqian
 * @Since: OderSysDemo 0.1.0
 */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

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

export default class TableList extends React.Component {
  // 表格信息数据
  data = [
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
    ["89382744", "鱼若初为酸菜鱼", "酸汤肥牛", "23.8", "2019-07-07", "wukong"]
  ];
  // 用户鉴权
  userControl = username => {
    if (username === "admin") {
      return this.data;
    } else {
      var valid = [];
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].includes(username)) {
          valid.push(this.data[i]);
        }
      }
      // console.log('valid data:', valid);
      return valid;
    }
  };

  render() {
    const { classes } = styles;
    // console.log('table', this.props.location.state);
    // eslint-disable-next-line react/prop-types
    var state = this.props.location.state;
    var user = state === undefined ? "admin" : state.username;
    return (
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={12}
          style={{
            marginTop: "50px"
          }}
        >
          <Card className={classes}>
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
                tableData={this.userControl(user)}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

TableList.propTypes = {
  classes: PropTypes.object
};

// export default withStyles(styles)(TableList);
