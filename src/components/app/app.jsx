import React, {PureComponent} from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import RedirectComponent from "../ext/redirect-component.jsx";
import ContactUsModal from "../main/contact-us-modal/contact-us-modal.jsx";
import GetLinkFormModal from "../main/get-link-form-modal/get-link-form-modal.jsx";
import PayStatusWindowModal from "../main/pay-status-window-modal/pay-status-window-modal.jsx";
import InfoWindow from "../main/info-window/info-window.jsx";
import PolicyWindow from "../main/policy-window/policy-window.jsx";

import {ActionCreator} from "../../reducer/reducer.js";
import {Operation as DataOperation} from "../../reducer/reducer.js";
import {getMenuCategoryName, getCartPrice} from "../../reducer/selectors.js";

import history from "../../history.js";

import Main from "../main/main/main.jsx";
import PageHeader from "../page-header/page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer/page-footer.jsx";

import OnlineCooking from "../main/online-cooking/online-cooking.jsx";
import NoGluten from "../main/no-gluten/no-gluten.jsx";
import Catering from "../main/catering/catering.jsx";
import Cart from "../main/cart/cart.jsx";

import {MenuCategory, AppRoute, PoliticsTexts, StatusWindowState} from "../../const.js"

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showContactUsForm: false,
      showInfoWindow: false,
      showPayStatusWindow: false,
      payStatusText: ``,
      isAfterPay: false,
      payStatus: false,
      showPolicy: 0,
      showQuestionWindow: false,
      showGetLinkFormModal: false,
    };


    this._openGetLinkFormModalHandle = this._openGetLinkFormModalHandle.bind(this);
    this._closeGetLinkFormModalHandle = this._closeGetLinkFormModalHandle.bind(this);

    this._openPayStatusWindowHandle = this._openPayStatusWindowHandle.bind(this);
    this._closePayStatusWindowHandle = this._closePayStatusWindowHandle.bind(this);

    this._openContactUsFormHandle = this._openContactUsFormHandle.bind(this);
    this._closeContactUsFormHandle = this._closeContactUsFormHandle.bind(this);

    this._openInfoWindowHandle = this._openInfoWindowHandle.bind(this);
    this._closeInfoWindowFormHandle = this._closeInfoWindowFormHandle.bind(this);

    this._openPolicyWindowHandle = this._openPolicyWindowHandle.bind(this);
    this._openPoliticWindowHandle = this._openPoliticWindowHandle.bind(this);
    this._openOferWindowHandler = this._openOferWindowHandler.bind(this);
    this._openCookiesWindowHandle = this._openCookiesWindowHandle.bind(this);
    this._closePolicyWindowFormHandle = this._closePolicyWindowFormHandle.bind(this);
    this._setAfterPay = this._setAfterPay.bind(this);
  }


  componentDidMount() {
    const dishes = JSON.parse(localStorage.getItem('cartDishes'));
    // this.props.setOrderId(localStorage.getItem('orderId'));

    if (dishes != null) {
      dishes.forEach((dish) => {
        this.props.onAddDishToCart(dish);
      });
    }
  }


  _openGetLinkFormModalHandle(evt) {
    evt.preventDefault();

    this.setState({ showGetLinkFormModal: true });
  }

  _closeGetLinkFormModalHandle(status) {
    this.setState({ showGetLinkFormModal: false });
    if (status === 1) {
      this._openInfoWindowHandle();
    }
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

  _openPayStatusWindowHandle() {
    this.setState({ showPayStatusWindow: true });
  }

  _closePayStatusWindowHandle() {
    this.setState({ showPayStatusWindow: false });
  }

  _openPolicyWindowHandle() {
    this.setState({ showPolicy: PoliticsTexts.PRIVACY_POLICY });
  }

  _openOferWindowHandler() {
    this.setState({ showPolicy: PoliticsTexts.OFER_POLICY });
  }

  _openPoliticWindowHandle() {
    this.setState({ showPolicy: PoliticsTexts.USE_POLICY });
  }

  _openCookiesWindowHandle() {
    this.setState({ showPolicy: PoliticsTexts.COOKIES });
  }

  _closePolicyWindowFormHandle() {
    this.setState({ showPolicy: PoliticsTexts.HIDE });
  }

  _setAfterPay(afterStatus, payStatus, payStatusText) {

    // console.log(this.props.orderId, payStatusText);
    this.setState({
      isAfterPay: afterStatus,
      payStatus: payStatus,
      payStatusText: payStatusText,
    });
  }


  _renderPayStatusWindow() {

    return(
      <PayStatusWindowModal
        openState = {this.state.showPayStatusWindow}
        onCloweModalWindow = {this._closePayStatusWindowHandle}
        status = {this.state.payStatus}
        headerText = {this.state.payStatus ? `Успешная оплата` : `Оплата не произведена`}
        // bodyText = {this.state.payStatus ?
        //   `Вы совершили оплату. В ближайшее время с вами свяжется наш менеджер по указанному телефону` :
        //   `Оплатить не удалось. Проверьте данные карты и попробуйте еще раз`}
        bodyText = {this.state.payStatusText}
        buttonText = {`Хорошо`}
      />
    );
  }

  _renderGetLinkFormModal() {
    return(
      <GetLinkFormModal
        openState = {this.state.showGetLinkFormModal}
        onCloweModalWindow = {this._closeGetLinkFormModalHandle}
        onShowPolicy = {this._openPolicyWindowHandle}
      />
    );
  }

  _renderContactUsModal() {
    return(
      <ContactUsModal
        openState = {this.state.showContactUsForm}
        onCloweModalWindow = {this._closeContactUsFormHandle}
        onShowPolicy = {this._openPolicyWindowHandle}
      />
    );
  }

  _renderPolicyWindow() {
    return(
      <PolicyWindow
        openState = {this.state.showPolicy}
        onCloweModalWindow = {this._closePolicyWindowFormHandle}
      />
    );
  }

  _renderInfoWindow() {
    return(
      <InfoWindow
        openState = {this.state.showInfoWindow}
        onCloweModalWindow = {this._closeInfoWindowFormHandle}
        headerText = {`Ваше сообщение отправлено`}
        bodyText = {`Наши эксперты свяжутся с вами, как только обработают сообщение`}
        buttonText = {`Хорошо`}
      />
    );
  }

  render() {
    const {cartPrice, cartType, cartTypeName, cartDishes, dishesTypesList, dishesList} = this.props;
    const {onDeleteDishFromCart, onChangeDishCountInCart, onAddDishToCart, onClearCart} = this.props;

    console.log(this.props.orderId);

    // console.log(dishesList);
    // console.log(dishesTypesList);

    return (
      <Router history={history}>
        <Switch>

          <Route exact path={AppRoute.ROOT}>
            <React.Fragment>
              <PageHeader
                totalCost = {cartPrice}
                openContactUsForm = {this._openContactUsFormHandle}
                openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
              />
              <Main
                openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
                openContactUsForm = {this._openContactUsFormHandle}
                openPolicyWindow = {this._openPolicyWindowHandle}
                openInfoWindow = {this._openInfoWindowHandle}
                showStatusWindow = {StatusWindowState.NO_STATUS}
                openPayStatusWindow = {this._openPayStatusWindowHandle}
                isAfterPay = {this.state.isAfterPay}
                // isAfterPay = {true}
              />
              <PageFooter
                openPolicyWindow = {this._openPolicyWindowHandle}
                openPolicsWindow = {this._openPoliticWindowHandle}
                openCookiesWindow = {this._openCookiesWindowHandle}
                openContactUsForm = {this._openContactUsFormHandle}
                openOferWindow = {this._openOferWindowHandler}
                openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
              />
            </React.Fragment>
          </Route>




          <Route exact path={AppRoute.PAY_SUCCESS}>
            <RedirectComponent
              setAppStates = {this._setAfterPay}
              payStatus = {true}
              setStatus = {this.props.setOrderPayStatus}
              onClearCart = {onClearCart}
              orderId = {this.props.orderId}
            />
          </Route>

          <Route exact path={AppRoute.PAY_ERROR}>
            <RedirectComponent
              setAppStates = {this._setAfterPay}
              payStatus = {false}
            />
          </Route>




          <Route exact path={AppRoute.CART}>
            <React.Fragment>
              <PageHeader
                totalCost = {cartPrice}
                openContactUsForm = {this._openContactUsFormHandle}
                openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
              />
              <Cart
                totalCost = {cartPrice}
                cartType = {cartType}
                cartTypeName = {cartTypeName}
                cartDishesList = {cartDishes}

                onClearCart = {onClearCart}
                onDeleteDishFromCart = {onDeleteDishFromCart}
                onChangeDishCountInCart = {onChangeDishCountInCart}
                openPolicyWindow = {this._openPolicyWindowHandle}
                />
              <PageFooter
                openPolicyWindow = {this._openPolicyWindowHandle}
                openPolicsWindow = {this._openPoliticWindowHandle}
                openCookiesWindow = {this._openCookiesWindowHandle}
                openContactUsForm = {this._openContactUsFormHandle}
                openOferWindow = {this._openOferWindowHandler}
                openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
              />
            </React.Fragment>
          </Route>

          <Route
            path={AppRoute.CATERING}
            render = {() => {
              const cateringDishes = dishesList.slice().filter((dish) => dish.dishCategory === MenuCategory.CATERING);

              // console.log(dishesList);
              // console.log(MenuCategory.CATERING);

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
                      openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
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
                      openPolicsWindow = {this._openPoliticWindowHandle}
                      openCookiesWindow = {this._openCookiesWindowHandle}
                      openContactUsForm = {this._openContactUsFormHandle}
                      openOferWindow = {this._openOferWindowHandler}
                      openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
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
                      openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
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
                      openPolicsWindow = {this._openPoliticWindowHandle}
                      openCookiesWindow = {this._openCookiesWindowHandle}
                      openContactUsForm = {this._openContactUsFormHandle}
                      openOferWindow = {this._openOferWindowHandler}
                      openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
                    />
                  </React.Fragment>
                );
            }}
          />

          <Route
            path={AppRoute.NO_GLUTEN}
            render = {() => {
              const noGlutenDishes = dishesList.slice().filter((dish) => dish.dishCategory === MenuCategory.NO_GLUTEN);

              const noGlutenDishesTypes = dishesTypesList
                .map((dishType) => {
                    dishType.count = noGlutenDishes.slice().filter((dish) => dish.dishTypeId === dishType.dishTypeId).length;
                    return dishType;
                  })
                .filter((dishType) => dishType.count > 0);

                return (
                  <React.Fragment>
                    <PageHeader
                      totalCost = {cartPrice}
                      openContactUsForm = {this._openContactUsFormHandle}
                      openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
                    />
                    <NoGluten
                      dishesTypesList = {noGlutenDishesTypes}
                      dishesList = {noGlutenDishes}
                      onAddDishToCart = {onAddDishToCart}
                      cartCategory = {cartType}
                      onClearCart = {onClearCart}
                    />
                    <PageFooter
                      openPolicyWindow = {this._openPolicyWindowHandle}
                      openPolicsWindow = {this._openPoliticWindowHandle}
                      openCookiesWindow = {this._openCookiesWindowHandle}
                      openContactUsForm = {this._openContactUsFormHandle}
                      openOferWindow = {this._openOferWindowHandler}
                      openGetLinkFormModalForm = {this._openGetLinkFormModalHandle}
                    />
                  </React.Fragment>
                );
            }}
          />

        </Switch>

        {this.state.showContactUsForm ? this._renderContactUsModal() : ``}
        {this.state.showGetLinkFormModal ? this._renderGetLinkFormModal() : ``}
        {this.state.showPolicy ? this._renderPolicyWindow() : ``}
        {this.state.showInfoWindow ? this._renderInfoWindow() : ``}
        {this.state.showPayStatusWindow ? this._renderPayStatusWindow() : ``}

      </Router>
    )
  }
};




