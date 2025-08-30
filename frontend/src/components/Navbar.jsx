import { useEffect, useState } from 'react';

export default function Navbar({ onNavigate, currentPath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-shadow ${isScrolled ? 'bg-white/90 shadow-md' : 'bg-white/70 shadow-sm'}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <a 
              href={currentPath === '/about' ? '/' : '#home'} 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              DevPortfolio
            </a>

            {/* Desktop Navigation + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div className="hidden md:flex space-x-8">
                <NavButton active={currentPath === '/'} onClick={() => onNavigate?.('/')}>Home</NavButton>
                <NavButton active={currentPath === '/about'} onClick={() => onNavigate?.('/about')}>About</NavButton>
                <NavButton active={currentPath === '/projects'} onClick={() => onNavigate?.('/projects')}>Projects</NavButton>
                <NavButton active={currentPath === '/skills'} onClick={() => onNavigate?.('/skills')}>Skills</NavButton>
                <NavButton active={currentPath === '/contact'} onClick={() => onNavigate?.('/contact')}>Contact</NavButton>
              </div>
              <button
                onClick={() => onNavigate?.('/contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium shadow hover:shadow-md transition-all"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
        )}

        {/* Mobile Navigation */}
        <div id="mobile-menu" className={`md:hidden bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button onClick={() => { onNavigate?.('/'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Home</button>
            <button onClick={() => { onNavigate?.('/about'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">About</button>
            <button onClick={() => { onNavigate?.('/projects'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Projects</button>
            <button onClick={() => { onNavigate?.('/skills'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Skills</button>
            <button onClick={() => { onNavigate?.('/contact'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Contact</button>
            <button onClick={() => { onNavigate?.('/contact'); setIsMenuOpen(false); }} className="mt-2 text-left inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">Hire Me</button>
          </div>
        </div>
      </nav>

      {/* Offset for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

// Component for desktop navigation links
function NavButton({ children, onClick, active }) {
  return (
    <button onClick={onClick} className={`relative font-medium transition-colors duration-300 group ${active ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </button>
  );
}

// Component for mobile navigation links
function MobileNavLink({ href, children, onClick }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
    >
      {children}
    </a>
  );
}