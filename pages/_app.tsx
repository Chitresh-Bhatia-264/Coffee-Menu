import type { AppProps } from 'next/app';
import '../styles/style.css'; // This import path should be correct if style.css is in the styles/ directory

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
