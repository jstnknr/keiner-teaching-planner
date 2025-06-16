import { CourseProvider } from './context/CourseContext';
import Calendar from './components/Calendar';

function App() {
  return (
    <CourseProvider>
      <Calendar />
    </CourseProvider>
  );
}
export default App;
