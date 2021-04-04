import React from "react";


const PageHeaderMobileMenu = (props) => {

  return (
    <React.Fragment>

      <div className="page-header__mobile-menu mobile-menu">
        <nav className="mobile-menu__mobile-nav mobile-nav">
          <ul className="mobile-nav__menu ">
            <li className="mobile-nav__item">
              <a href="catering.html" title="Бизнесу">Кейтеринг</a>
            </li>
            <li className="mobile-nav__item">
              <a href="online-cooking.html" title="Бизнесу">Онлайн&nbsp;кулинария</a>
            </li>
            <li className="mobile-nav__item">
              <a href="foods.html" title="Бизнесу">Заказ&nbsp;продуктов</a>
            </li>
            <li className="mobile-nav__item">
              <a href="#" title="Бизнесу">Доставка&nbsp;еды</a>
            </li>
            <li className="mobile-nav__item">
              <a href="#" title="О нас">Стань&nbsp;партнером</a>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu__mobile-apps">
          <a className="mobile-menu__mobile-app" href="#">
            <img className="mobile-menu__mobile-app-image" src="./img/app-store.png" srcSet="./img/app-store@2x.png 2x" width="142" height="48" alt="Скачать в App Store" />
          </a>
          <a className="mobile-menu__mobile-app" href="#">
            <img className="mobile-menu__mobile-app-image" src="./img/google-play.png" srcSet="./img/google-play@2x.png 2x" width="160" height="48" alt="Скачать в Google Play" />
          </a>
        </div>

        <a className="mobile-menu__mobile-phone" href="tel:+79953014090">+7 995 301 40 90</a>

        <a className="mobile-menu__mobile-jscorp" href="#"><img className="mobile-menu__mobile-jscorp-image" src="./img/jscorp-logo.svg" width="63" height="63" alt="JSCorp" /></a>
      </div>

    </React.Fragment>
  );
};


export default PageHeaderMobileMenu;
