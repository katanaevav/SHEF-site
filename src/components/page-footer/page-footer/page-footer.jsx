import React from "react";


const PageFooter = (props) => {

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

                <form className="section-connect__form" method="POST" action="https://echo.htmlacademy.ru">
                  <p className="section-connect__form-title">Отправим вам ссылку на наше приложение</p>
                  <div className="section-connect__form-input-wrapper">
                    <input className="section-connect__form-input-email" type="email" placeholder="Email" name="e-mail" required />
                    <input className="section-connect__form-button" type="submit" value="Получить ссылку"/>
                  </div>
                  <div className="section-connect__form-input-wrapper">
                    <input className="section-connect__form-checkbox" type="checkbox" id="footer-check-policy" name="accept-policy" value="yes"/>
                    <label className="section-connect__form-checkbox-label" htmlFor="footer-check-policy">согласен с условиями
                      <a href="#"> Политики конфиденциальности</a>
                    </label>
                  </div>
                </form>

              </section>

              <section className="page-footer__section section-links">
                <h2 className="section-connect__header">Заказ еды</h2>
                <ul className="section-links__links">
                  <li className="section-links__link"><a href="catering.html">Кейтеринг</a></li>
                  <li className="section-links__link"><a href="online-cooking.html">Онлайн кулинария</a></li>
                  <li className="section-links__link"><a href="foods.html">Заказ продуктов</a></li>
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

          <img className="page-footer__jscorp-image" src="./img/jscorp-logo1.svg" alt="JSCorp" />

        </div>
      </footer>

    </React.Fragment>
  );
};


export default PageFooter;
