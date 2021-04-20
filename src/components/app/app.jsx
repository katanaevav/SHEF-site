import React, {PureComponent} from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/reducer.js";
import {getMenuCategoryName, getCartPrice} from "../../reducer/selectors.js";

import history from "../../history.js";

import Main from "../main/main/main.jsx";
import PageHeader from "../page-header/page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer/page-footer.jsx";

import OnlineCooking from "../main/online-cooking/online-cooking.jsx";
import Catering from "../main/catering/catering.jsx";
import Foods from "../main/foods/foods.jsx";
import Cart from "../main/cart/cart.jsx";

import {Screens, MenuCategory, AppRoute} from "../../const.js"

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {

    const {currentScreen, cartPrice, cartType, cartTypeName, cartDishes, dishesTypesList, dishesList} = this.props;
    // const {onMainClick, onOnlineCookingClick, onCateringClick, onCartClick, onDeleteDishFromCart, onChangeDishCountInCart, onAddDishToCart, onClearCart} = this.props;
    const {onDeleteDishFromCart, onChangeDishCountInCart, onAddDishToCart, onClearCart} = this.props;


    switch (currentScreen) {
      case Screens.ONLINE_COOKING_SCREEN:
        const onlineCookingDishes = dishesList.slice().filter((dish) => dish.dishCategory === MenuCategory.ONLINE_COOKING);

        const onlineCookingDishesTypes = dishesTypesList
          .map((dishType) => {
              dishType.count = onlineCookingDishes.slice().filter((dish) => dish.dishTypeId === dishType.dishTypeId).length;
              return dishType;
            })
          .filter((dishType) => dishType.count > 0);

        return (
          <React.Fragment>
            <PageHeader
              totalCost = {cartPrice}
              openMainScreen = {onMainClick}
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
              openCartScreen = {onCartClick}
            />
            <OnlineCooking
              dishesTypesList = {onlineCookingDishesTypes}
              dishesList = {onlineCookingDishes}
              onAddDishToCart = {onAddDishToCart}
              cartCategory = {cartType}
              onClearCart = {onClearCart}
            />
            <PageFooter
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
            />
          </React.Fragment>
        );

      case Screens.CATERING_SCREEN:
        const cateringDishes = dishesList.slice().filter((dish) => dish.dishCategory === MenuCategory.CATERING);

        const cateringDishesTypes = dishesTypesList
          .map((dishType) => {
              dishType.count = cateringDishes.slice().filter((dish) => dish.dishTypeId === dishType.dishTypeId).length;
              return dishType;
            })
          .filter((dishType) => dishType.count > 0);

        return (
          <React.Fragment>
            <PageHeader
              totalCost = {cartPrice}
              openMainScreen = {onMainClick}
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
              openCartScreen = {onCartClick}
            />
            <Catering
                dishesTypesList = {cateringDishesTypes}
                dishesList = {cateringDishes}
                onAddDishToCart = {onAddDishToCart}
                cartCategory = {cartType}
                onClearCart = {onClearCart}
              />
            <PageFooter
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
            />
          </React.Fragment>
        );

      case Screens.CART_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              totalCost = {cartPrice}
              openMainScreen = {onMainClick}
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
              openCartScreen = {onCartClick}
            />
            <Cart
              totalCost = {cartPrice}
              cartType = {cartType}
              cartTypeName = {cartTypeName}
              cartDishesList = {cartDishes}

              onDeleteDishFromCart = {onDeleteDishFromCart}
              onChangeDishCountInCart = {onChangeDishCountInCart}

              onMainClick = {onMainClick}
              onOnlineCookingClick = {onOnlineCookingClick}
              onCateringClick = {onCateringClick}
              />
            <PageFooter
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
            />
          </React.Fragment>
        );



      default:
        return (
          <React.Fragment>
            <PageHeader
              totalCost = {cartPrice}
              openMainScreen = {onMainClick}
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
              openCartScreen = {onCartClick}
            />
            <Main
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
            />
            <PageFooter
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
            />
          </React.Fragment>
        );
    }
  }

  render() {
    const {currentScreen, cartPrice, cartType, cartTypeName, cartDishes, dishesTypesList, dishesList} = this.props;
    // const {onMainClick, onOnlineCookingClick, onCateringClick, onCartClick, onDeleteDishFromCart, onChangeDishCountInCart, onAddDishToCart, onClearCart} = this.props;
    const {onDeleteDishFromCart, onChangeDishCountInCart, onAddDishToCart, onClearCart} = this.props;

    return (
      <Router history={history}>
        <Switch>

          <Route exact path={AppRoute.ROOT}>
            <React.Fragment>
              <PageHeader
                totalCost = {cartPrice}
                // openMainScreen = {onMainClick}
                // openOnlineCookingScreen = {onOnlineCookingClick}
                // openCateringScreen = {onCateringClick}
                // openCartScreen = {onCartClick}
              />
              <Main
                // openOnlineCookingScreen = {onOnlineCookingClick}
                // openCateringScreen = {onCateringClick}
              />
              <PageFooter
                // openOnlineCookingScreen = {onOnlineCookingClick}
                // openCateringScreen = {onCateringClick}
              />
            </React.Fragment>
          </Route>

          <Route exact path={AppRoute.CART}>
            <React.Fragment>
              <PageHeader
                totalCost = {cartPrice}
                // openMainScreen = {onMainClick}
                // openOnlineCookingScreen = {onOnlineCookingClick}
                // openCateringScreen = {onCateringClick}
                // openCartScreen = {onCartClick}
              />
              <Cart
                totalCost = {cartPrice}
                cartType = {cartType}
                cartTypeName = {cartTypeName}
                cartDishesList = {cartDishes}

                onDeleteDishFromCart = {onDeleteDishFromCart}
                onChangeDishCountInCart = {onChangeDishCountInCart}

                // onMainClick = {onMainClick}
                // onOnlineCookingClick = {onOnlineCookingClick}
                // onCateringClick = {onCateringClick}
                />
              <PageFooter
                // openOnlineCookingScreen = {onOnlineCookingClick}
                // openCateringScreen = {onCateringClick}
              />
            </React.Fragment>
          </Route>

          <Route
            path={AppRoute.CATERING}
            render = {() => {
              const cateringDishes = dishesList.slice().filter((dish) => dish.dishCategory === MenuCategory.CATERING);

              const cateringDishesTypes = dishesTypesList
                .map((dishType) => {
                    dishType.count = cateringDishes.slice().filter((dish) => dish.dishTypeId === dishType.dishTypeId).length;
                    return dishType;
                  })
                .filter((dishType) => dishType.count > 0);

                return (
                  <React.Fragment>
                    <PageHeader
                      totalCost = {cartPrice}
                      // openMainScreen = {onMainClick}
                      // openOnlineCookingScreen = {onOnlineCookingClick}
                      // openCateringScreen = {onCateringClick}
                      // openCartScreen = {onCartClick}
                    />
                    <Catering
                        dishesTypesList = {cateringDishesTypes}
                        dishesList = {cateringDishes}
                        onAddDishToCart = {onAddDishToCart}
                        cartCategory = {cartType}
                        onClearCart = {onClearCart}
                      />
                    <PageFooter
                      // openOnlineCookingScreen = {onOnlineCookingClick}
                      // openCateringScreen = {onCateringClick}
                    />
                  </React.Fragment>
                );
            }}
          />

          <Route
            path={AppRoute.ONLINE_COOKING}
            render = {() => {
              const onlineCookingDishes = dishesList.slice().filter((dish) => dish.dishCategory === MenuCategory.ONLINE_COOKING);

              const onlineCookingDishesTypes = dishesTypesList
                .map((dishType) => {
                    dishType.count = onlineCookingDishes.slice().filter((dish) => dish.dishTypeId === dishType.dishTypeId).length;
                    return dishType;
                  })
                .filter((dishType) => dishType.count > 0);

                return (
                  <React.Fragment>
                    <PageHeader
                      totalCost = {cartPrice}
                      // openMainScreen = {onMainClick}
                      // openOnlineCookingScreen = {onOnlineCookingClick}
                      // openCateringScreen = {onCateringClick}
                      // openCartScreen = {onCartClick}
                    />
                    <OnlineCooking
                      dishesTypesList = {onlineCookingDishesTypes}
                      dishesList = {onlineCookingDishes}
                      onAddDishToCart = {onAddDishToCart}
                      cartCategory = {cartType}
                      onClearCart = {onClearCart}
                    />
                    <PageFooter
                      // openOnlineCookingScreen = {onOnlineCookingClick}
                      // openCateringScreen = {onCateringClick}
                    />
                  </React.Fragment>
                );
            }}
          />

        </Switch>
      </Router>
    )
  }
};




