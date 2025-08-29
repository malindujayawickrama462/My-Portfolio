import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta.jsx';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      setPath(to);
      // Scroll to top on navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const Page =
    path === '/about'
      ? AboutPage
      : path === '/projects'
      ? ProjectsPage
      : path === '/skills'
      ? SkillsPage
      : path === '/contact'
      ? ContactPage
      : (props) => <HomePage {...props} onNavigate={navigate} />;

  return (
    <div>
      <Navbar onNavigate={navigate} currentPath={path} />
      <Page />
      <Footer />
      <FloatingCta onClick={() => navigate('/contact')} />
    </div>
  )
}

export default App
