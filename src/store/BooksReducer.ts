import { Book } from '../lib/types';
import { initialState } from './initialState';

const UPDATE_BOOKS = 'UPDATE_BOOKS';

type UpdateBooksAction = {
  type: typeof UPDATE_BOOKS;
  payload: Book[];
};

type BooksActions = UpdateBooksAction;

export const createUpdateBooksAction = (state: Book[]): BooksActions => {
  return {
    type: UPDATE_BOOKS,
    payload: [...state],
  };
};

export const BooksReducer = (state = initialState.books, action: BooksActions): Book[] => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return [...action.payload];

    default:
      return state;
  }
};
