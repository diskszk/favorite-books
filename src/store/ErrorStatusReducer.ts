import { ErrorStatus } from '../lib/types';
import { initialState } from './initialState';

const DISPLAY_ERROR_MESSAGE = 'DISPLAY_ERROR_MESSAGE';
const CLEAR_ERROR = 'CLEAR_ERROR_MESSAGE';

type DisplayErrorMessageAction = {
  type: typeof DISPLAY_ERROR_MESSAGE;
  payload: ErrorStatus;
};
type ClearErrorAction = {
  type: typeof CLEAR_ERROR;
  payload: ErrorStatus;
};

type ErrorStatusActions = DisplayErrorMessageAction | ClearErrorAction;

export const createDisplayErrorMessageAction = (errorStatus: ErrorStatus): ErrorStatusActions => {
  return {
    type: DISPLAY_ERROR_MESSAGE,
    payload: {
      isError: true,
      errorMessage: errorStatus.errorMessage,
      errorStatus: errorStatus.errorStatus,
    },
  };
};
export const createClearErrorAction = (): ErrorStatusActions => {
  return {
    type: DISPLAY_ERROR_MESSAGE,
    payload: {
      isError: false,
      errorMessage: '',
      errorStatus: '',
    },
  };
};

export const ErrorStatusReducer = (
  state = initialState.errorStatus,
  action: ErrorStatusActions
): ErrorStatus => {
  switch (action.type) {
    case DISPLAY_ERROR_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
