import React, {PureComponent} from "react";
import PropTypes from "prop-types";

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

    const {totalCost} = this.props;

    return (
      <React.Fragment>

        <header className="page-header">
          <div className="page-header__wrapper">
            <button className="page-header__mobile-menu-button" href="#" onClick={this._burgerButtonClickHandler}>
              <img className="page-header__mobile-menu-button-image" src="./img/burger-button.svg" width="28" height="25" alt="Меню" />
            </button>

            <a className="page-header__logo">
              <img className="page-header__logo-image" src="./img/logo-small.png" srcSet="./img/logo-small@2x.png 2x" width="107" height="44" alt="Логотип" />
            </a>

            <PageHeaderNav></PageHeaderNav>

            <a className="page-header__phone" href="tel:+79953014090">+7 995 301 40 90</a>

            <a className="page-header__basket" href="#">{`${totalCost} р. `} <img className="page-header__basket-image" src="./img/shopping-basket.svg" width="25" height="22" alt="Корзина" /></a>
          </div>

          <PageHeaderMobileMenu></PageHeaderMobileMenu>

        </header>

      </React.Fragment>
    );
  }
};


PageHeader.propTypes = {
  totalCost: PropTypes.number,
}


export default PageHeader;
