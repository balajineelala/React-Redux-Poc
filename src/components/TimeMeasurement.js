import React, { Component } from "react";

class TimeMeasurement extends Component {
  constructor(props) {
    // Start timing now
    console.time("onload");
    super(props);
    this.state = {
      data: "Initial data on component load...",
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ data: "Data updated after event triggering..." });
  }

  componentDidMount() {
    //console.timeEnd
    console.timeEnd("onload");
  }

  static getDerivedStateFromProps(props, state) {
    //after event trigger
    console.time("onTriggerStart");
    return {};
  }

  componentDidUpdate() {
    //console.timeEnd in DidUpdate
    console.timeEnd("onTriggerStart");
  }

  render() {
    return (
      <div>
        <h4>{this.state.data}</h4>
        <button onClick={this.updateState}>Update State</button>
      </div>
    );
  }
}
export default TimeMeasurement;
