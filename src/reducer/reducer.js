import {DishesTypes} from "../mocks/dishes-types.js";
import {Dishes} from "../mocks/dishes.js";

import {Screens, MenuCategory} from "../const.js";
import {deleteDishFromCart, changeDishCountInCart, addDishToCart} from "./selectors.js"


const initialState = {

  cartPrice: 0,
  cartType: MenuCategory.EMPTY,
  cartDishes: [],

  dishesTypesList: DishesTypes,
  dishesList: Dishes,

  pointLoaded: {},
  dishesTypesListLoaded: [],
};

const ActionType = {
  DELETE_DISH_FROM_CART: `DELETE_DISH_FROM_CART`,
  CHANGE_DISH_COUNT_IN_CART: `CHANGE_DISH_COUNT_IN_CART`,
  ADD_DISH_TO_CART: `ADD_DISH_TO_CART`,
  CLEAR_CART: `CLEAR_CART`,

  LOAD_POINT: `LOAD_POINT`,
  LOAD_CATEGORIES: `LOAD_CATEGORIES`,
  LOAD_DISH: `LOAD_DISH`,
};


const ActionCreator = {
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
  loadPoint: (point) => {
    return {
      type: ActionType.LOAD_POINT,
      payload: point,
    };
  },
  loadCategories: (categories) => {
    return {
      type: ActionType.LOAD_CATEGORIES,
      payload: categories,
    };
  },
  loadDish: (dish) => {
    return {
      type: ActionType.LOAD_DISH,
      payload: dish,
    };
  },
};


const Operation = {
  loadPoint: (pointId) => (dispatch, getState, api) => {
    return api.get(`/point/${pointId}`)
      .then((response) => {
        dispatch(ActionCreator.loadPoint(response.data));
        console.log(response.data);
      });
  },

  loadCategories: () => (dispatch, getState, api) => {
    return api.get(`/categories`)
      .then((response) => {
        dispatch(ActionCreator.loadCategories(response.data));
        console.log(response.data);
      });
  },

  loadDish: (dishId) => (dispatch, getState, api) => {
    return api.get(`/dish/${dishId}`)
      .then((response) => {
        dispatch(ActionCreator.loadDish(response.data));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        cartType: state.cartType === MenuCategory.EMPTY ? action.payload.dishCategory : state.cartType,
      });
    case ActionType.CLEAR_CART:
      return Object.assign({}, state, {
        cartDishes: [],
        cartType: MenuCategory.EMPTY,
      });

    case ActionType.LOAD_CATEGORIES:
      return Object.assign({}, state, {
        dishesTypesListLoaded: action.payload,
      });
    case ActionType.LOAD_POINT:
      return Object.assign({}, state, {
        pointLoaded: action.payload,
      });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
