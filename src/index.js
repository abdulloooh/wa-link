import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";
import logger from "./services/logService";
logger.init();

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
