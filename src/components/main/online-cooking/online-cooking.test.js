import React from "react";
import renderer from "react-test-renderer";
import OnlineCooking from "./online-cooking.jsx";

it(`Render Online Cooking`, () => {
  const tree = renderer.create(
      <OnlineCooking />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
