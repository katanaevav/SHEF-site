import React from "react";


const PageFooterGetLinkForm = (props) => {

  return (
    <React.Fragment>

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

    </React.Fragment>
  );
};


export default PageFooterGetLinkForm;
