import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OnlineCooking from "./online-cooking.jsx";

configure({adapter: new Adapter()});

it('Render Online Cooking', () => {
  const tree = shallow(<OnlineCooking />);
  expect(tree).toMatchSnapshot();
});
