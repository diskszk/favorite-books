import { Count, LoadingStatus, ErrorStatus, Message, ModalStatus } from '../lib/types';

export type RootStore = {
  count: Count;
  loadingStatus: LoadingStatus;
  errorStatus: ErrorStatus;
  message: Message;
  modalStatus: ModalStatus;
};

export const initialState: RootStore = {
  count: {
    value: 0,
  },
  loadingStatus: {
    isLoading: false,
  },
  errorStatus: {
    isError: false,
    errorMessage: '',
    errorStatus: '',
  },
  message: {
    message: '',
  },
  modalStatus: {
    isOpen: false,
  },
};
