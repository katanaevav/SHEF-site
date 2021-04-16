import React from "react";
import ReactModal from 'react-modal';
import PropTypes from "prop-types";


ReactModal.setAppElement('.site-container');

const ContactUsModal = (props) => {

  const {openState, onCloweModalWindow} = props;

  return (
    <React.Fragment>
      <ReactModal
         isOpen={openState}
         contentLabel={`Связаться с нами`}
         onRequestClose={onCloweModalWindow}
         className="contact-us-form__wrapper"
         overlayClassName="contact-us-form__overlay"
      >

            <h2 className="contact-us-form__header">Связаться с нами</h2>

            <form className="contact-us-form__form" method="POST" action="https://echo.htmlacademy.ru">
              <input className="contact-us-form__form-input contact-us-form__form-input--name" type="text" placeholder="Ваше имя" name="name" required />
              <input className="contact-us-form__form-input contact-us-form__form-input--phone" type="text" placeholder="Ваш email или телефон" name="contact" required />

              <div className="contact-us-form__form-input-wrapper contact-us-form__form-input-wrapper--select">
                <input className="contact-us-form__form-input contact-us-form__form-input-theme" type="text" placeholder="Выберите тему" name="theme" readOnly />
                <select className="contact-us-form__form-input contact-us-form__form-input-select" size="3" name="selected-theme" required>
                  <option className="contact-us-form__form-input-select-option">Доставка для бизнеса</option>
                  <option className="contact-us-form__form-input-select-option">Стань партнером</option>
                  <option className="contact-us-form__form-input-select-option">Другое</option>
                </select>
              </div>

              <textarea className="contact-us-form__form-input contact-us-form__form-input-comment" name="comment" placeholder="Ваш комментарий"></textarea>

              <div className="contact-us-form__form-input-wrapper contact-us-form__form-input-wrapper--checkbox">
                <input className="contact-us-form__form-checkbox" type="checkbox" id="contact-check-policy" name="accept-policy" value="yes" />
                <label className="contact-us-form__form-checkbox-label" htmlFor="contact-check-policy">согласен с условиями<br />
                  <a href="#">Политики конфиденциальности</a>
                </label>
              </div>

              <input className="contact-us-form__form-button" type="submit" value="Отправить" onClick={onCloweModalWindow} />
            </form>

      </ReactModal>
    </React.Fragment>
  );
};


ContactUsModal.propTypes = {
  openState: PropTypes.bool.isRequired,
  onCloweModalWindow: PropTypes.func.isRequired,
};


export default ContactUsModal;
