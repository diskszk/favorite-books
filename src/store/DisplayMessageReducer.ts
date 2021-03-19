import { Message } from '../lib/types';
import { initialState } from './initialState';

const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

type DisplayMessageAction = {
  type: typeof DISPLAY_MESSAGE;
  payload: Message;
};
type ClearMessageAction = {
  type: typeof CLEAR_MESSAGE;
  payload: Message;
};

type DisplayMessageActions = DisplayMessageAction | ClearMessageAction;

export const createDisplayMessageAction = ({ message }: Message): DisplayMessageActions => {
  return {
    type: DISPLAY_MESSAGE,
    payload: {
      message: message,
    },
  };
};
export const createClearMessageAction = (): DisplayMessageActions => {
  return {
    type: CLEAR_MESSAGE,
    payload: {
      message: '',
    },
  };
};

export const DisplayMessageReducer = (
  state = initialState.message,
  action: DisplayMessageActions
): Message => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
