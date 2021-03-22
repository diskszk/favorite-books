import React from 'react';
import Image from 'next/image';
import { NO_IMAGE_PATH } from '../../constants';

type Props = {
  src?: string;
};

export const BookThumbnail: React.FC<Props> = ({ src = NO_IMAGE_PATH }) => {
  return <Image src={src} alt={`本のサムネイル`} width={141} height={200} loading={'eager'} />;
};
