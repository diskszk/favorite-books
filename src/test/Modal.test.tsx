import React from 'react';
import '../setupTests';
import { useDispatch, useSelector } from 'react-redux';
import { shallow } from 'enzyme';

import { ModalStatus } from '../lib/types';

import { ModalWrapper } from '../components/organisms';
// ErrorMessageModalのテストを追加すること
import { LoadingModal, MessageModal } from '../components/common';
import { createCloseModalAction, createOpenModalAction } from '../store/ModalStatusReducer';

jest.mock('../store/LoadingStatusReducer');
jest.mock('react-redux');
const useDispatchMock = useDispatch as jest.Mock;
const modalStatusMock = useSelector as jest.Mock<ModalStatus>;

const defaultProps = {
  label: 'test',
};
const makeComponent = (Modal: React.FC<any>, props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return (
    <ModalWrapper>
      <Modal {...setupProps} />
    </ModalWrapper>
  );
};

describe('LoadingModal.tsx', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn());
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('modal should be display', () => {
    modalStatusMock.mockReturnValue({
      isOpen: true,
    });
    const wrapper = shallow(makeComponent(LoadingModal, { label: 'test' }));

    expect(wrapper.exists(LoadingModal)).toBeTruthy;
  });

  it('modal should not be display', () => {
    modalStatusMock.mockReturnValue({
      isOpen: false,
    });
    const wrapper = shallow(makeComponent(LoadingModal, { label: 'test' }));

    expect(wrapper.exists(LoadingModal)).toBeFalsy;
  });
  it('modal does not have button', () => {
    modalStatusMock.mockReturnValue({
      isOpen: true,
    });
    const wrapper = shallow(makeComponent(LoadingModal, { label: 'test' }));

    expect(wrapper.find('button')).toBeFalsy;
  });
});

describe('MessageModal.tsx', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn());
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('modal should be open', () => {
    modalStatusMock.mockReturnValue({
      isOpen: false,
    });

    const wrapper = shallow(makeComponent(MessageModal, { message: 'test' }));

    useDispatchMock(createOpenModalAction());
    expect(wrapper.exists(MessageModal)).toBeTruthy;
  });

  it('modal should be display', () => {
    //
  });
  it('modal should not be display', () => {
    //
  });

  it('modal should be close', () => {
    modalStatusMock.mockReturnValue({
      isOpen: true,
    });
    const wrapper = shallow(makeComponent(MessageModal, { message: 'test' }));

    useDispatchMock(createCloseModalAction());
    expect(wrapper.exists(MessageModal)).toBeFalsy;
  });
  it('modal has a button', () => {
    modalStatusMock.mockReturnValue({
      isOpen: true,
    });
    const wrapper = shallow(makeComponent(MessageModal, { label: 'test' }));

    expect(wrapper.exists('button')).toBeFalsy;
  });
});
