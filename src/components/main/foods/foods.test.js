import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Foods from "./foods.jsx";

import {DishesTypes} from "../../../mocks/dishes-types.js";
import {Dishes} from "../../../mocks/dishes.js";

configure({adapter: new Adapter()});

it('Render Online Cooking', () => {
  const tree = shallow(
    <Foods
      dishesTypesList = {DishesTypes}
      dishesList = {Dishes}
    />
  );
  expect(tree).toMatchSnapshot();
});
