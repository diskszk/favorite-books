import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createCloseModalAction } from '../../store/ModalStatusReducer';
import { createClearErrorAction } from '../../store/ErrorStatusReducer';
import { Button } from '../atmos';
import { ModalWrapper } from '../organisms';

type Props = {
  message: string;
};

export const ErrorModal: React.FC<Props> = ({ message }) => {
  const dispatch = useDispatch();

  const handleCloseModal = useCallback(
    (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      /* 何かしらのエラーが起きた状態 */
      dispatch(createClearErrorAction());
      dispatch(createCloseModalAction());
    },
    [dispatch]
  );

  return (
    <ModalWrapper>
      <p>{message}</p>
      <Button label={'閉じる'} onClick={handleCloseModal} />
    </ModalWrapper>
  );
};
