import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import { CourseProvider } from '../context/CourseContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* default title */}
        <title>PLNR</title>
      </Head>

      <CourseProvider>
        <Header />
        <Component {...pageProps} />
      </CourseProvider>
    </>
  );
}
