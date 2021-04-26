import React, {PureComponent} from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import ContactUsModal from "../main/contact-us-modal/contact-us-modal.jsx";
import InfoWindow from "../main/info-window/info-window.jsx";
import PolicyWindow from "../main/policy-window/policy-window.jsx";

import {ActionCreator} from "../../reducer/reducer.js";
import {getMenuCategoryName, getCartPrice} from "../../reducer/selectors.js";

import history from "../../history.js";

import Main from "../main/main/main.jsx";
import PageHeader from "../page-header/page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer/page-footer.jsx";

import OnlineCooking from "../main/online-cooking/online-cooking.jsx";
import Catering from "../main/catering/catering.jsx";
import Cart from "../main/cart/cart.jsx";

import {MenuCategory, AppRoute} from "../../const.js"

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showContactUsForm: false,
      showInfoWindow: false,
      showPolicy: false,
    };

    this._openContactUsFormHandle = this._openContactUsFormHandle.bind(this);
    this._closeContactUsFormHandle = this._closeContactUsFormHandle.bind(this);

    this._openInfoWindowHandle = this._openInfoWindowHandle.bind(this);
    this._closeInfoWindowFormHandle = this._closeInfoWindowFormHandle.bind(this);

    this._openPolicyWindowHandle = this._openPolicyWindowHandle.bind(this);
    this._closePolicyWindowFormHandle = this._closePolicyWindowFormHandle.bind(this);
  }



  _openContactUsFormHandle(evt) {
    evt.preventDefault();

    this.setState({ showContactUsForm: true });
  }

  _closeContactUsFormHandle(status) {
    this.setState({ showContactUsForm: false });
    if (status === 1) {
      this._openInfoWindowHandle();
    }
  }

  _openInfoWindowHandle() {
    this.setState({ showInfoWindow: true });
  }

  _closeInfoWindowFormHandle() {
    this.setState({ showInfoWindow: false });
  }

  _openPolicyWindowHandle() {
    this.setState({ showPolicy: true });
  }

  _closePolicyWindowFormHandle() {
    this.setState({ showPolicy: false });
  }


  render() {
    const {cartPrice, cartType, cartTypeName, cartDishes, dishesTypesList, dishesList} = this.props;
    const {onDeleteDishFromCart, onChangeDishCountInCart, onAddDishToCart, onClearCart} = this.props;

    return (
      <Router history={history}>
        <Switch>

          <Route exact path={AppRoute.ROOT}>
            <React.Fragment>
              <PageHeader
                totalCost = {cartPrice}
                openContactUsForm = {this._openContactUsFormHandle}
              />
              <Main
                openContactUsForm = {this._openContactUsFormHandle}
                openPolicyWindow = {this._openPolicyWindowHandle}
              />
              <PageFooter
                openPolicyWindow = {this._openPolicyWindowHandle}
                openContactUsForm = {this._openContactUsFormHandle}
              />
            </React.Fragment>
          </Route>

          <Route exact path={AppRoute.CART}>
            <React.Fragment>
              <PageHeader
                totalCost = {cartPrice}
                openContactUsForm = {this._openContactUsFormHandle}
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
                openPolicyWindow = {this._openPolicyWindowHandle}
                openContactUsForm = {this._openContactUsFormHandle}
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
                      openContactUsForm = {this._openContactUsFormHandle}
                    />
                    <Catering
                        dishesTypesList = {cateringDishesTypes}
                        dishesList = {cateringDishes}
                        onAddDishToCart = {onAddDishToCart}
                        cartCategory = {cartType}
                        onClearCart = {onClearCart}
                      />
                    <PageFooter
                      openPolicyWindow = {this._openPolicyWindowHandle}
                      openContactUsForm = {this._openContactUsFormHandle}
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
                      openContactUsForm = {this._openContactUsFormHandle}
                    />
                    <OnlineCooking
                      dishesTypesList = {onlineCookingDishesTypes}
                      dishesList = {onlineCookingDishes}
                      onAddDishToCart = {onAddDishToCart}
                      cartCategory = {cartType}
                      onClearCart = {onClearCart}
                    />
                    <PageFooter
                      openPolicyWindow = {this._openPolicyWindowHandle}
                      openContactUsForm = {this._openContactUsFormHandle}
                    />
                  </React.Fragment>
                );
            }}
          />

        </Switch>

        <ContactUsModal
          openState = {this.state.showContactUsForm}
          onCloweModalWindow = {this._closeContactUsFormHandle}
        />

        <PolicyWindow
          openState = {this.state.showPolicy}
          onCloweModalWindow = {this._closePolicyWindowFormHandle}
        />

        <InfoWindow
          openState = {this.state.showInfoWindow}
          onCloweModalWindow = {this._closeInfoWindowFormHandle}
          headerText = {`Ваше сообщение отправлено`}
          bodyText = {`Наши эксперты свяжутся с вами, как только обработают сообщение`}
          buttonText = {`Хорошо`}
        />
      </Router>
    )
  }
};




App.propTypes = {
  cartPrice: PropTypes.number,
  cartType: PropTypes.number.isRequired,
  cartTypeName: PropTypes.string.isRequired,
  cartDishes: PropTypes.array,

  dishesTypesList: PropTypes.array,
  dishesList: PropTypes.array,

  onDeleteDishFromCart: PropTypes.func,
  onChangeDishCountInCart: PropTypes.func,
  onAddDishToCart: PropTypes.func,
  onClearCart: PropTypes.func,
};





const mapStateToProps = (state) => ({

  cartPrice: getCartPrice(state.cartDishes),
  cartType: state.cartType,
  cartTypeName: getMenuCategoryName(state.cartType),
  cartDishes: state.cartDishes,

  dishesTypesList: state.dishesTypesList,
  dishesList: state.dishesList,
});


const mapDispatchToProps = (dispatch) => ({
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
