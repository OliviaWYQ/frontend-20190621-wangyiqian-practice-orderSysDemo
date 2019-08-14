/*
 * @Name: routers.jsx
 * @Description: routers
 * @Creation Time: 2019/07/09 18:30.
 * @Author: wangyiqian
 * @Since: OderSysDemo 0.1.0
 */
// @material-ui/icons

import TableList from "./views/TableList/TableList.jsx";

// 设置菜单栏中包含的Tab
const dashboardRoutes = [
  {
    path: "/table",
    name: "订单记录",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
