import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import OrderNavigator from "../order-navigator/order-navigator.jsx";
import MenuGroupNavigator from "../menu-group-navigator/menu-group-navigator.jsx";


class Catering extends PureComponent {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    window.scrollTo(0, 0);
  }


  render() {

    const {dishesTypesList, dishesList, cartCategory, onAddDishToCart, onClearCart} = this.props;

    const menuGroups = dishesTypesList.map((dishesType) => (
      <MenuGroupNavigator
        key = {dishesType.dishTypeName + dishesType.dishTypeId}
        groupId = {dishesType.dishTypeId}
        groupName = {dishesType.dishTypeName}
        dishesList = {dishesList.slice().filter((dishes) => dishes.dishTypeId === dishesType.dishTypeId)}
        CartCategory = {cartCategory}
        onAddDishToCart = {onAddDishToCart}
        onClearCart = {onClearCart}
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
                  Мы предлагаем широкий спектр блюд, а также
                  выезд шеф-повара. Посмотрите наше меню
                  и найдите аппетитные идеи для вашего
                  следующего мероприятия.
                </p>

                <ul className="order-head__terms">
                  <li className="order-head__term">Время заказа: <span className="order-head__term-dd"><br />До 15:00 текущего дня</span></li>
                  <li className="order-head__term">Доставка: <span className="order-head__term-dd"><br />На следующий день</span></li>
                  <li className="order-head__term">Минимальная сумма заказа: <span className="order-head__term-dd"><br />4900 рублей*</span></li>
                </ul>

                <p className="order-head__text-term">* Доставка в пределах МКАД 300р, <br />за МКАД и до 25км от МКАД - 500р.</p>

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
  cartCategory: PropTypes.number,

  onAddDishToCart: PropTypes.func,
  onClearCart: PropTypes.func,
}


export default Catering;
