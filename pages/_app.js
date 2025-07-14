import '../styles/globals.css';
import Head from 'next/head';
import { CourseProvider } from '../context/CourseContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.18/main.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.18/main.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@6.1.18/main.css" rel="stylesheet" />
      </Head>
      <CourseProvider>
        <Component {...pageProps} />
      </CourseProvider>
    </>
  );
}