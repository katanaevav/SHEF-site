import React from "react";


const PageHeaderNav = (props) => {

  return (
    <React.Fragment>

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

    </React.Fragment>
  );
};


export default PageHeaderNav;
