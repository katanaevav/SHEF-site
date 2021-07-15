import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation as DataOperation} from "../../../reducer/reducer.js";
import {SavingStatus, Links} from "../../../const.js";
import InfoWindow from "../info-window/info-window.jsx";
import {popup} from "../../ext/popup.js";


class GetLinkForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showInfoWindow: false,
    };


    this.form = React.createRef();
    this.email = React.createRef();
    this.checkPolicy = React.createRef();

    this._submitHandler = this._submitHandler.bind(this);
    this._custonValidityCheckboxHandler = this._custonValidityCheckboxHandler.bind(this);

    this._openInfoWindowHandle = this._openInfoWindowHandle.bind(this);
    this._closeInfoWindowFormHandle = this._closeInfoWindowFormHandle.bind(this);

    this._policyLinkClickHandler = this._policyLinkClickHandler.bind(this);
  }


  _submitHandler(evt) {
    evt.preventDefault();

    // Links.LINK_EMAIL_REQUESTL;

    const formData = new FormData(this.form.current);
    formData.append("email", this.email.current.value);

    this.props.makeRequest(formData, Links.LINK_EMAIL_REQUEST, (status) => {
      if (status === SavingStatus.SUCCESS) {
        this._openInfoWindowHandle();
        evt.target.reset();
      } else {
        popup(`Не удалось отпарвить сообщение. Попробуйте позднее.`);
        evt.target.reset();
      }
    });
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
        bodyText = {`В ближайшее время вы полчучите письмо на указанную электронную почту`}
        buttonText = {`Хорошо`}
      />
    );
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
          id="get-apps"
          ref={this.form}
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
              ref={this.email}
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
              id={isFooter ? `footer-check-policy` : `check-policy`}
              name="accept-policy"
              value="yes"
              ref={this.checkPolicy}
              required
              onInvalid={this._custonValidityCheckboxHandler}
              onChange={this._custonValidityCheckboxHandler}
            />
            <label
              className= {isFooter ? `section-connect__form-checkbox-label` : `get-link-form__checkbox-label`}
              htmlFor= {isFooter ? `footer-check-policy` : `check-policy`}
            >
              согласен с условиями <a onClick={this._policyLinkClickHandler}> Политики конфиденциальности</a>
            </label>
          </div>
        </form>

        {this.state.showInfoWindow ? this._renderInfoWindow() : ``}

      </React.Fragment>
    );
  }
};


GetLinkForm.propTypes = {
  isFooter: PropTypes.bool.isRequired,
  openPolicyWindow: PropTypes.func.isRequired,

  makeRequest: PropTypes.func,
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  makeRequest(formData, link, action) {
    dispatch(DataOperation.makeRequest(formData, link, action));
  },
});


// export default GetLinkForm;
export {GetLinkForm};
export default connect(mapStateToProps, mapDispatchToProps)(GetLinkForm);
