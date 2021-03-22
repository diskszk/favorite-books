import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../../lib/api/rakutenBooks';
import { Book } from '../../lib/types';
import { createDisplayErrorMessageAction } from '../../store/ErrorStatusReducer';
import { createCloseModalAction, createOpenModalAction } from '../../store/ModalStatusReducer';
import { BookCard } from '../molecules';
import {
  createStartLoadingAction,
  createStopLoadingAction,
} from '../../store/LoadingStatusReducer';

const postCardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Error: React.FC = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState<Book[]>([]);

  const handleError = async () => {
    try {
      dispatch(createStartLoadingAction());
      dispatch(createOpenModalAction());
      const books = await searchBooks('title', '坊ちゃん');
      // const books = await searchBooks('isbn', '9784003101032');

      console.log(books[0].Item.title);

      setBooks(books);
      dispatch(createCloseModalAction());
      dispatch(createStopLoadingAction());
    } catch (err) {
      dispatch(
        createDisplayErrorMessageAction({
          isError: true,
          errorMessage: err.message,
          errorStatus: '500',
        })
      );
      dispatch(createOpenModalAction());
    }
  };

  useEffect(() => {
    console.log(books);
  }, [setBooks, books]);

  return (
    <React.Fragment>
      <button onClick={handleError}>Error</button>
      <br />

      <br />
      <ul css={postCardWrapper}>
        {books.map((book: Book, key) => {
          const item = book.Item;

          return (
            <BookCard
              key={key}
              author={item.author}
              title={item.title}
              largeImageUrl={item.largeImageUrl}
              seriesName={item.seriesName}
              reviewAverage={item.reviewAverage}
              itemUrl={item.itemUrl}
              detailsPageUrl={'/'}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Error;
