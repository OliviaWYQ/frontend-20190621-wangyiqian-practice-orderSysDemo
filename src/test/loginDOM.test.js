import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import { expect } from "chai";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import sinon from 'sinon';
import { withRouter } from "react-router-dom";
import LoginPage from "../components/Login/LoginPage";
import { Link } from "react-router-dom";
import Button from "../components/CustomButtons/Button.jsx";
// import Input from "@material-ui/core/Input";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import People from "@material-ui/core/SvgIcon/SvgIcon";
// import CustomInput from "../components/CustomInput/CustomInput";
// import CustomInput from "../components/CustomInput/CustomInput.jsx";

// 测试登陆页 DOM
describe("Enzyme Shallow Login Init", function() {
  let app = shallow(<LoginPage.WrappedComponent />);
  it("Test Login Title", function() {
    expect(app.find("h4").text()).to.equal("订 单 管 理 系 统");
  });

  it("Test Username", function() {
    expect(app.find("#user").props().labelText).to.equal("用户名");
  });

  it("Test Password", function() {
    expect(app.find("#pass").props().labelText).to.equal("密码");
  });

  it("Test Button", function() {
    expect(app.state().next).to.equal("/login");
  });
});

describe("Enzyme Mount Login Input", function() {
  it("Test init Content", function() {
    let app = shallow(<LoginPage.WrappedComponent />);
    expect(app.find("#user").text()).to.equal("");
    expect(app.find("#pass").text()).to.equal("");
  });

  // it("Test admin account", () => {
  //   let app = mount(<LoginPage.WrappedComponent />);
  //   let accountName = app.find("#user").first();
  //   let accountPass = app.find("#pass").first();
  //   let accountSubmit = app.find("#submit").first();
  //   let accountSuccess = app.state().next;
  //   const spy = sinon.spy();
  //
  //   const eventname = {
  //     target: {
  //       value: "admin"
  //     }
  //   };
  //   const eventpass = {
  //     target: {
  //       value: "admin"
  //     }
  //   };
  //   accountName.simulate("change", eventname);
  //   accountPass.simulate("change", eventpass);
  //   accountSubmit.simulate("click", { preventDefault() {} });
  //   // expect(spy).to.have.property("callCount", 1);
  //   // expect(accountSuccess).to.equal("/admin");
  // });
});
