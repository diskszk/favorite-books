import React from 'react';
import { css } from '@emotion/react';
import { styles } from '../../constants';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store/initialState';
import { ModalStatus } from '../../lib/types';

const { color } = styles;
const background = css({
  position: 'fixed',
  top: '0%',
  left: '0%',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const modal = css({
  height: '16rem',
  width: '44%',
  padding: '1rem',

  position: 'absolute',
  top: '12rem',

  textAlign: 'center',

  backgroundColor: color.white,
  border: '0',
  borderRadius: '1rem',
});
const content = css({
  height: '60%',
  padding: '3rem',
});

export const ModalWrapper: React.FC = ({ children }) => {
  const { isOpen } = useSelector<RootStore, ModalStatus>((state) => state.modalStatus);

  return (
    <>
      {isOpen ? (
        <div css={background}>
          <div css={modal}>
            <div css={content}>{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
