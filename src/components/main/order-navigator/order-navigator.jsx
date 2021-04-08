import React, {PureComponent} from "react";
import ScrollContainer from "react-indiana-drag-scroll";
// import PropTypes from "prop-types";


class OrderNavigator extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    // const {totalCost} = this.props;

    return (
      <React.Fragment>

        {/* <section className="order-navigator"> */}
          <ScrollContainer className="order-navigator"
            hideScrollbars = {false}
          >
          <h2 className="order-navigator__header visually-hidden">Навигация по меню</h2>
            <ul className="order-navigator__list">
              <li className="order-navigator__item"><a href="#1">Первые блюда</a></li>
              <li className="order-navigator__item"><a href="#2">Вторые блюда</a></li>
              <li className="order-navigator__item"><a href="#3">Гарниры</a></li>
              <li className="order-navigator__item"><a href="#4">Десерты</a></li>
              <li className="order-navigator__item"><a href="#5">Безалкогольные напитки</a></li>
              <li className="order-navigator__item"><a href="#6">Вина</a></li>
              <li className="order-navigator__item"><a href="#7">Крепкий алкоголь</a></li>
              <li className="order-navigator__item"><a href="#8">Пицца</a></li>
            </ul>
          </ScrollContainer>
        {/* </section> */}

      </React.Fragment>
    );
  }
};


// OnlineCooking.propTypes = {
//   totalCost: PropTypes.number,
// }


export default OrderNavigator;
