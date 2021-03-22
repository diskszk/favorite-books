import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import { Button, Props } from '../../components/atmos/Button';

const defaultProps: Props = {
  disabled: false,
  label: 'test button',
  onClick: () => {
    alert('clicked');
  },
};

const makeComponent = (props = {}): JSX.Element => {
  const setupProps = { ...defaultProps, ...props };

  return <Button {...setupProps} />;
};

describe('Button View', () => {
  it('button', () => {
    const wrapper = shallow(makeComponent());

    expect(wrapper).toHaveLength(1);
  });
});
