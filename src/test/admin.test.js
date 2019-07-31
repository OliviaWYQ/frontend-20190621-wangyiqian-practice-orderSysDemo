import Dashboard from "../layouts/Admin";

let dashboard = new Dashboard();

// 测试控制页
describe("Admin test init", function() {
  it("init", function() {
    expect(dashboard).not.toBeUndefined();
  });
});
