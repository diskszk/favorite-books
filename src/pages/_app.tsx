type Props = {
  pageProps: any;
  Component: any;
};

const App: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
