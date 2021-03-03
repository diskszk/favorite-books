type Props = {
  pageProps: any;
  Component: any;
};

const App: React.FC<Props> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
};

export default App;
