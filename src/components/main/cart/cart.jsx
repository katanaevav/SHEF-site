import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import history from "../../../history.js";
import {AppRoute} from "../../../const.js";

import CartDish from "../cart-dish/cart-dish.jsx";

import {MenuCategory} from "../../../const.js";

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
      terminalkey: '1622565527503DEMO',
      frame: 'true',
      language: 'ru',
      amount: '22',
      order: '11',
      description: '',
      name: '',
      email: '123@123.ru',
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
  }

  _renderInfoWindow() {
    return(
      <InfoWindow
        openState = {this.state.showInfoWindow}
        onCloweModalWindow = {this._closeInfoWindowFormHandle}
        headerText = {`Номер вашего заказа: ${this.state.orderId}`}
        bodyText = {`В ближайшее время c вами свяжутся по указанному телефону`}
        buttonText = {`Хорошо`}
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
      popup(`До минимальной суммы заказа: ${this.props.cartTypeName.minCoast - this.props.totalCost} рублей`);
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
      cartDishesList.length > 0 ? (<button className="cart__checkout" onClick={this._checkOutButtonClickHandler}>Оформить заказ</button>) : ``
    );
  }

  _custonValidityCheckboxHandler(evt) {
    !this.checkPolicy.current.checked ? evt.target.setCustomValidity(`Необходимо принять политику конфиденциальности`) : evt.target.setCustomValidity(``);
  }


  _getOrderIdResponse(respData) {
    console.log(respData);
    this.setState({ orderId: respData.id });



    this.setState({ showInfoWindow: true });
    //  pay(this);

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
      popup(`До минимальной суммы заказа: ${this.props.cartTypeName.minCoast - this.props.totalCost} рублей`);
    } else if (this.props.totalCost === 0) {
      popup(`Ваша корзина пуста`);
    } else {

      // evt.target.submit();
      // console.log(`saving order from cart `);

      // pay(this);

      this.props.saveOrder(order, this._getOrderIdResponse);


    }
  }

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
    script.async = true;

    document.body.appendChild(script);
}

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
                  <a className="cart__go-back" onClick={this._goBackClickHandler}>Вернуться к выбру</a>
                </div>

                {this._renderShoppingList()}

                <div className={`cart__empty ${cartDishesList.length > 0 ? `cart__empty--hide` : ``}`}>
                  <p>Ваша корзина пуста</p>
                </div>

                {this._renderCheckoututton()}

              </section>

              <section className="order-details order-details--hide">
                <div className="order-details__wrpapper">
                  <a className="order-details__go-back" onClick={this._goBackToCartClickHandler}>В корзину</a>
                  <h2 className="order-details__header">{`Детали заказа ${this.state.orderId > 0 ? this.state.orderId : ``}` }</h2>
                </div>

                <form className="order-details__form" name="TinkoffPayForm" onSubmit={this._formSubmitHandler}>

                  <input type="hidden" name="terminalkey" value="1622565527503DEMO" />
                  <input type="hidden" name="frame" value="false" />
                  <input type="hidden" name="language" value="ru" />
                  <input type="hidden" name="reccurentPayment" value="false" />
                  <input type="hidden" name="customerKey" value="" />
                  <input type="hidden" placeholder="E-mail" name="email" value="123@123.ru" />

                  <input className="order-details__form-input order-details__form-input--name" type="text" ref={this.orderNameInput} placeholder="Ваше имя" name="name" required />
                  <input className="order-details__form-input order-details__form-input--phone" type="phone" ref={this.orderPhoneInput} placeholder="Ваш телефон" name="phone" required />
                  <input className="order-details__form-input order-details__form-input-adress" type="text" ref={this.orderAdressInput} placeholder="Улица, дом, квартира" name="adress" required />
                  <input className="order-details__totalCost" type="hidden" name="amount" value={`${totalCost}.00`} />
                  <input className="order-details__orderId" type="hidden" name="order" ref={this.orderIdInput} value="0" />

                  <textarea className="order-details__form-input order-details__form-input-comment" name="description" ref={this.orderCommentInput} placeholder="Ваш комментарий"></textarea>

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
                    <label className="order-details__form-checkbox-label" htmlFor="order-check-policy">согласен с условиями<br />
                      <a href="#" onClick={this.props.openPolicyWindow}>Политики конфиденциальности</a>
                    </label>
                  </div>

                  <div className="order-details__form-input-wrapper order-details__form-input-wrapper--total">
                    <p className="order-details__form-text">Итого:</p>
                    <p className="order-details__form-text">{`${totalCost} р.`}</p>
                  </div>

                  <input className="order-details__form-button" type="submit" value="Перейти к оплате" />
                </form>

                {this.state.showPayForm ?

                  <Tinkoff.Pay
                    form={this.form}
                    onClose={(inp) => console.log(inp)}
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
