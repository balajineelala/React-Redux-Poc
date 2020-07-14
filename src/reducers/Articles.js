import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from "../actions/Articles.js";

const initialState = {
  articlesList: [],
};

function Articles(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articlesList: action.articlesList,
      };
    case GET_ARTICLES_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

export default Articles;
