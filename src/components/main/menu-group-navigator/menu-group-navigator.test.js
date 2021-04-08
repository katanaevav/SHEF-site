import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MenuGroupNavigator from "./menu-group-navigator.jsx";

configure({adapter: new Adapter()});

it('Render Order Navigator', () => {
  const tree = shallow(
    <MenuGroupNavigator
      groupId = {1}
      groupName = {`Первые блюда`}
    />
  );
  expect(tree).toMatchSnapshot();
});
