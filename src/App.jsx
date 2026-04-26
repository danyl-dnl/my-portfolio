import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu,
  Globe, Palette, FileJson, GraduationCap, ArrowRight,
  GitBranch, Triangle, Figma, Send, Monitor, Flame
} from 'lucide-react';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const projects = [
    {
      title: "MEC Ride",
      desc: "A real-time taxi-sharing platform (PWA) designed for urban commuters to split travel costs and organize shared trips efficiently.",
      tags: ["Firebase", "PWA", "Vanilla JS"],
      link: "https://mec-ride-anti.web.app/"
    },
    {
      title: "IdeaLab Manager",
      desc: "A modern Flutter application for maker spaces to track inventory, handle student requests, and manage equipment loans.",
      tags: ["Flutter", "Firebase", "Mobile"],
      link: "https://github.com/danyl-dnl/LendLab"
    },
    {
      title: "ShopMate",
      desc: "An AI-powered WhatsApp assistant for grocery stores that automates inventory management, extracts sales via NLP, and generates bills.",
      tags: ["Node.js", "OpenAI", "Supabase", "WhatsApp API"],
      link: "https://github.com/danyl-dnl/ShopMate"
    },
    {
      title: "LocalHelp AI",
      desc: "AI-Powered Civic Intelligence Platform enabling local authorities and citizens to report, cluster, and manage civic issues in real-time.",
      tags: ["React", "FastAPI", "AI"],
      link: "https://github.com/danyl-dnl/ai-for-bharath"
    },
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
      <ParticleBackground />
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-green-500 z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/[0.02] backdrop-blur-xl border-b border-white/10 backdrop-saturate-150">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white">DT.</div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            <Magnetic><a href="#home" className="hover:text-green-400 transition-colors">Home</a></Magnetic>
            <Magnetic><a href="#projects" className="hover:text-green-400 transition-colors">Projects</a></Magnetic>
            <Magnetic><a href="#about" className="hover:text-green-400 transition-colors">About</a></Magnetic>
          </div>

          <div className="flex space-x-4">
            <Magnetic>
              <a href="https://github.com/danyl-dnl" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Github size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/danyl-thomas-919a32213/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <button onClick={handleEmailClick} className="hover:text-green-400 transition-colors cursor-pointer">
                <Mail size={20} />
              </button>
            </Magnetic>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden"
      >
        {/* Mouse Spotlight Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.15), transparent 80%)`
          }}
        />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full relative z-10">

          {/* Left Text Content - Animated */}
          <div className="space-y-8 text-left">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white mb-2">
                <span className="name-shimmer">Danyl</span> <br />
                <span className="text-gray-500">Thomas</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="space-y-4 max-w-lg">
                <div className="text-lg md:text-xl font-mono">
                  <span className="text-gray-400">I am </span>
                  <Typewriter
                    phrases={[
                      "a B.Tech CSE Student",
                      "a Full Stack Developer",
                      "an AI Enthusiast",
                      "an Open Source Builder",
                      "a Problem Solver",
                    ]}
                  />
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  I work with{" "}
                  <span className="text-green-400">Java</span>,{" "}
                  <span className="text-green-400">Python</span>, and{" "}
                  <span className="text-green-400">Web Technologies</span> to build useful
                  tools, and explore{" "}
                  <span className="text-green-400">AI</span> by creating experimental and
                  creative projects.
                </p>
              </div>
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
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Globe size={18} /> HTML</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Palette size={18} /> CSS</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><FileJson size={18} /> JavaScript</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Code2 size={18} /> React</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Flame size={18} /> Firebase</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Terminal size={18} /> Java</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Cpu size={18} /> Python</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300">C</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300">C++</div>
                </div>

                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 text-left">Dev Toolkit</p>
                <div className="flex flex-wrap gap-x-6 gap-y-4 text-gray-400 justify-start">
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><GitBranch size={18} /> Git</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Monitor size={18} /> VS Code</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Send size={18} /> Postman</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Triangle size={18} /> Vercel</div>
                  <div className="flex items-center gap-2 hover:text-green-400 hover:scale-110 transition-all cursor-default duration-300"><Figma size={18} /> Figma</div>
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

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  tags={project.tags}
                  link={project.link}
                />
              </motion.div>
            ))}
          </motion.div>
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
                      Contact me directly <ArrowRight size={16} className="ml-2" />
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

// ── Magnetic Component ──────────────────────────────────────────
const Magnetic = ({ children, strength = 0.35 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (clientX - centerX) * strength;
    const moveY = (clientY - centerY) * strength;
    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.1s linear",
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

// ── Typewriter Component ──────────────────────────────────────────
const Typewriter = ({ phrases = [], typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleTyping = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span>
      <span className="text-green-400 font-semibold">{text}</span>
      <span
        className="inline-block w-0.5 h-5 ml-0.5 align-middle bg-green-400 rounded-sm"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </span>
  );
};

// Animation Component
const RevealOnScroll = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

// Reusable Card Component
const ProjectCard = ({ title, desc, tags, link }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const multiplier = 5; // Rotation intensity
    const xRotation = (y - rect.height / 2) / rect.height * -multiplier;
    const yRotation = (x - rect.width / 2) / rect.width * multiplier;
    setRotate({ x: xRotation, y: yRotation });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <a
      href={link}
      target="_blank"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      rel="noopener noreferrer"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? "all 0.5s ease" : "none"
      }}
      className="group flex flex-col h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all hover:bg-white/[0.07] will-change-transform"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{title}</h3>
        <ExternalLink size={18} className="text-gray-500 group-hover:text-green-400 transition-colors" />
      </div>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
        {desc}
      </p>
      <div className="flex gap-2 flex-wrap mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-green-400 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

// ── Particle Background Component ──────────────────────────────
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 60;
    const connectionDistance = 150;
    const mouseRadius = 150;

    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            this.x -= dx * 0.01;
            this.y -= dy * 0.01;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 197, 94, 0.4)';
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Fade line based on distance
            const opacity = 1 - (dist / connectionDistance);
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};

export default App;