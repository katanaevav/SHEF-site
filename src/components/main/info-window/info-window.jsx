import React, {PureComponent} from "react";
import ReactModal from 'react-modal';
import PropTypes from "prop-types";


ReactModal.setAppElement('.site-container');

  class InfoWindow extends PureComponent {
    constructor(props) {
      super(props);
    }


    render() {
      const {openState, onCloweModalWindow, headerText, bodyText, buttonText} = this.props;

      return (
        <React.Fragment>
          <ReactModal
            isOpen={openState}
            contentLabel={`Связаться с нами`}
            onRequestClose={this._closeModalWindowHandler}
            className="info-window__wrapper"
            overlayClassName="info-window__overlay"
          >

            <img className="info-window__image" src="./img/check.png" srcSet="./img/check.png 2x" alt="OK" height="80" width="80" />
            <h2 className="info-window__header">{headerText}</h2>
            <p className="info-window__text">{bodyText}</p>
            <button className="info-window__button" onClick={onCloweModalWindow}>{buttonText}</button>

          </ReactModal>
        </React.Fragment>
      );
    }
};


InfoWindow.propTypes = {
  openState: PropTypes.bool.isRequired,
  onCloweModalWindow: PropTypes.func.isRequired,
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  buttonText: PropTypes.string,
};


export default InfoWindow;
