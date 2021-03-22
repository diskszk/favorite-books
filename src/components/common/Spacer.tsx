import React from 'react';
import { css } from '@emotion/react';

type Props = {
  height?: number;
};

export const Space: React.FC<Props> = ({ height = 2 }) => {
  const margin = css({
    marginTop: `${height}rem`,
  });

  return <div css={margin} />;
};
