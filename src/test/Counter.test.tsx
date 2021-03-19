import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch, useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import { Counter } from './Counter';
import {
  // createDecrementAction,
  createIncrementAction,
} from '../store/CountReducer';
import { Count } from 'src/lib/types';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../store/CountReducer');
jest.mock('react-redux');
const useSelectorMock = useSelector as jest.Mock<Count>;
const useDispatchMock = useDispatch as jest.Mock;

describe('Counter.tsx', () => {
  beforeEach(() => {
    useSelectorMock.mockReturnValue({ value: 10 });
    useDispatchMock.mockReturnValue(jest.fn());
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('dispatches increment action', () => {
    const wrapper = shallow(<Counter />);

    wrapper.find(`[data-test="increment-btn"]`).simulate('click');
    expect(wrapper.find('span').text()).toBe('10');
    expect(createIncrementAction).toBeCalledTimes(1);
  });
  it('dispatches decement actioin', () => {
    const wrapper = shallow(<Counter />);

    wrapper.find(`[data-test="decrement-btn"]`).simulate('click');
    expect(wrapper.find('span').text()).toBe('10');
  });
});
