import React, {PureComponent} from "react";
import PageHeader from "../../page-header/page-header/page-header.jsx";
import PageFooter from "../../page-footer/page-footer/page-footer.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <React.Fragment>

      <PageHeader></PageHeader>

      <main className="page-main">
        <div className="page-main__wrapper">

          <section className="head">

            <div className="head__left-panel">
              <h1 className="head__header">Фабрика кухни Кирилла Еселева.<br />Готовая еда!</h1>
              <p className="head__text">Мы готовим для вас, чтобы вы могли позаботьтесь о том, что вам важно.</p>

              <form className="header__form get-link-form" method="POST" action="https://echo.htmlacademy.ru">
                <p className="get-link-form__title">Отправим вам ссылку на наше приложение</p>
                <div className="get-link-form__input-wrapper">
                  <input className="get-link-form__input-email" type="email" placeholder="Email" name="e-mail" required />
                  <input className="get-link-form__button" type="submit" value="Получить ссылку" />
                </div>
                <div className="get-link-form__input-wrapper">
                  <input className="get-link-form__checkbox" type="checkbox" id="check-policy" name="accept-policy" value="yes" />
                  <label className="get-link-form__checkbox-label" htmlFor="check-policy">согласен с условиями
                    <a href="#"> Политики конфиденциальности</a>
                  </label>
                </div>
              </form>

              <div className="head__mobile-apps">
                <a className="head__mobile-app" href="#">
                  <img className="head__mobile-app-image" src="./img/app-store.png" srcSet="./img/app-store@2x.png 2x" width="142" height="48" alt="Скачать в App Store" />
                </a>
                <a className="head__mobile-app" href="#">
                  <img className="head__mobile-app-image" src="./img/google-play.png" srcSet="./img/google-play@2x.png 2x" width="160" height="48" alt="Скачать в Google Play" />
                </a>
              </div>

            </div>

            <div className="head__right-panel">
              <img className="head__logo-image" src="./img/big-logo.png" srcSet="./img/big-logo@2x.png 2x" width="247" height="278" alt="Логотип" />
            </div>

          </section>

          <section className="links">
            <h2 className="links__header visually-hidden">Ссылки</h2>
            <ul className="links__list">

              <li className="links__item">
                <img className="links__image links__image--image1" src="./img/image1.png" srcSet="./img/image1@2x.png 2x" alt="Доставка" />
                <div className="links__item-wrapper">
                  <h3 className="links__item-header">Порционные готовые блюда</h3>
                  <p className="links__text">Доставка до 30 минут!
                    Скачайте мобильное приложение
                    и заказывайте вкусную еду из дома
                  </p>
                  <a className="links__button" href="#">Скачать приложение</a>
                </div>
              </li>

              <li className="links__item">
                <img className="links__image links__image--image2" src="./img/image2.png" srcSet="./img/image2@2x.png 2x" alt="Онлайн кулинария" />
                <div className="links__item-wrapper">
                  <h3 className="links__item-header">Онлайн кулинария</h3>
                  <p className="links__text">Доставка на следующий день.
                    Оформить заказ можно у нас
                    на сайте до  17:00 текущего дня.
                  </p>
                  <a className="links__button" href="online-cooking.html">Выбрать блюда</a>
                </div>
              </li>

              <li className="links__item">
                <img className="links__image links__image--image3" src="./img/image3.png" srcSet="./img/image3@2x.png 2x" alt="Кейтеринг" />
                <div className="links__item-wrapper">
                  <h3 className="links__item-header">Кейтеринг</h3>
                  <p className="links__text">Доставка на следующий день.
                    Оформить заказ можно у нас
                    на сайте до 15:00 текущего дня.
                  </p>
                  <a className="links__button" href="catering.html">Выбрать блюда</a>
                </div>
              </li>

              <li className="links__item">
                <img className="links__image links__image--image4" src="./img/image4.png" srcSet="./img/image4@2x.png 2x" alt="Для бизнеса" />
                <div className="links__item-wrapper">
                  <h3 className="links__item-header">Для бизнеса</h3>
                  <p className="links__text">Есть кофейня или &quot;островок&quot;
                    без кухни? Привезем готовую
                    еду по оптовым ценам!<br /><br />
                  </p>
                  <a className="links__button" href="#">Оставить заявку</a>
                </div>
              </li>

              <li className="links__item">
                <img className="links__image links__image--image5" src="./img/image5.png" srcSet="./img/image5@2x.png 2x" alt="Стань партнером" />
                <div className="links__item-wrapper">
                  <h3 className="links__item-header">Стань партнером!</h3>
                  <p className="links__text">Инвестируй в точку с<br />
                    готовой едой.<br /><br /><br />
                  </p>
                  <a className="links__button" href="#">Оставить заявку</a>
                </div>
              </li>

              <li className="links__item">
                <img className="links__image links__image--image6" src="./img/image6.png" srcSet="./img/image6@2x.png 2x" alt="Заказ продуктов" />
                <div className="links__item-wrapper">
                  <h3 className="links__item-header">Заказ продуктов</h3>
                  <p className="links__text">Доставка на следующий день.
                    Оформить заказ можно у нас
                    на сайте до 22:00 текущего дня.
                  </p>
                  <a className="links__button" href="foods.html">Выбрать продукты</a>
                </div>
              </li>

              <li className="links__item links__item--puprle">
                <img className="links__image" src="./img/image7.png" srcSet="./img/image7@2x.png 2x" width="207" height="210" alt="Local Burger" />
                <div className="links__item-wrapper">
                  <h3 className="links__item-header">Бургеры от Local Burger</h3>
                  <p className="links__text">Ты можешь заказать их<br />
                    бургеры у нас, ведь они<br />
                    наши друзья.
                  </p>
                  <a className="links__button" href="#">Скачать приложение</a>
                </div>
              </li>

            </ul>
          </section>

          <section className="about">
            <h2 className="about__header visually-hidden">О сервисе</h2>

            <article className="about__article article">
              <div className="article__head">
                <h3 className="article__header">Шеф Здесь</h3>
                <p className="article__header-text">
                  <span className="article__header-mobile">Сервис Шеф Здесь </span>
                  Самый широкий спектр кулинарных
                  возможностей, благодаря собственному
                  производству - фабрике кухни.
                </p>
              </div>
              <div className="article__data">
                <div className="article__left-side">
                  <h3 className="article__data-header">Мы доставляем:</h3>
                  <ul className="article__data-list">
                    <li className="article__data-item">Порционные блюда</li>
                    <li className="article__data-item">Кулинарию для праздника</li>
                    <li className="article__data-item">Продукты на семью</li>
                    <li className="article__data-item">Фуршеты для компании</li>
                  </ul>

                  <h3 className="article__data-header article__data-header--center">Сделать заказ можно</h3>
                  <ul className="article__data-type-list">
                    <li className="article__data-type-item">
                      <img className="article__data-type-image" src="./img/in-site.png" srcSet="./img/in-site@2x.png 2x" width="74" height="74" alt="На сайте" />
                      <p className="article__data-type-text">на сайте</p>
                    </li>
                    <li className="article__data-type-item">
                      <img className="article__data-type-image" src="./img/in-app.png" srcSet="./img/in-app@2x.png 2x" width="44" height="74" alt="В приложении" />
                      <p className="article__data-type-text">в приложении</p>
                    </li>
                  </ul>

                  <p className="article__data-founder">Основатель проекта, Шеф-повар
                    и&nbsp;телеведущий <u>Кирилл Еселев</u>.</p>

                </div>
                <img className="article__data-image" src="./img/mobile-app.png" srcSet="./img/mobile-app@2x.png 2x" width="319" height="424" alt="Мобильное приложение" />
              </div>

            </article>

            <div className="about__connect">

              <div className="about__connect-item">
                <svg className="about__connect-image" width="131" height="134" viewBox="0 0 131 134">
                  <path d="M218.891,129.428c0-23.59-29.293-42.726-65.415-42.726s-65.414,19.135-65.414,42.726a6.561,6.561,0,0,0,6.54,6.543H212.349a6.562,6.562,0,0,0,6.541-6.543ZM94.6,194.678H212.348a6.561,6.561,0,0,1,6.543,6.541v6.541a13.122,13.122,0,0,1-13.084,13.083H101.145A13.121,13.121,0,0,1,88.062,207.76v-6.541a6.56,6.56,0,0,1,6.541-6.541ZM213.657,207.76v-5.494a2.361,2.361,0,0,0-2.355-2.355H95.649a2.362,2.362,0,0,0-2.355,2.355v5.494a7.874,7.874,0,0,0,7.85,7.85H205.807a7.874,7.874,0,0,0,7.85-7.85ZM95.937,162.779V141.2h6.5V157.7h7.431v5.082Zm14.442,20.042a5.841,5.841,0,0,1-2.229,4.9,10.234,10.234,0,0,1-6.365,1.721H91.943V167.865h9.164q8.6,0,8.594,5.218a4.1,4.1,0,0,1-.542,2.073,4.918,4.918,0,0,1-1.647,1.644,6.884,6.884,0,0,1-2.43.967v.06a6.829,6.829,0,0,1,2.755.914,5.351,5.351,0,0,1,1.878,1.815,4.329,4.329,0,0,1,.664,2.266Zm-7.586-8.607q0-2-3.143-2h-1.2v4.078h1.878a2.68,2.68,0,0,0,1.776-.574,1.879,1.879,0,0,0,.691-1.5Zm.675,8.576a1.953,1.953,0,0,0-.675-1.532,2.593,2.593,0,0,0-1.789-.6H98.448v4.407h2.165a3.3,3.3,0,0,0,2.09-.6,2.015,2.015,0,0,0,.765-1.667Zm28.58-3.2q0,5.192-2.368,7.718t-7.31,2.516q-4.6,0-6.985-2.516c-1.591-1.687-2.388-4.213-2.388-7.6V167.865h1.191a76.424,76.424,0,0,0,5.341,9.824v2.257a5.615,5.615,0,0,0,.776,3.2,2.807,2.807,0,0,0,4.438.065,5.312,5.312,0,0,0,.759-3.112v-2.394a76.228,76.228,0,0,0,5.355-9.842h1.191v11.72Zm15.2,9.859-1.613-4.649a5.675,5.675,0,0,0-1.213-2.154,2.2,2.2,0,0,0-1.612-.784h-.258v7.586h-6.5V167.865h8.64q4.527,0,6.688,1.478a5.052,5.052,0,0,1,2.155,4.449,5.648,5.648,0,0,1-1.252,3.736,7.17,7.17,0,0,1-3.741,2.178v.061a5.309,5.309,0,0,1,2.282,1.369,8.421,8.421,0,0,1,1.627,2.818l2.128,5.491Zm-.617-14.733a2.249,2.249,0,0,0-.665-1.715,2.931,2.931,0,0,0-2.078-.633H142.55V177.3h1.174a2.978,2.978,0,0,0,2.1-.74,2.412,2.412,0,0,0,.8-1.85Zm29.342,13.32a13.98,13.98,0,0,1-3.642,1.235,20.672,20.672,0,0,1-4.623.552q-5.669,0-8.755-2.836t-3.084-7.949a11.846,11.846,0,0,1,1.558-6.1,10.1,10.1,0,0,1,4.384-4.048,15,15,0,0,1,6.669-1.38,24.739,24.739,0,0,1,6,.792v5.675a12.448,12.448,0,0,0-2.859-.941,15.88,15.88,0,0,0-2.995-.265,5.717,5.717,0,0,0-4.265,1.609,6.012,6.012,0,0,0-1.591,4.427,6.189,6.189,0,0,0,1.332,4.213,4.7,4.7,0,0,0,3.726,1.519,7.936,7.936,0,0,0,1.639-.122v-3.082h-4.143v-4.92h10.644v11.619Zm3.505,1.413V167.865h13.436v5.087h-6.935v3.141h6.515v5.09h-6.515v3.176h7.432v5.085Zm28.2,0-1.61-4.649a5.646,5.646,0,0,0-1.215-2.154,2.184,2.184,0,0,0-1.611-.784h-.253v7.586h-6.5V167.865h8.64q4.527,0,6.689,1.478a5.053,5.053,0,0,1,2.156,4.449,5.65,5.65,0,0,1-1.254,3.736,7.176,7.176,0,0,1-3.739,2.178v.061a5.319,5.319,0,0,1,2.28,1.369,8.422,8.422,0,0,1,1.631,2.818l2.124,5.491Zm-.614-14.733A2.26,2.26,0,0,0,206.4,173a2.944,2.944,0,0,0-2.081-.633h-1.333V177.3h1.169a2.967,2.967,0,0,0,2.1-.74,2.41,2.41,0,0,0,.8-1.85ZM152.247,162.2a18.292,18.292,0,0,1-6.184.959,12.607,12.607,0,0,1-5.945-1.315,9.024,9.024,0,0,1-3.815-3.75,11.576,11.576,0,0,1-1.313-5.6,12.3,12.3,0,0,1,1.474-6.083,10.251,10.251,0,0,1,4.163-4.113,12.924,12.924,0,0,1,6.2-1.45,21.579,21.579,0,0,1,5.419.674v6.005a7.637,7.637,0,0,0-2.154-.843,10.882,10.882,0,0,0-2.527-.3,5.659,5.659,0,0,0-4.176,1.52,5.563,5.563,0,0,0-1.526,4.122,5.475,5.475,0,0,0,1.526,4.085,5.583,5.583,0,0,0,4.084,1.5,10.6,10.6,0,0,0,4.772-1.2v5.8Zm17.668.583-.951-3.97h-6.443l-1.023,3.97h-7.023l7.432-21.574h8.071l6.992,21.574ZM165.821,145.9h-.15a11.528,11.528,0,0,1-.207,1.19q-.186.828-1.826,7.1h4.126l-1.508-5.865a18.764,18.764,0,0,1-.435-2.425Zm13.654,16.882V141.2h6.5V157.7h7.432v5.082Zm-56.953,15.347c5.725-6.792,11.053-17.026,11.01-26.106a11.011,11.011,0,1,0-22.02,0c-.044,9.08,5.285,19.313,11.011,26.106Zm0-20.525c-3.042,0-4.11-3.045-4.11-5.581,0-2.641.974-5.639,4.11-5.639s4.107,3,4.107,5.639c0,2.536-1.068,5.581-4.107,5.581Zm-9.59-36.891a2.617,2.617,0,0,1,0-5.234h0a2.614,2.614,0,0,0,2.614,2.617h0a2.618,2.618,0,0,1-2.617,2.617ZM126.447,107.2a2.617,2.617,0,1,1,0-5.234h0a2.614,2.614,0,0,0,2.614,2.617h0a2.617,2.617,0,0,1-2.617,2.617Zm54.057,0a2.617,2.617,0,1,1,0-5.234h0a2.614,2.614,0,0,0,2.614,2.617h0A2.618,2.618,0,0,1,180.5,107.2Zm-27.028,0a2.617,2.617,0,0,1,0-5.234h0a2.614,2.614,0,0,0,2.614,2.617h0a2.618,2.618,0,0,1-2.617,2.617Zm40.543,13.512a2.617,2.617,0,1,1,0-5.234h0a2.614,2.614,0,0,0,2.614,2.617h0a2.618,2.618,0,0,1-2.617,2.617Zm-27.028,0a2.617,2.617,0,1,1,0-5.234h0a2.614,2.614,0,0,0,2.614,2.617h0a2.618,2.618,0,0,1-2.617,2.617Zm-27.028,0a2.617,2.617,0,1,1,0-5.234h0a2.614,2.614,0,0,0,2.614,2.617h0a2.618,2.618,0,0,1-2.617,2.617ZM96.7,130.736c-1.644,0-3.41-.079-3.41-1.966,0-20.338,26.949-36.833,60.181-36.833s60.181,16.494,60.181,36.833c0,1.887-1.766,1.966-3.41,1.966Z" transform="translate(-88.062 -86.703)" fill="#fff" fillRule="evenodd"/>
                </svg>
                <div className="about__connect-item-wrapper">
                  <h3 className="about__connect-item-header">Бургеры от Local Burger</h3>
                  <p className="about__connect-text">Ты можешь заказать их<br />
                    бургеры у нас, ведь они<br />
                    наши друзья.
                  </p>
                  <a className="about__connect-button" href="#">Скачать приложение</a>
                </div>
              </div>


              <form className="about__form contact-form" method="POST" action="https://echo.htmlacademy.ru">
                <h2 className="contact-form__title">Связаться снами</h2>
                <input className="contact-form__input contact-form__input--text" type="text" placeholder="Ваше имя" name="name" required />
                <input className="contact-form__input contact-form__input--phone" type="phone" placeholder="+7" name="phone" required />
                <div className="contact-form__input-wrapper">
                  <input className="contact-form__checkbox" type="checkbox" id="check-policy" name="accept-policy" value="yes" />
                  <label className="contact-form__checkbox-label" htmlFor="check-policy">Принимаю условия<br />
                    <a href="#">Политики конфиденциальности</a>
                  </label>
                </div>
                <input className="contact-form__button" type="submit" value="Получить ссылку" />
              </form>

            </div>

          </section>

        </div>
      </main>

      <PageFooter></PageFooter>

      </React.Fragment>
    );
  }
};

export default Main;
