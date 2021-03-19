import '../setupTest';

// const defaultValues = {
//   isOpen: false,
// };

// const makeComponent = (props = {}) => {
//   const setupProps = { ...defaultValues, ...props };

//   return <Sample {...setupProps} />;
// };

describe('Sample', () => {
  test('Sample', () => {
    expect(1 + 1).toBe(2);
  });
});

//   test('modal should not be desplayed', () => {
//     const wrapper = shallow(makeComponent());

//     expect(wrapper.exists(Modal)).toBeFalsy;
//   });
// });
