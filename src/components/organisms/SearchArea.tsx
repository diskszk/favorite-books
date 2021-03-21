import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { Button, Input, Select } from '../atmos';
import { ISBN_CODE, BOOK_AUTHOR, BOOK_TITLE } from '../../constants';
import { Value, Label } from '../../lib/types';
import { Spacer } from '../common';

const container = css({
  padding: '40px 0 40px 0',
  textAlign: 'center',
});

export const SearchArea: React.FC = () => {
  const [searchType, setSearchType] = useState<Value>(ISBN_CODE.value);
  const [label, setLabel] = useState<Label>(ISBN_CODE.label);
  const [value, setValue] = useState('');

  const handleChangeSearchType = useCallback(
    (ev: React.ChangeEvent<HTMLSelectElement>): void => {
      switch (ev.target.value) {
        case ISBN_CODE.value:
          setSearchType(ev.target.value);
          setLabel(ISBN_CODE.label);
          break;
        case BOOK_AUTHOR.value:
          setSearchType(ev.target.value);
          setLabel(BOOK_AUTHOR.label);
          break;
        case BOOK_TITLE.value:
          setSearchType(ev.target.value);
          setLabel(BOOK_TITLE.label);
          break;
        default:
          break;
      }
    },
    [setSearchType]
  );

  const handleInputTitle = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(ev.target.value);
    },
    [setValue]
  );

  return (
    <div css={container}>
      <Select
        value={searchType}
        onChange={handleChangeSearchType}
        options={[
          { value: ISBN_CODE.value, label: ISBN_CODE.label },
          { value: BOOK_AUTHOR.value, label: BOOK_AUTHOR.label },
          { value: BOOK_TITLE.value, label: BOOK_TITLE.label },
        ]}
      />
      <Spacer height={2} />
      <Input
        placeholder={`${label}を入力してください`}
        required={true}
        type={'text'}
        value={value}
        onChange={handleInputTitle}
      />
      <Spacer height={2} />
      <Button
        label="検索する"
        onClick={() => {
          console.log('clicked');
        }}
      />
      <Spacer height={2} />
      <div>
        {`結果表示 
        ・
        ・
        ・
        `}
      </div>
    </div>
  );
};
