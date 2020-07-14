import {
  GET_ARTICLE_DETAILS_FAILURE,
  GET_ARTICLE_DETAILS_SUCCESS,
} from "../actions/ArticleDetails.js";

const initialState = {
  articleDetails: {},
};

function ArticleDetails(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        articleDetails: action.articleDetails,
      };
    case GET_ARTICLE_DETAILS_FAILURE:
      return {
        ...state,
        articleDetails: action.error,
      };
    default:
      return state;
  }
}

export default ArticleDetails;
