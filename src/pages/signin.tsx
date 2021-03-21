import Link from 'next/link';
import Error from '../components/organisms/Error';

const SignIn: React.FC = () => {
  return (
    <div>
      <p>もどる</p>

      <Error />

      <Link href="/">もどる</Link>
    </div>
  );
};

export default SignIn;
