import { createStore as reduxCreateStore, combineReducers, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';

import { CountReducer } from './CountReducer';
import { LoadingStatusReducer } from './LoadingStatusReducer';
import { ModalStatusReducer } from './ModalStatusReducer';
import { DisplayMessageReducer } from './DisplayMessageReducer';
import { ErrorStatusReducer } from './ErrorStatusReducer';

export const createStore = (): Store => {
  return reduxCreateStore(
    combineReducers({
      count: CountReducer,
      modalStatus: ModalStatusReducer,
      loadingStatus: LoadingStatusReducer,
      displayMessage: DisplayMessageReducer,
      errorStatus: ErrorStatusReducer,
    }),
    applyMiddleware(logger)
  );
};
