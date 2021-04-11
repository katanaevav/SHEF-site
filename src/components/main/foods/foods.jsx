import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import OrderNavigator from "../order-navigator/order-navigator.jsx";
import MenuGroupNavigator from "../menu-group-navigator/menu-group-navigator.jsx";

import {MenuCategory} from "../../../const.js";


class Foods extends PureComponent {
  constructor(props) {
    super(props);
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
              <h1 className="order-head__header">Заказ&nbsp;продуктов</h1>
              <p className="order-head__text">
                Надоели пластиковые продукты из мосмаркета?!
                Самое время собрать свою корзину из сезонных
                и не только, (локальных и импортных) фермерских
                овощей и фруктов!
              </p>

              <ul className="order-head__terms">
                <li className="order-head__term">Время заказа: <span className="order-head__term-dd"><br />До 22:00 текущего дня</span></li>
                <li className="order-head__term">Доставка: <span className="order-head__term-dd"><br />На следующий день</span></li>
                <li className="order-head__term">Минимальная сумма заказа: <span className="order-head__term-dd"><br />2500 рублей*</span></li>
              </ul>

              <p className="order-head__text-term">* Доставка в пределах МКАД 500р, <br />за МКАД и до 25км от МКАД - 1000р.</p>

            </div>

            <div className="order-head__right-panel">
              <img className="order-head__logo-image order-head__logo-image--foods" src="./img/foods.png" srcSet="./img/foods@2x.png 2x" alt="Логотип" />
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


Foods.propTypes = {
  dishesTypesList: PropTypes.array,
  dishesList: PropTypes.array,
}


export default Foods;
