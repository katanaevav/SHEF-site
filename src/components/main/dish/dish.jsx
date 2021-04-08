import React, {PureComponent} from "react";
import PropTypes from "prop-types";


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

    const {dishNmae, dishDescription, dishPrice, dishWeight, dishTag} = this.props;

    return (
      <React.Fragment>

        <li className="menu-group-navigator__item dish">
          <div className="dish-wrapper dish-wrapper--head">
            <p className="dish-weight">{dishWeight}</p>
            {dishTag !== `` ? this._renderTag(dishTag) : ``}
          </div>
          <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
          <div className="dish__counter select-count">
            <button className="select-count__button select-count__button--dec">-</button>
            <input className="select-count__input" type="number" defaultValue="1" />
            <button className="select-count__button select-count__button--inc">+</button>
          </div>
          <h3 className="dish__header">{dishNmae}</h3>
          <p className="dish__description">{dishDescription}</p>
          <div className="dish-wrapper dish-wrapper--footer">
            <p className="dish__price">{dishPrice}</p>
            <button className="dish__to-cart">В корзину</button>
          </div>
        </li>

      </React.Fragment>
    );
  }
};


Dish.propTypes = {
  dishNmae: PropTypes.string,
  dishDescription: PropTypes.string,
  dishPrice: PropTypes.string,
  dishWeight: PropTypes.string,
  dishTag: PropTypes.string,
}


export default Dish;
