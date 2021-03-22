import React from 'react';
import { css } from '@emotion/react';
import { SearchArea, BookList } from '../components/organisms/search';
import { Space } from '../components/common';

const container = css({
  padding: '40px 0',
  textAlign: 'center',
});

const Search: React.FC = () => {
  return (
    <section css={container}>
      <SearchArea />
      <Space />
      <BookList />
    </section>
  );
};

export default Search;
