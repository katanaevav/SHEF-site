import React, {PureComponent} from "react";
import ReactModal from 'react-modal';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation as DataOperation} from "../../../reducer/reducer.js";
import {SavingStatus, Links} from "../../../const.js";
import {popup} from "../../ext/popup.js";


ReactModal.setAppElement('.site-container');

class GetLinkFormModal extends PureComponent {
  constructor(props) {
    super(props);

    this.form = React.createRef();
    this.inputContact = React.createRef();
    this.checkPolicy = React.createRef();

    this._closeModalWindowHandler = this._closeModalWindowHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);

    this._custonValidityCheckboxHandler = this._custonValidityCheckboxHandler.bind(this);
  }


  _custonValidityCheckboxHandler(evt) {
    !this.checkPolicy.current.checked ? evt.target.setCustomValidity(`Необходимо принять политику конфиденциальности`) : evt.target.setCustomValidity(``);
  }


  _closeModalWindowHandler() {
    const {onCloweModalWindow} = this.props;

    onCloweModalWindow(0);
  }


  _submitHandler(evt) {
    const {onCloweModalWindow} = this.props;

    evt.preventDefault();

    const formData = new FormData(this.form.current);
    formData.append("email", this.inputContact.current.value);

    this.props.makeRequest(formData, Links.LINK_EMAIL_REQUEST, (status) => {
      if (status === SavingStatus.SUCCESS) {
        onCloweModalWindow(1);
      } else {
        popup(`Не удалось отпарвить сообщение. Попробуйте позднее.`);
        onCloweModalWindow(2);
      }
    });
  }



  render() {
    const {openState, onShowPolicy} = this.props;

    return (
      <React.Fragment>
        <ReactModal
          isOpen={openState}
          contentLabel={`Отправим вам ссылку на наше приложение`}
          onRequestClose={this._closeModalWindowHandler}
          className="get-link-form-modal__wrapper"
          overlayClassName="get-link-form-modal__overlay"
        >

              <h2 className="get-link-form-modal__header">Отправим вам ссылку на наше приложение</h2>

              <form className="get-link-form-modal__form" method="POST" action="https://echo.htmlacademy.ru" ref={this.form} onSubmit={this._submitHandler}>
                <input className="get-link-form-modal__form-input get-link-form-modal__form-input--phone" type="text" placeholder="Ваш email" ref={this.inputContact} name="contact" required />

                <div className="get-link-form-modal__form-input-wrapper get-link-form-modal__form-input-wrapper--checkbox">
                  <input
                    className="get-link-form-modal__form-checkbox"
                    type="checkbox"
                    id="contact-check-policy"
                    name="accept-policy"
                    value="yes"
                    ref={this.checkPolicy}
                    required
                    onInvalid={this._custonValidityCheckboxHandler}
                    onChange={this._custonValidityCheckboxHandler}
                  />
                  <label className="get-link-form-modal__form-checkbox-label" htmlFor="contact-check-policy">согласен с условиями<br />
                    <a onClick={onShowPolicy}>Политики конфиденциальности</a>
                  </label>
                </div>

                <input className="get-link-form-modal__form-button" type="submit" value="Отправить" />
              </form>

        </ReactModal>
      </React.Fragment>
    );
  }
};


GetLinkFormModal.propTypes = {
  openState: PropTypes.bool.isRequired,
  onCloweModalWindow: PropTypes.func.isRequired,
  onShowPolicy: PropTypes.func.isRequired,

  makeRequest: PropTypes.func,
};


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  makeRequest(formData, link, action) {
    dispatch(DataOperation.makeRequest(formData, link, action));
  },
});


// export default GetLinkFormModal;
export {GetLinkFormModal};
export default connect(mapStateToProps, mapDispatchToProps)(GetLinkFormModal);
