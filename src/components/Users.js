import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../actions/Users";
import UsersList from "./UsersList";

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;
    return (
      <div>
        <h1>Users List</h1>
        <UsersList users={users} />
      </div>
    );
  }
}

Users.propTypes = {
  userTitle: PropTypes.string
};

const mapStateToProps = (state) => ({
  users: state.users,
  
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
