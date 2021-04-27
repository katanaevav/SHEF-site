import React, {PureComponent} from "react";
import ReactModal from 'react-modal';
import PropTypes from "prop-types";


ReactModal.setAppElement('.site-container');

class ContactUsModal extends PureComponent {
  constructor(props) {
    super(props);

    this.inputTheme = React.createRef();
    this.inputComment = React.createRef();

    this._custonValidityInputThemeHandler = this._custonValidityInputThemeHandler.bind(this);
    this._selectedThemeChangeHandler = this._selectedThemeChangeHandler.bind(this);

    this._closeModalWindowHandler = this._closeModalWindowHandler.bind(this);
    this._clickButtonHandler = this._clickButtonHandler.bind(this);
  }



  _custonValidityInputThemeHandler(evt) {
    evt.target.value === `` ? evt.target.setCustomValidity(`Необходимо выбрать тему`) : evt.target.setCustomValidity(``);
  }

  _selectedThemeChangeHandler(evt) {
    this.inputTheme.current.value = evt.target.value;
    this.inputComment.current.focus();
  }

  _closeModalWindowHandler() {
    const {onCloweModalWindow} = this.props;

    onCloweModalWindow(0);
  }

  _clickButtonHandler(evt) {
    const {onCloweModalWindow} = this.props;

    evt.preventDefault();

    onCloweModalWindow(1);
  }

  render() {
    const {openState, onShowPolicy} = this.props;

    return (
      <React.Fragment>
        <ReactModal
          isOpen={openState}
          contentLabel={`Связаться с нами`}
          onRequestClose={this._closeModalWindowHandler}
          className="contact-us-form__wrapper"
          overlayClassName="contact-us-form__overlay"
        >

              <h2 className="contact-us-form__header">Связаться с нами</h2>

              <form className="contact-us-form__form" method="POST" action="https://echo.htmlacademy.ru">
                <input className="contact-us-form__form-input contact-us-form__form-input--name" type="text" placeholder="Ваше имя" name="name" required />
                <input className="contact-us-form__form-input contact-us-form__form-input--phone" type="text" placeholder="Ваш email или телефон" name="contact" required />

                <div className="contact-us-form__form-input-wrapper contact-us-form__form-input-wrapper--select">
                  <input
                    className="contact-us-form__form-input contact-us-form__form-input-theme"
                    type="text"
                    ref={this.inputTheme}
                    placeholder="Выберите тему"
                    name="theme"
                    required
                    autoComplete="off"
                    // readOnly
                    onInvalid={this._custonValidityInputThemeHandler}
                    onChange={this._custonValidityInputThemeHandler}
                  />
                  <select className="contact-us-form__form-input contact-us-form__form-input-select" size="3" name="selected-theme" onClick={this._selectedThemeChangeHandler}>
                    <option className="contact-us-form__form-input-select-option">Доставка для бизнеса</option>
                    <option className="contact-us-form__form-input-select-option">Стань партнером</option>
                    <option className="contact-us-form__form-input-select-option">Другое</option>
                  </select>
                </div>

                <textarea className="contact-us-form__form-input contact-us-form__form-input-comment" name="comment" placeholder="Ваш комментарий" ref={this.inputComment}></textarea>

                <div className="contact-us-form__form-input-wrapper contact-us-form__form-input-wrapper--checkbox">
                  <input className="contact-us-form__form-checkbox" type="checkbox" id="contact-check-policy" name="accept-policy" value="yes" />
                  <label className="contact-us-form__form-checkbox-label" htmlFor="contact-check-policy">согласен с условиями<br />
                    <a onClick={onShowPolicy}>Политики конфиденциальности</a>
                  </label>
                </div>

                <input className="contact-us-form__form-button" type="submit" value="Отправить" onClick={this._clickButtonHandler} />
              </form>

        </ReactModal>
      </React.Fragment>
    );
  }
};


ContactUsModal.propTypes = {
  openState: PropTypes.bool.isRequired,
  onCloweModalWindow: PropTypes.func.isRequired,
  onShowPolicy: PropTypes.func.isRequired,
};


export default ContactUsModal;
