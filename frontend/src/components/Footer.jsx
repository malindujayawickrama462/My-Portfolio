export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20">
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />

      <div className="container mx-auto px-6 py-10">
        {/* Callout strip */}
        <div className="mb-8 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Let’s build something great together</h3>
            <p className="text-sm text-gray-600">Open to freelance, collaborations, and full‑time roles.</p>
          </div>
          <a href="/contact" className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Contact Me</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Malindu</div>
            <p className="mt-3 text-sm text-gray-600">Building delightful, performant web experiences.</p>
            <div className="mt-4 text-xs text-gray-500">Colombo, Sri Lanka • Remote‑friendly</div>
          </div>

          <nav>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="hover:text-gray-900">About</a></li>
              <li><a href="/projects" className="hover:text-gray-900">Projects</a></li>
              <li><a href="/skills" className="hover:text-gray-900">Skills</a></li>
              <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="/CV.pdf" target="_blank" rel="noreferrer" className="hover:text-gray-900">Resume</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            </ul>
          </nav>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Social</h4>
            <div className="flex gap-3">
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100">GH</a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100">in</a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100">X</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Email: <a href="mailto:example@email.com" className="hover:underline">example@email.com</a></p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Newsletter</h4>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }} className="flex gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <button className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm">Subscribe</button>
            </form>
            <p className="mt-2 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© {year} Malindu. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Made with React & Tailwind</span>
            <span className="opacity-40">•</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="underline hover:no-underline">Back to top</button>
          </div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}


