import React, { useCallback } from 'react';
import { Button } from '../atmos';
import { ModalWrapper } from '../organisms';

type Props = {
  message: string;
};

export const MessageModal: React.FC<Props> = ({ message }) => {
  const handleCloseModal = useCallback((_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('close!!');
  }, []);

  return (
    <ModalWrapper>
      <p>{message}</p>
      <Button label={'閉じる'} onClick={handleCloseModal} />
    </ModalWrapper>
  );
};