App.propTypes = {
  // currentScreen: PropTypes.number.isRequired,

  cartPrice: PropTypes.number,
  cartType: PropTypes.number.isRequired,
  cartTypeName: PropTypes.string.isRequired,
  cartDishes: PropTypes.array,

  dishesTypesList: PropTypes.array,
  dishesList: PropTypes.array,

  // onMainClick: PropTypes.func.isRequired,
  // onOnlineCookingClick: PropTypes.func.isRequired,
  // onCateringClick: PropTypes.func.isRequired,
  // onCartClick: PropTypes.func.isRequired,
  onDeleteDishFromCart: PropTypes.func,
  onChangeDishCountInCart: PropTypes.func,
  onAddDishToCart: PropTypes.func,
  onClearCart: PropTypes.func,
};





const mapStateToProps = (state) => ({
  // currentScreen: state.currentScreen,

  cartPrice: getCartPrice(state.cartDishes),
  cartType: state.cartType,
  cartTypeName: getMenuCategoryName(state.cartType),
  cartDishes: state.cartDishes,

  dishesTypesList: state.dishesTypesList,
  dishesList: state.dishesList,
});


const mapDispatchToProps = (dispatch) => ({
  // onMainClick() {
  //   dispatch(ActionCreator.openMainScreen());
  // },
  // onOnlineCookingClick() {
  //   dispatch(ActionCreator.openOnlineCookingScreen());
  // },
  // onCateringClick() {
  //   dispatch(ActionCreator.openCateringScreen());
  // },
  // onCartClick() {
  //   dispatch(ActionCreator.openCartScreen());
  // },
  onDeleteDishFromCart(dishId) {
    dispatch(ActionCreator.onDeleteDishFromCart(dishId));
  },
  onChangeDishCountInCart(dishId, dishCount) {
    dispatch(ActionCreator.onChangeDishCountInCart(dishId, dishCount));
  },
  onAddDishToCart(dish) {
    dispatch(ActionCreator.onAddDishToCart(dish));
  },
  onClearCart() {
    dispatch(ActionCreator.clearCart());
  },
});





export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
