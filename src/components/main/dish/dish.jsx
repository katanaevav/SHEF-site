import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SelectCount from "../select-count/select-count.jsx";
import QuestionWindow from "../question-window/question-window.jsx";

import {MenuCategory} from "../../../const.js";


class Dish extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dishCount: 1,
      showQuestionWindow: false,
    }

    this.dish = {};

    this._renderTag = this._renderTag.bind(this);
    this._addToCartClickHandler = this._addToCartClickHandler.bind(this);
    this._changeDishCountHandler = this._changeDishCountHandler.bind(this);

    this._openQuestionWindowHandle = this._openQuestionWindowHandle.bind(this);
    this._closeQuestionWindowFormHandle = this._closeQuestionWindowFormHandle.bind(this);
  }



  _openQuestionWindowHandle() {
    this.setState({ showQuestionWindow: true });
  }

  _closeQuestionWindowFormHandle(status) {
    const {dish, onAddDishToCart, onClearCart} = this.props;

    this.setState({
      showQuestionWindow: false,
     });

    if (status === 1) {
      onClearCart();
      onAddDishToCart(dish);
    }
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
      // onClearCart();
      this._openQuestionWindowHandle();
    } else {
      onAddDishToCart(dish);
    }

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


        <QuestionWindow
          openState = {this.state.showQuestionWindow}
          onCloweModalWindow = {this._closeQuestionWindowFormHandle}
          headerText = {`Очистка корзины`}
          bodyText = {`Добавление заказа из другой категории приведет к очистке корзины. Продолжить?`}
          yesButtonText = {`Да`}
          noButtonText = {`Нет`}
        />

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
