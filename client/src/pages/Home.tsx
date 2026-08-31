// Signal Atelier design system: dark editorial AI-systems interface, cobalt signal lines, asymmetric content bands, restrained motion, and factual professional positioning.
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  ExternalLink,
  FileSearch,
  GitBranch,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Network,
  PanelTop,
  Phone,
  Plus,
  Send,
  Server,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Icon = typeof Bot;

type Project = {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  highlights: string[];
  architecture: string[];
  github?: string;
  image: string;
  accent: string;
};

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

const buildCards: { icon: Icon; title: string; body: string; code: string }[] = [
  { icon: Bot, title: "AI Agents", body: "Orchestrating agents that can reason over context, call tools, and move a workflow from intent to action.", code: "AGT / 01" },
  { icon: FileSearch, title: "RAG Applications", body: "Designing retrieval paths that surface the right context before a model generates an answer.", code: "RAG / 02" },
  { icon: Workflow, title: "AI Automation", body: "Turning repetitive business steps into observable, intelligent workflows with useful hand-offs.", code: "AUT / 03" },
  { icon: Server, title: "Backend Systems", body: "Building the API, data, and service layers that keep intelligent products dependable in practice.", code: "API / 04" },
  { icon: BrainCircuit, title: "LLM Applications", body: "Putting modern language models behind clear product interfaces, prompts, and useful system behavior.", code: "LLM / 05" },
  { icon: Layers3, title: "AI-Native Products", body: "Connecting intelligence, backend architecture, and interface design into complete applications.", code: "SYS / 06" },
];

const projects: Project[] = [
  {
    id: "recruvex",
    index: "01",
    name: "RecruVex",
    subtitle: "AI-Powered HR Management System",
    category: "Final Year Project · AI · Agentic Workflow · HR Technology",
    description: "RecruVex is an AI-powered HR management system designed to streamline recruitment through an intelligent multi-stage recruitment pipeline.",
    tech: ["Next.js 16", "FastAPI", "PostgreSQL", "Groq", "Llama 3.3 70B", "Python", "SQLAlchemy", "JWT", "TypeScript", "Tailwind CSS", "Recharts"],
    features: ["Job Description Generation", "Candidate/CV Sourcing", "Candidate Filtering", "Interview Scheduling", "Recruitment Workflow Automation"],
    highlights: ["Built a 5-stage AI recruitment pipeline.", "Implemented a Python-based orchestration layer.", "Used Llama 3.3 70B through Groq.", "Designed a PostgreSQL database architecture.", "Implemented role-based authentication for HR and employees.", "Integrated GitHub API for candidate sourcing.", "Implemented resume parsing using PyPDF2/python-docx.", "Integrated Gmail SMTP for automated interview invitations.", "Added analytics and reporting with CSV, Excel, and PDF exports."],
    architecture: ["Job Description", "Candidate Sourcing", "CV Parsing", "AI Filtering", "Interview Scheduling"],
    github: "https://github.com/Suleman-Sabir/Hire-Mind",
    image: "/manus-storage/recruvex-architecture_6451ec24.jpg",
    accent: "cobalt",
  },
  {
    id: "knowva",
    index: "02",
    name: "Knowva",
    subtitle: "RAG-Based Knowledge Assistant",
    category: "RAG · LLM · AI Application",
    description: "Knowva is a Retrieval-Augmented Generation (RAG) application designed to make information stored in documents easier to search, understand, and interact with using natural language.",
    tech: ["RAG", "LLM", "AI Application"],
    features: ["Document-based knowledge retrieval", "Context-aware responses", "Natural-language interaction", "Knowledge grounding", "LLM integration"],
    highlights: ["Designed around retrieval before generation.", "Connects document knowledge to a natural-language interaction layer.", "Keeps answers grounded in the relevant context surfaced from the knowledge base.", "Focuses on making stored information easier to explore and understand."],
    architecture: ["User", "Document Knowledge Base", "Retrieval", "Relevant Context", "LLM", "Context-Aware Answer"],
    image: "/manus-storage/knowva-rag-architecture_c1680761.jpg",
    accent: "violet",
  },
];

