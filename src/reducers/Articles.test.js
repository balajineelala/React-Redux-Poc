import Articles from "./Articles";
import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from "../actions/Articles.js";

describe("Articles reducer", () => {
  const initialState = {
    articlesList: [],
  };

  it("Articles reducer returns the initial state when an action type is not passed", () => {
    const reducer = Articles(undefined, {});
    expect(reducer).toEqual(initialState);
    expect(reducer).toMatchSnapshot();
  });

  it("Articles reducer handles GET_ARTICLES_SUCCESS as expected", () => {
    const reducer = Articles(initialState, {
      type: GET_ARTICLES_SUCCESS,
      articlesList: [
        {
          id: 1,
          title: "test title",
          userId: "test userId",
          body: "test body",
        },
      ],
    });

    expect(reducer).toEqual({
      articlesList: [
        {
          id: 1,
          title: "test title",
          userId: "test userId",
          body: "test body",
        },
      ],
    });
    expect(reducer).toMatchSnapshot();
  });

  it("Articles reducer handles GET_ARTICLES_FAILURE as expected", () => {
    const reducer = Articles(initialState, {
      type: GET_ARTICLES_FAILURE,
      error: { error: "test error" },
    });

    expect(reducer).toEqual({ error: { error: "test error" } });
    expect(reducer).toMatchSnapshot();
  });
});
