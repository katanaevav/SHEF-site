import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import OrderNavigator from "./order-navigator.jsx";

import {DishesTypes} from "../../../mocks/dishes-types.js";

configure({adapter: new Adapter()});

it('Render Order Navigator', () => {
  const tree = shallow(
    <OrderNavigator
      dishesTypesList = {DishesTypes}
    />
  );
  expect(tree).toMatchSnapshot();
});
