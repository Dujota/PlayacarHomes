import '../styles/index.css';

import FAB from 'components/common/buttons/FAB';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FAB />
    </>
  );
}
