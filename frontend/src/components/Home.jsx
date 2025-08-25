export default function Home() {
  return (
    <section id="home" className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-600">I'm a developer showcasing my work and skills.</p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}