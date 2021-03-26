import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { STYLES } from '../../constants';

const header = css`
  height: 64px;
  background-color: lightgreen;
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;

  @media screen and (max-width: ${STYLES.DEVICES.SP}) {
    padding: 0 0.5rem;
  }
`;

const title = css`
  line-height: 64px;
  font-weight: bold;
  a {
    color: #fefefe;
    text-decoration: none;

    :visited {
      color: #fefefe;
    }
  }
`;

export const Header: React.FC = () => {
  return (
    <header css={header}>
      <div css={title}>
        <Link href="/">My Favorite Books</Link>
      </div>

      {/* <div>
        {isSignin ? (
          <div>
            <img src="#" alt={'アイコン'} />
            <img src="#" alt="検索ボタン" />
            <button onClick={handleSignout}>sign out</button>
          </div>
        ) : (
          <div>
            <button onClick={handleSignin}>sign in</button>
            <button onClick={handleSignout}>sign up</button>
          </div>
        )}
      </div> */}
    </header>
  );
};
