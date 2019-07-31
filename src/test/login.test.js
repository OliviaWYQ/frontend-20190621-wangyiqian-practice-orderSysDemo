import { withRouter } from "react-router-dom";
import LoginPage from "../components/Login/LoginPage";

let loginPage = new LoginPage.WrappedComponent();
let db = loginPage.db;

// 测试登陆页 用户名密码
describe("App test init", function() {
  it("init", function() {
    expect(LoginPage).not.toBeUndefined();
    expect(db).not.toBeUndefined();
  });
});

describe("User Login test", () => {
  it("Admin can login", () => {
    expect(loginPage.isValid(db.userdata, "admin", "admin")).toBe(true);
  });

  it("Xiaoming can login", () => {
    expect(loginPage.isValid(db.userdata, "xiaoming", "xiaoming")).toBe(true);
  });

  it("Wukong can login", () => {
    expect(loginPage.isValid(db.userdata, "wukong", "wukong")).toBe(true);
  });

  it("Xiaohong cannot login", () => {
    expect(loginPage.isValid(db.userdata, "xiaohong", "xiaohong")).toBe(false);
  });
});
