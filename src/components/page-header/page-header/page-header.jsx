import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../../const.js";

import PageHeaderNav from "../page-header-nav/page-header-nav.jsx";
import PageHeaderMobileMenu from "../page-header-mobile-menu/page-header-mobile-menu.jsx";


class PageHeader extends PureComponent {
  constructor(props) {
    super(props);

    this._burgerButtonClickHandler = this._burgerButtonClickHandler.bind(this);
    // this._onMainClickHandler = this._onMainClickHandler.bind(this);
    // this._onCartClickHandler = this._onCartClickHandler.bind(this);
  }

  // _onMainClickHandler(evt) {
  //   evt.preventDefault();
  //   this.props.openMainScreen();
  // }

  // _onCartClickHandler(evt) {
  //   evt.preventDefault();
  //   this.props.openCartScreen();
  // }

  _burgerButtonClickHandler() {
    document.querySelector(`.site-container`).classList.toggle("site-container--show-mobile-menu");
  }


  render() {

    // const {totalCost, openMainScreen, openOnlineCookingScreen, openCateringScreen} = this.props;
    const {totalCost} = this.props;

    return (
      <React.Fragment>

        <header className="page-header">
          <div className="page-header__wrapper">
            <button className="page-header__mobile-menu-button" href="#" onClick={this._burgerButtonClickHandler}>
              <img className="page-header__mobile-menu-button-image" src="./img/burger-button.svg" width="28" height="25" alt="Меню" />
            </button>

            <Link
              className="page-header__logo"
              // onClick={this._onMainClickHandler}
              to={`${AppRoute.ROOT}`}
            >
              <img className="page-header__logo-image" src="./img/logo-small.png" srcSet="./img/logo-small@2x.png 2x" width="107" height="44" alt="Логотип" />
            </Link>

            <PageHeaderNav
              // openMainScreen = {openMainScreen}
              // openOnlineCookingScreen = {openOnlineCookingScreen}
              // openCateringScreen = {openCateringScreen}
            />

            <a className="page-header__phone" href="tel:+79953014090">+7 995 301 40 90</a>

            <Link
              className="page-header__basket"
              href="#"
              // onClick={this._onCartClickHandler}
              to={`${AppRoute.CART}`}
            >
              {`${totalCost} р. `} <img className="page-header__basket-image" src="./img/shopping-basket.svg" width="25" height="22" alt="Корзина" />
            </Link>
          </div>

          <PageHeaderMobileMenu
            burgerButtonClick = {this._burgerButtonClickHandler}
            // openOnlineCookingScreen = {openOnlineCookingScreen}
            // openCateringScreen = {openCateringScreen}
          />

        </header>

      </React.Fragment>
    );
  }
};


PageHeader.propTypes = {
  totalCost: PropTypes.number,
  // openMainScreen: PropTypes.func.isRequired,
  // openOnlineCookingScreen: PropTypes.func.isRequired,
  // openCateringScreen: PropTypes.func.isRequired,
  // openCartScreen: PropTypes.func.isRequired,
}


export default PageHeader;
