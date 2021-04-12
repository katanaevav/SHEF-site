import React from "react";
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cart from "./cart.jsx";

import {Dishes} from "../../../mocks/dishes.js";

configure({adapter: new Adapter()});

it('Render Cart', () => {
  const tree = shallow(
    <Cart
      cartType = {1}
      cartDishesList = {Dishes}
    />
  );
  expect(tree).toMatchSnapshot();
});
