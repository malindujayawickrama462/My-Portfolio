export default function FloatingCta({ onClick }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        className="relative inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        aria-label="Hire Me"
      >
        <span className="absolute -inset-1 rounded-full blur-lg bg-gradient-to-r from-sky-500 to-indigo-600 opacity-30" aria-hidden="true"></span>
        <span className="relative">Hire Me</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative w-5 h-5"><path fillRule="evenodd" d="M12.97 4.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H4.5a.75.75 0 010-1.5h13.19l-4.72-4.72a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
      </button>
    </div>
  );
}


