export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Full‑stack developer focused on crafting delightful, performant web experiences.
          </p>
        </div>

        {/* Top: Photo + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-sky-400/20 to-indigo-500/20 blur" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
                alt="Malindu portrait"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hi, I'm Malindu</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I enjoy turning complex problems into elegant solutions. My toolkit includes
              React, Node.js, and modern CSS. I value accessibility, performance, and
              thoughtful UX.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I’m not coding, I explore new design trends, learn new technologies,
              and contribute to open‑source.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Stat number="3+" label="Years Coding" />
          <Stat number="15+" label="Projects" />
          <Stat number="5" label="Happy Clients" />
          <Stat number="100%" label="Commitment" />
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Skills</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'React', 'JavaScript', 'TypeScript', 'Tailwind CSS',
              'Node.js', 'Express', 'REST APIs', 'MongoDB',
              'Git', 'CI/CD', 'Testing', 'Responsive Design',
            ].map(skill => (
              <span key={skill} className="px-3 py-2 rounded-lg text-sm font-medium text-sky-700 bg-sky-50 border border-sky-100">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Experience Timeline</h4>
          <ol className="relative border-s border-gray-200">
            <TimelineItem year="2025" title="Freelance Developer">
              Built modern SPAs, optimized performance, and delivered maintainable codebases.
            </TimelineItem>
            <TimelineItem year="2024" title="Full‑stack Projects">
              Delivered full‑stack apps with React and Node.js, integrating third‑party APIs.
            </TimelineItem>
            <TimelineItem year="2023" title="Front‑end Foundations">
              Focused on reusable components, accessibility, and responsive layouts.
            </TimelineItem>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white/60 backdrop-blur p-6 text-center shadow-sm">
      <div className="text-3xl font-extrabold text-gray-900">{number}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

function TimelineItem({ year, title, children }) {
  return (
    <li className="mb-8 ms-4">
      <div className="absolute w-3 h-3 bg-sky-500 rounded-full mt-1.5 -start-1.5 border border-white" />
      <time className="mb-1 text-sm font-medium leading-none text-sky-700">{year}</time>
      <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
      <p className="text-gray-600 mt-1">{children}</p>
    </li>
  );
}