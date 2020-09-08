import React, { Component } from "react";
import { toast } from "react-toastify";
import Spinner from "./component/common/spinner";
import { Form, Button, FormControl } from "react-bootstrap";
import Info from "./component/info";
import Details from "./component/details";
import CustomButton from "./component/common/button";
import Footer from "./component/footer";
import metrics from "./services/metricService";
import { copyText } from "./services/copyToClipBoard";
import http from "./services/httpService";
import "./App.css";
import "./footer.css";

class App extends Component {
  state = {
    number: "",
    message: "",
    showInfo: true,
    loading: false,
  };

  componentDidMount = () => {
    try {
      const showInfo = localStorage.getItem("wa-link-info");
      if (showInfo === "hidden") this.setState({ showInfo: false });
    } catch (err) {}
  };

  render() {
    const { number, message, showInfo, linkAvailable, loading } = this.state;
    return (
      <>
        <div className="App App-header">
          <main className="container">
            {showInfo ? (
              <React.Fragment>
                <Info />
                <div>
                  <CustomButton
                    handleClick={this.dismissForever}
                    value="Dismiss this info forever"
                  />
                  <CustomButton
                    handleClick={this.dismiss}
                    value="Let's get down to business"
                  />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {" "}
                <Details
                  number={number}
                  message={message}
                  onNumberChange={this.handleNumber}
                  onMessageChange={this.handleMessage}
                  generateLink={this.generateLink}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                />
                <div style={{ textAlign: "center" }}>
                  <Spinner loading={loading} />
                  {linkAvailable && (
                    <Form inline style={{ marginTop: "20px" }}>
                      <FormControl
                        value={linkAvailable || ""}
                        onFocus={this.handleFocus}
                        style={{ height: "20px", width: "200px" }}
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        readOnly
                      />
                      <Button
                        style={{ height: "26px", textAlign: "center" }}
                        variant="outline-info"
                        onClick={() => copyText(linkAvailable)}
                      >
                        Copy Link
                      </Button>
                    </Form>
                  )}
                </div>
              </React.Fragment>
            )}
          </main>
        </div>
        {!showInfo && <Footer />}
      </>
    );
  }

  handleFocus = () => {
    document.getElementsByClassName("footer")[0].style.display = "none";
  };
  handleBlur = () => {
    setTimeout(() => {
      if (!document.hasFocus())
        document.getElementsByClassName("footer")[0].style.display = "block";
    }, 1000);
  };

  dismiss = () => {
    window.scrollTo(0, 0);
    this.setState({ showInfo: false });
  };

  dismissForever = () => {
    window.scrollTo(0, 0);
    try {
      localStorage.setItem("wa-link-info", "hidden");
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

  generateLink = async () => {
    this.setState({ loading: true });
    let { number, message } = this.state;
    let processedNumber = this.formatNumber(number);
    if (!processedNumber) {
      toast.error("C'mon 😠 , nothing to copy");
      this.setState({ loading: false });
      return;
    }
    try {
      var { data } = await this.formatLink(processedNumber, message, "yes");
    } catch (error) {
      data = this.formatLink(processedNumber, message, "no");
    }

    if (data) {
      window.navigator.vibrate(100);
      this.setState({ loading: false });
      this.setState({ linkAvailable: data.shortUrl || data });
      //update metrics record
      await metrics.record();
    } else {
      toast.error("Network Error, Try again");
    }
  };

  formatNumber = (number) => {
    if (!number) return;
    if (number[0] === "0" && number.length === 11) {
      //Nigeria number with format starting with "0"
      let processNumber = number.split("");
      processNumber[0] = "234";
      return processNumber.join("");
    } else if (number[0] === "+") {
      let processNumber = number.split("");
      processNumber.shift();
      return processNumber.join("");
    } else {
      return number;
    }
  };

  formatLink = (number, message, shouldItShort = "no") => {
    if (!number) return;
    const link = message
      ? `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
          message
        )}`
      : `https://wa.me/${number}`;

    if (shouldItShort === "yes")
      return http.post(process.env.REACT_APP_REBRANDING_API_URL, {
        destination: link,
      });
    else return link;
  };
}

export default App;
