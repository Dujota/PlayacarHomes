import '../styles/index.css';

import FAB from 'components/common/buttons/FAB';
import Layout from 'components/Layout';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <FAB />
    </Layout>
  );
}
