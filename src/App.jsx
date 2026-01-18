import React, { useEffect, useRef, useState } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, 
  Globe, Palette, FileJson, GraduationCap, ArrowRight, 
  GitBranch, Triangle, Figma, Send, Monitor, Flame 
} from 'lucide-react';

const App = () => {
  
  const projects = [
    {
      title: "Chandrettan's Canteen",
      desc: "A canteen management app built to streamline food ordering and reduce queues for students.",
      tags: ["React", "Firebase", "Tailwind"],
      link: "https://st-xaviers-canteen.web.app/"
    },
    {
      title: "ResumeLens",
      desc: "A Next.js web app utilizing AI to score resumes and provide actionable feedback for students.",
      tags: ["Next.js", "AI", "Web"],
      link: "https://resumelensmec-git-main-danyl-thomas-projects.vercel.app/login"
    },
    {
      title: "Speed Typing",
      desc: "A tool to test and improve typing speed, built to analyze WPM and accuracy in real-time.",
      tags: ["JavaScript", "Frontend", "Game"],
      link: "https://speed-type-407bd.web.app/"
    },
    {
      title: "AI Chatbot",
      desc: "An conversational interface designed to answer queries and assist users with automated tasks.",
      tags: ["Python", "NLP", "AI"],
      link: "#"
    }
  ];

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "danyldt07@gmail.com";
    const subject = "Query from Portfolio";
    navigator.clipboard.writeText(email);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    const newWindow = window.open(gmailUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
       window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
       alert(`Email copied to clipboard: ${email}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white">DT.</div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/danyl-dnl" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/danyl-thomas-919a32213/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <button onClick={handleEmailClick} className="hover:text-green-400 transition-colors cursor-pointer">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Text Content - Animated */}
          <div className="space-y-8 text-left">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
                Danyl <br />
                <span className="text-gray-500">Thomas</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              {/* --- UPDATED TEXT WITH HIGHLIGHTS --- */}
              <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                B.Tech CSE Student & Developer. <br/>
                I work with 
                <span className="text-green-400"> Java</span>, 
                <span className="text-green-400"> Python</span>, and 
                <span className="text-green-400"> Web Technologies</span> to build useful tools, 
                and explore <span className="text-green-400">AI</span> by creating experimental and creative projects.
              </p>
              {/* ------------------------------------ */}
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={handleEmailClick}
                  className="group relative px-8 py-4 bg-[#16a34a] !text-white font-bold rounded-md overflow-hidden hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] cursor-pointer"
                >
                  Let's get started &gt;
                </button>
                <a 
                  href="#projects"
                  className="px-8 py-4 border border-white/20 !text-white rounded-md hover:bg-white/5 transition-all"
                >
                  View Work
                </a>
              </div>
            </RevealOnScroll>

            {/* Tech Stack & Tools */}
            <RevealOnScroll delay={600}>
              <div className="pt-8">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 text-left">Tech Stack</p>
                <div className="flex flex-wrap gap-x-6 gap-y-4 text-gray-400 justify-start mb-8">
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Globe size={18}/> HTML</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Palette size={18}/> CSS</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><FileJson size={18}/> JavaScript</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Code2 size={18}/> React</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Flame size={18}/> Firebase</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Terminal size={18}/> Java</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Cpu size={18}/> Python</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors">C</div>
                </div>

                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 text-left">Dev Toolkit</p>
                <div className="flex flex-wrap gap-x-6 gap-y-4 text-gray-400 justify-start">
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><GitBranch size={18}/> Git</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Monitor size={18}/> VS Code</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Send size={18}/> Postman</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Triangle size={18}/> Vercel</div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors"><Figma size={18}/> Figma</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Image Circle - Animated */}
          <RevealOnScroll delay={400}>
            <div className="flex justify-center md:justify-end w-full">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 blur-[120px] opacity-20 rounded-full pointer-events-none"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white/5">
                  <img 
                    src="/danyl.jpg" 
                    alt="Danyl Thomas" 
                    className="w-full h-full object-cover bg-neutral-900"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-12 text-white">Recent Work</h2>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <ProjectCard 
                  title={project.title}
                  desc={project.desc}
                  tags={project.tags}
                  link={project.link}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400 shrink-0">
                  <GraduationCap size={32} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Engineering Student & Developer
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                    I am currently a second-year <span className="text-white font-medium">Computer Science Engineering</span> student at <span className="text-green-400">Govt. Model Engineering College, Thrikkakara</span>.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                    My technical journey is driven by a curiosity to build functional systems. I am actively focused on deepening my expertise in <span className="text-white">Full Stack Web Development</span> and mastering <span className="text-white">Data Structures & Algorithms (DSA)</span> to write efficient, scalable code.
                  </p>

                  <div className="pt-4">
                    <button onClick={handleEmailClick} className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors cursor-pointer">
                      Contact me directly <ArrowRight size={16} className="ml-2"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm">
        <p>© 2026 Danyl Thomas. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

// Animation Component
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// Reusable Card Component
const ProjectCard = ({ title, desc, tags, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all hover:-translate-y-1 hover:bg-white/[0.07]"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{title}</h3>
      <ExternalLink size={18} className="text-gray-500 group-hover:text-green-400 transition-colors"/>
    </div>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
      {desc}
    </p>
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-green-400 border border-white/5">
          {tag}
        </span>
      ))}
    </div>
  </a>
);

export default App;