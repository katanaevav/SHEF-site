import React from "react";
import renderer from "react-test-renderer";
import PageFooter from "./page-footer.jsx";

it(`Render PageFooter`, () => {
  const tree = renderer.create(
      <PageFooter />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
