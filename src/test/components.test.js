import React from "react";
import { create } from "react-test-renderer";
import Card from "../components/Card/Card";

// 测试card
describe("Admin test init", function() {
  it("init", function() {
    const card = create(<Card />);
    expect(card).not.toBeUndefined();
  });
});
