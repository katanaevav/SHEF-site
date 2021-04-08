import React, {PureComponent} from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import PropTypes from "prop-types";


class MenuGroupNavigator extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {

    const {groupId, groupName} = this.props;

    return (
      <React.Fragment>

         <section className="menu-group-navigator" id={groupId}>
          <h2 className="menu-group-navigator__header">{groupName}</h2>
          <ScrollContainer className="menu-group-navigator__wrapper"
            hideScrollbars = {false}
          >
            <ul className="menu-group-navigator__list">

              <li className="menu-group-navigator__item dish">
                <div className="dish-wrapper dish-wrapper--head">
                  <p className="dish-weight">250 гр.</p>
                  <p className="dish-tag">NEW</p>
                </div>
                <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                <div className="dish__counter select-count">
                  <button className="select-count__button select-count__button--dec">-</button>
                  <input className="select-count__input" type="number" defaultValue="1" />
                  <button className="select-count__button select-count__button--inc">+</button>
                </div>
                <h3 className="dish__header">Анатомия вкуса</h3>
                <p className="dish__description">
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                </p>
                <div className="dish-wrapper dish-wrapper--footer">
                  <p className="dish__price">250 р.</p>
                  <button className="dish__to-cart">В корзину</button>
                </div>
              </li>

              <li className="menu-group-navigator__item dish">
                <div className="dish-wrapper dish-wrapper--head">
                  <p className="dish-weight">300 гр.</p>
                  <p className="dish-tag">HOT</p>
                </div>
                <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                <div className="dish__counter select-count">
                  <button className="select-count__button select-count__button--dec">-</button>
                  <input className="select-count__input" type="number" defaultValue="1" />
                  <button className="select-count__button select-count__button--inc">+</button>
                </div>
                <h3 className="dish__header">Суп Харчо с бараниной</h3>
                <p className="dish__description">
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                </p>
                <div className="dish-wrapper dish-wrapper--footer">
                  <p className="dish__price">350 р.</p>
                  <button className="dish__to-cart">В корзину</button>
                </div>
              </li>

              <li className="menu-group-navigator__item dish">
                <div className="dish-wrapper dish-wrapper--head">
                  <p className="dish-weight">350 гр.</p>
                </div>
                <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                <div className="dish__counter select-count">
                  <button className="select-count__button select-count__button--dec">-</button>
                  <input className="select-count__input" type="number" defaultValue="1" />
                  <button className="select-count__button select-count__button--inc">+</button>
                </div>
                <h3 className="dish__header">Борщ на говядине</h3>
                <p className="dish__description">
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                </p>
                <div className="dish-wrapper dish-wrapper--footer">
                  <p className="dish__price">290 р.</p>
                  <button className="dish__to-cart">В корзину</button>
                </div>
              </li>

              <li className="menu-group-navigator__item dish">
                <div className="dish-wrapper dish-wrapper--head">
                  <p className="dish-weight">350 гр.</p>
                </div>
                <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                <div className="dish__counter select-count">
                  <button className="select-count__button select-count__button--dec">-</button>
                  <input className="select-count__input" type="number" defaultValue="1" />
                  <button className="select-count__button select-count__button--inc">+</button>
                </div>
                <h3 className="dish__header">Солянка</h3>
                <p className="dish__description">
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                </p>
                <div className="dish-wrapper dish-wrapper--footer">
                  <p className="dish__price">210 р.</p>
                  <button className="dish__to-cart">В корзину</button>
                </div>
              </li>

              <li className="menu-group-navigator__item dish">
                <div className="dish-wrapper dish-wrapper--head">
                  <p className="dish-weight">320 гр.</p>
                  <p className="dish-tag">%</p>
                </div>
                <img className="dish__image" src="./img/dish.png" srcSet="./img/dish@2x.png 2x" alt="Анатомия вкуса" />
                <div className="dish__counter select-count">
                  <button className="select-count__button select-count__button--dec">-</button>
                  <input className="select-count__input" type="number" defaultValue="1" />
                  <button className="select-count__button select-count__button--inc">+</button>
                </div>
                <h3 className="dish__header">Лапша домашняя</h3>
                <p className="dish__description">
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                  Описание блюда Описание блюда
                </p>
                <div className="dish-wrapper dish-wrapper--footer">
                  <p className="dish__price">170 р.</p>
                  <button className="dish__to-cart">В корзину</button>
                </div>
              </li>


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
}


export default MenuGroupNavigator;
