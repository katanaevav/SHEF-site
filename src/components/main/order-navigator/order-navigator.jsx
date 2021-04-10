import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import ScrollContainer from "react-indiana-drag-scroll";


class OrderNavigator extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderItem(itemId, itemName) {
    return (
      <li key={itemName + itemId} className="order-navigator__item"><a href={`#${itemId}`}>{itemName}</a></li>
    );
  }

  render() {

    const {dishesTypesList} = this.props;

    const typeItems = dishesTypesList.map((dishesType) => (
      this._renderItem(dishesType.dishTypeId, dishesType.dishTypeName)
    ));

    return (
      <React.Fragment>

          <ScrollContainer className="order-navigator"
            hideScrollbars = {false}
          >
          <h2 className="order-navigator__header visually-hidden">Навигация по меню</h2>
            <ul className="order-navigator__list">
              {typeItems}
            </ul>
          </ScrollContainer>

      </React.Fragment>
    );
  }
};


OrderNavigator.propTypes = {
  dishesTypesList: PropTypes.array,
}


export default OrderNavigator;
