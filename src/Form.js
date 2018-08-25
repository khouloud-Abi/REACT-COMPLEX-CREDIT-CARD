import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.OnChangeNumber = this.OnChangeNumber.bind(this);
    this.OnChangeFullname = this.OnChangeFullname.bind(this);
    this.OnChangeValidity = this.OnChangeValidity.bind(this);
  }

  OnChangeNumber(event) {
    this.props.ChangeNbr(event);
  }

  OnChangeFullname(event) {
    this.props.ChangeName(event);
  }

  OnChangeValidity(event) {
    this.props.ChangeValid(event);
  }

  render() {
    return (
      <form>
        <input
          type="number"
          placeholder="Card Number"
          value={this.props.cardNumber}
          onChange={this.OnChangeNumber}
          title="The card number has a length of 16 characters"
        />
        <input
          placeholder="Valid TRHU"
          value={this.props.ValidThru}
          onChange={this.OnChangeValidity}
        />
        <input
          type="text"
          placeholder="Name"
          value={this.props.Fullname}
          onChange={this.OnChangeFullname}
          title="The name has a maximum length of 20 characters"
          maxLength="20"
        />
      </form>
    );
  }
}

export default Form;
