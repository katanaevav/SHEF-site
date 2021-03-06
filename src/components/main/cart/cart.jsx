// https://chefzdes.ru/ep?Success=false&ErrorCode=1051&Message=%D0%9D%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BE%D1%87%D0%BD%D0%BE+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2+%D0%BD%D0%B0+%D0%BA%D0%B0%D1%80%D1%82%D0%B5.&Details=&Amount=414000&MerchantEmail=2071224%40mail.ru&MerchantName=ChefZdes.ru&OrderId=80390&PaymentId=640678238&TranDate=&BackUrl=http%3A%2F%2Fchefzdes.ru&CompanyName=%D0%98%D0%9F+%D0%9F%D0%A3%D0%97%D0%90%D0%9D%D0%9A%D0%9E%D0%92+%D0%9F%D0%95%D0%A2%D0%A0+%D0%92%D0%9B%D0%90%D0%94%D0%98%D0%9C%D0%98%D0%A0%D0%9E%D0%92%D0%98%D0%A7&EmailReq=2071224%40mail.ru&PhonesReq=9262071224


import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import history from "../../../history.js";
import {AppRoute} from "../../../const.js";

import CartDish from "../cart-dish/cart-dish.jsx";

import {MenuCategory, SavingStatus} from "../../../const.js";

import {Operation as DataOperation} from "../../../reducer/reducer.js";
import InfoWindow from "../info-window/info-window.jsx";
import {ActionCreator} from "../../../reducer/reducer.js";

import Tinkoff from 'react-tinkoff-pay';

import {popup} from "../../ext/popup.js";


class Cart extends PureComponent {
  constructor(props) {
    super(props);

    this.orderForm = React.createRef();
    this.checkPolicy = React.createRef();
    this.orderIdInput = React.createRef();
    this.orderNameInput = React.createRef();
    this.orderPhoneInput = React.createRef();
    this.orderAdressInput = React.createRef();
    this.orderCommentInput = React.createRef();

    this.state = {
      orderId: 0,
      showPayForm: false,
      showInfoWindow: false,
    };

    this.form = {
      // terminalkey: 'TinkoffBankTest',
      terminalkey: '1622565527503DEMO',
      // terminalkey: '1622565527503',
      frame: 'false',
      language: 'ru',
      amount: '22',
      order: '11',
      description: '',
      name: '',
      // email: '123@123.ru',
      email: '',
      phone: '79055594564'
  }

    this._renderShoppingList = this._renderShoppingList.bind(this);
    this._renderCheckoututton = this._renderCheckoututton.bind(this);
    this._goBackClickHandler = this._goBackClickHandler.bind(this);
    this._goBackToCartClickHandler = this._goBackToCartClickHandler.bind(this);
    this._checkOutButtonClickHandler = this._checkOutButtonClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._custonValidityCheckboxHandler = this._custonValidityCheckboxHandler.bind(this);
    this._getOrderIdResponse = this._getOrderIdResponse.bind(this);
    this._closeInfoWindowFormHandle = this._closeInfoWindowFormHandle.bind(this);
    this._closePayFormHandle = this._closePayFormHandle.bind(this);
  }

  _renderInfoWindow() {
    return(
      <InfoWindow
        openState = {this.state.showInfoWindow}
        onCloweModalWindow = {this._closeInfoWindowFormHandle}
        headerText = {`?????????? ???????????? ????????????: ${this.state.orderId}`}
        bodyText = {`?? ?????????????????? ?????????? c ???????? ???????????????? ???? ???????????????????? ????????????????`}
        buttonText = {`????????????`}
      />
    );
  }

  _closeInfoWindowFormHandle() {
    this.setState({ showInfoWindow: false });
    this.props.onClearCart();
    this.orderNameInput.current.value = ``;
    this.orderPhoneInput.current.value = ``;
    this.orderAdressInput.current.value = ``;
    this.orderCommentInput.current.value = ``;
    this.checkPolicy.current.checked = false;

    history.push(AppRoute.ROOT);
  }

  _goBackToCartClickHandler() {
    document.querySelector(`.order-details`).classList.toggle("order-details--hide");
    document.querySelector(`.cart`).classList.toggle("cart--hide");
  }

