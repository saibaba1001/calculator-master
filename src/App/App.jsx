import React, { Component, useEffect } from "react";
import "./App.css";
import OperatorsNumSection from "./operators-num-section/operators-num-section.jsx";

class CalculatorApp extends Component {
  state = {
    value: "0",
  };

  ButtonPressed = (btn) => {
    if (btn === "=") {
      this.state.value = this.state.value[0] == "0" ? this.state.value.slice(1) : this.state.value
      this.setState({
        value: eval(this.state.value),
      });
    } else if (btn === "AC") {
      this.setState({
        value: "",
      });
    } else if (btn === "CE") {
      this.setState({
        value: this.state.value.slice(0, -1),
      });
    } else {
      if (this.state.value.length == 1 && this.state.value == 0) {
        this.setState({
          value: 0
        });
      } else {
        this.setState({
          value: this.state.value + btn,
        });
      }
    }
  };
  
  render() {
    return (
      <div className="calculator-app">
        <div className="result-section">
          <h1> {this.state.value} </h1>
        </div>
        <OperatorsNumSection onClick={this.ButtonPressed} />
      </div>
    );
  }
}

export default CalculatorApp;
