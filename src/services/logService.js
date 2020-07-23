import Raven from "raven-js";

function init() {
  Raven.config(process.env.REACT_APP_SENTRY_DSN, {
    release: "1-0-0",
    environment: "production",
  }).install();

  return;
}

function log(err) {
  Raven.captureException(err);
}

export default {
  init,
  log,
};
