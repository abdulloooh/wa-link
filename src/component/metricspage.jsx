import React, { Component } from "react";
import { Link } from "react-router-dom";
import metrics from "../services/metricService";
import "../metrics.css";

class MetricsPage extends Component {
  state = { metric: "" };
  render() {
    const { metric } = this.state;
    return (
      <div className="metrics">
        {metric ? (
          <p>
            <span role="img" aria-label="graphemoji">
              📈{" "}
            </span>
            {metric} total links generated
          </p>
        ) : (
          <p>Fetching...</p>
        )}
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  componentDidMount = async () => {
    const { data } = await metrics.fetch();
    this.setState({ metric: data.value });
  };
}

export default MetricsPage;
