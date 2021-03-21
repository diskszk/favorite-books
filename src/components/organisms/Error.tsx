import React from 'react';
import { useDispatch } from 'react-redux';
import { getApple } from '../../lib/api/getApple';
import { createDisplayErrorMessageAction } from '../../store/ErrorStatusReducer';
import { createOpenModalAction } from '../../store/ModalStatusReducer';

const Error: React.FC = () => {
  const dispatch = useDispatch();

  const handleError = async () => {
    try {
      const data = await getApple();

      console.log(data);
    } catch (err) {
      console.error(err);

      dispatch(
        createDisplayErrorMessageAction({
          isError: true,
          errorMessage: err.message,
          errorStatus: err.status,
        })
      );
      dispatch(createOpenModalAction());
    }
  };

  return (
    <React.Fragment>
      <button onClick={handleError}>Error</button>
    </React.Fragment>
  );
};

export default Error;
