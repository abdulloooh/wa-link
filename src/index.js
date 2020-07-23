import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";
import logger from "./services/logService";
import Top from "./top";
logger.init();

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <Top />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
