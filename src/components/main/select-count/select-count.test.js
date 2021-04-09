import React from "react";
import renderer from "react-test-renderer";
import SelectCount from "./select-count.jsx";

it(`Render Select Count`, () => {
  const tree = renderer.create(
    <SelectCount
      defaultValue = {1}
      minValue = {1}
      maxValue = {99}
      onChangeValue = {()=>{}}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
