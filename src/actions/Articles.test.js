import mockAxios from "axios";
import promise from "redux-promise-middleware";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  getArticlesSuccess,
  getArticlesFailure,
  getArticles,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from "./Articles";

const mockStore = configureMockStore([thunk, promise]);

jest.mock("axios");

describe("Articles Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      articlesList: [],
    });
  });

  it("getArticles on success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: "test title",
            userId: "test userId",
            body: "test body",
          },
        ],
      })
    );

    await store.dispatch(getArticles());
    const actions = store.getActions();

    expect.assertions(3);

    expect(actions[0].type).toEqual("GET_ARTICLES_SUCCESS");
    expect(actions[0].articlesList[0].title).toEqual("test title");

    //generate snapshot
    expect(actions[0]).toMatchSnapshot();
  });

  //getArticles on failure
  it("getArticles on failure", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({
        error: "test error",
      })
    );

    await store.dispatch(getArticles());
    const actions = store.getActions();

    expect.assertions(3);
    expect(actions[0].type).toEqual("GET_ARTICLES_FAILURE");
    expect(actions[0].error).toEqual({ error: "test error" });

    //generate snapshot
    expect(actions[0]).toMatchSnapshot();
  });

  it("getArticlesSuccess called with updated data", () => {
    const store = mockStore({});

    //create a response object
    const response = {
      id: 1,
      title: "Example",
      userId: "Testing",
      body: "test body",
    };

    // Dispatch the getArticlesSuccess action
    store.dispatch(getArticlesSuccess(response));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = {
      type: GET_ARTICLES_SUCCESS,
      articlesList: response,
    };
    expect(actions[0]).toEqual(expectedPayload);

    // generate the snapshot
    expect(store.getActions()).toMatchSnapshot();
  });

  it("getArticlesFailure updated with error", () => {
    const store = mockStore({});

    //create a error object
    const error = {
      error: "error occured while processing the request",
    };

    // Dispatch the getArticlesFailure action
    store.dispatch(getArticlesFailure(error));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: GET_ARTICLES_FAILURE, error: error };
    expect(actions[0]).toEqual(expectedPayload);

    // generate the snapshot
    expect(store.getActions()).toMatchSnapshot();
  });
});
