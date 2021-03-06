import {SavingStatus, MenuCategory, Links} from "../const.js";
import {deleteDishFromCart, changeDishCountInCart, addDishToCart, getDataFromPoint} from "./selectors.js"


const initialState = {

  cartPrice: 0,
  cartType: MenuCategory.EMPTY,
  cartDishes: [],

  orderId: `0`,
  orderPayStatus: false,

  dishesTypesList: [],
  dishesList: [],

  pointLoaded: {},
  dishesTypesListLoaded: [],

  linkRequestStatus: ``,
  token: ``,
};

const ActionType = {
  DELETE_DISH_FROM_CART: `DELETE_DISH_FROM_CART`,
  CHANGE_DISH_COUNT_IN_CART: `CHANGE_DISH_COUNT_IN_CART`,
  ADD_DISH_TO_CART: `ADD_DISH_TO_CART`,
  CLEAR_CART: `CLEAR_CART`,

  ADD_DISHES: `ADD_DISHES`,
  ADD_CATEGORIES: `ADD_CATEGORIES`,

  SET_TOKEN: `SET_TOKEN`,
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

  setToken: (token) => {
    return {
      type: ActionType.SET_TOKEN,
      payload: token,
    };
  },

};


const Operation = {
  makeRequest: (formData, link, action) => (dispatch, getState, api) => {
    return api.post(
      link,
      formData,
      {
        headers: {
          'Authorization': `Token ${getState().token}`
        },
      })
      .then((response) => {
        if (response.status === 201) {
          action(SavingStatus.SUCCESS);
        } else {
          action(SavingStatus.FAIL);
        }
      })
      .catch((err) => {
        action(SavingStatus.FAIL);
        // throw err;
      });
  },

  login: (action) => (dispatch, getState, api) => {
    return api.post(
      Links.LOGIN,
      {
        "username": "alt_admin",
        "password": "altsuperadmin",
      })
      .then((response) => {
        dispatch(ActionCreator.setToken(response.data.token));
        action();
      });
  },

  loadPoint: (action) => (dispatch, getState, api) => {
    return api.get(
      Links.STUFF_POINTS,
      {
        headers: {
          'Authorization': `Token ${getState().token}`
        },
      })
      .then((response) => {
        const convertedData = getDataFromPoint(response.data);
        dispatch(ActionCreator.addDishes(convertedData.dishes));
        dispatch(ActionCreator.addCategories(convertedData.categorises));

        action();
      });
  },

  // setOrderPayStatus: (payStatus, action) => (dispatch, getState, api) => {
  setOrderPayStatus: (payStatus) => (dispatch, getState, api) => {
    // console.log(`${Links.ORDERS}${localStorage.getItem(`orderId`)}/`);
    return api.patch(
      `${Links.ORDER}${localStorage.getItem(`orderId`)}/`,
      {
      "pay_status": payStatus,
      },
      {
        headers: {
          'Authorization': `Token ${getState().token}`
        },
      })
    .then(() => {
      dispatch(ActionCreator.setOrderPayStatus(payStatus));
      // action();
    })

    .catch((err) => {
      throw err;
    })
  },

  saveOrder: (order, action) => (dispatch, getState, api) => {
    return api.post(
      Links.ORDERS,
      {
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
      },
      {
        headers: {
          'Authorization': `Token ${getState().token}`
        },
      })
    .then((response) => {
      dispatch(ActionCreator.setOrderId(response.data.id));
      localStorage.setItem(`orderId`, response.data.id);
      action(response.data, SavingStatus.SUCCESS);
    })

    .catch((err) => {
      action(err, SavingStatus.FAIL);
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
      localStorage.setItem(`cartDishes`, JSON.stringify([]));
      localStorage.setItem(`orderId`, ``);
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

    case ActionType.SET_TOKEN:
      return Object.assign({}, state, {
        token: action.payload,
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
