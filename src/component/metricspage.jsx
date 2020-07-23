import React, { Component } from "react";
import { Link } from "react-router-dom";
import metrics from "../services/metricService";
import "../metrics.css";

class MetricsPage extends Component {
  state = { metric: "" };
  render() {
    const { metric } = this.state;
    return (
      metric && (
        <div className="metrics">
          <p>📈 {metric} total links generated</p>
          <Link to="/">Return Home</Link>
        </div>
      )
    );
  }

  componentDidMount = async () => {
    const { data } = await metrics.fetch();
    this.setState({ metric: data.value });
  };
}

export default MetricsPage;
