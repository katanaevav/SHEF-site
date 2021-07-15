import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute, Links} from "../../../const.js";

import PageHeaderNav from "../page-header-nav/page-header-nav.jsx";
import PageHeaderMobileMenu from "../page-header-mobile-menu/page-header-mobile-menu.jsx";


class PageHeader extends PureComponent {
  constructor(props) {
    super(props);

    this._burgerButtonClickHandler = this._burgerButtonClickHandler.bind(this);
  }


  _burgerButtonClickHandler() {
    document.querySelector(`.site-container`).classList.toggle("site-container--show-mobile-menu");
  }


  render() {
    const {totalCost, openContactUsForm, openGetLinkFormModalForm} = this.props;

    return (
      <React.Fragment>

        <header className="page-header">
          <div className="page-header__wrapper">
            <button className="page-header__mobile-menu-button" onClick={this._burgerButtonClickHandler}>
              <img className="page-header__mobile-menu-button-image" src="./img/burger-button.svg" width="28" height="25" alt="Меню" />
            </button>

            <Link
              className="page-header__logo"
              to={`${AppRoute.ROOT}`}
            >
              <img className="page-header__logo-image" src="./img/logo-small.png" srcSet="./img/logo-small@2x.png 2x" width="107" height="44" alt="Логотип" />
            </Link>

            <PageHeaderNav
              openContactUsForm = {openContactUsForm}
              openGetLinkFormModalForm = {openGetLinkFormModalForm}
            />

            <a className="page-header__phone" href={Links.PHONE_LINC}>{Links.PHONE_SHOW}</a>

            <Link
              className="page-header__basket"
              to={`${AppRoute.CART}`}
            >
              {`${totalCost} р. `} <img className="page-header__basket-image" src="./img/shopping-basket.svg" width="25" height="22" alt="Корзина" />
            </Link>
          </div>

          <PageHeaderMobileMenu
            burgerButtonClick = {this._burgerButtonClickHandler}
            openContactUsForm = {openContactUsForm}
          />

        </header>

      </React.Fragment>
    );
  }
};


PageHeader.propTypes = {
  totalCost: PropTypes.number,
  openContactUsForm: PropTypes.func.isRequired,
  openGetLinkFormModalForm: PropTypes.func.isRequired,
}


export default PageHeader;
