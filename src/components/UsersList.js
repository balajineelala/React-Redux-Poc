import React, { Component } from "react";
import PropTypes from "prop-types";

class UsersList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
