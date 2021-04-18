import {DishesTypes} from "../mocks/dishes-types.js";
import {Dishes} from "../mocks/dishes.js";

import {Screens, MenuCategory} from "../const.js";
import {deleteDishFromCart, changeDishCountInCart, addDishToCart} from "./selectors.js"


const initialState = {
  currentScreen: Screens.MAIN_SCREEN,

  cartPrice: 200,
  cartType: MenuCategory.EMPTY,
  cartDishes: [],

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
  ADD_DISH_TO_CART: `ADD_DISH_TO_CART`,
  CLEAR_CART: `CLEAR_CART`,
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
    return {
      type: ActionType.DELETE_DISH_FROM_CART,
      payload: dishId,
    };
  },
  onChangeDishCountInCart: (dishId, dishCount) => {
    return {
      type: ActionType.CHANGE_DISH_COUNT_IN_CART,
      payload: {
        dishId: dishId,
        dishCount: dishCount,
      },
    };
  },
  onAddDishToCart: (dish) => {
    return {
      type: ActionType.ADD_DISH_TO_CART,
      payload: dish,
    };
  },
  clearCart: (dish) => {
    return {
      type: ActionType.CLEAR_CART,
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
    case ActionType.ADD_DISH_TO_CART:
      return Object.assign({}, state, {
        cartDishes: addDishToCart(state.cartDishes, action.payload),
      });
    case ActionType.CLEAR_CART:
      return Object.assign({}, state, {
        cartDishes: [],
        cartType: MenuCategory.EMPTY,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
