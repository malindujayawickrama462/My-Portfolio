import { useMemo, useState } from 'react';

const ALL_SKILLS = [
  { name: 'React', level: 90, cat: 'Frontend' },
  { name: 'JavaScript', level: 90, cat: 'Frontend' },
  { name: 'TypeScript', level: 80, cat: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, cat: 'Frontend' },
  { name: 'Accessibility (a11y)', level: 70, cat: 'Frontend' },
  { name: 'Node.js', level: 80, cat: 'Backend' },
  { name: 'Express', level: 75, cat: 'Backend' },
  { name: 'MongoDB', level: 70, cat: 'Backend' },
  { name: 'REST APIs', level: 80, cat: 'Backend' },
  { name: 'Jest/RTL', level: 70, cat: 'Testing' },
  { name: 'Git & GitHub', level: 85, cat: 'Tools' },
  { name: 'CI/CD', level: 75, cat: 'Tools' },
];

const TOOL_BADGES = ['VS Code', 'Figma', 'Postman', 'Vite', 'ESLint', 'Prettier'];
const CATEGORIES = ['All', 'Frontend', 'Backend', 'Testing', 'Tools'];

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? ALL_SKILLS : ALL_SKILLS.filter(s => s.cat === active)),
    [active]
  );

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Skills</h2>
          <p className="mt-3 text-gray-600">Explore my stack by category and proficiency.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white/70 text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filtered.map((s) => (
            <div key={s.name} className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-900 font-semibold">{s.name}</span>
                <span className="text-gray-600 text-sm">{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600" style={{ width: s.level + '%' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tool Badge Cloud */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools I Like</h3>
          <div className="flex flex-wrap gap-2">
            {TOOL_BADGES.map(tool => (
              <span key={tool} className="px-3 py-1.5 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-100">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Meta Front-End Developer (Coursera) — In Progress</li>
              <li>JavaScript Algorithms and Data Structures — freeCodeCamp</li>
              <li>Responsive Web Design — freeCodeCamp</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Resume</h3>
              <p className="text-gray-600 text-sm mb-4">Get a PDF with experience, projects, and contact info.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-medium shadow hover:shadow-md transition-all"
            >
              Download
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v10.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zM3.75 20.25A2.25 2.25 0 016 18h12a2.25 2.25 0 012.25 2.25.75.75 0 01-1.5 0A.75.75 0 0018 19.5H6a.75.75 0 00-.75.75.75.75 0 01-1.5 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


