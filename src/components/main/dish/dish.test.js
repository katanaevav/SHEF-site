import React from "react";
import renderer from "react-test-renderer";
import Dish from "./dish.jsx";

it(`Render Dish`, () => {
  const tree = renderer.create(
      <Dish
        dishNmae = {`Анатомия вкуса`}
        dishDescription = {`Описание блюда Описание блюда
        Описание блюда Описание блюда
        Описание блюда Описание блюда
        Описание блюда Описание блюда`}
        dishPrice = {`250 р.`}
        dishWeight = {`250 гр.`}
        dishTag = {`NEW`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