  _checkOutButtonClickHandler() {
    if (this.props.totalCost < this.props.cartTypeName.minCoast) {
      popup(`???? ?????????????????????? ?????????? ????????????: ${this.props.cartTypeName.minCoast - this.props.totalCost} ????????????`);
    } else {
      document.querySelector(`.order-details`).classList.toggle("order-details--hide");
      document.querySelector(`.cart`).classList.toggle("cart--hide");
    }
  }


  _goBackClickHandler() {
    const {cartType} = this.props;

    switch (cartType) {
      case MenuCategory.ONLINE_COOKING: history.push(AppRoute.ONLINE_COOKING);
        break;
      case MenuCategory.CATERING: history.push(AppRoute.CATERING);
        break;
      case MenuCategory.NO_GLUTEN: history.push(AppRoute.NO_GLUTEN);
        break;
      default: history.push(AppRoute.ROOT);
    }
  }


  _renderShoppingList() {
    const {cartDishesList, onDeleteDishFromCart, onChangeDishCountInCart} = this.props;

    const cartDishes = cartDishesList.map((dish) => (
      <CartDish
        key = {dish.dishId}
        dish = {dish}
        onDeleteDishFromCart = {onDeleteDishFromCart}
        onChangeDishCountInCart = {onChangeDishCountInCart}
      />
    ));

    return (
      cartDishesList.length > 0 ? (<ul className="cart__shopping-list shopping">{cartDishes}</ul>) : ``
    );
  }


  _renderCheckoututton(clickEventHandler) {
    const {cartDishesList} = this.props;

    return (
      cartDishesList.length > 0 ? (<button className="cart__checkout" onClick={this._checkOutButtonClickHandler}>???????????????? ??????????</button>) : ``
    );
  }

  _custonValidityCheckboxHandler(evt) {
    !this.checkPolicy.current.checked ? evt.target.setCustomValidity(`???????????????????? ?????????????? ???????????????? ????????????????????????????????????`) : evt.target.setCustomValidity(``);
  }







  _closePayFormHandle(respData) {
    // console.log(`3. tinkoff response data`);
    // console.log(respData);
    this.setState({ showInfoWindow: true });
  }


  _getOrderIdResponse(respData, status) {


    if (status === SavingStatus.SUCCESS) {
      // console.log(`1. backend response data`);
      // console.log(respData);
      this.setState({ orderId: respData.id });
      // localStorage.setItem(`orderId`, respData.id);

      //  pay(this);

      const orderIdS = respData.id;

      this.form.amount = this.props.totalCost.toString();
      this.form.order = orderIdS.toString();
      this.form.description = this.orderCommentInput.current.value;
      this.form.name = this.orderNameInput.current.value;
      this.form.phone = this.orderPhoneInput.current.value;

      // console.log(`2. form data`);
      // console.log(this.form);

      this.setState({ showPayForm: true });
    } else {
      popup(`???? ?????????????? ?????????????????? ??????????. ???????????????????? ??????????????.`);
    }
  }






  _formSubmitHandler(evt) {
    evt.preventDefault();

    const today = new Date();
    const order = {
      "date": today.getFullYear()+'-'+(((today.getMonth()+1) < 10)?"0":"") + (today.getMonth()+1)+'-'+((today.getDate() < 10)?"0":"") + today.getDate()+'T'+((today.getHours() < 10)?"0":"") + today.getHours() + ":" + ((today.getMinutes() < 10)?"0":"") + today.getMinutes() + ":" + ((today.getSeconds() < 10)?"0":"") + today.getSeconds()+'Z',
      "summ": this.props.totalCost,
      "user_phone": this.orderPhoneInput.current.value,
      "items": this.props.cartDishesList,
      "comment": this.orderCommentInput.current.value,
      "client_name": this.orderNameInput.current.value,
      "address_string": this.orderAdressInput.current.value,
      "point": this.props.cartTypeName.id,
    }

    // console.log(order);

    if (this.props.totalCost < this.props.cartTypeName.minCoast) {
      popup(`???? ?????????????????????? ?????????? ????????????: ${this.props.cartTypeName.minCoast - this.props.totalCost} ????????????`);
    } else if (this.props.totalCost === 0) {
      popup(`???????? ?????????????? ??????????`);
    } else {

      // evt.target.submit();
      // console.log(`saving order from cart `);

      // pay(this);

      this.props.saveOrder(order, this._getOrderIdResponse);


    }
  }

//   componentDidMount () {
//     const script = document.createElement("script");

//     script.src = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
//     script.async = true;

//     document.body.appendChild(script);
// }

