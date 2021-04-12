import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartDish from "../cart-dish/cart-dish.jsx";


class Cart extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {cartType, cartDishesList} = this.props;

    const cartDishes = cartDishesList.map((dish) => (
      <CartDish
        key = {dish.dishId}
        dish = {dish}
      />
    ));


    return (
      <React.Fragment>

        <main className="page-main">
          <div className="page-main__wrapper">

            <div className="cart-wrapper">
              <section className="cart">
                <div className="cart__wrpapper">
                  <h1 className="cart__header">Ваша корзина</h1>
                  <a className="cart__go-back">Вернуться к выбру</a>
                </div>
                <ul className="cart__shopping-list shopping">
                  {cartDishes}
                </ul>

                <div className="cart__empty cart__empty--hide">
                  <p>Ваша корзина пуста</p>
                </div>

                <button className="cart__checkout">Оформить заказ</button>

              </section>

              <section className="order-details order-details--hide">
                <div className="order-details__wrpapper">
                  <a className="order-details__go-back">В корзину</a>
                  <h2 className="order-details__header">Детали заказа</h2>
                </div>

                <form className="order-details__form" method="POST" action="https://echo.htmlacademy.ru">
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
                    <p className="order-details__form-text">559 р.</p>
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
  cartType: PropTypes.number,
  cartDishesList: PropTypes.array,
}


export default Cart;
