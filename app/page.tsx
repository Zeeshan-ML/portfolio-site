'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const skills = [
  'Python',
  'Machine Learning',
  'Generative AI',
  'LangChain',
  'LangGraph',
  'FastAPI',
  'Docker',
  'PostgreSQL',
  'PyTorch',
  'AWS',
]

const projects = [
  {
    number: '01',
    type: 'AI PRODUCT · 2024',
    title: 'Atlas Intelligence',
    description:
      'A multi-agent research workspace that turns scattered business data into clear, source-backed decisions.',
    tags: ['LangGraph', 'FastAPI', 'PostgreSQL'],
    accent: 'cyan',
  },
  {
    number: '02',
    type: 'GENERATIVE AI · 2024',
    title: 'Signal / RAG',
    description:
      'A production-ready retrieval system that gives teams reliable answers across thousands of internal documents.',
    tags: ['LangChain', 'Qdrant', 'Docker'],
    accent: 'violet',
  },
  {
    number: '03',
    type: 'MACHINE LEARNING · 2023',
    title: 'Forecast Engine',
    description:
      'An interpretable demand forecasting pipeline that helped an operations team plan inventory with confidence.',
    tags: ['Python', 'PyTorch', 'MLflow'],
    accent: 'lime',
  },
]

const principles = [
  'Make complex systems feel simple.',
  'Ship useful things, not just clever demos.',
  'Design for reliability from day one.',
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Muhammad Zeeshan home">
          <span className="brand-mark">MZ</span>
          <span className="brand-name">Muhammad Zeeshan</span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Available for select projects</div>
          <h1>I build AI that<br /><em>moves people</em> forward.</h1>
          <p className="hero-intro">AI Engineer focused on turning ambitious ideas into dependable products — from first prompt to production API.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#contact">Get in touch <ChevronRight size={15} /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-large" />
          <div className="orbit orbit-small" />
          <div className="hero-core"><Sparkles size={30} strokeWidth={1.4} /></div>
          <span className="orbit-label label-top">reasoning</span>
          <span className="orbit-label label-right">systems</span>
          <span className="orbit-label label-bottom">impact</span>
        </div>
        <div className="hero-meta">
          <span>BASED IN LAHORE, PAKISTAN</span>
          <span>01 — 03</span>
        </div>
      </section>

      <section id="work" className="work-section section-wrap">
        <div className="section-heading">
          <div><span className="section-kicker">Selected work</span><h2>Ideas, made <em>useful.</em></h2></div>
          <p>Tools should disappear into the experience. These are a few systems I&apos;ve built to make hard problems feel a little lighter.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card accent-${project.accent}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-content"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <a className="project-link" href="#contact" aria-label={`Learn more about ${project.title}`}><ArrowUpRight size={21} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-wrap">
        <div className="about-stamp"><Code2 size={20} /><span>BUILD<br />WITH<br />INTENT</span></div>
        <div className="about-copy"><span className="section-kicker">A little context</span><h2>Not just models.<br /><em>Momentum.</em></h2><p>I&apos;m Muhammad — an AI Engineer who enjoys the space between a messy problem and a clean solution. I work across machine learning, LLM applications, and backend systems to create technology people can actually rely on.</p><p>My best work happens in collaborative teams that care about craft, ask better questions, and want to leave things better than they found them.</p><a className="text-link" href="mailto:hello@muhammadzeeshan.dev">Say hello <ChevronRight size={15} /></a></div>
        <div className="principles"><span className="section-kicker">Working principles</span>{principles.map((principle, index) => <div className="principle" key={principle}><span>0{index + 1}</span><p>{principle}</p><Check size={16} /></div>)}</div>
      </section>

      <section id="skills" className="skills-section section-wrap"><div className="section-heading compact"><div><span className="section-kicker">The toolkit</span><h2>Built on a <em>strong stack.</em></h2></div><p>The tools change. The curiosity doesn&apos;t.</p></div><div className="skill-cloud">{skills.map((skill, index) => <span className={`skill-pill pill-${index % 4}`} key={skill}>{skill}</span>)}</div></section>

      <section id="contact" className="contact-section section-wrap"><div className="contact-line" /><span className="section-kicker">Have a problem worth solving?</span><h2>Let&apos;s make something<br /><em>meaningful.</em></h2><a className="button button-primary" href="mailto:hello@muhammadzeeshan.dev">Start a conversation <ArrowUpRight size={17} /></a><div className="contact-orbit" aria-hidden="true" /></section>

      <footer className="site-footer section-wrap"><span>© 2024 Muhammad Zeeshan</span><span>AI Engineer · Builder · Curious human</span><div className="socials"><a href="https://github.com" aria-label="GitHub">GH</a><a href="https://linkedin.com" aria-label="LinkedIn">in</a><a href="mailto:hello@muhammadzeeshan.dev" aria-label="Email"><Mail size={17} /></a></div></footer>
    </main>
  )
}
