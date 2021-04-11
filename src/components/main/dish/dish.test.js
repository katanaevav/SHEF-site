import React from "react";
import renderer from "react-test-renderer";
import Dish from "./dish.jsx";

const MockDish = {
  dishId: 1,
  dishTypeId: 1,
  dishName: `Анатомия вкуса`,
  dishDescription: `Описание блюда Описание блюда
                    Описание блюда Описание блюда
                    Описание блюда Описание блюда
                    Описание блюда Описание блюда`,
  dishPrice: `250 р.`,
  dishWeight: `250 гр.`,
  dishTag: `NEW`,
  dishImage: `./img/dish.png`,
  dishImage2x: `./img/dish@2x.png`,
};

it(`Render Dish`, () => {
  const tree = renderer.create(
      <Dish
        dish = {MockDish}
        MenuCategory = {1}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
