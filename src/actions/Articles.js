import fetchArticles from "../services/Articles.js";

export function getArticles() {
  return async function getArticlesThunk(dispatch) {
    try {
      const response = await fetchArticles();
      dispatch(getArticlesSuccess(response.data));
    } catch (error) {
      dispatch(getArticlesFailure(error));
    }
  };
}

export const GET_ARTICLES_FAILURE = "GET_ARTICLES_FAILURE";

export function getArticlesFailure(error) {
  return {
    type: GET_ARTICLES_FAILURE,
    error,
  };
}

export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";

export function getArticlesSuccess(articlesList) {
  return {
    type: GET_ARTICLES_SUCCESS,
    articlesList,
  };
}
