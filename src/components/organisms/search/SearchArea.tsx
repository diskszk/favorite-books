import React, { useCallback, useEffect, useState } from 'react';
import { Button, Input, Select } from '../../atmos';
import { Label, SearchBookType } from '../../../lib/types';
import { createDisplayErrorMessageAction } from '../../../store/ErrorStatusReducer';
import { createCloseModalAction, createOpenModalAction } from '../../../store/ModalStatusReducer';
import {
  createStartLoadingAction,
  createStopLoadingAction,
} from '../../../store/LoadingStatusReducer';
import { searchBooks } from '../../../lib/api/rakutenBooks';
import { Space } from '../../common';
import { useDispatch } from 'react-redux';
import { createUpdateBooksAction } from '../../../store/BooksReducer';

const TITLE: SearchBookType = 'title' as const;
const AUTHOR: SearchBookType = 'author' as const;
const ISBN: SearchBookType = 'isbn' as const;

export const SearchArea: React.FC = () => {
  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState<SearchBookType>(TITLE);
  const [label, setLabel] = useState<Label>('書籍名');
  const [value, setValue] = useState('');
  const [isDisabled, setDisables] = useState(true);

  const handleChangeSearchType = useCallback((ev: React.ChangeEvent<HTMLSelectElement>): void => {
    switch (ev.target.value) {
      case ISBN:
        setSearchType(ev.target.value);
        setLabel('ISBNコード');
        break;
      case AUTHOR:
        setSearchType(ev.target.value);
        setLabel('著者名');
        break;
      case TITLE:
        setSearchType(ev.target.value);
        setLabel('書籍名');
        break;
      default:
        break;
    }
  }, []);

  const handleInputTitle = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(ev.target.value);
    },
    [setValue]
  );

  const handleClickSearchButton = useCallback(
    async (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
      // varidation

      try {
        dispatch(createStartLoadingAction());
        dispatch(createOpenModalAction());
        const books = await searchBooks(searchType, value);

        dispatch(createUpdateBooksAction(books));

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
    },
    [dispatch, searchType, value]
  );

  useEffect(() => {
    if (value) {
      setDisables(false);
    } else {
      setDisables(true);
    }
  }, [setDisables, isDisabled, value]);

  return (
    <div>
      <Select
        value={searchType}
        onChange={handleChangeSearchType}
        options={[
          { value: ISBN, label: 'ISBNコード' },
          { value: AUTHOR, label: '著者名' },
          { value: TITLE, label: '書籍名' },
        ]}
      />
      <Space height={2} />
      <Input
        placeholder={`${label}を入力してください`}
        required={true}
        type={'text'}
        value={value}
        onChange={handleInputTitle}
      />
      <Space height={2} />
      <Button label="検索する" onClick={handleClickSearchButton} disabled={isDisabled} />
    </div>
  );
};
