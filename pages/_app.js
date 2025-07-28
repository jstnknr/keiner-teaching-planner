import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import { CourseProvider } from '../context/CourseContext';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const handleLogin = () => {
    // navigate to your login page
    router.push('/login');
  };

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.18/main.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.18/main.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@6.1.18/main.css"
          rel="stylesheet"
        />
      </Head>
      <Header onLogin={handleLogin} />
      <CourseProvider>
        <Component {...pageProps} />
      </CourseProvider>
    </>
  );
}