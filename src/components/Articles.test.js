import React from "react";
import Articles from "./Articles";
import promise from "redux-promise-middleware";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { getArticles } from "../actions/Articles";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    articles: "articles",
  }),
  useRouteMatch: () => ({ url: "/articles" }),
}));

const mockStore = configureMockStore([thunk, promise]);

jest.mock("axios");

const initialState = { articles: { articlesList: [] } };
let store, wrapper;

describe("Articles hook", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Articles />
      </Provider>
    );
  });
  //Snap Shot Testing for Hook Components
  it("Articles snapshot testing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
