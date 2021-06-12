import {MenuCategory} from "../const.js";
import {deleteDishFromCart, changeDishCountInCart, addDishToCart, getDataFromPoint} from "./selectors.js"


const initialState = {

  cartPrice: 0,
  cartType: MenuCategory.EMPTY,
  cartDishes: [],

  orderId: 0,
  orderPayStatus: false,

  dishesTypesList: [],
  dishesList: [],

  pointLoaded: {},
  dishesTypesListLoaded: [],
};

const ActionType = {
  DELETE_DISH_FROM_CART: `DELETE_DISH_FROM_CART`,
  CHANGE_DISH_COUNT_IN_CART: `CHANGE_DISH_COUNT_IN_CART`,
  ADD_DISH_TO_CART: `ADD_DISH_TO_CART`,
  CLEAR_CART: `CLEAR_CART`,

  ADD_DISHES: `ADD_DISHES`,
  ADD_CATEGORIES: `ADD_CATEGORIES`,

  LOAD_POINT: `LOAD_POINT`,
  SET_ORDER_ID: `SET_ORDER_ID`,
  SET_ORDER_PAY_STATUS: `SET_ORDER_PAY_STATUS`,
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


  addDishes: (dishes) => {
    return {
      type: ActionType.ADD_DISHES,
      payload: dishes,
    };
  },

  addCategories: (categories) => {
    return {
      type: ActionType.ADD_CATEGORIES,
      payload: categories,
    };
  },


  loadPoint: (point) => {
    return {
      type: ActionType.LOAD_POINT,
      payload: point,
    };
  },

  setOrderId: (orderId) => {
    return {
      type: ActionType.SET_ORDER_ID,
      payload: orderId,
    };
  },

  setOrderPayStatus: (status) => {
    return {
      type: ActionType.SET_ORDER_PAY_STATUS,
      payload: status,
    };
  },

};


const Operation = {
  loadPoint: (action) => (dispatch, getState, api) => {
    return api.get(`/stuff_points`)
      .then((response) => {
        const convertedData = getDataFromPoint(response.data);
        dispatch(ActionCreator.addDishes(convertedData.dishes));
        dispatch(ActionCreator.addCategories(convertedData.categorises));

        action();
      });
  },

  setOrderPayStatus: (payStatus, action) => (dispatch, getState, api) => {
    // const currentDate = new Date();
    // console.log(`start saving order`);
    return api.patch(`/orders/`, {
      "pay_status": payStatus,
    })

    .then(() => {
      dispatch(ActionCreator.setOrderPayStatus(payStatus));
      action();
    })

    .catch((err) => {
      throw err;
    })
  },

  saveOrder: (order, action) => (dispatch, getState, api) => {
    return api.post(`/orders/`, {
      "created_at": order.date,
      "total_sum": order.summ,
      "pay_status": false,
      "user_phone": order.user_phone,
      "items": order.items,
      "pick_at": null,
      "comment": order.comment,
      "flat": "0",
      "client_name": order.client_name,
      "address_string": order.address_string,
      "address": 1,
      "point": order.point,
    })

    .then((response) => {
      dispatch(ActionCreator.setOrderId(response.data.id));
      action(response.data);
    })

    .catch((err) => {
      throw err;
    })
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

    case ActionType.ADD_DISHES:
      // console.log(state.dishesList.concat(action.payload));
      return Object.assign({}, state, {
        dishesList: state.dishesList.concat(action.payload),
      });
    case ActionType.ADD_CATEGORIES:
      return Object.assign({}, state, {
        dishesTypesList: state.dishesTypesList.concat(action.payload),
      });




    case ActionType.LOAD_CATEGORIES:
      return Object.assign({}, state, {
        dishesTypesListLoaded: action.payload,
      });
    case ActionType.LOAD_POINT:
      return Object.assign({}, state, {
        pointLoaded: action.payload,
      });
    case ActionType.SET_ORDER_ID:
      return Object.assign({}, state, {
        orderId: action.payload,
      });
    case ActionType.SET_ORDER_PAY_STATUS:
      return Object.assign({}, state, {
        orderPayStatus: action.payload,
      });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
