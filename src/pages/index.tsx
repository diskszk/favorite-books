import Link from 'next/link';

const Index: React.FC = () => {
  return (
    <>
      <Link href={'/search'}>検索画面</Link>
      <Link href={'/signin'}>サインイン</Link>
    </>
  );
};

export default Index;
