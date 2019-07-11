import LoginPage from "../components/Login/LoginPage";

let loginPage = new LoginPage();
let db = loginPage.db;

describe("App test init", function() {
  it("init", function() {
    expect(LoginPage).not.toBeUndefined();
    expect(db).not.toBeUndefined();
  });
});

describe("User Login test", () => {
  it("Admin can login", () => {
    expect(db.userdata[0].username).toBe("admin");
    expect(db.userdata[0].password).toBe("admin");
  });

  it("Xiaoming can login", () => {
    expect(db.userdata[1].username).toBe("xiaoming");
    expect(db.userdata[1].password).toBe("xiaoming");
  });

  it("Wukong can login", () => {
    expect(db.userdata[2].username).toBe("wukong");
    expect(db.userdata[2].password).toBe("wukong");
  });
});
