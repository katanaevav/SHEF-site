import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

import {AppRoute} from "../../const.js";


class RedirectComponent extends PureComponent {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(window.location.href);
    this.mesage = params.get('Message');
  }

  componentDidMount() {
    const payStatusTextTemp = this.props.payStatus ?
      `Вы совершили оплату. В ближайшее время с вами свяжется наш менеджер по указанному телефону` :
      `Оплатить не удалось: ${this.mesage}`;

    this.props.setAppStates(true, this.props.payStatus, payStatusTextTemp);

    if (this.props.setStatus) {
      this.props.setStatus(true);
      this.props.onClearCart();
    }
  }

  render() {
    return (
      <Redirect to={AppRoute.ROOT} />
    );
  }
};


RedirectComponent.propTypes = {
  setAppStates: PropTypes.func.isRequired,
  payStatus: PropTypes.bool.isRequired,
  setStatus: PropTypes.func,
  onClearCart: PropTypes.func,
}

export default RedirectComponent;
