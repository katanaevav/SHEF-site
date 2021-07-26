import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import history from "../../../history.js";

import {AppRoute, Links} from "../../../const.js";


class PageHeaderMobileMenu extends PureComponent {
  constructor(props) {
    super(props);
    this._noGlutenClickHandler = this._noGlutenClickHandler.bind(this);
    this._onlineCookingClickHandler = this._onlineCookingClickHandler.bind(this);
    this._cateringClickHandler = this._cateringClickHandler.bind(this);
    this._contactUsClickHandler = this._contactUsClickHandler.bind(this);
  }

  _noGlutenClickHandler(evt) {
    evt.preventDefault();
    history.push(AppRoute.NO_GLUTEN);
    return(this.props.burgerButtonClick());
  }

  _onlineCookingClickHandler(evt) {
    evt.preventDefault();
    history.push(AppRoute.ONLINE_COOKING);
    return(this.props.burgerButtonClick());
  }

  _cateringClickHandler(evt) {
    evt.preventDefault();
    history.push(AppRoute.CATERING);
    this.props.burgerButtonClick();
  }

  _contactUsClickHandler(evt) {
    evt.preventDefault();
    this.props.burgerButtonClick();
    this.props.openContactUsForm(evt);
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header__mobile-menu mobile-menu">
          <nav className="mobile-menu__mobile-nav mobile-nav">
            <ul className="mobile-nav__menu ">
              <li className="mobile-nav__item">
                <a
                  href={AppRoute.CATERING}
                  title="Кейтеринг"
                  onClick={this._cateringClickHandler}
                >
                  Кейтеринг
                </a>
              </li>
              <li className="mobile-nav__item">
                <a
                  href={AppRoute.ONLINE_COOKING}
                  title="Бизнесу"
                  onClick={this._onlineCookingClickHandler}
                >
                  Онлайн&nbsp;кулинария
                </a>
              </li>
              <li className="mobile-nav__item">
                <a
                  href={AppRoute.NO_GLUTEN}
                  title="Без глютена"
                  onClick={this._noGlutenClickHandler}
                >
                  Без глютена
                </a>
              </li>
              <li className="mobile-nav__item">
                <a title="Бизнесу" onClick={this._contactUsClickHandler}>Доставка&nbsp;еды</a>
              </li>
              <li className="mobile-nav__item">
                <a title="О нас" onClick={this._contactUsClickHandler}>Стань&nbsp;партнером</a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu__mobile-apps">
            <a className="mobile-menu__mobile-app" href={Links.APP_STORE_LINNK}>
              <img className="mobile-menu__mobile-app-image" src="./img/app-store.png" srcSet="./img/app-store@2x.png 2x" width="142" height="48" alt="Скачать в App Store" />
            </a>
            <a className="mobile-menu__mobile-app" href={Links.GOOGLE_PLAY_LINK}>
              <img className="mobile-menu__mobile-app-image" src="./img/google-play.png" srcSet="./img/google-play@2x.png 2x" width="160" height="48" alt="Скачать в Google Play" />
            </a>
          </div>
          <a className="mobile-menu__mobile-phone" href={Links.PHONE_LINC}>{Links.PHONE_SHOW}</a>
          <a className="mobile-menu__mobile-jscorp" href={Links.JSCORP_LINK}><img className="mobile-menu__mobile-jscorp-image" src="./img/jscorp-logo.svg" width="63" height="63" alt="JSCorp" /></a>
        </div>
      </React.Fragment>
    );
  }
};


PageHeaderMobileMenu.propTypes = {
  burgerButtonClick: PropTypes.func.isRequired,
  openContactUsForm: PropTypes.func.isRequired,
}


export default PageHeaderMobileMenu;
