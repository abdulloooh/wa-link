import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import * as serviceWorker from "./serviceWorker";
import Top from "./top";
import logger from "./services/logService";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
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
serviceWorker.register();
