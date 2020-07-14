import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("render App without errors", () => {
    expect(wrapper).toBeDefined();
  });

  it("snapshot rendering", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders header", () => {
    const header = wrapper.find(`[data-test='headerTitle']`);
    expect(header.length).toBe(1);
  });
});
