import React from 'react';
import { css } from '@emotion/react';
import { styles } from '../../constants';

const color = styles.color;

const button = css({
  width: '8rem',
  height: '3rem',
  backgroundColor: 'lightgreen', // 144, 238, 144
  border: `1px solid ${color.gray}`,
  borderRadius: '0.8rem',
  transition: 'all 0.25s ease',

  fontWeight: 'bolder',
  fontSize: '1rem',
  color: color.white,

  '&:hover': {
    backgroundColor: color.darkGreen,
  },
});

type Props = {
  label: string;
  onClick: (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button css={button} onClick={onClick}>
      {label}
    </button>
  );
};