  render() {
    const {cartTypeName, cartDishesList, totalCost} = this.props;

    return (
      <React.Fragment>

        <main className="page-main">
          <div className="page-main__wrapper">

            <div className="cart-wrapper">
              <section className="cart">
                <div className="cart__wrpapper">
                  <h1 className="cart__header">{cartTypeName.name}</h1>
                  <a className="cart__go-back" onClick={this._goBackClickHandler}>?????????????????? ?? ??????????</a>
                </div>

                {this._renderShoppingList()}

                <div className={`cart__empty ${cartDishesList.length > 0 ? `cart__empty--hide` : ``}`}>
                  <p>???????? ?????????????? ??????????</p>
                </div>

                {this._renderCheckoututton()}

              </section>

              <section className="order-details order-details--hide">
                <div className="order-details__wrpapper">
                  <a className="order-details__go-back" onClick={this._goBackToCartClickHandler}>?? ??????????????</a>
                  <h2 className="order-details__header">{`???????????? ???????????? ${this.state.orderId > 0 ? this.state.orderId : ``}` }</h2>
                </div>

                <form className="order-details__form" name="TinkoffPayForm" onSubmit={this._formSubmitHandler}>

                  <input type="hidden" name="terminalkey" value="1622565527503DEMO" />
                  <input type="hidden" name="frame" value="false" />
                  <input type="hidden" name="language" value="ru" />
                  <input type="hidden" name="reccurentPayment" value="false" />
                  <input type="hidden" name="customerKey" value="" />
                  <input type="hidden" placeholder="E-mail" name="email" value="123@123.ru" />

                  <input className="order-details__form-input order-details__form-input--name" type="text" ref={this.orderNameInput} placeholder="???????? ??????" name="name" required />
                  <input className="order-details__form-input order-details__form-input--phone" type="phone" ref={this.orderPhoneInput} placeholder="?????? ??????????????" name="phone" required />
                  <input className="order-details__form-input order-details__form-input-adress" type="text" ref={this.orderAdressInput} placeholder="??????????, ??????, ????????????????" name="adress" required />
                  <input className="order-details__totalCost" type="hidden" name="amount" value={`${totalCost}.00`} />
                  <input className="order-details__orderId" type="hidden" name="order" ref={this.orderIdInput} value="0" />

                  <textarea className="order-details__form-input order-details__form-input-comment" name="description" ref={this.orderCommentInput} placeholder="?????? ??????????????????????"></textarea>

                  <div className="order-details__form-input-wrapper order-details__form-input-wrapper--checkbox">
                    <input
                      className="order-details__form-checkbox"
                      type="checkbox"
                      id="order-check-policy"
                      name="accept-policy"
                      value="yes"
                      ref={this.checkPolicy}
                      required
                      onInvalid={this._custonValidityCheckboxHandler}
                      onChange={this._custonValidityCheckboxHandler}
                    />
                    <label className="order-details__form-checkbox-label" htmlFor="order-check-policy">???????????????? ?? ??????????????????<br />
                      <a href="#" onClick={this.props.openPolicyWindow}>???????????????? ????????????????????????????????????</a>
                    </label>
                  </div>

                  <div className="order-details__form-input-wrapper order-details__form-input-wrapper--total">
                    <p className="order-details__form-text">??????????:</p>
                    <p className="order-details__form-text">{`${totalCost} ??.`}</p>
                  </div>

                  <input className="order-details__form-button" type="submit" value="?????????????? ?? ????????????" />
                </form>

                {this.state.showPayForm ?

                  <Tinkoff.Pay
                    form={this.form}
                    onClose={this._closePayFormHandle}
                  /> :
                  ``
                }
              </section>
            </div>

          </div>
        </main>

        {this.state.showInfoWindow ? this._renderInfoWindow() : ``}

      </React.Fragment>
    );
  }
};


Cart.propTypes = {
  totalCost: PropTypes.number,
  cartType: PropTypes.number,
  cartTypeName: PropTypes.object,
  cartDishesList: PropTypes.array,

  onDeleteDishFromCart: PropTypes.func,
  onChangeDishCountInCart: PropTypes.func,
  openPolicyWindow: PropTypes.func.isRequired,

  saveOrder: PropTypes.func,
  onClearCart: PropTypes.func,
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  saveOrder(order, action) {
    dispatch(DataOperation.saveOrder(order, action));
  },
});


// export default Cart;
export {Cart};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
