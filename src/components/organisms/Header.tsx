import React, { useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

const header = css({
  height: 64,
  backgroundColor: 'lightgreen',

  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 32px',
});

const title = css({
  lineHeight: '64px',
  fontSize: '24px',
  a: {
    color: '#fefefe',
  },
});

export const Header: React.FC = () => {
  const [isSignin, setIsSignin] = useState(false);

  function handleSignin() {
    setIsSignin(true);
  }
  function handleSignout() {
    setIsSignin(false);
  }

  return (
    <header css={header}>
      <div css={title}>
        {/* <a > */}
        <Link href="/">My Favorite Books</Link>
        {/* </a> */}
      </div>

      <div>
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
      </div>
    </header>
  );
};
