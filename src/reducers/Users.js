import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../actions/Users.js";

const initialState = {
  users: []
};

function Users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.usersList
      };
    case GET_USERS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}

export default Users;
