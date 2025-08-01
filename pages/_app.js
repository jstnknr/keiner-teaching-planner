import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'
import { CourseProvider } from '../context/CourseContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/plnrLogo.png" />

        {/* FullCalendar CSS */}
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

      <Header />

      <CourseProvider>
        <Component {...pageProps} />
      </CourseProvider>
    </>
  )
}
