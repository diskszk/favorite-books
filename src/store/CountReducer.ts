import { Count } from '../lib/types';
import { initialState } from './initialState';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

type IncrementAction = {
  type: typeof INCREMENT;
};
type DecrementAction = {
  type: typeof DECREMENT;
};

export type CountActions = IncrementAction | DecrementAction;

export const createIncrementAction = (): CountActions => {
  return {
    type: INCREMENT,
  };
};

export const createDecrementAction = (): CountActions => {
  return {
    type: DECREMENT,
  };
};

export const CountReducer = (state = initialState.count, action: CountActions): Count => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};
