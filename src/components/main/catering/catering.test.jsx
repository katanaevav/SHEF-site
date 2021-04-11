import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Catering from "./catering";

import {DishesTypes} from "../../../mocks/dishes-types.js";
import {Dishes} from "../../../mocks/dishes.js";

configure({adapter: new Adapter()});

it('Render Online Cooking', () => {
  const tree = shallow(
    <Catering
      dishesTypesList = {DishesTypes}
      dishesList = {Dishes}
    />
  );
  expect(tree).toMatchSnapshot();
});
