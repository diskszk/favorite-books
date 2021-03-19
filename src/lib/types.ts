export type Value = 'isbnCode' | 'author' | 'title';
export type Label = 'ISBNコード' | '著者名' | '書籍名';

export type Count = {
  value: number;
};

export type LoadingStatus = {
  isLoading: boolean;
};
export type ErrorStatus = {
  isError: boolean;
  message: string;
  status: string;
};
export type Message = {
  message: string;
};
export type ModalStatus = {
  isOpen: boolean;
};
