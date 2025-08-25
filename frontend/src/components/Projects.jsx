export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
            <p className="text-gray-600">A web app built with React and Node.js.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
            <p className="text-gray-600">A responsive portfolio using Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}