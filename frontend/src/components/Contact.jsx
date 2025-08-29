export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:example@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Get in Touch</h2>
          <p className="mt-3 text-gray-600">Have a project or role in mind? Let’s talk.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-700">@</span>
                  <a href="mailto:example@email.com" className="hover:underline">example@email.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">📍</span>
                  <span>Colombo, Sri Lanka (Remote‑friendly)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-700">✅</span>
                  <span>Available for freelance & full‑time</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Social</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium">LinkedIn</a>
                <a href="#" className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium">GitHub</a>
                <a href="#" className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium">Twitter</a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium shadow hover:shadow-md transition-all">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M1.5 12a.75.75 0 01.75-.75h15.69l-5.22-5.22a.75.75 0 111.06-1.06l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06l5.22-5.22H2.25A.75.75 0 011.5 12z" clipRule="evenodd" /></svg>
                </button>
                <a href="mailto:example@email.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all">
                  Email Directly
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}