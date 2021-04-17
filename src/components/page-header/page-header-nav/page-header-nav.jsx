import React, {PureComponent} from "react";
import PropTypes from "prop-types";


// const PageHeaderNav = (props) => {
class PageHeaderNav extends PureComponent {
  constructor(props) {
    super(props);

    this._onlineCookingClickHandler = this._onlineCookingClickHandler.bind(this);
    this._cateringClickHandler = this._cateringClickHandler.bind(this);
  }

  _onlineCookingClickHandler(evt) {
    evt.preventDefault();
    this.props.openOnlineCookingScreen();
  }

  _cateringClickHandler(evt) {
    evt.preventDefault();
    this.props.openCateringScreen();
  }

  render() {
    return (
      <React.Fragment>

        <nav className="page-header__nav main-nav">
          <ul className="main-nav__menu main-menu">
            <li className="main-menu__item">
              <a href="#" title="Заказ еды">Заказ&nbsp;еды</a>
              <ul className="main-menu__sub-menu sub-menu">
                <li className="sub-menu__item"><a href="catering.html" title="Кейтеринг" onClick={this._cateringClickHandler}>Кейтеринг</a></li>
                <li className="sub-menu__item"><a href="online-cooking.html" title="Онлайн кулинария" onClick={this._onlineCookingClickHandler}>Онлайн&nbsp;кулинария</a></li>
                {/* <li className="sub-menu__item"><a href="foods.html" title="Заказ продуктов">Заказ&nbsp;продуктов</a></li> */}
              </ul>
            </li>
            <li className="main-menu__item">
              <a href="#" title="Бизнесу">Бизнесу</a>
              <ul className="main-menu__sub-menu sub-menu">
                <li className="sub-menu__item"><a href="#" title="Доставка еды">Доставка&nbsp;еды</a></li>
                <li className="sub-menu__item"><a href="#" title="Стань партнером">Стань&nbsp;партнером</a></li>
              </ul>
            </li>
            <li className="main-menu__item">
              <a href="#" title="О нас">О&nbsp;нас</a>
            </li>
          </ul>
        </nav>

      </React.Fragment>
    );
  }
};


PageHeaderNav.propTypes = {
  totalCost: PropTypes.number,
  openMainScreen: PropTypes.func.isRequired,
  openOnlineCookingScreen: PropTypes.func.isRequired,
  openCateringScreen: PropTypes.func.isRequired,
}

export default PageHeaderNav;
