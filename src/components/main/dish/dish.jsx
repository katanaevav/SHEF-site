import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SelectCount from "../select-count/select-count.jsx";

import {MenuCategory} from "../../../const.js";


class Dish extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dishCount: 1,
    }

    this._renderTag = this._renderTag.bind(this);
    this._addToCartClickHandler = this._addToCartClickHandler.bind(this);
    this._changeDishCountHandler = this._changeDishCountHandler.bind(this);
  }

  _renderTag(tag) {
    return (
      <p className="dish-tag">{tag}</p>
    );
  }


  _addToCartClickHandler(evt) {
    const {dish, CartCategory, onAddDishToCart, onClearCart} = this.props;
    evt.preventDefault();
    dish.dishCount = this.state.dishCount;

    if ((dish.dishCategory != CartCategory) && (CartCategory != MenuCategory.EMPTY)) {
      onClearCart();
    }

    onAddDishToCart(dish);
  }

  _changeDishCountHandler(value) {
    this.setState({ dishCount: value });
  }


  render() {

    const {dish} = this.props;

    return (
      <React.Fragment>

        <li className="menu-group-navigator__item dish">
          <div className="dish-wrapper dish-wrapper--head">
            <p className="dish-weight">{dish.dishWeight}</p>
            {dish.dishTag !== `` ? this._renderTag(dish.dishTag) : ``}
          </div>
          <img className="dish__image" src={dish.dishImage} srcSet={`${dish.dishImage2x} 2x`} alt={dish.dishName}  width="166" height="166"/>

          <SelectCount
            defaultValue = {1}
            minValue = {1}
            maxValue = {99}
            onChangeValue = {this._changeDishCountHandler}
          />

          <h3 className="dish__header">{dish.dishName}</h3>
          <p className="dish__description">{dish.dishDescription}</p>
          <div className="dish-wrapper dish-wrapper--footer">
            <p className="dish__price">{`${dish.dishPrice} р.`}</p>
            <button
              className="dish__to-cart"
              onClick={this._addToCartClickHandler}
            >В корзину</button>
          </div>
        </li>

      </React.Fragment>
    );
  }
};


Dish.propTypes = {
  dish: PropTypes.object,
  CartCategory: PropTypes.number,

  onAddDishToCart: PropTypes.func,
  onClearCart: PropTypes.func,
}


export default Dish;
