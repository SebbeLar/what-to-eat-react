import React from 'react';
import { shallow, mount } from 'enzyme';
import IngredientContainer from '../IngredientContainer';

describe('Test to see Jest is working', () => {
  test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
  });
  test('renders without crashing', () => {
    mount(<IngredientContainer/>);
  });
});

describe('checkUniqEntry', () => {
  test('state value "Food"', () => {
    const wrapper = shallow(<IngredientContainer ingredients={[{name: 'Food'}]}/>);
    wrapper.setState({value: 'Food'});
    const actual = wrapper.instance().checkUniqEntry();

    expect(actual).toBe(false);
  });
  test('state value "Apples"', () => {
    const wrapper = shallow(<IngredientContainer ingredients={[{name: 'Food'}]}/>);
    wrapper.setState({value: 'Apples'});
    const actual = wrapper.instance().checkUniqEntry();

    expect(actual).toBe(true);
  });
  test('state value "food"', () => {
    const wrapper = shallow(<IngredientContainer ingredients={[{name: 'Food'}]}/>);
    wrapper.setState({value: 'food'});
    const actual = wrapper.instance().checkUniqEntry();

    expect(actual).toBe(false);
  });
});
