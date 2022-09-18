import { Session } from 'next-auth'
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

// https://zenn.dev/kage1020/scraps/263bea122c7ddf
const App = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;