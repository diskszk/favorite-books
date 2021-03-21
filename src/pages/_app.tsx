import Head from 'next/head';
import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { createStore } from '../store';
import { Layout } from '../components/common/Layout';

type Props = {
  pageProps: any;
  Component: any;
};

const store = createStore();
const App: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Favorite Books</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
