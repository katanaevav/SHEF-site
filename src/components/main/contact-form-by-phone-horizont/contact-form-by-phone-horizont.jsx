import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation as DataOperation} from "../../../reducer/reducer.js";
import {SavingStatus, Links} from "../../../const.js";
import {popup} from "../../ext/popup.js";
import InfoWindow from "../info-window/info-window.jsx";


class ContactFormByPhoneHorizont extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showInfoWindow: false,
    };

    this.form = React.createRef();
    this.name = React.createRef();
    this.phone = React.createRef();
    this.checkPolicy = React.createRef();

    this._submitHandler = this._submitHandler.bind(this);
    this._custonValidityCheckboxHandler = this._custonValidityCheckboxHandler.bind(this);

    this._openInfoWindowHandle = this._openInfoWindowHandle.bind(this);
    this._closeInfoWindowFormHandle = this._closeInfoWindowFormHandle.bind(this);

    this._policyLinkClickHandler = this._policyLinkClickHandler.bind(this);
  }


  _submitHandler(evt) {
    evt.preventDefault();


    const formData = new FormData(this.form.current);
    formData.append("name", this.name.current.value);
    formData.append("phone", this.phone.current.value);

    this.props.makeRequest(formData, Links.LINK_CONSULTATION_REQUEST, (status) => {
      if (status === SavingStatus.SUCCESS) {
        this._openInfoWindowHandle();
        evt.target.reset();
      } else {
        popup(`Не удалось оставить заявку. Попробуйте позднее.`);
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
        bodyText = {`В ближайшее наши операторы свяжутся с вами по указанному телефону`}
        buttonText = {`Хорошо`}
      />
    );
  }


  render() {
    return (
      <React.Fragment>

        <form className="about__form contact-form" ref={this.form} method="POST" action="https://echo.htmlacademy.ru" onSubmit={this._submitHandler}>
          <img className="contact-form__image" src="./img/contact-us.png" srcSet="./img/contact-us@2x.png 2x" alt="Связаться с нами" height="151" width="150" />
          <div className="contact-form__input-wrapper contact-form__input-wrapper--main">
            <h2 className="contact-form__title">Оставьте заявку на консультацию</h2>
            <div className="contact-form__input-wrapper">
              <input className="contact-form__input contact-form__input--text" type="text" placeholder="Ваше имя" ref={this.name} name="name" required />
              <input className="contact-form__input contact-form__input--phone" type="phone" placeholder="+7" ref={this.phone} name="phone" required />
              <input className="contact-form__button" type="submit" value="Связаться со мной" />
            </div>
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
            <label className="contact-form__checkbox-label" htmlFor="check-policy-phone">Принимаю условия <a onClick={this._policyLinkClickHandler}>Политики конфиденциальности</a>
            </label>
            </div>
          </div>
        </form>

        {this.state.showInfoWindow ? this._renderInfoWindow() : ``}

      </React.Fragment>
    );
  }
};


ContactFormByPhoneHorizont.propTypes = {
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


// export default ContactFormByPhoneHorizont;
export {ContactFormByPhoneHorizont};
export default connect(mapStateToProps, mapDispatchToProps)(ContactFormByPhoneHorizont);
