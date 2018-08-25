import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  ThruValidation(THRU) {
    const regex = /^\d{2}[./]\d{2}$/;
    if (regex.test(THRU) == true) return THRU;
    else return "XX/YY";
  }

  HolderValidation(Fullname) {
    return Fullname.toUpperCase() || "YOUR NAME HERE";
  }

  render() {
    return (
      <div className="credit-card">
        <h1 className="company-name">Company Name</h1>
        <img
          className="chip-icon"
          src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"
        />
        <h3 className="card-number">
          {this.props.cardNumber.length == 16
            ? this.props.cardNumber
            : "....  ....   ....    ...."}
        </h3>
        <div className="card-valid">
          <p>5522</p>
          <p>
            Month/Year
            <div> {this.ThruValidation(this.props.ValidThru)}</div>
          </p>

          <img
            className="master-icon"
            src="https://www.lowestrates.ca/sites/default/files/creditcardlogos.jpg"
          />
        </div>
        <h4 className="card-holder">
          {this.HolderValidation(this.props.Fullname)}
        </h4>
      </div>
    );
  }
}
export default Card;
