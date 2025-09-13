import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-cyan-100 text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Hi, I’m <span className="text-red-600">Grace Abiodun</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A passionate Web Developer building modern apps with Next.js & TailwindCSS
        </p>
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition"
        >
          View My Work
        </a>
      </section>
     <section
  id="about"
  className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20"
>
  {/* Profile Image */}
  <img
    src="/profile.jpeg" // 👉 Replace with your image inside /public folder
    alt="Profile"
    className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
  />

  {/* Heading */}
  <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>

  {/* Description */}
  <p className="max-w-2xl text-lg text-gray-600 leading-relaxed text-center mb-10">
    I’m a passionate web developer specializing in{" "}
    <span className="text-red-600 font-semibold">Next.js</span> and{" "}
    <span className="text-red-600 font-semibold">Tailwind CSS</span>. I love
    creating clean, responsive, and user-friendly applications. My goal is to
    turn ideas into digital experiences that make a difference.
  </p>

  {/* Skills Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl">
    {[
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Git/GitHub",
    ].map((skill) => (
      <div
        key={skill}
        className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800 font-medium text-center shadow-sm hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out"
      >
        {skill}
      </div>
    ))}
  </div>
</section>
<section
  id="projects"
  className="min-h-screen bg-gray-50 px-6 py-20 text-center"
>
  {/* Section Heading */}
  <h2 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h2>

  {/* Projects Grid */}
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
    {[
      {
        title: "Portfolio Website",
        desc: "A personal portfolio built with Next.js & TailwindCSS.",
        img: "/project1.png",
        link: "#",
      },
      {
        title: "School Management App",
        desc: "Full-stack e-commerce with authentication & payments.",
        img: "/project2.png",
        link: "#",
      },
      {
        title: "Learning Platform",
        desc: "Online course platform with progress tracking.",
        img: "/project3.png",
        link: "#",
      },
    ].map((project) => (
      <a
        key={project.title}
        href={project.link}
        target="_blank"
        className="group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
      >
        {/* Project Image */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {/* Project Info */}
        <div className="p-4 text-left">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 mt-2">{project.desc}</p>
        </div>
      </a>
    ))}
    {/* See More Button */}
<div className="mt-12">
  <a
    href="https://github.com/Greatgrace24" // 👉 replace with your GitHub or portfolio link
    target="_blank"
    className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition-colors duration-300"
  >
    See More Projects
  </a>
</div>

  </div>
</section>

<section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20"
>
  {/* Heading */}
  <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
  <p className="max-w-xl text-lg text-gray-600 text-center mb-10">
    Have a project idea, collaboration, or just want to say hi?  
    Feel free to reach out through the form below or connect with me on social media.
  </p>

  {/* Contact Form */}
  <form
    action="https://formspree.io/f/mnnboeva" // 👉 replace with your Formspree or backend endpoint
    method="POST"
    className="w-full max-w-lg bg-gray-50 p-8 rounded-xl shadow-md space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
    />
    <textarea
      name="message"
      rows={5}
      placeholder="Your Message"
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
    />
    <button
      type="submit"
      className="w-full px-6 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition-colors duration-300"
    >
      Send Message
    </button>
  </form>

  {/* Social Links */}
  <div className="flex space-x-6 mt-10">
    <a
      href="mailto:gracetaiwo5@gmail.com"
      className="text-gray-600 hover:text-red-600 transition"
    >
      📧 Email
    </a>
    <a
      href="https://linkedin.com/taiwo-abiodun"
      target="_blank"
      className="text-gray-600 hover:text-red-600 transition"
    >
      💼 LinkedIn
    </a>
    <a
      href="https://github.com/Greatgrace24"
      target="_blank"
      className="text-gray-600 hover:text-red-600 transition"
    >
      🖥 GitHub
    </a>
  </div>
</section>


    </main>
  );
}