const skillGroups = [
  { label: "Programming & Backend", icon: Code2, items: ["Python", "OOP", "FastAPI", "REST APIs", "PostgreSQL"] },
  { label: "AI & LLM", icon: BrainCircuit, items: ["Agentic AI", "RAG", "LLM Applications", "Prompt Engineering", "Context Engineering", "AI Automation"] },
  { label: "AI Development Tools", icon: Sparkles, items: ["Claude Code", "OpenAI APIs", "Groq", "Llama models"] },
  { label: "Frontend", icon: PanelTop, items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { label: "Development", icon: GitBranch, items: ["Git", "GitHub", "SQL", "API Integration"] },
];

const certifications = [
  ["01", "Fundamentals of Modern AI Python Level 1", "PIAIC"],
  ["02", "Prompt and Context Engineering: Effective AI Communication Level 1", "PIAIC"],
  ["03", "Introduction to Agent Skills", "Anthropic"],
  ["04", "Claude Code in Action", "Anthropic"],
  ["05", "Claude Code 101", "Anthropic"],
  ["06", "AI Capabilities and Limitations", "Anthropic"],
];

function SectionIntro({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro reveal">
      <div className="section-kicker"><span className="section-number">{number}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function SignalMark({ small = false }: { small?: boolean }) {
  return <span className={`signal-mark ${small ? "signal-mark--small" : ""}`} aria-hidden="true"><img className="signal-mark__image" src="/manus-storage/suleman-signal-mark_176e30bb.png" alt="" /></span>;
}

function ArchitectureFlow({ steps, compact = false }: { steps: string[]; compact?: boolean }) {
  return (
    <div className={`architecture-flow ${compact ? "architecture-flow--compact" : ""}`}>
      {steps.map((step, index) => (
        <div className="flow-step" key={step}>
          <div className="flow-node"><span>{String(index + 1).padStart(2, "0")}</span></div>
          <span className="flow-label">{step}</span>
          {index !== steps.length - 1 && <span className="flow-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="project-modal__panel">
        <button className="icon-button project-modal__close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
        <div className="modal-visual" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,10,20,.3), rgba(7,10,20,.04)), url(${project.image})` }}>
          <div className="modal-visual__label"><span className="status-dot" /> Project brief / {project.index}</div>
          <div><span className="mono-label">{project.category}</span><h2 id="project-modal-title">{project.name}</h2><p>{project.subtitle}</p></div>
        </div>
        <div className="project-modal__body">
          <div className="modal-copy"><span className="mono-label">Overview</span><p className="modal-lead">{project.description}</p><p>Explore the system shape, technical decisions, and capabilities below. The project detail stays close to the supplied profile so the work speaks clearly without inflated claims.</p>{project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={15} /></a>}</div>
          <div className="modal-columns">
            <div><span className="mono-label">Key features</span><ul className="detail-list">{project.features.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div>
            <div><span className="mono-label">Development highlights</span><ul className="detail-list">{project.highlights.map((item) => <li key={item}><CircleDot size={13} />{item}</li>)}</ul></div>
          </div>
          <div className="modal-architecture"><span className="mono-label">Architecture</span><ArchitectureFlow steps={project.architecture} /></div>
          <div className="modal-tech"><span className="mono-label">Technologies</span><div className="tag-list">{project.tech.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => { window.removeEventListener("scroll", onScroll); revealObserver.disconnect(); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="brand-lockup" onClick={() => scrollTo("home")} aria-label="Go to home">
            <SignalMark small /><span>Suleman<span className="brand-dot">.</span></span>
          </button>
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Primary navigation">
            <button onClick={() => scrollTo("home")}>Home</button>
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
            <button className="nav-cta" onClick={() => scrollTo("contact")}>Let&apos;s connect <ArrowUpRight size={14} /></button>
          </nav>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-signal" aria-hidden="true"><div className="signal-orbit signal-orbit--one" /><div className="signal-orbit signal-orbit--two" /><div className="hero-node hero-node--one" /><div className="hero-node hero-node--two" /><div className="hero-node hero-node--three" /><div className="hero-line hero-line--one" /><div className="hero-line hero-line--two" /><div className="hero-line hero-line--three" /></div>
          <div className="container hero-inner">
            <div className="hero-copy reveal is-visible">
              <div className="availability"><span className="status-dot" /> AI systems / backend / automation</div>
              <p className="hero-name">Suleman Sabir</p>
              <h1>Building intelligent systems with <em>AI</em>, automation &amp; modern backend engineering.</h1>
              <p className="hero-description">I build AI-powered applications, intelligent agents, RAG systems, automation workflows, and scalable backend solutions using Python and modern AI technologies.</p>
              <div className="hero-actions"><Button className="button button--primary" onClick={() => scrollTo("projects")}>View my projects <ArrowDownRight size={17} /></Button><Button className="button button--secondary" onClick={() => scrollTo("contact")}>Contact me <ArrowUpRight size={17} /></Button></div>
              <a className="github-link" href="https://github.com/Suleman-Sabir/Hire-Mind" target="_blank" rel="noreferrer"><Github size={16} /> View GitHub <ArrowUpRight size={14} /></a>
            </div>
            <div className="hero-visual reveal is-visible" aria-label="Abstract AI system signal visualization">
              <div className="visual-caption"><span className="mono-label">Live system view</span><span className="mono-label">SYS / 001</span></div>
              <div className="visual-core"><div className="core-ring core-ring--outer" /><div className="core-ring core-ring--inner" /><div className="core-center"><SignalMark /></div><span className="core-pulse" /></div>
              <div className="visual-callout visual-callout--top"><span className="callout-dot" /> reasoning layer <span className="callout-line" /></div>
              <div className="visual-callout visual-callout--right"><span className="callout-dot" /> context in <span className="callout-line" /></div>
              <div className="visual-callout visual-callout--bottom"><span className="callout-dot" /> useful output <span className="callout-line" /></div>
              <div className="visual-code"><span>01</span><span>agent.route(input)</span><span className="code-accent">→</span><span>system.solve()</span></div>
            </div>
          </div>
          <div className="hero-bottom"><div className="container hero-bottom__inner"><span className="scroll-cue"><span className="scroll-line" /> Scroll to inspect</span><span className="hero-index">01 — 08</span></div></div>
        </section>

        <section className="marquee-strip" aria-label="Areas of focus"><div className="marquee-track"><span>Agentic AI</span><i>✦</i><span>RAG systems</span><i>✦</i><span>Backend engineering</span><i>✦</i><span>AI automation</span><i>✦</i><span>LLM applications</span><i>✦</i><span>Agentic AI</span><i>✦</i><span>RAG systems</span><i>✦</i><span>Backend engineering</span></div></section>

        <section className="section section--about" id="about">
          <div className="container section-layout"><SectionIntro number="02" eyebrow="Profile / 01" title="About me" copy="The work sits at the intersection of strong backend architecture and intelligent workflows." /><div className="about-content reveal"><p className="about-lead">I am an <strong>AI Native Developer</strong> focused on backend engineering, AI-powered applications, intelligent automation, and modern AI systems.</p><p>My core experience includes Python, FastAPI, PostgreSQL, RAG, LLM-based applications, and AI agents. I enjoy designing practical AI solutions that combine dependable backend architecture with intelligent workflows.</p><p>My interests include <span className="inline-accent">Agentic AI</span>, AI Automation, Prompt Engineering, and Context Engineering.</p><div className="about-tags"><span>AI Engineering</span><span>Scalable Architecture</span><span>API Development</span><span>Knowledge Grounding</span></div></div></div>
        </section>

        <section className="section section--build" id="build">
          <div className="container"><SectionIntro number="03" eyebrow="Capabilities / 02" title="What I build" copy="I connect reasoning, retrieval, orchestration, and APIs into product behavior people can actually use." /><div className="build-grid">{buildCards.map(({ icon: IconComponent, title, body, code }, index) => <article className="build-card reveal" key={title} style={{ transitionDelay: `${index * 45}ms` }}><div className="build-card__top"><span className="mono-label">{code}</span><IconComponent size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{body}</p><span className="card-arrow"><ArrowUpRight size={16} /></span></article>)}</div></div>
        </section>

        <section className="section section--experience" id="experience">
          <div className="container section-layout"><SectionIntro number="04" eyebrow="Experience / 03" title="Professional experience" copy="A focused chapter working on AI applications and enterprise workflows." /><div className="experience-card reveal"><div className="experience-meta"><span className="mono-label">02.2026 — 07.2026</span><span className="experience-duration">6 months</span><span className="location"><MapPin size={14} /> Gulberg III, Lahore</span></div><div className="experience-main"><div className="experience-heading"><div><h3>AI Engineer</h3><p>Tech Aelia</p></div><span className="experience-mark"><SignalMark small /></span></div><p className="experience-description">Built and supported AI-powered applications using Python and FastAPI. Assisted in developing AI agents, workflow automation, and LLM-based solutions. Worked with REST APIs, cloud services, and collaborated on enterprise AI projects.</p><div className="highlight-card"><div className="highlight-card__title"><span className="status-dot" /> Project highlight</div><h4>AI Customer Support Agent</h4><p>Developed an AI-powered customer support agent using Python, FastAPI, and OpenAI APIs to automate customer queries, retrieve knowledge from a document base using RAG, and provide context-aware responses through a REST API.</p><div className="highlight-stack"><span>Python</span><span>FastAPI</span><span>OpenAI APIs</span><span>RAG</span><span>REST API</span></div></div></div></div></div>
        </section>

        <section className="section section--projects" id="projects">
          <div className="container"><div className="projects-heading"><SectionIntro number="05" eyebrow="Selected work / 04" title="Featured projects" copy="Two systems that show how I move from a complex workflow or knowledge base to a usable AI product surface." /><span className="projects-note"><span className="mono-label">Built with intent</span><span className="projects-note__line" /></span></div><div className="project-stack">{projects.map((project, index) => <article className={`project-card project-card--${project.accent} reveal`} key={project.id} onClick={() => setActiveProject(project)} tabIndex={0} role="button" onKeyDown={(event) => event.key === "Enter" && setActiveProject(project)}><div className="project-card__visual" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 11, 21, .88) 0%, rgba(8, 11, 21, .35) 62%, rgba(8, 11, 21, .08)), url(${project.image})` }}><div className="project-card__top"><span className="project-index">{project.index}</span><span className="mono-label">{project.category}</span></div><div className="project-card__visual-copy"><span className="mono-label">System / {String(index + 1).padStart(2, "0")}</span><h3>{project.name}</h3><p>{project.subtitle}</p></div><span className="project-open"><ArrowUpRight size={19} /></span></div><div className="project-card__body"><div><p>{project.description}</p><div className="tag-list">{project.tech.slice(0, 6).map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}{project.tech.length > 6 && <span className="tech-tag">+{project.tech.length - 6}</span>}</div></div><div className="project-card__body-side"><span className="mono-label">Architecture</span><ArchitectureFlow steps={project.architecture} compact /><button className="project-details" onClick={(event) => { event.stopPropagation(); setActiveProject(project); }}>Inspect project <ChevronRight size={15} /></button></div></div></article>)}</div></div>
        </section>

        <section className="section section--stack" id="stack">
          <div className="container"><div className="stack-heading"><SectionIntro number="06" eyebrow="System map / 05" title="AI engineering stack" copy="The practical layers I connect when building an intelligent system." /><div className="stack-side-note"><span className="status-dot" /> Flow from inputs to useful outputs</div></div><div className="stack-map reveal"><div className="stack-map__grid" />{["Python", "FastAPI", "APIs", "PostgreSQL", "AI / LLMs", "RAG", "Agents", "Automation"].map((item, index) => <div className={`stack-node stack-node--${index + 1}`} key={item}><span className="stack-node__dot" /><span>{item}</span></div>)}<div className="stack-central"><SignalMark /><span className="mono-label">INTELLIGENT SYSTEM</span></div><div className="stack-caption stack-caption--left"><span className="mono-label">Inputs</span><span>data · intent · context</span></div><div className="stack-caption stack-caption--right"><span className="mono-label">Outputs</span><span>decisions · actions · answers</span></div><svg className="stack-lines" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true"><path d="M78 106 C250 106 290 220 445 247" /><path d="M190 205 C310 205 340 238 445 247" /><path d="M92 342 C260 342 320 278 445 247" /><path d="M235 430 C325 430 355 296 445 247" /><path d="M920 106 C750 106 710 220 555 247" /><path d="M810 205 C690 205 660 238 555 247" /><path d="M908 342 C740 342 680 278 555 247" /><path d="M765 430 C675 430 645 296 555 247" /></svg></div></div>
        </section>

        <section className="section section--skills" id="skills">
          <div className="container section-layout"><SectionIntro number="07" eyebrow="Toolkit / 06" title="Technical skills" copy="A working toolkit organized by the kind of system it helps me build." /><div className="skills-grid reveal">{skillGroups.map(({ label, icon: IconComponent, items }) => <div className="skill-group" key={label}><div className="skill-group__heading"><IconComponent size={18} /><h3>{label}</h3></div><div className="skill-items">{items.map((item) => <span key={item}>{item}<Check size={13} /></span>)}</div></div>)}</div></div>
        </section>

        <section className="section section--certs" id="certifications">
          <div className="container section-layout"><SectionIntro number="08" eyebrow="Learning / 07" title="Certifications" copy="Selected learning milestones across AI, prompt design, and agentic development." /><div className="cert-list reveal">{certifications.map(([index, title, issuer]) => <div className="cert-row" key={title}><span className="cert-index">{index}</span><span className="cert-title">{title}</span><span className="cert-issuer">{issuer}</span><span className="cert-arrow"><ArrowUpRight size={15} /></span></div>)}</div></div>
        </section>

        <section className="section section--education" id="education">
          <div className="container education-layout"><div className="education-label"><span className="mono-label">Background / 08</span><h2>Education</h2></div><div className="education-items reveal"><div className="education-item"><span className="education-year">2022 — 2026</span><div><h3>BS Computer Science</h3><p>University of Science &amp; Technology, Lahore</p></div></div><div className="education-item"><span className="education-year">2025 — Present</span><div><h3>Artificial Intelligence — Agentic AI</h3><p>PIAIC</p></div></div></div></div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="container contact-layout"><div className="contact-copy reveal"><div className="section-kicker"><span className="section-number">09</span><span>Open channel / 09</span></div><h2>Let&apos;s build something <em>intelligent.</em></h2><p>Have an AI product idea, automation challenge, or backend system in mind? Let&apos;s connect and explore how it can be turned into a practical solution.</p><div className="contact-details"><a href="mailto:sulemansabir00@gmail.com"><Mail size={17} /> suleman<span>sabir00</span>@gmail.com <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/suleman-sabir" target="_blank" rel="noreferrer"><Linkedin size={17} /> linkedin.com/in/suleman-sabir <ArrowUpRight size={14} /></a><a href="tel:+923064499757"><Phone size={17} /> +92 306-4499757 <ArrowUpRight size={14} /></a><span><MapPin size={17} /> Lahore, Punjab, Pakistan</span></div></div><form className="contact-form reveal" onSubmit={handleSubmit}><div className="form-header"><span className="mono-label">Send a signal</span><span className="form-status"><span className="status-dot" /> {formSent ? "Captured locally" : "Front-end form"}</span></div><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label><label>Subject<input name="subject" required placeholder="What are you building?" /></label><label>Message<textarea name="message" required placeholder="Tell me a little about the system or challenge." rows={4} /></label><Button type="submit" className="button button--primary button--form">{formSent ? "Message noted" : "Send message"} {formSent ? <Check size={16} /> : <Send size={15} />}</Button>{formSent && <p className="form-note"><MessageSquareText size={14} /> This demo form is not connected to an email backend yet. Please use the email link above to reach Suleman directly.</p>}</form></div>
        </section>

        <section className="final-cta"><div className="container final-cta__inner"><div><span className="mono-label">One more thing</span><h2>Building the next intelligent system?</h2></div><button onClick={() => scrollTo("contact")}>Let&apos;s talk <ArrowUpRight size={17} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><button className="brand-lockup" onClick={() => scrollTo("home")}><SignalMark small /><span>Suleman<span className="brand-dot">.</span></span></button><p>AI Engineer <span>/</span> AI Native Developer</p></div><div className="footer-links"><a href="https://linkedin.com/in/suleman-sabir" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="https://github.com/Suleman-Sabir/Hire-Mind" target="_blank" rel="noreferrer"><Github size={15} /> RecruVex repo</a><a href="mailto:sulemansabir00@gmail.com"><Mail size={15} /> Email</a></div><div className="footer-meta"><span className="mono-label">Signal Atelier / Lahore</span><span>© {currentYear} Suleman Sabir. All rights reserved.</span></div></div><div className="footer-bottom"><div className="container"><span>Designed for intelligent work.</span><span><span className="status-dot" /> Available for thoughtful conversations</span></div></div></footer>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}
