import React from "react";
import { shallow } from "enzyme";
import ArticlesList from "./ArticlesList";
import { checkPropTypes } from "prop-types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    articles: "articles",
    id: "id1",
  }),
  useRouteMatch: () => ({ url: "/articles/id1" }),
}));

describe("ArticlesList", () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      articles: [],
    };
    wrapper = shallow(<ArticlesList {...props} />);
  });

  it("render component without errors", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("render having props", () => {
    props = {
      articles: [
        {
          id: "test id",
          title: "test title",
          body: "test body",
          userId: "test userId",
        },
      ],
    };
    const component = shallow(<ArticlesList {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("render having no data", () => {
    props = {
      articles: [],
    };
    const component = shallow(<ArticlesList {...props} />);
    expect(component).toMatchSnapshot();
  });

  //checking for PropTypes
  describe("checking PropTypes", () => {
    it(" should not throw a warning", () => {
      const expectedProps = {
        articles: [],
      };

      const propsError = checkPropTypes(
        ArticlesList.propTypes,
        expectedProps,
        "props",
        ArticlesList.name
      );
      expect(propsError).toBeUndefined();
    });
  });
});
