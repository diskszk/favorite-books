import { ModalStatus } from '../lib/types';
import { initialState } from './initialState';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

type OpenModalAction = {
  type: typeof OPEN_MODAL;
};
type CloseModalOption = {
  type: typeof CLOSE_MODAL;
};

type ModalStatusActions = OpenModalAction | CloseModalOption;

export const createOpenModalAction = (): ModalStatusActions => {
  return {
    type: OPEN_MODAL,
  };
};
export const createCloseModalAction = (): ModalStatusActions => {
  return {
    type: CLOSE_MODAL,
  };
};

export const ModalStatusReducer = (
  state = initialState.modalStatus,
  action: ModalStatusActions
): ModalStatus => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};
