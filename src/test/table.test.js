import TableList from "../views/TableList/TableList.jsx";
let tableList = new TableList();
let userControl = tableList.userControl;
let data = tableList.data;

// 测试权限控制
describe("User Control test", () => {
  it("init", () => {
    expect(TableList).not.toBeUndefined();
    expect(userControl).not.toBeUndefined();
    expect(data).not.toBeUndefined();
    expect(data.length).toBe(5);
  });

  it("Admin can view all orders", () => {
    expect(data).toBe(userControl("admin"));
  });

  it("Xiaoming can view his orders", () => {
    expect(userControl("xiaoming").length).toBe(2);
  });

  it("Wukong can view his orders", () => {
    expect(userControl("wukong").length).toBe(3);
  });
});
