import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/reducer.js";
import {getMenuCategoryName, getCartPrice} from "../../reducer/selectors.js";

import Main from "../main/main/main.jsx";
import PageHeader from "../page-header/page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer/page-footer.jsx";

import OnlineCooking from "../main/online-cooking/online-cooking.jsx";
import Catering from "../main/catering/catering.jsx";
import Foods from "../main/foods/foods.jsx";
import Cart from "../main/cart/cart.jsx";

import {Screens} from "../../const.js"

// import {DishesTypes} from "../../mocks/dishes-types.js";
// import {Dishes, CartDishes} from "../../mocks/dishes.js";
// import {CartDishes} from "../../mocks/dishes.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {

    const {currentScreen, cartPrice, cartType, cartTypeName, cartDishes, dishesTypesList, dishesList} = this.props;
    const {onMainClick, onOnlineCookingClick, onCateringClick, onCartClick, onDeleteDishFromCart, onChangeDishCountInCart} = this.props;


    switch (currentScreen) {
      case Screens.ONLINE_COOKING_SCREEN:
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
              dishesTypesList = {dishesTypesList}
              dishesList = {dishesList}
            />
            <PageFooter
              openOnlineCookingScreen = {onOnlineCookingClick}
              openCateringScreen = {onCateringClick}
            />
          </React.Fragment>
        );

      case Screens.CATERING_SCREEN:
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
                dishesTypesList = {dishesTypesList}
                dishesList = {dishesList}
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
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};




App.propTypes = {
  currentScreen: PropTypes.number.isRequired,

  cartPrice: PropTypes.number,
  cartType: PropTypes.number.isRequired,
  cartTypeName: PropTypes.string.isRequired,
  cartDishes: PropTypes.array,

  dishesTypesList: PropTypes.array,
  dishesList: PropTypes.array,

  onMainClick: PropTypes.func.isRequired,
  onOnlineCookingClick: PropTypes.func.isRequired,
  onCateringClick: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
  onDeleteDishFromCart: PropTypes.func,
  onChangeDishCountInCart: PropTypes.func,
};





const mapStateToProps = (state) => ({
  currentScreen: state.currentScreen,

  cartPrice: getCartPrice(state.cartDishes),
  cartType: state.cartType,
  cartTypeName: getMenuCategoryName(state.cartType),
  cartDishes: state.cartDishes,

  dishesTypesList: state.dishesTypesList,
  dishesList: state.dishesList,
});


const mapDispatchToProps = (dispatch) => ({
  onMainClick() {
    dispatch(ActionCreator.openMainScreen());
  },
  onOnlineCookingClick() {
    dispatch(ActionCreator.openOnlineCookingScreen());
  },
  onCateringClick() {
    dispatch(ActionCreator.openCateringScreen());
  },
  onCartClick() {
    dispatch(ActionCreator.openCartScreen());
  },
  onDeleteDishFromCart(dishId) {
    dispatch(ActionCreator.onDeleteDishFromCart(dishId));
  },
  onChangeDishCountInCart(dishId, dishCount) {
    dispatch(ActionCreator.onChangeDishCountInCart(dishId, dishCount));
  },

});





export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
