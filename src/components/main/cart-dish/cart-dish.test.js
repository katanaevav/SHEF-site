import React from "react";
import renderer from "react-test-renderer";
import CartDish from "./cart-dish.jsx";

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
  dishCount: 3,
};

it(`Render Cart Dish`, () => {
  const tree = renderer.create(
      <CartDish
        dish = {MockDish}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
