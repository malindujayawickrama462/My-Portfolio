import { useState } from 'react';

export default function Navbar({ onNavigate, currentPath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <a 
              href={currentPath === '/about' ? '/' : '#home'} 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              DevPortfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavButton active={currentPath === '/'} onClick={() => onNavigate?.('/')}>Home</NavButton>
              <NavButton active={currentPath === '/about'} onClick={() => onNavigate?.('/about')}>About</NavButton>
              <NavButton active={currentPath === '/projects'} onClick={() => onNavigate?.('/projects')}>Projects</NavButton>
              <NavButton active={currentPath === '/skills'} onClick={() => onNavigate?.('/skills')}>Skills</NavButton>
              <NavButton active={currentPath === '/contact'} onClick={() => onNavigate?.('/contact')}>Contact</NavButton>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button onClick={() => { onNavigate?.('/'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Home</button>
            <button onClick={() => { onNavigate?.('/about'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">About</button>
            <button onClick={() => { onNavigate?.('/projects'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Projects</button>
            <button onClick={() => { onNavigate?.('/skills'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Skills</button>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
            <button onClick={() => { onNavigate?.('/contact'); setIsMenuOpen(false); }} className="text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">Contact</button>
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