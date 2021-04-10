import React, {PureComponent} from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import PropTypes from "prop-types";

import Dish from "../dish/dish.jsx";


class MenuGroupNavigator extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {

    const {groupId, groupName, dishesList, MenuCategory} = this.props;

    const dishes = dishesList.map((dish) => (
      <Dish
        key = {dish.dishId}
        dish = {dish}
        MenuCategory = {MenuCategory}
      />
    ));

    return (
      <React.Fragment>

         <section className="menu-group-navigator" id={groupId}>
          <h2 className="menu-group-navigator__header">{groupName}</h2>
          <ScrollContainer className="menu-group-navigator__wrapper"
            hideScrollbars = {false}
          >
            <ul className="menu-group-navigator__list">
              {dishes}
            </ul>
          </ScrollContainer>
        </section>

      </React.Fragment>
    );
  }
};


MenuGroupNavigator.propTypes = {
  groupId: PropTypes.number,
  groupName: PropTypes.string,
  dishesList: PropTypes.array,
  MenuCategory: PropTypes.number,
}


export default MenuGroupNavigator;
