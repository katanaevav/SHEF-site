import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

import {AppRoute} from "../../const.js";


class RedirectComponent extends PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.setAppStates(true, this.props.payStatus)
    console.log(this.props.setStatus);
    if (this.props.setStatus) {
      this.props.setStatus(true);
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
}

export default RedirectComponent;
