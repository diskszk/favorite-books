import { Count, LoadingStatus, ErrorStatus, Message, ModalStatus, Book } from '../lib/types';

export type RootStore = {
  count: Count;
  loadingStatus: LoadingStatus;
  errorStatus: ErrorStatus;
  message: Message;
  modalStatus: ModalStatus;
  books: Book[];
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
  books: null,
};
