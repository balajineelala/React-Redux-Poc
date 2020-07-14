import fetchArticleDetails from "../services/ArticleDetails.js";

export function getArticleDetails(param) {
  const path = param.match(/\d/g).join("");
  return async function getArticleDetailsThunk(dispatch) {
    try {
      const response = await fetchArticleDetails(path);
      dispatch(getArticleDetailsSuccess(response.data));
    } catch (error) {
      dispatch(getArticleDetailsFailure(error));
    }
  };
}

export const GET_ARTICLE_DETAILS_FAILURE = "GET_ARTICLE_DETAILS_FAILURE";

export function getArticleDetailsFailure(error) {
  return {
    type: GET_ARTICLE_DETAILS_FAILURE,
    error,
  };
}

export const GET_ARTICLE_DETAILS_SUCCESS = "GET_ARTICLE_DETAILS_SUCCESS";

export function getArticleDetailsSuccess(articleDetails) {
  return {
    type: GET_ARTICLE_DETAILS_SUCCESS,
    articleDetails,
  };
}
