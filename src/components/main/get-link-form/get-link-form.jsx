import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import InfoWindow from "../info-window/info-window.jsx";


class GetLinkForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showInfoWindow: false,
    };

    this.checkPolicy = React.createRef();

    this._submitHandler = this._submitHandler.bind(this);
    this._custonValidityCheckboxHandler = this._custonValidityCheckboxHandler.bind(this);

    this._openInfoWindowHandle = this._openInfoWindowHandle.bind(this);
    this._closeInfoWindowFormHandle = this._closeInfoWindowFormHandle.bind(this);
  }


  _submitHandler(evt) {
    evt.preventDefault();

    this._openInfoWindowHandle();

    evt.target.reset();
  }

  _custonValidityCheckboxHandler(evt) {
    !this.checkPolicy.current.checked ? evt.target.setCustomValidity(`Необходимо принять политику конфиденциальности`) : evt.target.setCustomValidity(``);
  }


  _openInfoWindowHandle() {
    this.setState({ showInfoWindow: true });
  }

  _closeInfoWindowFormHandle() {
    this.setState({ showInfoWindow: false });
  }


  render() {
    const {isFooter} = this.props;

    return (
      <React.Fragment>

        <form
          className={isFooter ? `section-connect__form` : `header__form get-link-form`}
          method="POST"
          action="https://echo.htmlacademy.ru"
          onSubmit={this._submitHandler}
        >
          <p
            className={isFooter ? `section-connect__form-title` : `get-link-form__title`}
          >
            Отправим вам ссылку на наше приложение
          </p>
          <div className={isFooter ? `section-connect__form-input-wrapper` : `get-link-form__input-wrapper`}>
            <input
              className={isFooter ? `section-connect__form-input-email` : `get-link-form__input-email`}
              type="email"
              placeholder="Email"
              name="e-mail"
              required
            />
            <input
              className={isFooter ? `section-connect__form-button` : `get-link-form__button`}
              type="submit"
              value="Получить ссылку"
            />
          </div>
          <div className={isFooter ? `section-connect__form-input-wrapper` : `get-link-form__input-wrapper`}>
            <input
              className={isFooter ? `section-connect__form-checkbox` : `get-link-form__checkbox`}
              type="checkbox"
              id="check-policy"
              name="accept-policy"
              value="yes"
              ref={this.checkPolicy}
              required
              onInvalid={this._custonValidityCheckboxHandler}
              onChange={this._custonValidityCheckboxHandler}
            />
            <label
              className={isFooter ? `section-connect__form-checkbox-label` : `get-link-form__checkbox-label`}
              htmlFor="check-policy"
            >
              согласен с условиями
              <a href="#"> Политики конфиденциальности</a>
            </label>
          </div>
        </form>


        <InfoWindow
          openState = {this.state.showInfoWindow}
          onCloweModalWindow = {this._closeInfoWindowFormHandle}
          headerText = {`Ваша заявка принята`}
          bodyText = {`В ближайшее время вы полчучите письмо на указанную электронную почту`}
          buttonText = {`Хорошо`}
        />

      </React.Fragment>
    );
  }
};


GetLinkForm.propTypes = {
  isFooter: PropTypes.bool.isRequired,
}

export default GetLinkForm;
