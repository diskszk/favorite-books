import { LoadingStatus } from '../lib/types';
import { initialState } from './initialState';

const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';

type StartLoadingAction = {
  type: typeof START_LOADING;
};
type StopLoadingAction = {
  type: typeof STOP_LOADING;
};

export type LoadingStatusActions = StartLoadingAction | StopLoadingAction;

export const createStartLoadingAction = (): LoadingStatusActions => {
  return {
    type: START_LOADING,
  };
};
export const createStopLoadingAction = (): LoadingStatusActions => {
  return {
    type: STOP_LOADING,
  };
};

export const LoadingStatusReducer = (
  state = initialState.loadingStatus,
  action: LoadingStatusActions
): LoadingStatus => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