App.propTypes = {
  cartPrice: PropTypes.number,
  orderId: PropTypes.string,
  cartType: PropTypes.number.isRequired,
  cartTypeName: PropTypes.object.isRequired,
  cartDishes: PropTypes.array,

  dishesTypesList: PropTypes.array,
  dishesList: PropTypes.array,

  setOrderId: PropTypes.func,
  onDeleteDishFromCart: PropTypes.func,
  onChangeDishCountInCart: PropTypes.func,
  onAddDishToCart: PropTypes.func,
  onClearCart: PropTypes.func,

  setOrderPayStatus: PropTypes.func,
};





const mapStateToProps = (state) => ({

  cartPrice: getCartPrice(state.cartDishes),
  cartType: state.cartType,
  cartTypeName: getMenuCategoryName(state.cartType),
  cartDishes: state.cartDishes,

  orderId: state.orderId,
  dishesTypesList: state.dishesTypesList,
  dishesList: state.dishesList,
});


const mapDispatchToProps = (dispatch) => ({
  setOrderId(orderId) {
    dispatch(ActionCreator.setOrderId(orderId));
  },
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
  setOrderPayStatus(payStatus) {
    // dispatch(DataOperation.setOrderPayStatus(payStatus, action));
    dispatch(DataOperation.setOrderPayStatus(payStatus));
  },
});



export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
