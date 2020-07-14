import React from 'react';
import Users from './Users';
import promise from "redux-promise-middleware";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from 'enzyme'
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk, promise]);

jest.mock("axios");

const initialState = {users : {users: []}}
let store,wrapper 

describe('Users container unit testing',()=>{
   beforeEach(()=>{
    store = mockStore(initialState)
    wrapper = mount((<Provider store={store}><Users /></Provider>))
   })

   //Snap Shot Testing for Connected Components
  it('Users container snapshot testing',()=>{
      expect(wrapper).toMatchSnapshot();
  });

  //checking header h1
  it('contains header - h1', () => {
    expect(wrapper.contains(<h1>User List</h1>)).not.toBe(null)
});

});