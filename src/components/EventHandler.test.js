import React from "react";
import { shallow, mount } from "enzyme";
import EventHandler from "./EventHandler";

describe("EventHandler component", () => {
  //find button in the component
  it("Expects to find button HTML element in the DOM", () => {
    const wrapper = mount(<EventHandler buttonName="test button" />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  //simulate button click event
  it("simulate button click event", () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <EventHandler onClick={mockCallBack}>Test Update</EventHandler>
    );
    wrapper.find("button").simulate("click");
    const text = wrapper.find("h4").text();
    expect(text).toEqual("Data updated after event triggering...");
  });

  //method called or not generating snapshot
  it("updateState method as expected", () => {
    const component = shallow(<EventHandler />);
    const classInstance = component.instance();
    classInstance.updateState();
    const newState = classInstance.state.data;
    expect(newState).not.toBe(null);
    expect(component).toMatchSnapshot();
  });
});
