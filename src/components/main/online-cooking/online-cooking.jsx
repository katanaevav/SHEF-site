import React, {PureComponent} from "react";
// import PropTypes from "prop-types";

import OrderNavigator from "../order-navigator/order-navigator.jsx";
import MenuGroupNavigator from "../menu-group-navigator/menu-group-navigator.jsx";

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

            <MenuGroupNavigator
              groupId = {1}
              groupName = {`Первые блюда`}
            />

            <MenuGroupNavigator
              groupId = {2}
              groupName = {`Вторые блюда`}
            />


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
