import {MenuCategoryNames, MenuCategory} from "../const.js";

const getMenuCategoryName = (menuCategoryId) => {
  return menuCategoryId === MenuCategory.EMPTY ? `Ваша корзина` : MenuCategoryNames[menuCategoryId];
};

const getCartPrice = (cartDishes) => {
  let price = 0;
  cartDishes.forEach((dish) => {
    price += (dish.dishPrice * dish.dishCount);
  });
  return price;
};

const deleteDishFromCart = (cartList, dishId) => {
  const indexToDelete = cartList.findIndex((dish) => dish.dishId === dishId);

  const arr = cartList.slice(0, cartList.length);
  arr.splice(indexToDelete, 1)

  return arr;
}

const changeDishCountInCart = (cartList, dishId, dishCount) => {
  const indexToChange = cartList.findIndex((dish) => dish.dishId === dishId);

  const arr = cartList.slice(0, cartList.length);
  arr[indexToChange].dishCount = dishCount;

  return arr;
}

const addDishToCart = (cartList, dish) => {
  let arr = cartList.slice(0, cartList.length);

  const index = cartList.findIndex((cartdish) => cartdish.dishId === dish.dishId);
  const count = index < 0 ? 0 : arr[index].dishCount;

  arr.splice(index > -1 ? index : arr.length, index > -1 ? 1 : 0, Object.assign({}, dish, {
    dishCount: count + dish.dishCount,
  }));

  return arr;
}

export {getMenuCategoryName, getCartPrice, deleteDishFromCart, changeDishCountInCart, addDishToCart};
