import React, {PureComponent} from "react";
// import PropTypes from "prop-types";

import OrderNavigator from "../order-navigator/order-navigator.jsx";

class OnlineCooking extends PureComponent {
  constructor(props) {
    super(props);

    this._burgerButtonClickHandler = this._burgerButtonClickHandler.bind(this);
  }

  _burgerButtonClickHandler() {
    document.querySelector(`.site-container`).classList.toggle("site-container--show-mobile-menu");
  }


  render() {

    // const {totalCost} = this.props;

    return (
      <React.Fragment>

        <main className="page-main">
          <div className="page-main__wrapper">

            <section className="order-head">

              <div className="order-head__left-panel">
                <h1 className="order-head__header">Онлайн кулинария</h1>
                <p className="order-head__text">
                  Хочется домашней еды или необходимо накрыть
                  стол к празднику, а готовить нет времени
                  или желания? Не беда - выбирайте блюда, а мы
                  приготовим и все привезем!
                </p>

                <ul className="order-head__terms">
                  <li className="order-head__term">Время заказа: <span className="order-head__term-dd"><br />До 17:00 текущего дня</span></li>
                  <li className="order-head__term">Доставка: <span className="order-head__term-dd"><br />На следующий день</span></li>
                  <li className="order-head__term">Минимальная сумма заказа: <span className="order-head__term-dd"><br />2900 рублей*</span></li>
                </ul>

                <p className="order-head__text-term">* Доставка в пределах МКАД 500р, <br />за МКАД и до 25км от МКАД - 1000р.</p>

              </div>

              <div className="order-head__right-panel">
                <img className="order-head__logo-image order-head__logo-image--online-cooking" src="./img/online-cooking.png" srcSet="./img/online-cooking@2x.png 2x" alt="Логотип" />
              </div>

            </section>

            <OrderNavigator />

            <section className="menu-group-navigator" id="1">
              <h2 className="menu-group-navigator__header">Первые блюда</h2>
              <div className="menu-group-navigator__wrapper">
                <ul className="menu-group-navigator__list">

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">250 гр.</p>
                      <p className="dish-tag">NEW</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Анатомия вкуса</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">250 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">300 гр.</p>
                      <p className="dish-tag">HOT</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Суп Харчо с бараниной</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">350 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">350 гр.</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Борщ на говядине</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">290 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">350 гр.</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Солянка</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">210 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">320 гр.</p>
                      <p className="dish-tag">%</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Лапша домашняя</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">170 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>


                </ul>
              </div>
            </section>

            <section className="menu-group-navigator" id="2">
              <h2 className="menu-group-navigator__header">Вторые блюда</h2>
              <div className="menu-group-navigator__wrapper">
                <ul className="menu-group-navigator__list">

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">250 гр.</p>
                      <p className="dish-tag">NEW</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Анатомия вкуса</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">250 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">300 гр.</p>
                      <p className="dish-tag">HOT</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Суп Харчо с бараниной</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">350 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">350 гр.</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Борщ на говядине</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">290 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">350 гр.</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Солянка</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">210 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">320 гр.</p>
                      <p className="dish-tag">%</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Лапша домашняя</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">170 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>


                </ul>
              </div>
            </section>

            <section className="menu-group-navigator" id="3">
              <h2 className="menu-group-navigator__header">Гариниры</h2>
              <div className="menu-group-navigator__wrapper">
                <ul className="menu-group-navigator__list">

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">250 гр.</p>
                      <p className="dish-tag">NEW</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Анатомия вкуса</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">250 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">300 гр.</p>
                      <p className="dish-tag">HOT</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Суп Харчо с бараниной</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">350 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">350 гр.</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Борщ на говядине</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">290 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">350 гр.</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Солянка</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">210 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>

                  <li className="menu-group-navigator__item dish">
                    <div className="dish-wrapper dish-wrapper--head">
                      <p className="dish-weight">320 гр.</p>
                      <p className="dish-tag">%</p>
                    </div>
                    <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                    <div className="dish__counter select-count">
                      <button className="select-count__button select-count__button--dec">-</button>
                      <input className="select-count__input" type="number" value="1" />
                      <button className="select-count__button select-count__button--inc">+</button>
                    </div>
                    <h3 className="dish__header">Лапша домашняя</h3>
                    <p className="dish__description">
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                      Описание блюда Описание блюда
                    </p>
                    <div className="dish-wrapper dish-wrapper--footer">
                      <p className="dish__price">170 р.</p>
                      <button className="dish__to-cart">В корзину</button>
                    </div>
                  </li>


                </ul>
              </div>
            </section>

          </div>
        </main>

      </React.Fragment>
    );
  }
};


// OnlineCooking.propTypes = {
//   totalCost: PropTypes.number,
// }


export default OnlineCooking;
