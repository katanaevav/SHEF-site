import {DishesTypes} from "../mocks/dishes-types.js";
import {Dishes} from "../mocks/dishes.js";

import {Screens, MenuCategory} from "../const.js";
import {deleteDishFromCart, changeDishCountInCart} from "./selectors.js"


const initialState = {
  currentScreen: Screens.CART_SCREEN,

  cartPrice: 200,
  cartType: MenuCategory.ONLINE_COOKING,
  cartDishes: [
    {
      dishId: 1,
      dishTypeId: 1,
      dishCategory: MenuCategory.ONLINE_COOKING,
      dishName: `Анатомия вкуса`,
      dishDescription: `Описание блюда Описание блюда
                        Описание блюда Описание блюда
                        Описание блюда Описание блюда
                        Описание блюда Описание блюда`,
      dishPrice: `250`,
      dishCount: 2,
      dishWeight: `250 гр.`,
      dishTag: `NEW`,
      dishImage: `./img/dish.png`,
      dishImage2x: `./img/dish@2x.png`,
    },
    {
      dishId: 10,
      dishTypeId: 2,
      dishCategory: MenuCategory.ONLINE_COOKING,
      dishName: `Сосиска в Картофельном Тесте`,
      dishDescription: `Хот Дог без муки с картошкой и сыром. Быстро, просто и
                        очень вкусно!`,
      dishPrice: 290,
      dishCount: 1,
      dishWeight: `250 гр.`,
      dishTag: `HOT`,
      dishImage: `./img/vb5.jpg`,
      dishImage2x: `./img/vb5.jpg`,
    },
    {
      dishId: 11,
      dishTypeId: 3,
      dishCategory: MenuCategory.ONLINE_COOKING,
      dishName: `Рис`,
      dishDescription: `Считается основным (национальным) продуктом питания
                        в странах Юго-Восточной Азии и Китае`,
      dishPrice: 90,
      dishCount: 1,
      dishWeight: `200 гр.`,
      dishTag: ``,
      dishImage: `./img/g1.jpg`,
      dishImage2x: `./img/g1.jpg`,
    },
    {
      dishId: 9,
      dishTypeId: 2,
      dishCategory: MenuCategory.ONLINE_COOKING,
      dishName: `Пельмени`,
      dishDescription: `Домашние пельмени, слепленные вручную, на вкусном тесте
                        с сочной начинкой из фарша.`,
      dishPrice: 290,
      dishCount: 1,
      dishWeight: `250 гр.`,
      dishTag: `HOT`,
      dishImage: `./img/vb4.jpg`,
      dishImage2x: `./img/vb4.jpg`,
    },
  ],

  dishesTypesList: DishesTypes,
  dishesList: Dishes,
};

const ActionType = {
  OPEN_MAIN_SCREEN: `OPEN_MAIN_SCREEN`,
  OPEN_ONLINE_COOKING_SCREEN: `OPEN_ONLINE_COOKING_SCREEN`,
  OPEN_CATERING_SCREEN: `OPEN_CATERING_SCREEN`,
  OPEN_CART_SCREEN: `OPEN_CART_SCREEN`,

  DELETE_DISH_FROM_CART: `DELETE_DISH_FROM_CART`,
  CHANGE_DISH_COUNT_IN_CART: `CHANGE_DISH_COUNT_IN_CART`,
};


const ActionCreator = {
  openMainScreen: () => {
    return {
      type: ActionType.OPEN_MAIN_SCREEN,
    };
  },
  openOnlineCookingScreen: () => {
    return {
      type: ActionType.OPEN_ONLINE_COOKING_SCREEN,
    };
  },
  openCateringScreen: () => {
    return {
      type: ActionType.OPEN_CATERING_SCREEN,
    };
  },
  openCartScreen: () => {
    return {
      type: ActionType.OPEN_CART_SCREEN,
    };
  },
  onDeleteDishFromCart: (dishId) => {
    // console.log (`delete dish ${dishId} from cart`);
    return {
      type: ActionType.DELETE_DISH_FROM_CART,
      payload: dishId,
    };
  },
  onChangeDishCountInCart: (dishId, dishCount) => {
    // console.log (`changing for dish ${dishId} from cart count to ${dishCount}`);
    return {
      type: ActionType.CHANGE_DISH_COUNT_IN_CART,
      payload: {
        dishId: dishId,
        dishCount: dishCount,
      },
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_MAIN_SCREEN:
      return Object.assign({}, state, {
        currentScreen: Screens.MAIN_SCREEN,
      });
    case ActionType.OPEN_ONLINE_COOKING_SCREEN:
      return Object.assign({}, state, {
        currentScreen: Screens.ONLINE_COOKING_SCREEN,
      });
    case ActionType.OPEN_CATERING_SCREEN:
      return Object.assign({}, state, {
        currentScreen: Screens.CATERING_SCREEN,
      });
    case ActionType.OPEN_CART_SCREEN:
      return Object.assign({}, state, {
        currentScreen: Screens.CART_SCREEN,
      });
    case ActionType.DELETE_DISH_FROM_CART:
      return Object.assign({}, state, {
        cartDishes: deleteDishFromCart(state.cartDishes, action.payload),
      });
    case ActionType.CHANGE_DISH_COUNT_IN_CART:
      return Object.assign({}, state, {
        cartDishes: changeDishCountInCart(state.cartDishes, action.payload.dishId, action.payload.dishCount),
      });

  }

  return state;
};


export {reducer, ActionType, ActionCreator};
