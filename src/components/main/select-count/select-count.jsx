import React, {PureComponent} from "react";
import PropTypes, { bool } from "prop-types";


class SelectCount extends PureComponent {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this._changeValueHandler = this._changeValueHandler.bind(this);
    this._addButtonClickHandler = this._addButtonClickHandler.bind(this);
    this._subButtonClickHandler = this._subButtonClickHandler.bind(this);
    this._changeValue = this._changeValue.bind(this);

    this.state = {
      value: this.props.defaultValue,
    };
  }


  _changeValue(value) {
    const {onChangeValue} = this.props;

    onChangeValue(value);
    this.inputRef.current.value = value;

    this.setState({
      value,
    });
  }

  _changeValueHandler(evt) {
    const {minValue, maxValue} = this.props;

    let newValue = Number.parseInt(evt.target.value, 10);
    newValue = (Number.isInteger(newValue) ? newValue : 1);
    newValue = (newValue >= maxValue) ? maxValue : newValue;
    newValue = (newValue <= minValue) ? minValue : newValue;
    this._changeValue(newValue);
  }

  _addButtonClickHandler() {
    const {maxValue} = this.props;
    const currentValue = this.state.value;

    const newValue = (currentValue >= maxValue) ? maxValue : currentValue + 1;

    this._changeValue(newValue);
  }

  _subButtonClickHandler() {
    const {minValue} = this.props;
    const currentValue = this.state.value;

    const newValue = (currentValue <= minValue) ? minValue : currentValue - 1;

    this._changeValue(newValue);
  }

  render() {

    const {minValue, maxValue, isWhiteBackground} = this.props;

    return (
      <React.Fragment>

{/* {`dish__counter select-count ${isWhiteBackground ? `select-count--background-white` : ``}`} */}

        {/* <div className="dish__counter select-count select-count--background-white"> */}
        <div className={`dish__counter select-count ${isWhiteBackground ? `select-count--background-white` : ``}`}>
          <button
            className="select-count__button select-count__button--dec"
            onClick = {this._subButtonClickHandler}
          >-</button>
          <input
            className="select-count__input"
            type="number"
            defaultValue = {this.state.value}
            ref = {this.inputRef}
            min = {minValue}
            max = {maxValue}
            onChange = {this._changeValueHandler}
          />
          <button
            className="select-count__button select-count__button--inc"
            onClick = {this._addButtonClickHandler}
          >+</button>
        </div>

      </React.Fragment>
    );
  }
};


SelectCount.propTypes = {
  defaultValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  isWhiteBackground: bool,
}


export default SelectCount;
