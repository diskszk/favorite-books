import { css } from '@emotion/react';
import React from 'react';
import { STYLES } from '../../constants';
import { BookThumbnail } from '../atmos';

const cardWrapper = css`
  width: 44%;
  background-color: #afa;
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 4px 4px 8px rgba(100, 100, 100, 0.4);
  border-radius: 8px;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: ${STYLES.DEVICES.SP}) {
    width: 100%;
  }
`;
const card = css`
  display: flex;
  justify-content: flex-start;
`;
const cardInfo = css`
  margin-left: 16px;
  line-height: 32px;
  text-align: left;
  h2 {
    font-size: 18.44px;
    font-weight: bolder;
    margin-bottom: 16px;
  }
`;

type Props = {
  author: string;
  title: string;
  largeImageUrl: string;
  seriesName: string;
  reviewAverage: string;
  itemUrl: string;
  detailsPageUrl: string;
};

export const BookCard: React.FC<Props> = ({
  author,
  title,
  largeImageUrl,
  seriesName,
  reviewAverage,
  // itemUrl,
  detailsPageUrl,
}) => {
  const percentage = Math.trunc(Number(reviewAverage));
  const starts = new Array(percentage).fill('★');
  const Rate = <>{starts.map((star) => star)}</>;

  return (
    <li css={cardWrapper}>
      <a href={detailsPageUrl}>
        <div css={card}>
          <BookThumbnail src={largeImageUrl} />
          <div css={cardInfo}>
            <h2>{title}</h2>
            <p>著者: {author}</p>
            <p>{seriesName}</p>
            <p>
              評価: {Rate} / {reviewAverage}
            </p>
            <p>読んだ</p>
            <p>読みたい</p>
          </div>
        </div>
      </a>
    </li>
  );
};
