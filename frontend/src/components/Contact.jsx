export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-4">Feel free to reach out via email or social media.</p>
        <a
          href="mailto:example@email.com"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}