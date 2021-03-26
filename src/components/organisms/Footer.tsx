import { css } from '@emotion/react';
import { STYLES } from '../../constants';
const { COLOR } = STYLES;

const footer = css`
  height: 80px;
  background-color: ${COLOR.DARK_GRAY};

  bottom: 0;

  p {
    text-align: right;
    line-height: 80px;
    padding-right: 12px;
    color: ${COLOR.OFF_WHITE};
  }
`;

export const Footer: React.FC = () => {
  return (
    <footer css={footer}>
      <p>© 2020 Daisuke Suzuki</p>
    </footer>
  );
};
