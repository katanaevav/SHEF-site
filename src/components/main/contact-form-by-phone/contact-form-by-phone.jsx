import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import InfoWindow from "../info-window/info-window.jsx";


class ContactFormByPhone extends PureComponent {
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

    this._policyLinkClickHandler = this._policyLinkClickHandler.bind(this);
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

  _policyLinkClickHandler(evt) {
    evt.preventDefault();

    this.props.openPolicyWindow();
  }

  _renderInfoWindow() {
    return(
      <InfoWindow
        openState = {this.state.showInfoWindow}
        onCloweModalWindow = {this._closeInfoWindowFormHandle}
        headerText = {`Ваша заявка принята`}
        bodyText = {`В ближайшее наши операторы свяжутся с вами по указанному телефону`}
        buttonText = {`Хорошо`}
      />
    );
  }


  render() {
    return (
      <React.Fragment>

        <form className="about__form contact-form" method="POST" action="https://echo.htmlacademy.ru" onSubmit={this._submitHandler}>
        <img className="contact-form__image" src="./img/contact-us.png" srcSet="./img/contact-us@2x.png 2x" alt="Связаться с нами" height="151" width="150" />
          <h2 className="contact-form__title">Связаться снами</h2>
          <input className="contact-form__input contact-form__input--text" type="text" placeholder="Ваше имя" name="name" required />
          <input className="contact-form__input contact-form__input--phone" type="phone" placeholder="+7" name="phone" required />
          <div className="contact-form__input-wrapper">
            <input
              className="contact-form__checkbox"
              type="checkbox"
              id="check-policy-phone"
              name="accept-policy"
              value="yes"
              required
              ref={this.checkPolicy}
              onInvalid={this._custonValidityCheckboxHandler}
              onChange={this._custonValidityCheckboxHandler}
              />
            <label className="contact-form__checkbox-label" htmlFor="check-policy-phone">Принимаю условия<br />
              <a onClick={this._policyLinkClickHandler}>Политики конфиденциальности</a>
            </label>
          </div>
          <input className="contact-form__button" type="submit" value="Получить ссылку" />
        </form>

        {this.state.showInfoWindow ? this._renderInfoWindow() : ``}

      </React.Fragment>
    );
  }
};


ContactFormByPhone.propTypes = {
  openPolicyWindow: PropTypes.func.isRequired,
}

export default ContactFormByPhone;
