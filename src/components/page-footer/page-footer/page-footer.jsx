import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../../const.js";

import GetLinkForm from "../../main/get-link-form/get-link-form.jsx";


class PageFooter extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <React.Fragment>

        <footer className="page-footer">
          <div className="page-footer__wrapper page-footer__wrapper--0">
            <img className="page-footer__logo-image" src="./img/logo-footer.png" srcSet="./img/logo-footer@2x.png 2x" alt="Логотип" />

            <div className="page-footer__wrapper page-footer__wrapper--1">
              <div className="page-footer__wrapper page-footer__wrapper--2">
                <section className="page-footer__section section-connect">
                  <h2 className="section-connect visually-hidden">Для связи</h2>

                  <div className="section-connect__wrapper">
                    <img className="section-connect__image section-connect__image--instagram" src="./img/instagram.svg" alt="Инстаграм" />
                    <ul className="section-connect__adress">
                      <li className="section-connect__adress-item"><a href="tel:+79953014090" title="Телефон">+7 995 301 40 90</a></li>
                      <li className="section-connect__adress-item"><a href="mailto:office@jscorp.ru" title="Email">office@jscorp.ru</a></li>
                    </ul>
                  </div>

                  <GetLinkForm
                    isFooter={true}
                  />

                </section>

                <section className="page-footer__section section-links">
                  <h2 className="section-connect__header">Заказ еды</h2>
                  <ul className="section-links__links">
                    <li className="section-links__link">
                      <Link
                        href="catering.html"
                        to={`${AppRoute.CATERING}`}
                      >
                        Кейтеринг
                      </Link>
                    </li>
                    <li className="section-links__link">
                      <Link
                        href="online-cooking.html"
                        to={`${AppRoute.ONLINE_COOKING}`}
                      >
                        Онлайн кулинария
                      </Link>
                    </li>
                    {/* <li className="section-links__link"><a href="foods.html">Заказ продуктов</a></li> */}
                  </ul>
                </section>

                <section className="page-footer__section section-links">
                  <h2 className="section-connect__header">Бизнесу</h2>
                  <ul className="section-links__links">
                    <li className="section-links__link"><a href="#">Доставка еды</a></li>
                    <li className="section-links__link"><a href="#">Стань партнером</a></li>
                  </ul>
                </section>

                <section className="page-footer__section section-apps">
                  <a className="section-apps__mobile-app" href="#">
                    <img className="section-apps__mobile-app-image" src="./img/app-store.png" srcSet="./img/app-store@2x.png 2x" alt="Скачать в App Store" />
                  </a>
                  <a className="section-apps__mobile-app" href="#">
                    <img className="section-apps__mobile-app-image" src="./img/google-play.png" srcSet="./img/google-play@2x.png 2x" alt="Скачать в Google Play" />
                  </a>
                </section>
              </div>


              <ul className="page-footer__legals-list">
                <li className="page-footer__legals-item"><a href="#">Условия использования</a></li>
                <li className="page-footer__legals-item"><a href="#">Политика конфиденциальности</a></li>
                <li className="page-footer__legals-item"><a href="#">Cookies</a></li>
              </ul>

              <p className="page-footer__rights">2020-2021 Шеф Здесь. Все права защищены.</p>

            </div>

            <a href="#" className="page-footer__jscorp-link"><img className="page-footer__jscorp-image" src="./img/jscorp-logo1.svg" alt="JSCorp" /></a>

          </div>
        </footer>

      </React.Fragment>
    );
  }
};


// PageFooter.propTypes = {
//   openOnlineCookingScreen: PropTypes.func.isRequired,
//   openCateringScreen: PropTypes.func.isRequired,
// }


export default PageFooter;
