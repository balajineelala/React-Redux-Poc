import React, { Component } from "react";

class EventHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Initial data on component load...",
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ data: "Data updated after event triggering..." });
  }
  render() {
    const { buttonName } = this.props;
    return (
      <div>
        <h4>{this.state.data}</h4>
        <button onClick={this.updateState}>{buttonName}</button>
      </div>
    );
  }
}
export default EventHandler;
