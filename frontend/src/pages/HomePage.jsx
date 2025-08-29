import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage({ onNavigate }) {
  return (
    <div>
      <Home onNavigate={onNavigate} />
      <Projects />
      <Contact />
    </div>
  );
}