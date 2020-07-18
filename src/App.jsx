import React, { Component } from "react";
import Info from "./component/info";
import Button from "./component/common/button";
import Details from "./component/details";
import { copyText } from "./utilities/copyText";
import "./App.css";
import { toast } from "react-toastify";

class App extends Component {
  state = {
    number: "",
    message: "",
    showInfo: true,
  };

  componentDidMount = () => {
    try {
      // const showInfo = localStorage.getItem("wa-link-info");
      // if (showInfo === "hide") this.setState({ showInfo: false });
    } catch (err) {}
  };

  render() {
    const { number, message, showInfo } = this.state;
    return (
      <div className="App App-header">
        <main className="container">
          {showInfo ? (
            <>
              <Info />
              <Button
                handleClick={this.dismiss}
                value="Let's get down to business"
              />{" "}
              <hr />
              <Button
                handleClick={this.dismissForever}
                value="Dismiss this info forever"
              />
            </>
          ) : (
            <>
              {" "}
              <Details
                number={number}
                message={message}
                onNumberChange={this.handleNumber}
                onMessageChange={this.handleMessage}
              />
              <Button handleClick={this.generateLink} value="Generate Link" />
            </>
          )}
        </main>
      </div>
    );
  }

  dismiss = () => {
    this.setState({ showInfo: false });
  };

  dismissForever = () => {
    try {
      localStorage.setItem("wa-link-info", "hide");
      this.setState({ showInfo: false });
    } catch (error) {
      toast.error(
        "Ugh 😟 Unsupported browser but don't fret, you can still get down to business"
      );
    }
  };

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
    if (!number) return;
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
    if (!number) return;
    return message
      ? `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
          message
        )}`
      : `https://wa.me/${number}`;
  };
}

export default App;
