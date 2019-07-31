import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Dashboard from "../layouts/Admin";
// import { Link } from "react-router-dom";
// import Input from "@material-ui/core/Input";
// import CustomInput from "../components/CustomInput/CustomInput.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Navbar from "../components/Navbars/Navbar.jsx";
// import Toolbar from "@material-ui/core/Toolbar";
// import Footer from "../components/Footer/Footer";

// 测试控制页 DOM
describe("Enzyme Shallow Dashboard Init", function() {
  it("Test SideBar Title", function() {
    let app = shallow(<Dashboard />);
    expect(app.find(Sidebar).props().logoText).to.equal("订单管理系统");
  });

  it("Test NavBar Title", function() {
    let app = shallow(<Dashboard />);
    expect(app.find(Navbar).props().routes[0].name).to.equal("订单记录");
  });

  // it("Test Footer Title", function() {
  //   let app = shallow(<Dashboard />);
  //   expect(app.find(Footer)).get(0);
  // });
});
