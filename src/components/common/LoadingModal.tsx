import React from 'react';
import { ModalWrapper } from '../organisms';
import CircularProgress from '@material-ui/core/CircularProgress';
import { css } from '@emotion/react';

const text = css({
  marginTop: '1.5rem',
});

export const LoadingModal: React.FC = () => {
  return (
    <ModalWrapper>
      <CircularProgress disableShrink size={64} />
      <p css={text}>Loading...</p>
    </ModalWrapper>
  );
};
