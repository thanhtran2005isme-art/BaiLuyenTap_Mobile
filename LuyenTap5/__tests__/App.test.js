import React from "react";
import ReactTestRenderer from "react-test-renderer";
import App from "../App";

test("renders Hello React Native", async () => {
  let tree;

  await ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<App />);
  });

  expect(tree.root.findByType("Text").props.children).toBe("Hello React Native");
});
