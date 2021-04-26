import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

configure({adapter: new Adapter()});

it(`Render App`, () => {
  const tree = shallow(
      <App />
  );

  expect(tree).toMatchSnapshot();
});
