import React, { Component } from "react";
import "../metrics.css";
import metrics from "../services/metricService";

class MetricsPage extends Component {
  state = { metric: "" };
  render() {
    const { metric } = this.state;
    return (
      <div className="metrics">
        {metric || "<Still working on this>"} total links generated
      </div>
    );
  }

  componentDidMount = async () => {
    const { data } = await metrics.fetch();
    this.setState({ metric: data.value });
  };
}

export default MetricsPage;
