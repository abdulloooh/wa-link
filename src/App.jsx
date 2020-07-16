import React, { Component } from "react";
import Info from "./component/info";
import ClickToCopy from "./component/button";
import Details from "./component/details";
import { copyText } from "./utilities/copyText";
import "./App.css";

class App extends Component {
  state = {
    number: "",
    message: "",
    showInfo: false,
  };
  render() {
    const { number, message, showInfo } = this.state;
    return (
      <div className="App App-header">
        <main className="container">
          {showInfo ? <Info /> : null}
          <Details
            number={number}
            message={message}
            onNumberChange={this.handleNumber}
            onMessageChange={this.handleMessage}
          />
          <ClickToCopy handleClick={this.generateLink} />
        </main>
      </div>
    );
  }

  handleNumber = (num) => {
    if (typeof num === "string" || num instanceof String) {
      let number = num.split(" ").join(""); //in case of space
      this.setState({ number });
    }
  };

  handleMessage = (message) => {
    if (typeof message === "string" || message instanceof String)
      this.setState({ message });
  };

  generateLink = () => {
    let { number, message } = this.state;
    let processedNumber = this.formatNumber(number);

    copyText(this.formatLink(processedNumber, message));
  };

  formatNumber = (number) => {
    if (number[0] === "0" && number.length === 11) {
      //Nigeria number with format starting with "0"
      let processNumber = number.split("");
      processNumber[0] = "234";
      return processNumber.join("");
    } else {
      return number;
    }
  };

  formatLink = (number, message) => {
    return message
      ? `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
          message
        )}`
      : `https://wa.me/${number}`;
  };
}

export default App;
