import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import OrderNavigator from "../order-navigator/order-navigator.jsx";
import MenuGroupNavigator from "../menu-group-navigator/menu-group-navigator.jsx";

import {MenuCategory} from "../../../const.js";


class Catering extends PureComponent {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    window.scrollTo(0, 0);
  }


  render() {

    const {dishesTypesList, dishesList} = this.props;

    const menuGroups = dishesTypesList.map((dishesType) => (
      <MenuGroupNavigator
        key = {dishesType.dishTypeName + dishesType.dishTypeId}
        groupId = {dishesType.dishTypeId}
        groupName = {dishesType.dishTypeName}
        dishesList = {dishesList.slice().filter((dishes) => dishes.dishTypeId === dishesType.dishTypeId)}
        MenuCategory = {MenuCategory.CATERING}
      />
    ));


    return (
      <React.Fragment>

        <main className="page-main">
          <div className="page-main__wrapper">

            <section className="order-head">

              <div className="order-head__left-panel">
                <h1 className="order-head__header">Кейтеринг</h1>
                <p className="order-head__text">
                  Готовая еда для любого мероприятия и на любой
                  кошелек! Будь то праздник или официальный прием.
                  Выездной харизматичный повар, для сервировки на
                  многоразовой посуде, доготовки или прогрева блюд.
                </p>

                <ul className="order-head__terms">
                  <li className="order-head__term">Время заказа: <span className="order-head__term-dd"><br />До 15:00 текущего дня</span></li>
                  <li className="order-head__term">Доставка: <span className="order-head__term-dd"><br />На следующий день</span></li>
                  <li className="order-head__term">Минимальная сумма заказа: <span className="order-head__term-dd"><br />4900 рублей (+ повар - 3000 руб.)*</span></li>
                </ul>

                <p className="order-head__text-term">* Доставка в пределах МКАД 500р, <br />за МКАД и до 25км от МКАД - 1000р.</p>

              </div>

              <div className="order-head__right-panel">
                <img className="order-head__logo-image order-head__logo-image--catering" src="./img/catering.png" srcSet="./img/catering@2x.png 2x" alt="Логотип" />
              </div>

            </section>

            <OrderNavigator
              dishesTypesList = {dishesTypesList}
            />

            {menuGroups}

          </div>
        </main>

      </React.Fragment>
    );
  }
};


Catering.propTypes = {
  dishesTypesList: PropTypes.array,
  dishesList: PropTypes.array,
}


export default Catering;
