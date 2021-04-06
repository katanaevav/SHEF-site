import React from "react";
import renderer from "react-test-renderer";
import PageFooterGetLinkForm from "./page-footer-get-link-form.jsx";

it(`Render PageFooter`, () => {
  const tree = renderer.create(
      <PageFooterGetLinkForm />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
