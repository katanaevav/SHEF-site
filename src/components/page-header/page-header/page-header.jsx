import React from "react";


const PageHeader = (props) => {

  return (
    <React.Fragment>

      <header className="page-header">
        <div className="page-header__wrapper">
          <button className="page-header__mobile-menu-button" href="#" >
            <img className="page-header__mobile-menu-button-image" src="./img/burger-button.svg" width="28" height="25" alt="Меню" />
          </button>

          <a className="page-header__logo">
            <img className="page-header__logo-image" src="./img/logo-small.png" srcSet="./img/logo-small@2x.png 2x" width="107" height="44" alt="Логотип" />
          </a>

          <nav className="page-header__nav main-nav">
            <ul className="main-nav__menu main-menu">
              <li className="main-menu__item">
                <a href="#" title="Заказ еды">Заказ&nbsp;еды</a>
                <ul className="main-menu__sub-menu sub-menu">
                  <li className="sub-menu__item"><a href="catering.html" title="Кейтеринг">Кейтеринг</a></li>
                  <li className="sub-menu__item"><a href="online-cooking.html" title="Онлайн кулинария">Онлайн&nbsp;кулинария</a></li>
                  <li className="sub-menu__item"><a href="foods.html" title="Заказ продуктов">Заказ&nbsp;продуктов</a></li>
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

          <a className="page-header__phone" href="tel:+79953014090">+7 995 301 40 90</a>

          <a className="page-header__basket" href="#">0 р. <img className="page-header__basket-image" src="./img/shopping-basket.svg" width="25" height="22" alt="Корзина" /></a>
        </div>

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

      </header>

    </React.Fragment>
  );
};


export default PageHeader;
