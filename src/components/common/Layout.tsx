import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { STYLES } from '../../constants';

import { useSelector } from 'react-redux';
import { RootStore } from '../../store/initialState';
import { ErrorStatus, LoadingStatus, ModalStatus } from '../../lib/types';

import { ErrorModal, LoadingModal } from './';
import { Header, Footer } from '../organisms';

const { WHITE } = STYLES.COLOR;

const wrapper = css`
  min-height: calc(100vh - 64px - 80px);
  width: 80%;
  background-color: ${WHITE};
  margin: 0 auto;
  border: 0px;

  @media screen and (max-width: ${STYLES.DEVICES.SP}) {
    width: 100%;
  }
`;

export const Layout: React.FC = ({ children }) => {
  const { isOpen } = useSelector<RootStore, ModalStatus>((state) => state.modalStatus);
  const { isLoading } = useSelector<RootStore, LoadingStatus>((state) => state.loadingStatus);
  const { isError, errorMessage } = useSelector<RootStore, ErrorStatus>(
    (status) => status.errorStatus
  );

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            -font-smoothing: antialiased;
          }
          body {
            font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic   ProN', 'Hiragino Sans',
              'Meiryo', sans-serif;
            font-size: 16px;
            font-weight: normal;
            background-color: #e4e4e4;
            white-space: pre-line;
          }
          a {
            text-decoration: none;
            cursor: pointer;
            :hover {
              text-decoration: underline;
            }
          }
          button {
            cursor: pointer;
          }
        `}
      />
      <Header />

      {isOpen && (
        <>
          {isLoading && <LoadingModal />}
          {isError && <ErrorModal message={errorMessage} />}
        </>
      )}

      <main>
        <div css={wrapper}>{children}</div>
      </main>
      <Footer />
    </>
  );
};
