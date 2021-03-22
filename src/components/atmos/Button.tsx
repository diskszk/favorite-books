import React from 'react';
import { css } from '@emotion/react';
import { STYLES } from '../../constants';

const { OFF_WHITE: GRAY, WHITE, LITE_GREEN: DARK_GREEN } = STYLES.COLOR;

const button = css({
  width: '8rem',
  height: '3rem',
  backgroundColor: 'lightgreen',
  border: `1px solid ${GRAY}`,
  borderRadius: '0.8rem',
  transition: 'all 0.25s ease',

  fontWeight: 'bolder',
  fontSize: '1rem',
  color: WHITE,

  ':disabled': {
    cursor: 'default',
    backgroundColor: GRAY,
    ':hover': {
      backgroundColor: GRAY,
    },
  },

  '&:hover': {
    backgroundColor: DARK_GREEN,
  },
});

export type Props = {
  disabled?: boolean; // trueの場合押せない
  label: string;
  onClick: (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<Props> = ({ disabled = false, label, onClick }) => {
  return (
    <button css={button} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};
