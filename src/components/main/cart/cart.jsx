import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import history from "../../../history.js";
import {AppRoute} from "../../../const.js";

import CartDish from "../cart-dish/cart-dish.jsx";

import {MenuCategory} from "../../../const.js";

import {popup} from "../../ext/popup.js";


class Cart extends PureComponent {
  constructor(props) {
    super(props);

    this._renderShoppingList = this._renderShoppingList.bind(this);
    this._renderCheckoututton = this._renderCheckoututton.bind(this);
    this._goBackClickHandler = this._goBackClickHandler.bind(this);
    this._goBackToCartClickHandler = this._goBackToCartClickHandler.bind(this);
    this._checkOutButtonClickHandler = this._checkOutButtonClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
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

  _formSubmitHandler(evt) {
    evt.preventDefault();

    if (this.props.totalCost < this.props.cartTypeName.minCoast) {
      popup(`До минимальной суммы заказа: ${this.props.cartTypeName.minCoast - this.props.totalCost} рублей`);
    } else {
      evt.target.submit();
    }
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
                  <h2 className="order-details__header">Детали заказа</h2>
                </div>

                <form className="order-details__form" method="POST" action="https://echo.htmlacademy.ru" onSubmit={this._formSubmitHandler}>
                  <input className="order-details__form-input order-details__form-input--name" type="text" placeholder="Ваше имя" name="name" required />
                  <input className="order-details__form-input order-details__form-input--phone" type="phone" placeholder="Ваш телефон" name="phone" required />
                  <input className="order-details__form-input order-details__form-input-adress" type="text" placeholder="Улица, дом, квартира" name="adress" required />

                  <textarea className="order-details__form-input order-details__form-input-comment" name="comment" placeholder="Ваш комментарий"></textarea>

                  <div className="order-details__form-input-wrapper order-details__form-input-wrapper--checkbox">
                    <input className="order-details__form-checkbox" type="checkbox" id="order-check-policy" name="accept-policy" value="yes" />
                    <label className="order-details__form-checkbox-label" htmlFor="order-check-policy">согласен с условиями<br />
                      <a href="#">Политики конфиденциальности</a>
                    </label>
                  </div>

                  <div className="order-details__form-input-wrapper order-details__form-input-wrapper--total">
                    <p className="order-details__form-text">Итого:</p>
                    <p className="order-details__form-text">{`${totalCost} р.`}</p>
                  </div>

                  <input className="order-details__form-button" type="submit" value="Перейти к оплате" />
                </form>



              </section>
            </div>

          </div>
        </main>

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
}


export default Cart;
