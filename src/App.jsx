import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import yefersonProfile from './assets/yeferson-profile.png';
import techmatchImg from './assets/techmatch-preview.png';
import destinosImg from './assets/destinos-turisticos-preview.jpg';
import { 
  Layers, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Menu, 
  X, 
  ArrowUpRight, 
  Loader2, 
  Copy, 
  Check,
  Bookmark,
  Compass,
  Cpu
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

      await response.json();

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
      tags: ['React.js', 'Django REST', 'Python', 'PostgreSQL / SQLite', 'UI Editorial'],
      featured: true,
      githubUrl: 'https://github.com/suescun2025/Proyecto-final-desarrollo-Full-Stack',
      liveUrl: 'https://techmatch-4gv0.onrender.com/',
      highlights: [
        '🔍 Asistente inteligente que cruza compatibilidad técnica de más de 50 marcas y modelos.',
        '🎨 Personalizador interactivo 3D con ajustes de encuadre, zoom, rotación 90° y desplazamiento X/Y.',
        '🛒 Carrito dinámico lateral persistente integrado con la API REST de Django.',
        '🔒 Autenticación de usuarios, hashing PBKDF2 y seguridad CSRF/XSS.'
      ]
    },
    {
      id: 'destinos-turisticos',
      category: 'frontend',
      title: 'Sitio Web de Destinos Turísticos',
      subtitle: 'Guía y Álbum Interactivo de Viajes',
      description: 'Plataforma web interactiva con ranking, guías culturales y álbum fotográfico digital de los principales destinos turísticos del mundo, con diseño responsivo y efectos visuales modernos.',
      image: destinosImg,
      tags: ['JavaScript (ES6+)', 'HTML5 Semántico', 'CSS3 Moderno', 'Vite', 'Responsive UI'],
      featured: false,
      githubUrl: 'https://github.com/suescun2025/destinos-turisticos',
      liveUrl: 'https://suescun2025.github.io/destinos-turisticos/',
      highlights: [
        '🌍 Álbum interactivo tipo Polaroid con destinos icónicos (Roma, París, Pisa, Venecia).',
        '🧭 Guías detalladas de viaje, atractivos culturales y recomendaciones.',
        '📱 Interfaz 100% responsiva y optimizada para todo tipo de pantallas y dispositivos.',
        '⚡ Animaciones fluidas, efectos de desenfoque y navegación interactiva.'
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
      accentColor: '#e5b95c'
    },
    { 
      name: 'JavaScript (ES6+)', 
      category: 'Frontend', 
      level: 92, 
      icon: JavaScriptLogo, 
      accentColor: '#e5b95c'
    },
    { 
      name: 'HTML5 & CSS3 Avanzado', 
      category: 'Frontend', 
      level: 95, 
      icon: HtmlCssLogo, 
      accentColor: '#e5b95c'
    },
    { 
      name: 'Python 3.11+', 
      category: 'Backend', 
      level: 88, 
      icon: PythonLogo, 
      accentColor: '#e5b95c'
    },
    { 
      name: 'Django / Django REST', 
      category: 'Backend', 
      level: 90, 
      icon: DjangoLogo, 
      accentColor: '#e5b95c'
    },
    { 
      name: 'PostgreSQL / SQLite', 
      category: 'Databases', 
      level: 85, 
      icon: PostgresSqliteLogo, 
      accentColor: '#e5b95c'
    },
    { 
      name: 'Git & GitHub', 
      category: 'Tools', 
      level: 90, 
      icon: GitGithubLogo, 
      accentColor: '#e5b95c'
    },
    { 
      name: 'APIs RESTful', 
      category: 'Backend', 
      level: 92, 
      icon: RestApiLogo, 
      accentColor: '#e5b95c'
    }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="bg-canvas-texture" />

      {/* BARRA DE NAVEGACIÓN */}
      <nav className="glass-nav">
        <div className="nav-container">
          <a href="#inicio" className="nav-brand-title" style={{ textDecoration: 'none' }}>
            <span>YEFERSON</span> SUESCUN
          </a>

          <div className="nav-links desktop-links">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre Mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contacto" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
              <Mail size={16} /> Contactar
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon"
            style={{ display: 'none' }}
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div style={{ paddingTop: '16px', paddingBottom: '8px', display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid var(--border-gold)', marginTop: '12px' }}>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Inicio</a>
            <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Sobre Mí</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Proyectos</a>
            <a href="#habilidades" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Habilidades</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ justifyContent: 'center' }}>
              <Mail size={16} /> Contactar
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION — VENTANA EDITORIAL PRINCIPAL */}
      <section id="inicio" className="section-padding" style={{ paddingTop: '130px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="editorial-window" style={{ padding: 'clamp(28px, 4vw, 56px)' }}>
            
            {/* Cinta / Ribbon decorativo */}
            <div className="editorial-ribbon" title="Senior Software Profile">
              <Bookmark size={18} />
            </div>

            {/* Arcos concéntricos de fondo */}
            <div className="gold-geometric-rings" style={{ width: '420px', height: '420px', top: '-100px', right: '-100px', opacity: 0.6 }} />

            <div className="hero-flex-layout" style={{ display: 'flex', alignItems: 'center', gap: '50px', position: 'relative', zIndex: 2 }}>
              
              {/* Fotografía de Yeferson con Marco Arqueado Editorial */}
              <div className="portrait-arch-container" style={{ flexShrink: 0 }}>
                {/* Patrón diagonal de fondo esquina superior derecha */}
                <div className="portrait-stripe-box-tr diagonal-stripes-accent" />
                
                {/* Patrón diagonal de fondo esquina inferior izquierda */}
                <div className="portrait-stripe-box diagonal-stripes-accent" />

                {/* Arco externo fino */}
                <div className="portrait-outer-arch" />

                {/* Marco de la Foto */}
                <div className="portrait-arch-frame">
                  <img 
                    src={yefersonProfile} 
                    alt="Yeferson Suescun — Desarrollador Full Stack" 
                  />
                </div>
              </div>

              {/* Contenido Editorial del Hero */}
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <span className="status-pill">
                    <span className="dot-pulse" />
                    Disponible para nuevos proyectos &amp; oportunidades laborales
                  </span>
                </div>

                <div className="editorial-tag">PORTAFOLIO PROFESIONAL</div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.5px', marginBottom: '18px', color: 'var(--text-primary)' }}>
                  YEFERSON SUESCUN <br />
                  <span style={{ color: 'var(--accent-gold-light)', fontWeight: 700, fontSize: '0.85em' }}>
                    DESARROLLADOR FULL STACK
                  </span>
                </h1>

                <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '780px' }}>
                  Especializado en la ingeniería de aplicaciones web modernas, interactivas y de alto rendimiento. En el <strong>frontend</strong> desarrollo con <strong style={{ color: 'var(--accent-gold-light)' }}>React.js, JavaScript (ES6+), HTML5 y CSS3 avanzado</strong> bajo arquitecturas SPA fluidas. En el <strong>backend</strong> diseño APIs robustas con <strong style={{ color: 'var(--accent-gold-light)' }}>Python &amp; Django REST Framework</strong> y gestión eficiente de bases de datos relacionales con <strong style={{ color: 'var(--accent-gold-light)' }}>PostgreSQL y SQLite</strong>.
                </p>

                {/* Nota de Enfoque UX & Producto */}
                <div style={{ marginBottom: '28px', padding: '16px 20px', background: 'var(--bg-card-nested)', borderLeft: '3px solid var(--accent-gold)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.6, margin: 0 }}>
                    Enfoque integral en producto y experiencia de usuario (UX): unifico la solidez del código en el servidor con interfaces agradables, intuitivas y memorables.
                  </p>
                </div>

                {/* Botones de Acción */}
                <div className="hero-actions-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                  <a href="#proyectos" className="btn-primary">
                    <Sparkles size={18} /> Ver Mis Proyectos
                  </a>
                  <a href="https://github.com/suescun2025" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <GithubIcon size={18} /> GitHub <ArrowUpRight size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/yeferson-suescun-ba9824304/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <LinkedinIcon size={18} /> LinkedIn <ArrowUpRight size={16} />
                  </a>
                  <a href="mailto:suescunyeferson32@gmail.com" className="btn-secondary">
                    <Mail size={18} /> Email
                  </a>
                </div>

                {/* Quick Tech Badges */}
                <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid rgba(200, 155, 60, 0.2)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginRight: '6px' }}>Stack Clave:</span>
                  <span className="badge-tech"><ReactLogo size={15} /> React.js</span>
                  <span className="badge-tech"><JavaScriptLogo size={15} /> JavaScript</span>
                  <span className="badge-tech"><PythonLogo size={15} /> Python</span>
                  <span className="badge-tech"><DjangoLogo size={15} /> Django REST</span>
                  <span className="badge-tech"><PostgresSqliteLogo size={16} /> PostgreSQL / SQLite</span>
                  <span className="badge-tech"><HtmlCssLogo size={16} /> HTML5 &amp; CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ / FILOSOFÍA DE TRABAJO */}
      <section id="sobre-mi" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="editorial-tag">FILOSOFÍA DE TRABAJO</div>
            <h2 className="section-title">Sobre Mí &amp; Visión Profesional</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Así es como concibo y construyo productos digitales como Desarrollador Full Stack.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '32px', overflow: 'hidden' }}>
              <div className="diagonal-stripes-muted" style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', borderRadius: '0 var(--radius-lg) 0 30px' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--bg-card-nested)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-light)', marginBottom: '20px' }}>
                <Compass size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>Exigencia Estética &amp; Atención al Detalle</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.94rem' }}>
                Aplico una rigurosa atención al detalle y un alto estándar estético en cada fase del desarrollo. Integro soluciones de diseño centradas en optimizar la experiencia de usuario, creando interfaces intuitivas y atractivas que despiertan el interés y generan satisfacción al interactuar con la aplicación.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px', overflow: 'hidden' }}>
              <div className="diagonal-stripes-muted" style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', borderRadius: '0 var(--radius-lg) 0 30px' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--bg-card-nested)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-light)', marginBottom: '20px' }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>Creatividad Orientada a Soluciones Reales</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.94rem' }}>
                Entiendo la creatividad como la capacidad de identificar las necesidades esenciales del usuario y traducirlas en soluciones técnicas precisas. Desarrollo funcionalidades pensadas para resolver problemas reales, garantizando que cada interacción funcione de manera impecable, eficiente y con valor genuino.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px', overflow: 'hidden' }}>
              <div className="diagonal-stripes-muted" style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', borderRadius: '0 var(--radius-lg) 0 30px' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--bg-card-nested)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-light)', marginBottom: '20px' }}>
                <Cpu size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>Toma de Decisiones &amp; Metodología Iterativa</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.94rem' }}>
                Mi metodología combina el criterio analítico con la potencia de la inteligencia artificial para un desarrollo ágil y de alta precisión. A través de ciclos inmediatos de retroalimentación, evalúo y ajusto cada variable funcional y visual sobre la marcha, orientando los resultados al alto rendimiento.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px', overflow: 'hidden' }}>
              <div className="diagonal-stripes-muted" style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', borderRadius: '0 var(--radius-lg) 0 30px' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--bg-card-nested)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-light)', marginBottom: '20px' }}>
                <Layers size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>Equilibrio Full Stack</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.94rem' }}>
                El verdadero equilibrio Full Stack consiste en lograr que una arquitectura sólida conviva con un diseño visualmente cautivador. Unifico la robustez técnica del backend con una estética cuidada en el frontend para que cada aplicación sea agradable, fluida y satisfactoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS SHOWCASE */}
      <section id="proyectos" className="section-padding" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div>
              <div className="editorial-tag">PORTAFOLIO DE TRABAJOS</div>
              <h2 className="section-title">Proyectos Destacados</h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>
                Explora las aplicaciones web completas y plataformas que he diseñado y programado.
              </p>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-surface)', padding: '6px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-gold)' }}>
              {[
                { id: 'all', label: 'Todos' },
                { id: 'fullstack', label: 'Full Stack' },
                { id: 'frontend', label: 'Frontend' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: activeTab === tab.id ? 'linear-gradient(135deg, #deb352 0%, #c89b3c 100%)' : 'transparent',
                    color: activeTab === tab.id ? '#12221c' : 'var(--text-secondary)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    transition: 'var(--transition)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Proyectos */}
          <div className="projects-grid-two-col">
            {filteredProjects.map((project) => {
              const projectLink = (project.liveUrl && project.liveUrl !== '#')
                ? project.liveUrl
                : project.githubUrl;

              return (
                <div key={project.id} className="project-card-editorial">
                  
                  {/* Cinta dorada en la esquina */}
                  <div className="editorial-ribbon" style={{ right: '20px' }}>
                    <Bookmark size={16} />
                  </div>

                  {/* Imagen con enlace directo */}
                  <a 
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-box"
                    title={`Abrir ${project.title} en una nueva pestaña`}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                    />
                    <div className="project-image-gradient" />
                    
                    <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 3 }}>
                      <span className="badge-tech" style={{ background: 'rgba(17, 34, 28, 0.9)', borderColor: 'var(--accent-gold)' }}>
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="project-hover-pill">
                      <div className="project-hover-badge">
                        <ExternalLink size={16} />
                        <span>Abrir Proyecto ↗</span>
                      </div>
                    </div>
                  </a>

                  {/* Detalles del Proyecto */}
                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: 'var(--accent-gold-light)', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '6px', letterSpacing: '0.5px' }}>
                      {project.subtitle}
                    </div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {project.tags.map((tag, i) => (
                        <span key={i} className="badge-tech" style={{ fontSize: '0.78rem' }}>{tag}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '10px', paddingTop: '18px', borderTop: '1px solid rgba(200, 155, 60, 0.2)' }}>
                      <button 
                        onClick={() => setSelectedProject(project)} 
                        className="btn-primary" 
                        style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '0.88rem' }}
                      >
                        <Sparkles size={16} /> Ver Detalles
                      </button>
                      
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-secondary"
                          style={{ padding: '10px 14px' }}
                          title="Ver Sitio Web en Vivo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-secondary"
                        style={{ padding: '10px 14px' }}
                        title="Ver Código en GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HABILIDADES & STACK TECNOLÓGICO */}
      <section id="habilidades" className="section-padding">
        <div className="container">
          <div className="editorial-window" style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="editorial-tag">COMPETENCIAS TÉCNICAS</div>
              <h2 className="section-title">Habilidades &amp; Tecnologías</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Herramientas y lenguajes con los que desarrollo soluciones de extremo a extremo.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => {
                const IconComp = skill.icon;
                return (
                  <div key={index} className="skill-card-editorial">
                    <div className="skill-icon-box">
                      <IconComp size={28} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                        <span style={{ color: 'var(--accent-gold-light)', fontSize: '0.86rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{skill.level}%</span>
                      </div>
                      <div className="skill-progress-bar">
                        <div className="skill-progress-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO & FORMULARIO */}
      <section id="contacto" className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
            
            {/* Canales Directos */}
            <div className="editorial-window" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="editorial-tag">CONTACTO DIRECTO</div>
                <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Hablemos de tu próximo proyecto</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px', fontSize: '1.02rem' }}>
                  ¿Tienes una propuesta laboral, proyecto en mente o consulta técnica? Estaré encantado de conversar contigo.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=suescunyeferson32@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="glass-card" 
                    style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: '#fff' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--bg-card-nested)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-gold)' }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Correo Electrónico</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>suescunyeferson32@gmail.com</div>
                      </div>
                    </div>
                    <button 
                      onClick={handleCopyEmail}
                      type="button"
                      title="Copiar correo al portapapeles"
                      style={{
                        background: copiedEmail ? 'rgba(52, 211, 153, 0.2)' : 'rgba(200, 155, 60, 0.15)',
                        border: `1px solid ${copiedEmail ? 'rgba(52, 211, 153, 0.5)' : 'var(--border-gold)'}`,
                        color: copiedEmail ? '#34d399' : 'var(--accent-gold-light)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'var(--transition)'
                      }}
                    >
                      {copiedEmail ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar</>}
                    </button>
                  </a>

                  <a href="https://github.com/suescun2025" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#fff' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--bg-card-nested)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-gold)' }}>
                      <GithubIcon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Perfil de GitHub</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>github.com/suescun2025</div>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/yeferson-suescun-ba9824304/" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#fff' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--bg-card-nested)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-gold)' }}>
                      <LinkedinIcon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>LinkedIn Profesional</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>linkedin.com/in/yeferson-suescun</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario de Mensaje */}
            <div className="editorial-window" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '20px', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                Envía un mensaje
              </h3>
              
              {formSubmitted ? (
                <div style={{ padding: '28px 24px', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.4)', borderRadius: '14px', color: '#34d399', textAlign: 'center' }}>
                  <CheckCircle2 size={44} style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>¡Mensaje Enviado con Éxito!</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Tu mensaje ha sido enviado directamente a <strong>suescunyeferson32@gmail.com</strong>. Yeferson te responderá a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} autoComplete="on" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {formError && (
                    <div style={{ padding: '14px 16px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '10px', color: '#fca5a5', fontSize: '0.9rem' }}>
                      {formError}
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>Tu Nombre</label>
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
                      className="form-input-editorial"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>Correo Electrónico</label>
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
                      className="form-input-editorial"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>Mensaje</label>
                    <textarea 
                      id="contact-message"
                      name="message" 
                      rows={4} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="¿En qué proyecto te gustaría colaborar?" 
                      required
                      disabled={isSubmitting}
                      className="form-input-editorial"
                      style={{ resize: 'vertical' }}
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

      {/* MODAL DETALLES DEL PROYECTO */}
      {selectedProject && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(23, 45, 37, 0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div className="editorial-window" style={{ maxWidth: '750px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '36px', position: 'relative' }}>
            <button 
              onClick={() => setSelectedProject(null)} 
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--bg-card-nested)', border: '1px solid var(--border-gold)', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>

            <div style={{ color: 'var(--accent-gold-light)', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '8px', letterSpacing: '0.5px' }}>
              {selectedProject.subtitle}
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{selectedProject.title}</h2>
            
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', marginBottom: '24px', border: '1px solid var(--border-gold)' }} />

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px', fontSize: '1.02rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-gold-light)' }}>Puntos Clave del Proyecto:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: 0, listStyle: 'none', marginBottom: '28px' }}>
              {selectedProject.highlights.map((h, idx) => (
                <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-gold-light)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary" 
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <ExternalLink size={18} /> Ver Sitio en Vivo
                </a>
              )}
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? "btn-secondary" : "btn-primary"} 
                style={{ flex: 1, justifyContent: 'center' }}
              >
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
      <footer style={{ borderTop: '1px solid var(--border-gold)', padding: '36px 0', background: 'var(--bg-surface)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Diseñado &amp; desarrollado por <strong style={{ color: 'var(--accent-gold-light)' }}>Yeferson Suescun</strong> — Desarrollador Full Stack © 2026
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="https://github.com/suescun2025" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} title="GitHub"><GithubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/yeferson-suescun-ba9824304/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} title="LinkedIn"><LinkedinIcon size={20} /></a>
            <a href="mailto:suescunyeferson32@gmail.com" style={{ color: 'var(--text-secondary)' }} title="Email"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
