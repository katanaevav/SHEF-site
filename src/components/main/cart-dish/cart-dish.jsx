import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SelectCount from "../select-count/select-count.jsx"


class CartDish extends PureComponent {
  constructor(props) {
    super(props);

    this._deleteDishFromCartHandler = this._deleteDishFromCartHandler.bind(this);
    this._chacngeDishCountHandler = this._chacngeDishCountHandler.bind(this);
  }


  _deleteDishFromCartHandler(evt) {
    evt.preventDefault();
    this.props.onDeleteDishFromCart(this.props.dish.dishId);
  }

  _chacngeDishCountHandler(dishCount) {
    this.props.onChangeDishCountInCart(this.props.dish.dishId, dishCount);
  }

  render() {
    const {dish} = this.props;

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
                onChangeValue = {this._chacngeDishCountHandler}
              />
              <p className="shopping__price">{`${dish.dishPrice} р.`}</p>
            </div>
          </div>

          <a href="#" className="shopping__delete"><img className="shopping__delete-image" src="./img/delete.svg" alt="Удалить" onClick={this._deleteDishFromCartHandler}/></a>
        </li>

      </React.Fragment>
    );
  }
};


CartDish.propTypes = {
  dish: PropTypes.object,

  onDeleteDishFromCart: PropTypes.func,
  onChangeDishCountInCart: PropTypes.func,
}


export default CartDish;
