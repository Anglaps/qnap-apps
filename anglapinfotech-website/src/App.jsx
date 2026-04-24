import React, { useState, useEffect } from 'react';
import './App.css';
import CRMStrategy from './CRMStrategy';
import { motion } from 'framer-motion';
import { 
  Menu, X, ChevronRight, BarChart2, Zap, 
  Cpu, LayoutDashboard, Database, Target,
  Check, Monitor, Map, Mail, Phone, Lock, Users,
  Smartphone, ShoppingBag, DollarSign, Factory,
  TrendingUp, Newspaper, Lightbulb,
  Globe, Headset, Sun, Moon
} from 'lucide-react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme_preference') || 'light');
  const [isAuto, setIsAuto] = useState(!localStorage.getItem('theme_preference'));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    service: '',
    query: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, query } = contactForm;
    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService Interest: ${service}\n\nMessage:\n${query}`);
    window.location.href = `mailto:sales@anglapinfotech.com?subject=${subject}&body=${body}`;
  };

  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => {
      if (currentHash === '' || currentHash.startsWith('#')) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentHash]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0); // Reset scroll on path change
    };
    window.addEventListener('hashchange', handleHashChange);
    // Setting initial hash on mount
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (!isAuto) {
      localStorage.setItem('theme_preference', theme);
    }
  }, [theme, isAuto]);

  useEffect(() => {
    const detectTheme = async () => {
      if (!isAuto) return;

      const fallbackTimeCheck = () => {
        const hour = new Date().getHours();
        const isNight = hour >= 19 || hour < 7;
        setTheme(isNight ? 'dark' : 'light');
      };

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`);
            const data = await res.json();
            if (data.status === 'OK') {
              const { sunrise, sunset } = data.results;
              const now = new Date();
              const sunriseDate = new Date(sunrise);
              const sunsetDate = new Date(sunset);

              if (now >= sunriseDate && now < sunsetDate) {
                setTheme('light');
              } else {
                setTheme('dark');
              }
            } else {
              fallbackTimeCheck();
            }
          } catch (error) {
            fallbackTimeCheck();
          }
        }, fallbackTimeCheck);
      } else {
        fallbackTimeCheck();
      }
    };

    detectTheme();
    // Refresh every hour to check for sunset transitions
    const interval = setInterval(detectTheme, 3600000);
    return () => clearInterval(interval);
  }, [isAuto]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    setIsAuto(false);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const services = [
    {
      title: "Sales Performance Management",
      description: "Design transparent commission structures and unify territory schemas with tools like Varicent to amplify sales rep productivity and alignment.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Enterprise Business Planning",
      description: "Integrate strategic, financial, operational, and technology planning to align your organization, optimize resources, and drive growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Digital Transformation",
      description: "Modernize operations, boost efficiency, and enhance customer experiences. Streamline workflows and accelerate growth.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "AI Center of Excellence",
      description: "Transform AI from scattered initiatives into a unified, enterprise-wide capability enabling consistent innovation and responsible deployment.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Revenue & Sales",
      description: "Intelligent revenue strategies built to outperform. Align with your goals, integrate seamlessly and boost CRM performance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Data Engineering & Analytics",
      description: "Fuel intelligent decisions and business agility. We turn disconnected data into a strategic advantage for AI at scale.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },

    {
      title: "CRM Strategy & Implementation",
      description: "Optimize your customer relationships with AI-driven CRM solutions. Enhance lead management, sales automation, and customer retention.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "AI Customer Experience",
      description: "Leverage generative AI to personalize customer interactions, automate support, and provide 24/7 intelligent assistance across all channels.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const products = [
    {
      title: "NexusClub: Enterprise Club Management",
      description: "A professional, full-cycle club management ecosystem. Unified member analytics, automated revenue streams, and enterprise-grade facility orchestration.",
      image: "/professional-club.png",
      url: "https://clubs.anglaps.com"
    },
    {
      title: "Lumina: AI Event Media",
      description: "Next-gen professional photo booths powered by AI. Real-time background synthesis, cinematic enhancements, and instant social orchestration.",
      image: "/photo-booth.png"
    }
  ];

  return (
    <div className="app-container">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo-container">
            <img src={theme === 'light' ? "/logo-v2.png" : "/logo-night-v2.png"} alt="Anglap Infotech Logo" className="logo-img" />
          </div>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="nav-links">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#industries" onClick={() => setMobileMenuOpen(false)}>Industries</a>
              <a href="#insights" onClick={() => setMobileMenuOpen(false)}>Insights</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            </div>

            <div className="nav-actions">
              <button 
                className="btn btn-secondary theme-toggle" 
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                style={{ padding: '8px', minWidth: '40px', borderRadius: '50%', position: 'relative' }}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                {isAuto && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '-6px', 
                    right: '-6px', 
                    fontSize: '8px', 
                    background: 'var(--accent-1)', 
                    color: 'white', 
                    padding: '2px 4px', 
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    letterSpacing: '0.5px'
                  }}>AUTO</span>
                )}
              </button>
            </div>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {currentHash === '#/crm-strategy' ? (
        <CRMStrategy />
      ) : (
        <React.Fragment>
          {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="badge">AI-Ingrained Business Consulting</motion.div>
            <motion.div variants={fadeUp}>
              <h1>
                Predict. Plan. <span className="gradient-text">Perform.</span><br />
                Powered by <span className="gradient-text-alt">AI.</span>
              </h1>
            </motion.div>
            <motion.p variants={fadeUp}>
              We are an AI-ingrained business consultancy and advisory company that monetizes AI to create strategies that make economic sense for your business, bridging the gap between innovation and reality.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-buttons">
              <button className="btn btn-primary">Explore Solutions <ChevronRight size={20} style={{ marginLeft: '8px' }} /></button>
              <button className="btn btn-secondary">Contact an Expert</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* About Us Section (Winofa Style) */}
      <section className="section about-section" id="about">
        <div className="container">
          <div className="about-winofa-layout">
            <motion.div 
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Stylized Border Background */}
              <div className="image-border-bg"></div>
              <img 
                src="/about-team.png" 
                alt="Anglap Infotech Team" 
                className="about-main-img" 
              />
              <div className="stat-floating-card">
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text-primary)' }}>150+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Successful Deployments</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="about-content-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-subtitle">#ABOUT ANGLAP</div>
              <h2 className="about-title">Who We Are</h2>
              <p className="about-description">
                At Anglap Infotech, we create Winning Opportunities For All. We are an AI-ingrained business consultancy that bridges the gap between theoretical innovation and practical economic reality. 
                <br /><br />
                We help organizations innovate, grow, and remain competitive in a changing digital world. Our mission is to connect business goals with tech solutions through expert consulting, custom product engineering, and strategic data governance.
              </p>
              
              <div className="pillar-grid">
                <div className="pillar-item">
                  <h4>Our Mission</h4>
                  <p>To turn complex AI into profitable strategies that make economic sense.</p>
                </div>
                <div className="pillar-item">
                  <h4>Our Vision</h4>
                  <p>To redefine the agentic foundation of modern global industry.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <motion.div 
            className="services-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2>Realize Strategic Outcomes Faster</h2>
            <p>Our world-class AI-ingrained solutions are deeply rooted and inseparable from every facet of strategy, execution, and innovation.</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div variants={fadeUp} className="image-card" key={index}>
                <img src={service.image} alt={service.title} className="image-img" />
                <div className="image-overlay">
                  <h3>{service.title}</h3>
                  <p style={{ color: '#ffffff', marginBottom: '20px', fontSize: '1rem', fontWeight: '500', lineHeight: '1.6' }}>{service.description}</p>
                  <a 
                    href={service.url || (service.title === "CRM Strategy & Implementation" ? "#/crm-strategy" : "#services")} 
                    target={service.url ? "_blank" : undefined}
                    rel={service.url ? "noopener noreferrer" : undefined}
                    className="service-link" 
                    style={{ color: 'var(--accent-1)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    Learn more <ChevronRight size={18} />
                  </a>
                </div>
                <div className="image-title">
                  <h3>{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section" id="products" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <motion.div 
            className="services-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="badge" style={{ background: 'var(--accent-1)', color: 'white' }}>Proprietary Ecosystem</div>
            <h2>Built in Anglaps: Products</h2>
            <p>Enterprise-grade software solutions engineered to solve complex operational challenges with agentic AI and predictive analytics.</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {products.map((product, index) => (
              <motion.div variants={fadeUp} className="image-card" key={index} style={{ height: '480px' }}>
                <img src={product.image} alt={product.title} className="image-img" />
                <div className="image-overlay" style={{ minHeight: '60%' }}>
                  <h3>{product.title}</h3>
                  <p style={{ color: '#ffffff', marginBottom: '24px', fontSize: '1.05rem', fontWeight: '500', lineHeight: '1.6' }}>{product.description}</p>
                  <a 
                    href={product.url || "#products"} 
                    target={product.url ? "_blank" : undefined}
                    rel={product.url ? "noopener noreferrer" : undefined}
                    className="btn btn-primary" 
                    style={{ width: 'fit-content', padding: '12px 24px' }}
                  >
                    {product.url ? "Launch Solution" : "View Case Study"} <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                  </a>
                </div>
                <div className="image-title">
                  <h3>{product.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Industries Use Cases Section */}
      <section className="section" id="industries">
        <div className="container">
          <motion.div 
            className="services-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2>Driving Value Across Industries</h2>
            <p>Our solutions are tailored to solve the specific complexities and capture unique opportunities within your industry verticals.</p>
          </motion.div>

          <motion.div 
            className="industries-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="image-card">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" alt="Technology & Comms" className="image-img" />
              <div className="image-overlay">
                <h3>Technology & Comms</h3>
                <ul className="use-case-list">
                  <li><ChevronRight size={14} /> Predictive churn analytics & retention</li>
                  <li><ChevronRight size={14} /> Multi-channel customer service automation</li>
                  <li><ChevronRight size={14} /> Network load optimization via AI</li>
                </ul>
              </div>
              <div className="image-title">
                <h3>Technology & Comms</h3>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="image-card">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" alt="Financial Services" className="image-img" />
              <div className="image-overlay">
                <h3>Financial Services</h3>
                <ul className="use-case-list">
                  <li><ChevronRight size={14} /> Real-time fraud detection & prevention</li>
                  <li><ChevronRight size={14} /> AI agents for wealth management</li>
                  <li><ChevronRight size={14} /> Automated regulatory compliance reporting</li>
                </ul>
              </div>
              <div className="image-title">
                <h3>Financial Services</h3>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="image-card">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="Manufacturing & Energy" className="image-img" />
              <div className="image-overlay">
                <h3>Manufacturing & Energy</h3>
                <ul className="use-case-list">
                  <li><ChevronRight size={14} /> Predictive maintenance for legacy gear</li>
                  <li><ChevronRight size={14} /> Smart supply chain routing & resilience</li>
                  <li><ChevronRight size={14} /> Energy waste reduction through smart grids</li>
                </ul>
              </div>
              <div className="image-title">
                <h3>Manufacturing & Energy</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section insights-section" id="insights">
        <div className="container">
          <motion.div 
            className="services-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2>Expert Insights & Case Studies</h2>
            <p>Explore our latest thinking on how AI is reshaping the business landscape today and for years to come.</p>
          </motion.div>

          <motion.div 
            className="insights-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="insight-card glass-card">
              <div className="insight-img-wrapper">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="AI Transformation" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="insight-tag">Special Report</div>
              </div>
              <div className="insight-content" style={{ padding: '24px' }}>
                <span className="insight-date" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>April 2026</span>
                <h3 style={{ margin: '12px 0' }}>The 2026 Generative AI Readiness Report</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>An in-depth look at how Fortune 500 companies are moving from pilot projects to agentic AI production models.</p>
                <div className="insight-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href="#insights" className="service-link">Read article <ChevronRight size={16} /></a>
                  <TrendingUp size={18} color="var(--accent-1)" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="insight-card glass-card">
              <div className="insight-img-wrapper">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Customer Success" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="insight-tag">Case Study</div>
              </div>
              <div className="insight-content" style={{ padding: '24px' }}>
                <span className="insight-date" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>March 2026</span>
                <h3 style={{ margin: '12px 0' }}>Agentic CRM: From Support to Sales Hub</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>How one global retail player automated 85% of customer interactions while doubling lead conversion rates via AI agents.</p>
                <div className="insight-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href="#insights" className="service-link">View case study <ChevronRight size={16} /></a>
                  <Lightbulb size={18} color="var(--accent-2)" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="insight-card glass-card">
              <div className="insight-img-wrapper">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Data Analytics" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="insight-tag">Whitepaper</div>
              </div>
              <div className="insight-content" style={{ padding: '24px' }}>
                <span className="insight-date" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>February 2026</span>
                <h3 style={{ margin: '12px 0' }}>Monetizing the Industrial Data Stack</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Strategies for turning dark data into high-performance predictive maintenance assets in heavy manufacturing.</p>
                <div className="insight-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href="#insights" className="service-link">Download PDF <ChevronRight size={16} /></a>
                  <Newspaper size={18} color="#10b981" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp}>Turn Ideas into AI Realities</motion.h2>
            <motion.p variants={fadeUp}>A collaborative hub that accelerates the development of cutting-edge AI solutions to solve real-world challenges. Discover and test the latest technologies today.</motion.p>
            <motion.div variants={fadeUp}>
              <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                Explore AI-First Lab
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="features-container">
            <motion.div 
              className="feature-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="badge" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}>Our Story</motion.div>
              <motion.h2 variants={fadeUp}>Pioneering AI-Driven Advisory</motion.h2>
              <motion.p variants={fadeUp}>
                Founded on the belief that AI should be accessible, actionable, and aligned with core business values, Anglap Infotech Advisory LLC bridges the critical gap between technological potential and real-world economic results.
              </motion.p>
              
              <motion.div variants={fadeUp} className="contact-info-grid">
                <div className="glass-card contact-card">
                  <div className="contact-card-header">
                    <div className="contact-icon" style={{ background: 'var(--accent-1)' }}>
                      <Phone size={20} />
                    </div>
                    <h4>US Headquarters</h4>
                  </div>
                  <p className="contact-primary">+1 615 616 8616</p>
                  <p className="contact-secondary">Nashville, TN, USA</p>
                </div>

                <div className="glass-card contact-card">
                  <div className="contact-card-header">
                    <div className="contact-icon" style={{ background: 'var(--accent-2)' }}>
                      <Mail size={20} />
                    </div>
                    <h4>Official Support</h4>
                  </div>
                  <p className="contact-primary">admin@anglapinfotech.com</p>
                  <p className="contact-secondary">24/7 Global Response</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="stats-container">
                <div className="stat-item">
                  <div className="stat-number" style={{ color: 'var(--accent-1)' }}>15+</div>
                  <div className="stat-label">Global Markets</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" style={{ color: 'var(--accent-2)' }}>100%</div>
                  <div className="stat-label">Client Trust</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" style={{ color: '#10b981' }}>2026</div>
                  <div className="stat-label">Vision Ready</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="glass-card" 
              style={{ padding: '40px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 style={{ marginBottom: '24px' }}>Let's Build the Future</h3>
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="form-input" 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    className="form-input" 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                  />
                </div>
                <select 
                  className="form-input"
                  value={contactForm.service}
                  onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                  required
                >
                  <option value="CRM Strategy & Implementation">CRM Strategy & Implementation</option>
                  <option value="AI Transformation">AI Center of Excellence</option>
                  <option value="Enterprise Planning">Enterprise Planning</option>
                </select>
                <textarea 
                  placeholder="How can we help you?" 
                  className="form-input" 
                  rows={4} 
                  style={{ resize: 'none' }}
                  value={contactForm.query}
                  onChange={(e) => setContactForm({...contactForm, query: e.target.value})}
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                  Send Message <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      </React.Fragment>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-container">
                <img src={theme === 'light' ? "/logo-v2.png" : "/logo-night-v2.png"} alt="Anglap Infotech Logo" className="logo-img" />
              </div>
              <p>Empowering global enterprises with AI-ingrained innovations, leading the digital and business transformation journey.</p>
            </div>
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#/crm-strategy">CRM Strategy & Implementation</a></li>
                <li><a href="#">AI Center of Excellence</a></li>
                <li><a href="#">Enterprise Planning</a></li>
                <li><a href="#">AI Solutions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Industries</h4>
              <ul>
                <li><a href="#industries">Technology & Comms</a></li>
                <li><a href="#industries">Financial Services</a></li>
                <li><a href="#industries">Manufacturing & Energy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; 2022 Anglap Infotech Advisory LLC. All rights reserved.</div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><Monitor size={18} /></a>
              <a href="#" aria-label="Twitter"><Map size={18} /></a>
              <a href="#" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
