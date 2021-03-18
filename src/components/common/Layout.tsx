import React from 'react';
import { Header } from '../organisms';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { styles } from '../../constants';

const color = styles.color;

const main = css({
  width: '80%',
  backgroundColor: color.white,
  margin: '0 auto',
  border: '0px',
  borderRadius: '0 0 12px 12px',
});

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          body {
            font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic   ProN', 'Hiragino Sans',
              Meiryo, sans-serif;
            font-size: 18px;
            font-weight: normal;
            background-color: #e4e4e4;
          }
          a {
            text-decoration: none;
            cursor: pointer;
          }
          button {
            cursor: pointer;
          }
        `}
      />
      <Header />
      <main css={main}>{children}</main>
      <footer>フッター</footer>
    </>
  );
};
