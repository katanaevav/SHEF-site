import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SelectCount from "../select-count/select-count.jsx"


class CartDish extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {dish} = this.props;

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

        <li className="shopping__item">
          <img className="shopping__image" src={dish.dishImage} srcSet={`${dish.dishImage2x} 2x`} alt={dish.dishName} />

          <div className="shopping__wrapper shopping__wrapper--1">
            <div className="shopping__wrapper shopping__wrapper--2">
              <p className="shopping__name">{dish.dishName}</p>
              <p className="shopping__weight">{dish.dishWeight}</p>
            </div>
            <div className="shopping__wrapper shopping__wrapper--3">
              <SelectCount
                defaultValue = {dish.dishCount}
                minValue = {1}
                maxValue = {99}
                isWhiteBackground = {true}
                onChangeValue = {()=>{}}
              />
              <p className="shopping__price">{dish.dishPrice}</p>
            </div>
          </div>

          <a href="#" className="shopping__delete"><img className="shopping__delete-image" src="./img/delete.svg" alt="Удалить" /></a>
        </li>

      </React.Fragment>
    );
  }
};


CartDish.propTypes = {
  dish: PropTypes.object,
}


export default CartDish;
