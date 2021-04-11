import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SelectCount from "../select-count/select-count.jsx"

import OrderNavigator from "../order-navigator/order-navigator.jsx";
import MenuGroupNavigator from "../menu-group-navigator/menu-group-navigator.jsx";

import {MenuCategory} from "../../../const.js";


class Cart extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {cartType, cartDishesList} = this.props;

    // const menuGroups = dishesTypesList.map((dishesType) => (
    //   <MenuGroupNavigator
    //     key = {dishesType.dishTypeName + dishesType.dishTypeId}
    //     groupId = {dishesType.dishTypeId}
    //     groupName = {dishesType.dishTypeName}
    //     dishesList = {dishesList.slice().filter((dishes) => dishes.dishTypeId === dishesType.dishTypeId)}
    //     MenuCategory = {MenuCategory.CATERING}
    //   />
    // ));

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
                  <li className="shopping__item">
                    <img className="shopping__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />

                    <div className="shopping__wrapper shopping__wrapper--1">
                      <div className="shopping__wrapper shopping__wrapper--2">
                        <p className="shopping__name">Анатомия вкуса</p>
                        <p className="shopping__weight">250 гр.</p>
                      </div>
                      <div className="shopping__wrapper shopping__wrapper--3">
                        {/* <div className="dish__counter select-count select-count--background-white">
                          <button className="select-count__button select-count__button--dec">-</button>
                          <input className="select-count__input" type="number" value="1" />
                          <button className="select-count__button select-count__button--inc">+</button>
                        </div> */}
                        <SelectCount
                          defaultValue = {1}
                          minValue = {1}
                          maxValue = {99}
                          isWhiteBackground = {true}
                          onChangeValue = {()=>{}}
                        />
                        <p className="shopping__price">250 р.</p>
                      </div>
                    </div>

                    <a href="#" className="shopping__delete"><img className="shopping__delete-image" src="./img/delete.svg" alt="Удалить" /></a>
                  </li>

                  <li className="shopping__item">
                    <img className="shopping__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />

                    <div className="shopping__wrapper shopping__wrapper--1">
                      <div className="shopping__wrapper shopping__wrapper--2">
                        <p className="shopping__name">Вкусные биточки с томатным
                          соусом и картофельным пюре</p>
                        <p className="shopping__weight">250 гр.</p>
                      </div>
                      <div className="shopping__wrapper shopping__wrapper--3">
                        {/* <div className="dish__counter select-count select-count--background-white">
                          <button className="select-count__button select-count__button--dec">-</button>
                          <input className="select-count__input" type="number" value="1" />
                          <button className="select-count__button select-count__button--inc">+</button>
                        </div> */}
                        <SelectCount
                          defaultValue = {1}
                          minValue = {1}
                          maxValue = {99}
                          isWhiteBackground = {true}
                          onChangeValue = {()=>{}}
                        />
                        <p className="shopping__price">250 р.</p>
                      </div>
                    </div>

                    <a href="#" className="shopping__delete"><img className="shopping__delete-image" src="./img/delete.svg" alt="Удалить" /></a>
                  </li>
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
