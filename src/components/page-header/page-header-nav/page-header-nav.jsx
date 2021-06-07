import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../../const.js";

import history from "../../../history.js";


class PageHeaderNav extends PureComponent {
  constructor(props) {
    super(props);

    // this._abouUsClickHandler = this._abouUsClickHandler.bind(this);
    this._getLinkToAppsClickHandler = this._getLinkToAppsClickHandler.bind(this);
  }

  _getCoords(el) {
    var box = el.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }


  // _abouUsClickHandler(evt) {
  //   evt.preventDefault();
  //   history.push(AppRoute.ROOT);
  //   window.scrollTo(this._getCoords(document.querySelector(`.section-connect`)));
  // }


  _getLinkToAppsClickHandler(evt) {
    evt.preventDefault();
    history.push(AppRoute.ROOT);
  }


  render() {
    const {openContactUsForm} = this.props;

    return (
      <React.Fragment>

        <nav className="page-header__nav main-nav">
          <ul className="main-nav__menu main-menu">
            <li className="main-menu__item">
              <a title="Заказ еды">Заказ&nbsp;еды</a>
              <ul className="main-menu__sub-menu sub-menu">
                <li className="sub-menu__item">
                  <a
                    href="#"
                    title="Порционные блюда"
                    onClick={this._getLinkToAppsClickHandler}
                  >
                      Порционные блюда
                  </a>
                </li>
                <li className="sub-menu__item">
                  <a
                    href="#"
                    title="Бургеры от Local Burger"
                    onClick={this._getLinkToAppsClickHandler}
                  >
                      Бургеры от Local Burger
                  </a>
                </li>
                <li className="sub-menu__item">
                  <Link
                    href="catering.html"
                    title="Кейтеринг"
                    to={`${AppRoute.CATERING}`}
                  >
                      Кейтеринг
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link
                    href="online-cooking.html"
                    title="Онлайн кулинария"
                    to={`${AppRoute.ONLINE_COOKING}`}
                  >
                    Онлайн&nbsp;кулинария
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link
                    href="no-gluten.html"
                    title="Без глютена"
                    to={`${AppRoute.NO_GLUTEN}`}
                  >
                    Без глютена
                  </Link>
                </li>
              </ul>
            </li>
            <li className="main-menu__item">
              <a title="Бизнесу">Бизнесу</a>
              <ul className="main-menu__sub-menu sub-menu">
                <li className="sub-menu__item"><a title="Доставка еды" onClick={openContactUsForm}>Доставка&nbsp;еды</a></li>
                <li className="sub-menu__item"><a title="Стань партнером" onClick={openContactUsForm}>Стань&nbsp;партнером</a></li>
              </ul>
            </li>
            {/* <li className="main-menu__item">
              <a title="О нас" onClick={this._abouUsClickHandler}>О&nbsp;нас</a>
            </li> */}
          </ul>
        </nav>

      </React.Fragment>
    );
  }
};


PageHeaderNav.propTypes = {
  openContactUsForm: PropTypes.func.isRequired,
}

export default PageHeaderNav;
