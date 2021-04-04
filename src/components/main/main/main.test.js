import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Render Main`, () => {
  const tree = renderer.create(
      <Main />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
