import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import techmatchImg from './assets/techmatch-preview.png';
import logoNavbar from './assets/logo-yeferson-suescun-navbar.png';
import { 
  Code2, 
  Layers, 
  Database, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Send, 
  Menu, 
  X, 
  ChevronRight,
  Monitor,
  Server,
  Zap,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  FolderGit2,
  Loader2,
  Copy,
  Check
} from 'lucide-react';
import {
  ReactLogo,
  JavaScriptLogo,
  HtmlCssLogo,
  PythonLogo,
  DjangoLogo,
  PostgresSqliteLogo,
  GitGithubLogo,
  RestApiLogo
} from './components/TechLogos';
import { NeonSignTitle } from './components/NeonSignTitle';

const GithubIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const CustomLiquidLetterC = () => (
  <svg 
    className="custom-letter-c-svg" 
    viewBox="0 0 100 110" 
    style={{ 
      display: 'inline-block', 
      height: '0.88em', 
      verticalAlign: '-0.04em', 
      marginRight: '-0.05em',
      overflow: 'visible'
    }}
  >
    <defs>
      <linearGradient id="c-aurora-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff007f" />
        <stop offset="35%" stopColor="#00f3ff" />
        <stop offset="70%" stopColor="#00ffaa" />
        <stop offset="100%" stopColor="#ffe600" />
      </linearGradient>
      <filter id="c-aurora-blur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="1.5" />
        </feComponentTransfer>
      </filter>
    </defs>
    <path
      d="M 60 2 C 25 2, -8 28, 2 62 C 10 82, -2 95, 28 108 C 48 116, 78 108, 92 95"
      fill="none"
      stroke="url(#c-aurora-grad)"
      strokeWidth="18"
      strokeLinecap="round"
      filter="url(#c-aurora-blur)"
    />
    <path
      d="M 82 24 
         C 70 8, 48 5, 32 15 
         C 20 23, 14 34, 18 46 
         C 26 56, 36 60, 24 72 
         C 14 82, 28 98, 48 100 
         C 68 102, 82 90, 86 78 
         L 66 74 
         C 62 81, 54 84, 46 83 
         C 36 82, 30 75, 36 65 
         C 44 52, 38 42, 32 34 
         C 28 28, 35 21, 46 20 
         C 56 19, 66 23, 70 30 
         Z"
      fill="#000000"
      stroke="#000000"
      strokeWidth="2.5"
    />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const [formData, setFormData] = useState(() => {
    try {
      const savedDraft = localStorage.getItem('portfolio_contact_draft');
      if (savedDraft) {
        return JSON.parse(savedDraft);
      }
    } catch (e) {
      console.error('Error reading contact draft:', e);
    }
    return { name: '', email: '', message: '' };
  });

  // Automatically remember draft as user types
  useEffect(() => {
    try {
      if (formData.name || formData.email || formData.message) {
        localStorage.setItem('portfolio_contact_draft', JSON.stringify(formData));
      } else {
        localStorage.removeItem('portfolio_contact_draft');
      }
    } catch (e) {
      console.error('Error saving contact draft:', e);
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('suescunyeferson32@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/suescunyeferson32@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Mensaje: formData.message,
          _subject: `💼 Nuevo contacto desde el Portafolio: ${formData.name}`,
          _template: 'table'
        })
      });

      const result = await response.json();

      // Trigger celebration confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      localStorage.removeItem('portfolio_contact_draft');
      setTimeout(() => {
        setFormSubmitted(false);
      }, 7000);
    } catch (err) {
      console.error('Error al enviar formulario:', err);
      setFormError('Hubo un inconveniente temporal de conexión. Puedes hacer clic en el botón de correo para escribirle directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      id: 'techmatch',
      category: 'fullstack',
      title: 'TechMatch — E-Commerce & Personalizador 3D',
      subtitle: 'Proyecto Final de Máster (PFM)',
      description: 'Plataforma web híbrida de comercio electrónico para accesorios y consumibles tecnológicos. Integra un Asistente Inteligente de Compatibilidad marca/modelo, Personalizador 3D de Carcasas MagSafe en tiempo real y estudio de arte.',
      image: techmatchImg,
      tags: ['React', 'Django REST', 'Python', 'SQLite / Postgres', 'Glassmorphism'],
      featured: true,
      githubUrl: 'https://github.com/suescun2025/Proyecto-final-desarrollo-Full-Stack',
      liveUrl: 'http://127.0.0.1:8000',
      highlights: [
        '🔍 Asistente inteligente que cruza compatibilidad técnica de más de 50 marcas y modelos.',
        '🎨 Personalizador interactivo 3D con ajustes de encuadre, zoom, rotación 90° y desplazamiento X/Y.',
        '🛒 Carrito dinámico lateral persistente integrado con la API REST de Django.',
        '🔒 Autenticación de usuarios, hashing PBKDF2 y seguridad CSRF/XSS.'
      ]
    },
    {
      id: 'portfolio',
      category: 'frontend',
      title: 'Portfolio Web Profesional',
      subtitle: 'Plataforma de Marca Personal',
      description: 'Sitio web personal desarrollado con React y Vite, con modo oscuro futurista, animaciones de micro-interacción, diseño responsivo y efectos visuales de alta precisión.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      tags: ['React 18', 'Vite', 'Vanilla CSS', 'Responsive UI'],
      featured: false,
      githubUrl: 'https://github.com/suescun2025',
      liveUrl: '#',
      highlights: [
        '✨ Estética visual cuidada con paleta HSL oscura y efectos de vidrio (glassmorphism).',
        '📱 Totalmente responsivo para móviles, tablets y monitores ultrawide.',
        '⚡ Animaciones fluidas a 60fps con bajo consumo de recursos.'
      ]
    },
    {
      id: 'api-services',
      category: 'backend',
      title: 'API REST & Servicio de Notificaciones Email',
      subtitle: 'Arquitectura de Backend',
      description: 'Sistema backend modular con Django REST Framework para la gestión de productos, órdenes de compra y envío automático de comprobantes por correo electrónico.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      tags: ['Python', 'Django REST', 'Resend Email API', 'SQLite'],
      featured: false,
      githubUrl: 'https://github.com/suescun2025/Proyecto-final-desarrollo-Full-Stack',
      liveUrl: '#',
      highlights: [
        '✉️ Integración segura de envíos SMTP y Resend API para confirmación instantánea.',
        '🛡️ Filtros parametrizados en el ORM para prevenir inyecciones SQL.',
        '📊 Endpoints serializados para marcas, categorías y filtrado de stock.'
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const skills = [
    { 
      name: 'React.js', 
      category: 'Frontend', 
      level: 90, 
      icon: ReactLogo, 
      accentColor: '#61DAFB',
      glowColor: 'rgba(97, 218, 251, 0.3)',
      gradient: 'linear-gradient(90deg, #0284c7, #61DAFB)'
    },
    { 
      name: 'JavaScript (ES6+)', 
      category: 'Frontend', 
      level: 92, 
      icon: JavaScriptLogo, 
      accentColor: '#F7DF1E',
      glowColor: 'rgba(247, 223, 30, 0.3)',
      gradient: 'linear-gradient(90deg, #d97706, #F7DF1E)'
    },
    { 
      name: 'HTML5 & CSS3 (Glassmorphism)', 
      category: 'Frontend', 
      level: 95, 
      icon: HtmlCssLogo, 
      accentColor: '#E34F26',
      glowColor: 'rgba(227, 79, 38, 0.3)',
      gradient: 'linear-gradient(90deg, #E34F26, #1572B6)'
    },
    { 
      name: 'Python 3.11+', 
      category: 'Backend', 
      level: 88, 
      icon: PythonLogo, 
      accentColor: '#387eb8',
      glowColor: 'rgba(56, 126, 184, 0.3)',
      gradient: 'linear-gradient(90deg, #387eb8, #ffd438)'
    },
    { 
      name: 'Django / Django REST', 
      category: 'Backend', 
      level: 90, 
      icon: DjangoLogo, 
      accentColor: '#44B78B',
      glowColor: 'rgba(68, 183, 139, 0.3)',
      gradient: 'linear-gradient(90deg, #092E20, #44B78B)'
    },
    { 
      name: 'PostgreSQL / SQLite', 
      category: 'Databases', 
      level: 85, 
      icon: PostgresSqliteLogo, 
      accentColor: '#336791',
      glowColor: 'rgba(51, 103, 145, 0.35)',
      gradient: 'linear-gradient(90deg, #336791, #00ADEF)'
    },
    { 
      name: 'Git & GitHub', 
      category: 'Tools', 
      level: 90, 
      icon: GitGithubLogo, 
      accentColor: '#F05032',
      glowColor: 'rgba(240, 80, 50, 0.3)',
      gradient: 'linear-gradient(90deg, #F05032, #9333ea)'
    },
    { 
      name: 'APIs RESTful', 
      category: 'Backend', 
      level: 92, 
      icon: RestApiLogo, 
      accentColor: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.35)',
      gradient: 'linear-gradient(90deg, #0284c7, #a855f7)'
    }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="bg-cyber-grid" />

      <nav className="glass-nav">
        <div className="nav-container">
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src={logoNavbar} 
              alt="Yeferson Suescun" 
              className="nav-logo-brand"
            />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-links">
            <a href="#inicio" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', transition: 'var(--transition)' }}>Inicio</a>
            <a href="#sobre-mi" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', transition: 'var(--transition)' }}>Sobre Mí</a>
            <a href="#proyectos" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', transition: 'var(--transition)' }}>Proyectos</a>
            <a href="#habilidades" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', transition: 'var(--transition)' }}>Habilidades</a>
            <a href="#contacto" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.95rem' }}>
              <Mail size={17} /> Contactar
            </a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="section-padding" style={{ paddingTop: '145px', paddingBottom: '30px' }}>
        <div className="container" style={{ maxWidth: '1350px' }}>
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span className="status-pill">
                <span className="dot-pulse" />
                Disponible para nuevos proyectos & ofertas laborales
              </span>
            </div>

            <div className="papercut-hero-title-wrapper">
              <h1 className="papercut-hero-title">
                <span style={{ display: 'block' }}>Creando el equilibrio perfecto</span>
                <span style={{ display: 'block' }}>entre Diseño Web Futurista &amp;</span>
                <span style={{ display: 'block' }}>Arquitecturas Full Stack sólidas.</span>
              </h1>
            </div>

            <p style={{ fontSize: '1.12rem', color: '#fde047', lineHeight: 1.68, marginBottom: '16px', maxWidth: '840px', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
              Soy <strong style={{ color: '#fde047' }}>Yeferson Suescun</strong>, desarrollador web Full Stack especializado en la ingeniería de aplicaciones modernas, interactivas y de alto rendimiento. En la capa de <strong>frontend</strong>, domino los estándares fundamentales de <strong style={{ color: '#ff2a85' }}>HTML5 semántico, CSS3 avanzado y JavaScript (ES6+)</strong>, potenciando el desarrollo con el ecosistema de <strong style={{ color: '#ff2a85' }}>React.js</strong>, <strong>Vite</strong> y arquitectura <strong>Single Page Applications (SPA)</strong> para crear interfaces reactivas, fluidas y optimizadas. En el <strong>backend</strong>, diseño y estructuro la lógica del servidor con <strong style={{ color: '#818cf8' }}>Python &amp; Django REST Framework</strong>, desarrollando APIs RESTful seguras, arquitecturas modulares y gestión eficiente de bases de datos relacionales con <strong style={{ color: '#34d399' }}>PostgreSQL y SQLite</strong>.
            </p>

            <div style={{ marginBottom: '28px', maxWidth: '820px', padding: '18px 22px', background: 'rgba(15, 23, 42, 0.65)', borderLeft: '4px solid #38bdf8', borderRadius: '0 var(--radius-md) var(--radius-md) 0', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '1.08rem', color: '#f8fafc', lineHeight: 1.65, fontWeight: 500 }}>
                Destaco como un desarrollador Full Stack con un perfil marcadamente enfocado en producto y experiencia de usuario (UX). No me limito a hacer que el código funcione en el servidor; me aseguro de que la experiencia completa sea impactante, nítida, fluida y memorable para el usuario final.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <a href="#proyectos" className="btn-primary">
                <Sparkles size={18} /> Ver Mis Proyectos
              </a>
              <a href="https://github.com/suescun2025" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <GithubIcon size={18} /> GitHub Profile <ArrowUpRight size={16} />
              </a>
              <a href="mailto:suescunyeferson32@gmail.com" className="btn-secondary">
                <Mail size={18} /> Email
              </a>
            </div>

            {/* Quick Tech Badges Bar */}
            <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.85rem', color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginRight: '12px' }}>Tech Stack:</span>
              <span className="badge-tech"><ReactLogo size={16} /> React.js</span>
              <span className="badge-tech"><JavaScriptLogo size={16} /> JavaScript</span>
              <span className="badge-tech"><PythonLogo size={16} /> Python</span>
              <span className="badge-tech"><DjangoLogo size={16} /> Django REST</span>
              <span className="badge-tech"><PostgresSqliteLogo size={18} /> PostgreSQL / SQLite</span>
              <span className="badge-tech"><HtmlCssLogo size={18} /> HTML5 &amp; CSS3</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ / ABOUT ME SECTION */}
      <section id="sobre-mi" className="section-padding">
        <div className="container">
          <div className="about-paint-logo-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', marginBottom: '16px' }}>
            <h2 className="about-paint-logo-title">
              Sobre Mí <br />
              &amp; <br />
              Mi Filosofía de Trabajo
            </h2>
          </div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 32px auto' }}>
            Así es como concibo y construyo productos digitales como Desarrollador Full Stack.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div className="glass-card card-aesthetic-flower" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 600 }}>Exigencia Estética & Atención al Detalle</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.92rem' }}>
                Aplico una rigurosa atención al detalle y un alto estándar estético en cada fase del desarrollo. Integro soluciones de diseño innovadoras centradas en optimizar la experiencia de usuario, creando interfaces intuitivas y atractivas que despiertan el interés de las personas y hacen que se sientan cómodas y satisfechas al interactuar con la aplicación.
              </p>
            </div>

            <div className="glass-card card-creative-bulb" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 600 }}>Creatividad Orientada a Soluciones Reales</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.92rem' }}>
                Entiendo la creatividad como la capacidad de identificar las necesidades esenciales del usuario y traducirlas en soluciones técnicas precisas. Desarrollo funcionalidades pensadas para resolver problemas reales, garantizando que cada interacción y respuesta en los dispositivos funcione de manera impecable, eficiente y orientada a aportar un valor genuino.
              </p>
            </div>

            <div className="glass-card card-ai-decision" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 600 }}>Toma de Decisiones & Metodología Iterativa</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.92rem' }}>
                Mi metodología combina el criterio analítico con la potencia de la inteligencia artificial para crear un flujo de pensamiento y desarrollo de alta frecuencia. A través de ciclos inmediatos de retroalimentación, evalúo y ajusto cada variable funcional y visual sobre la marcha, logrando una toma de decisiones certera, veraz y orientada al alto rendimiento.
              </p>
            </div>

            <div className="glass-card card-fullstack-balance" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 600 }}>Equilibrio Full Stack</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.92rem' }}>
                El verdadero equilibrio Full Stack no radica solo en conectar bases de datos y servidores con la interfaz, sino en lograr que una arquitectura sólida conviva con un diseño visualmente cautivador. Unifico la robustez técnica con una estética cuidada para que cada aplicación no solo funcione de forma impecable, sino que realmente se sienta agradable, fluida y satisfactoria al usarla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS / PROJECTS SHOWCASE SECTION */}
      <section id="proyectos" className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <NeonSignTitle text="Proyectos Destacados" />
              <p className="section-subtitle" style={{ marginBottom: 0 }}>
                Explora algunas de las soluciones digitales y sistemas que he desarrollado.
              </p>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: 'rgba(15, 23, 42, 0.6)', padding: '6px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {['all', 'fullstack', 'frontend', 'backend'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: activeTab === tab ? 'linear-gradient(135deg, #0284c7, #4f46e5)' : 'transparent',
                    color: activeTab === tab ? '#fff' : '#94a3b8',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    transition: 'var(--transition)',
                    textTransform: 'capitalize'
                  }}
                >
                  {tab === 'all' ? 'Todos' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9, 13, 22, 0.95), transparent 70%)' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                    <span className="badge-tech" style={{ background: 'rgba(9, 13, 22, 0.8)', borderColor: 'var(--primary)' }}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                    {project.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>{project.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge-tech" style={{ fontSize: '0.78rem' }}>{tag}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <button 
                      onClick={() => setSelectedProject(project)} 
                      className="btn-primary" 
                      style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: '0.88rem' }}
                    >
                      <Sparkles size={16} /> Ver Detalles
                    </button>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-secondary"
                      style={{ padding: '10px 16px' }}
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HABILIDADES / SKILLS SECTION */}
      <section id="habilidades" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
        <div className="container">
          <h2 className="section-title">💻 Habilidades &amp; Tecnologías</h2>
          <p className="section-subtitle">
            Stack tecnológico con el que construyo aplicaciones modernas de extremo a extremo.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComp = skill.icon;
              return (
                <div 
                  key={index} 
                  className="glass-card skill-card-enhanced" 
                  style={{ 
                    padding: '22px 24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '18px',
                    '--skill-glow': skill.glowColor,
                    '--skill-color': skill.accentColor
                  }}
                >
                  <div 
                    className="skill-icon-wrapper"
                    style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '14px', 
                      background: 'rgba(15, 23, 42, 0.85)', 
                      border: `1px solid ${skill.accentColor}33`,
                      boxShadow: `0 4px 18px ${skill.glowColor}`,
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={30} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 600, fontSize: '1.0rem', color: '#f8fafc' }}>{skill.name}</span>
                      <span style={{ color: skill.accentColor, fontSize: '0.86rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '7px', width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${skill.level}%`, background: skill.gradient, borderRadius: '4px', transition: 'width 1s ease-out' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACTO / CONTACT SECTION */}
      <section id="contacto" className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            <div>
              <h2 className="section-title">📬 Hablemos de tu próximo proyecto</h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '32px', fontSize: '1.05rem' }}>
                ¿Tienes una idea, un proyecto o una propuesta laboral? Estaré encantado de conectar contigo y colaborar.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=suescunyeferson32@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-card" 
                  style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: '#fff' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Correo Electrónico</div>
                      <div style={{ fontWeight: 600 }}>suescunyeferson32@gmail.com</div>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copiar correo al portapapeles"
                    style={{
                      background: copiedEmail ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      border: `1px solid ${copiedEmail ? 'rgba(52, 211, 153, 0.5)' : 'rgba(255, 255, 255, 0.15)'}`,
                      color: copiedEmail ? '#34d399' : '#cbd5e1',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s'
                    }}
                  >
                    {copiedEmail ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar</>}
                  </button>
                </a>

                <a href="https://github.com/suescun2025" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: '#fff' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GithubIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Perfil de GitHub</div>
                    <div style={{ fontWeight: 600 }}>github.com/suescun2025</div>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: '#fff' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.1)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LinkedinIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LinkedIn</div>
                    <div style={{ fontWeight: 600 }}>Yeferson Suescun</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px' }}>Envía un mensaje</h3>
              
              {formSubmitted ? (
                <div style={{ padding: '28px 24px', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.4)', borderRadius: '14px', color: '#34d399', textAlign: 'center' }}>
                  <CheckCircle2 size={44} style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>¡Mensaje Enviado con Éxito!</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Tu mensaje ha sido enviado directamente a <strong>suescunyeferson32@gmail.com</strong>. Yeferson te responderá lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} autoComplete="on" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {formError && (
                    <div style={{ padding: '14px 16px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '10px', color: '#fca5a5', fontSize: '0.9rem' }}>
                      {formError}
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '8px' }}>Tu Nombre</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      name="name" 
                      autoComplete="name"
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Ej. Carlos Pérez" 
                      required
                      disabled={isSubmitting}
                      style={{ width: '100%', padding: '12px 16px', background: 'rgba(9, 13, 22, 0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }} 
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '8px' }}>Correo Electrónico</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      name="email" 
                      autoComplete="email"
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="tu@email.com" 
                      required
                      disabled={isSubmitting}
                      style={{ width: '100%', padding: '12px 16px', background: 'rgba(9, 13, 22, 0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none' }} 
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '8px' }}>Mensaje</label>
                    <textarea 
                      id="contact-message"
                      name="message" 
                      rows={4} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="¿En qué proyecto te gustaría colaborar?" 
                      required
                      disabled={isSubmitting}
                      style={{ width: '100%', padding: '12px 16px', background: 'rgba(9, 13, 22, 0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary" 
                    style={{ 
                      width: '100%', 
                      justifyContent: 'center', 
                      padding: '14px',
                      opacity: isSubmitting ? 0.75 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> 
                        Enviando mensaje...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(9, 13, 22, 0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div className="glass-card" style={{ maxWidth: '750px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '36px', position: 'relative' }}>
            <button 
              onClick={() => setSelectedProject(null)} 
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>

            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              {selectedProject.subtitle}
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>{selectedProject.title}</h2>
            
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '14px', marginBottom: '24px' }} />

            <p style={{ color: '#cbd5e1', lineHeight: 1.6, marginBottom: '24px', fontSize: '1.02rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>Puntos Clave del Proyecto:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: 0, listStyle: 'none', marginBottom: '28px' }}>
              {selectedProject.highlights.map((h, idx) => (
                <li key={idx} style={{ color: '#94a3b8', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: '#34d399', flexShrink: 0, marginTop: '2px' }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <GithubIcon size={18} /> Ver Código en GitHub
              </a>
              <button onClick={() => setSelectedProject(null)} className="btn-secondary">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '32px 0', background: 'rgba(9, 13, 22, 0.95)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Diseñado & desarrollado por <strong style={{ color: '#cbd5e1' }}>Yeferson Suescun</strong> — Desarrollador Full Stack © 2026
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://github.com/suescun2025" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}><GithubIcon size={18} /></a>
            <a href="mailto:suescunyeferson32@gmail.com" style={{ color: '#94a3b8', textDecoration: 'none' }}><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
