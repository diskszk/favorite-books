import Link from 'next/link';
import { SearchArea } from 'src/components/organisms';
import { LoadingModal, ErrorMessageModal } from '../components/utils';

//
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from 'src/store/initialState';
import { LoadingStatus } from 'src/lib/types';
import { createStartLoading, createStopLoading } from 'src/store/LoadingStatusReducer';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  
  const handleFetch = () => {
    dispatch(createStartLoading());
  };
  const handleSuccess = () => {
    dispatch(createStopLoading());
  };

  return (
    <>
      {/* <LoadingModal label={'Loading...'} /> */}
      {/* <ErrorMessageModal errorMessage={'エラーが発生しました。\nエラーが発生しました。'} /> */}
      <SearchArea />

      <button onClick={handleFetch}>Fetch</button>
      <button onClick={handleSuccess}>success</button>

      <Link href={'/search-result'}>検索</Link>
    </>
  );
};

export default Home;
