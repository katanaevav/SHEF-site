import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SelectCount from "../select-count/select-count.jsx";


class Dish extends PureComponent {
  constructor(props) {
    super(props);

    this. _renderTag = this. _renderTag.bind(this);
  }

  _renderTag(tag) {
    return (
      <p className="dish-tag">{tag}</p>
    );
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
            onChangeValue = {()=>{}}
          />

          <h3 className="dish__header">{dish.dishName}</h3>
          <p className="dish__description">{dish.dishDescription}</p>
          <div className="dish-wrapper dish-wrapper--footer">
            <p className="dish__price">{`${dish.dishPrice} р.`}</p>
            <button
              className="dish__to-cart"

            >В корзину</button>
          </div>
        </li>

      </React.Fragment>
    );
  }
};


Dish.propTypes = {
  dish: PropTypes.object,
  // dishId: PropTypes.number,
  // dishName: PropTypes.string,
  // dishDescription: PropTypes.string,
  // dishPrice: PropTypes.string,
  // dishWeight: PropTypes.string,
  // dishTag: PropTypes.string,
  // dishImage: PropTypes.string,
  // dishImage2x: PropTypes.string,
  MenuCategory: PropTypes.number,
}


export default Dish;
