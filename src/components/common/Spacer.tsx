import React from 'react';
import { css } from '@emotion/react';

type Props = {
  height: number;
};

export const Spacer: React.FC<Props> = ({ height }) => {
  const margin = css({
    marginTop: `${height}rem`,
  });

  return <div css={margin} />;
};
