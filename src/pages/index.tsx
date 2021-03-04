import { Hello } from '../components/Hello';

const Index: React.FC = () => {
  console.log('apple');

  return (
    <>
      <Hello name={'banana'} />
    </>
  );
};

export default Index;
