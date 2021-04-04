import React from "react";
import renderer from "react-test-renderer";
import PageHeaderMobileMenu from "./page-header-mobile-menu.jsx";

it(`Render PageHeaderMobileMenu`, () => {
  const tree = renderer.create(
      <PageHeaderMobileMenu />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
