import React from "react";
import renderer from "react-test-renderer";
import PageHeaderNav from "./page-header-nav.jsx";

it(`Render PageHeaderNav`, () => {
  const tree = renderer.create(
      <PageHeaderNav />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
