import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { Book } from '../../../lib/types';
import { BookCard } from '../../molecules';
import { RootStore } from '../../../store/initialState';

const postCardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const msg = css`
  line-height: 40px;
  h2 {
    font-size: 24px;
  }
`;

export const BookList: React.FC = () => {
  const books = useSelector<RootStore, Book[]>((state) => state.books);

  return (
    <>
      {/* 初期値null */}
      {books && (
        <>
          {books.length < 1 ? (
            <div css={msg}>
              <h2>該当する書籍が見つかりませんでした</h2>
              <p>
                キーワードが正しく入力できているかを確かめるか、他のキーワードで試してください。
              </p>
            </div>
          ) : (
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
          )}
        </>
      )}
    </>
  );
};
