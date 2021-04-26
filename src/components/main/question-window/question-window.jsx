import React, {PureComponent} from "react";
import ReactModal from 'react-modal';
import PropTypes from "prop-types";


ReactModal.setAppElement('.site-container');

class QuestionWindow extends PureComponent {
  constructor(props) {
    super(props);

    this._closeModalWimdowWithYesHandler = this._closeModalWimdowWithYesHandler.bind(this);
    this._closeModalWimdowWithNoHandler = this._closeModalWimdowWithNoHandler.bind(this);
  }


  _closeModalWimdowWithYesHandler() {
    const {onCloweModalWindow} = this.props;

    onCloweModalWindow(1);
  }

  _closeModalWimdowWithNoHandler() {
    const {onCloweModalWindow} = this.props;

    onCloweModalWindow(0);
  }

  render() {
    const {openState, headerText, bodyText, yesButtonText, noButtonText} = this.props;

    return (
      <React.Fragment>
        <ReactModal
          isOpen={openState}
          contentLabel={`Связаться с нами`}
          onRequestClose={this._closeModalWimdowWithNoHandler}
          className="question-window__wrapper"
          overlayClassName="question-window__overlay"
        >

          <h2 className="question-window__header">{headerText}</h2>
          <p className="question-window__text">{bodyText}</p>
          <div className="question-window__button-wrapper">
            <button className="question-window__button" onClick={this._closeModalWimdowWithYesHandler}>{yesButtonText}</button>
            <button className="question-window__button question-window__button--red" onClick={this._closeModalWimdowWithNoHandler}>{noButtonText}</button>
          </div>

        </ReactModal>
      </React.Fragment>
    );
  }
};


QuestionWindow.propTypes = {
  openState: PropTypes.bool.isRequired,
  onCloweModalWindow: PropTypes.func.isRequired,
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  yesButtonText: PropTypes.string,
  noButtonText: PropTypes.string,
};


export default QuestionWindow;
