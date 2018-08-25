import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card.js";
import Form from "./Form.js";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      Fullname: "",
      ValidThru: ""
    };
    this.OnChangeCardNumber = this.OnChangeCardNumber.bind(this);
    this.OnChangeName = this.OnChangeName.bind(this);
    this.OnChangeValidThru = this.OnChangeValidThru.bind(this);
  }

  OnChangeCardNumber(event) {
    let cardNumber = event.target.value;
    this.setState({ cardNumber: cardNumber });
  }

  OnChangeName(event) {
    let Fullname = event.target.value;
    this.setState({ Fullname: Fullname });
  }

  OnChangeValidThru(event) {
    let ValidThru = event.target.value;
    this.setState({ ValidThru: ValidThru });
    if (ValidThru.length == 2) {
      this.setState({ ValidThru: ValidThru + "/" });
    }
  }

  render() {
    return (
      <div className="App">
        <Card
          cardNumber={this.state.cardNumber}
          ChangeNbr={this.OnChangeCardNumber}
          Fullname={this.state.Fullname}
          ChangeName={this.OnChangeName}
          ValidThru={this.state.ValidThru}
          ChangeValid={this.OnChangeValidThru}
        />
        <Form
          cardNumber={this.state.cardNumber}
          ChangeNbr={this.OnChangeCardNumber}
          Fullname={this.state.Fullname}
          ChangeName={this.OnChangeName}
          ValidThru={this.state.ValidThru}
          ChangeValid={this.OnChangeValidThru}
        />
      </div>
    );
  }
}

export default App;
