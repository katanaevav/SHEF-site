import React from "react";
import renderer from "react-test-renderer";
import Dish from "./dish.jsx";

it(`Render Dish`, () => {
  const tree = renderer.create(
      <Dish
        dishId = {1}
        dishNmae = {`Анатомия вкуса`}
        dishDescription = {`Описание блюда Описание блюда
        Описание блюда Описание блюда
        Описание блюда Описание блюда
        Описание блюда Описание блюда`}
        dishPrice = {`250 р.`}
        dishWeight = {`250 гр.`}
        dishTag = {`NEW`}
        dishImage = {`./img/dish.png`}
        dishImage2x = {`./img/dish@2x.png`}
        MenuCategory = {1}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
