import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Catering from "./catering.jsx";

import {DishesTypes} from "../../../mocks/dishes-types.js";
import {Dishes} from "../../../mocks/dishes.js";

configure({adapter: new Adapter()});

it('Render Catering', () => {
  const tree = shallow(
    <Catering
      dishesTypesList = {DishesTypes}
      dishesList = {Dishes}
    />
  );
  expect(tree).toMatchSnapshot();
});
