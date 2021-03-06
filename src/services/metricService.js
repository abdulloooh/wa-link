import http from "./httpMetricService";

function record() {
  http.post(
    `${process.env.REACT_APP_CORS_EVERYWHERE}/${process.env.REACT_APP_RECORD_API_URL}/record-whatsapp-link-metrics`
  );
}

function fetch() {
  return http.post(
    `${process.env.REACT_APP_CORS_EVERYWHERE}/${process.env.REACT_APP_RECORD_API_URL}/fetch-whatsapp-link-metrics`
  );
}

export default {
  record,
  fetch,
};
