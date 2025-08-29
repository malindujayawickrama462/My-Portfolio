export default function Home({ onNavigate }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sidebar (desktop) */}
      <aside className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-20">
        <nav aria-label="Quick navigation" className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur shadow-sm px-3 py-4">
          <ul className="flex flex-col items-center gap-3">
            <li>
              <button onClick={() => onNavigate && onNavigate('/')} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-sky-600 hover:bg-sky-50 border border-gray-200">
                🏠
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate && onNavigate('/about')} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-sky-600 hover:bg-sky-50 border border-gray-200">
                👤
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate && onNavigate('/projects')} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-sky-600 hover:bg-sky-50 border border-gray-200">
                💼
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate && onNavigate('/skills')} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-sky-600 hover:bg-sky-50 border border-gray-200">
                🛠️
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate && onNavigate('/contact')} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-sky-600 hover:bg-sky-50 border border-gray-200">
                ✉️
              </button>
            </li>
            <li>
              <div className="w-8 h-px bg-gray-200 my-1" />
            </li>
            <li className="flex flex-col items-center gap-2">
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200">GH</a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200">in</a>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        {/* Profile image */}
        <div className="mb-8 relative">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-75"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Profile" 
              className="relative w-36 h-36 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Main content */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Malindu</span>
        </h1>
        
        <div className="mb-6">
          <span className="text-xl md:text-2xl text-gray-600 font-medium typing-animation">
            I create beautiful digital experiences
          </span>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
          I'm a passionate full-stack developer specializing in modern web applications. 
          I transform ideas into innovative digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={() => onNavigate && onNavigate('/projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate && onNavigate('/contact')}
            className="px-8 py-3 border-2 border-purple-500 text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* About summary with Read More */}
        <div className="max-w-3xl mx-auto text-left bg-white/70 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600 mb-4">
            I’m a full‑stack developer focused on building fast, accessible, and elegant
            web apps using React, Node.js, and modern CSS. I care about clean
            architecture and delightful UX.
          </p>
          <button
            onClick={() => onNavigate && onNavigate('/about')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium shadow hover:shadow-md transition-all"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.97 4.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H4.5a.75.75 0 010-1.5h13.19l-4.72-4.72a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Skills summary with Read More */}
        <div className="max-w-3xl mx-auto text-left bg-white/70 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm mt-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Skills</h3>
          <p className="text-gray-600 mb-4">
            Comfortable across the stack: React, TypeScript, Tailwind CSS, Node.js,
            Express, and MongoDB — with a focus on performance and DX.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB'].map(s => (
              <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-100">{s}</span>
            ))}
          </div>
          <button
            onClick={() => onNavigate && onNavigate('/skills')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.97 4.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H4.5a.75.75 0 010-1.5h13.19l-4.72-4.72a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Contact summary with Read More */}
        <div className="max-w-3xl mx-auto text-left bg-white/70 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm mt-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Contact</h3>
          <p className="text-gray-600 mb-4">
            I’m open to freelance, collaborations, and full‑time roles. Let’s talk about
            your project or how I can help your team.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Email', 'LinkedIn', 'GitHub'].map(s => (
              <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">{s}</span>
            ))}
          </div>
          <button
            onClick={() => onNavigate && onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow hover:shadow-md transition-all"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.97 4.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H4.5a.75.75 0 010-1.5h13.19l-4.72-4.72a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="flex justify-center">
            <svg 
              className="w-6 h-6 text-gray-400" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .typing-animation {
          overflow: hidden;
          border-right: .15em solid #4F46E5;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .15em;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4F46E5; }
        }
      `}</style>
    </section>
  );
}