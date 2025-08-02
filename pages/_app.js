import '../styles/globals.css';
import Header from '../components/Header';
import { CourseProvider } from '../context/CourseContext';

export default function App({ Component, pageProps }) {
  return (
    <CourseProvider>
      <Header />
      <Component {...pageProps} />
    </CourseProvider>
  );
}
