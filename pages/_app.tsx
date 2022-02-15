import { AppProps } from 'next/app';
import "../styles/globals.css";
import "../styles/normalize.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}