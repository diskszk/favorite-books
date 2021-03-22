import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDecrementAction, createIncrementAction } from '../store/CountReducer';
import { RootStore } from '../store/initialState';
import { Count } from '../lib/types';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const { value } = useSelector<RootStore, Count>((state) => state.count);

  const handleClickIncrementButton = useCallback(
    (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch(createIncrementAction());
    },
    [dispatch]
  );
  const handleClickDecrementButton = useCallback(
    (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch(createDecrementAction());
    },
    [dispatch]
  );

  return (
    <div>
      <span>{value}</span>
      <button data-test="increment-btn" onClick={handleClickIncrementButton}>
        +
      </button>
      <button data-test="decrement-btn" onClick={handleClickDecrementButton}>
        -
      </button>
    </div>
  );
};
