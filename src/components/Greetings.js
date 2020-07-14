import React, { Component } from "react";
import PropTypes from "prop-types";

class Greetings extends Component {
  render() {
    const { name } = this.props;
    return <h1>{name}</h1>;
  }
}

Greetings.propTypes = {
  name: PropTypes.string,
};

Greetings.displayName = "Greetings";
export default Greetings;
