// FILE: src/components/Portfolio.tsx

"use client"; // Important: This tells Next.js to run this code in the browser

import { Mail, Linkedin, Github, Code, BrainCircuit, Database } from 'lucide-react';
import Link from 'next/link';

// --- All your portfolio data is here ---
const portfolioData = {
  name: "AmirHasan Pezhman",
  tagline: "Frontend Developer",
  profile: "Enthusiastic and rapidly developing Frontend Developer committed to crafting clean, responsive web applications using React.js, Redux, and Tailwind CSS. Proficient with REST API integration and focused on user-centric design.",
  contact: {
    email: "amirhasanpezhman@gmail.com",
    linkedin: "https://www.linkedin.com/in/amirhasan-pezhman-a51143362",
    github: "https://github.com/toursodis",
  },
  skills: [
    "React.js", "Redux", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS",
    "Bootstrap", "WebSockets", "Python", "C++", "Postman", "Git"
  ],
  projects: [
    {
      title: "BatBooks - Social Reading Platform",
      description: "Developed responsive UIs with React.js and Tailwind. Implemented real-time chat with WebSockets and managed global state with Redux Toolkit. Integrated RESTful APIs and secured the platform with robust auth mechanisms.",
      link: "https://github.com/toursodis", // Replace with actual project link
      tags: ["React", "Redux", "Tailwind", "WebSocket", "TypeScript"]
    },
    {
      title: "Search Engine & Text Analysis",
      description: "Built a Python TF-IDF search engine for 50k documents. Used NLTK for preprocessing and scikit-learn for TF-IDF, PCA & K-Means clustering. Ranked documents by cosine similarity for relevance.",
      link: "https://github.com/toursodis", // Replace with actual project link
      tags: ["Python", "NLTK", "Scikit-learn", "Data Science"]
    },
    {
      title: "Automata-Based Image Recognition",
      description: "Engineered a Python system to convert binary images into minimized DFAs for classification and reconstruction. Implemented the full algorithmic pipeline, including DFA/NFA classes and operations.",
      link: "https://github.com/toursodis", // Replace with actual project link
      tags: ["Python", "Computer Science", "Algorithms", "Automata Theory"]
    },
  ],
  interests: [
    {
      icon: <Database size={28} className="text-cyan-400"/>,
      title: "Backend Development",
      description: "Motivated to expand into backend technologies to become a more well-rounded developer."
    },
    {
      icon: <BrainCircuit size={28} className="text-cyan-400"/>,
      title: "Artificial Intelligence",
      description: "Eager to explore AI technologies and apply them in future projects for enhanced interactivity."
    },
    {
      icon: <Code size={28} className="text-cyan-400"/>,
      title: "Vue.js",
      description: "Planning to explore Vue.js to broaden my expertise and stay current with frontend frameworks."
    }
  ]
};




export function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">{portfolioData.name}</h1>
        <p className="text-xl md:text-2xl text-cyan-400 mt-1">{portfolioData.tagline}</p>
      </div>
      <div className="flex items-center space-x-5 mt-4 sm:mt-0">
        <Link href={`mailto:${portfolioData.contact.email}`} title="Email" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
          <Mail size={28} />
        </Link>
        <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
          <Linkedin size={28} />
        </Link>
        <Link href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
          <Github size={28} />
        </Link>
      </div>
    </header>
  );
}

export function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">About</h2>
      <p className="text-lg text-slate-400 leading-relaxed">{portfolioData.profile}</p>
    </section>
  );
}

export function Skills() {
    return (
        <section id="skills" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {portfolioData.skills.map((skill, index) => (
                    <span key={index} className="bg-slate-800 text-cyan-300 text-md font-medium px-4 py-2 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-700 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Interests() {
    return (
        <section id="interests" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioData.interests.map((interest, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center text-center">
                        {interest.icon}
                        <h3 className="text-lg font-bold text-white mt-4 mb-2">{interest.title}</h3>
                        <p className="text-slate-400 text-sm">{interest.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="text-center text-slate-500 mt-16">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Built with Next.js and Tailwind CSS.</p>
        </footer>
    );
}

// --- And here is the main page file ---
// --- FILE: src/app/page.tsx ---

// Important: Delete everything in your current src/app/page.tsx
// and replace it with the code below.



export default function Home() {
  return (
    <main className="bg-slate-900 text-slate-300 min-h-screen font-sans">
      <div className="container mx-auto max-w-5xl p-6 sm:p-8 md:p-12">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Footer />
      </div>
    </main>
  );
}
