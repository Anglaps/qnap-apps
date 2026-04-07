import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Menu, X, ChevronRight, BarChart2, Zap, 
  Cpu, LayoutDashboard, Database, Target,
  Check, Monitor, Map, Mail, Phone, Lock, Users,
  Smartphone, ShoppingBag, DollarSign, Factory,
  TrendingUp, Newspaper, Lightbulb,
  Globe, Headset
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Enterprise Business Planning",
      description: "Integrate strategic, financial, operational, and technology planning to align your organization, optimize resources, and drive growth.",
      icon: <BarChart2 size={24} />,
      gradient: "linear-gradient(135deg, #00f2fe, #4facfe)"
    },
    {
      title: "Digital Transformation",
      description: "Modernize operations, boost efficiency, and enhance customer experiences. Streamline workflows and accelerate growth.",
      icon: <Zap size={24} />,
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
      title: "AI Center of Excellence",
      description: "Transform AI from scattered initiatives into a unified, enterprise-wide capability enabling consistent innovation and responsible deployment.",
      icon: <Cpu size={24} />,
      gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
      title: "Revenue & Sales",
      description: "Intelligent revenue strategies built to outperform. Align with your goals, integrate seamlessly and boost CRM performance.",
      icon: <Target size={24} />,
      gradient: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
      title: "Data Engineering & Analytics",
      description: "Fuel intelligent decisions and business agility. We turn disconnected data into a strategic advantage for AI at scale.",
      icon: <Database size={24} />,
      gradient: "linear-gradient(135deg, #30cfd0, #330867)"
    },
    {
      title: "AI First Lab",
      description: "A collaborative hub to accelerate the development of cutting-edge AI solutions. Test and refine the latest technologies.",
      icon: <LayoutDashboard size={24} />,
      gradient: "linear-gradient(135deg, #b8cbb8, #e2c58b)"
    },
    {
      title: "CRM Strategy & Implementation",
      description: "Optimize your customer relationships with AI-driven CRM solutions. Enhance lead management, sales automation, and customer retention.",
      icon: <Users size={24} />,
      gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      title: "AI Customer Experience",
      description: "Leverage generative AI to personalize customer interactions, automate support, and provide 24/7 intelligent assistance across all channels.",
      icon: <Monitor size={24} />,
      gradient: "linear-gradient(135deg, #ee9ca7, #ffdde1)"
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
            <img src="/logo.png" alt="Anglap Infotech Logo" className="logo-img" />
            <span className="logo-text">Anglap Infotech</span>
          </div>
          
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#insights">Insights</a>
            <a href="#about">About Us</a>
          </div>

          <div className="nav-actions">
            <button className="btn btn-secondary">Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">AI-Ingrained Business Consulting</div>
            <h1>
              Predict. Plan. <span className="gradient-text">Perform.</span><br />
              Powered by <span className="gradient-text-alt">AI.</span>
            </h1>
            <p>
              We are an AI-ingrained business consultancy and advisory company that monetizes AI to create strategies that make economic sense for your business, bridging the gap between innovation and reality.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Solutions <ChevronRight size={20} style={{ marginLeft: '8px' }} /></button>
              <button className="btn btn-secondary">Contact an Expert</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="services-header">
            <h2>Realize Strategic Outcomes Faster</h2>
            <p>Our world-class AI-ingrained solutions are deeply rooted and inseparable from every facet of strategy, execution, and innovation.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="glass-card service-card" key={index}>
                <div className="service-icon" style={{ background: service.gradient }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#services" className="service-link">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="features">
        <div className="container features-container">
          <div className="feature-content">
            <h2>Convergence 3.0: The Agentic Foundation</h2>
            <p>
              Software and engineering are evolving. Our integrated platform enables Vibe Coding and agentic insights, providing higher quality and high-performance delivery models.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <Check size={20} className="feature-check" />
                <div>
                  <h4>Robust Data Taxonomy</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Ensure structured, explainable, and compliant systems built on trustworthy models.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-check" />
                <div>
                  <h4>Sales & Software 3.0 Harmonization</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Drive sales effectiveness through financial alignment and customer journey optimization.</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} className="feature-check" />
                <div>
                  <h4>Proactive Predictive Intelligence</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>From reactive fixes to strategic gains using agentic foresight and smart analytics.</p>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '32px' }}>Discover the Foundation</button>
          </div>
          <div className="feature-img-wrapper">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data Analytics Visualization" />
          </div>
        </div>
      </section>
      
      {/* Industries Use Cases Section */}
      <section className="section" id="industries">
        <div className="container">
          <div className="services-header">
            <h2>Driving Value Across Industries</h2>
            <p>Our solutions are tailored to solve the specific complexities and capture unique opportunities within your industry verticals.</p>
          </div>

          <div className="services-grid">
            <div className="glass-card service-card">
              <div className="service-icon" style={{ background: 'var(--accent-1)' }}>
                <Smartphone size={24} />
              </div>
              <h3>Technology & Comms</h3>
              <ul className="use-case-list">
                <li><ChevronRight size={14} /> Predictive churn analytics & retention</li>
                <li><ChevronRight size={14} /> Multi-channel customer service automation</li>
                <li><ChevronRight size={14} /> Network load optimization via AI</li>
              </ul>
            </div>

            <div className="glass-card service-card">
              <div className="service-icon" style={{ background: 'var(--accent-2)' }}>
                <ShoppingBag size={24} />
              </div>
              <h3>Retail & CPG</h3>
              <ul className="use-case-list">
                <li><ChevronRight size={14} /> Hyper-personalized shopping journeys</li>
                <li><ChevronRight size={14} /> AI-driven inventory demand forecasting</li>
                <li><ChevronRight size={14} /> Real-time price optimization models</li>
              </ul>
            </div>

            <div className="glass-card service-card">
              <div className="service-icon" style={{ background: '#10b981' }}>
                <DollarSign size={24} />
              </div>
              <h3>Financial Services</h3>
              <ul className="use-case-list">
                <li><ChevronRight size={14} /> Real-time fraud detection & prevention</li>
                <li><ChevronRight size={14} /> AI agents for wealth management</li>
                <li><ChevronRight size={14} /> Automated regulatory compliance reporting</li>
              </ul>
            </div>

            <div className="glass-card service-card">
              <div className="service-icon" style={{ background: '#f59e0b' }}>
                <Factory size={24} />
              </div>
              <h3>Manufacturing & Energy</h3>
              <ul className="use-case-list">
                <li><ChevronRight size={14} /> Predictive maintenance for legacy gear</li>
                <li><ChevronRight size={14} /> Smart supply chain routing & resilience</li>
                <li><ChevronRight size={14} /> Energy waste reduction through smart grids</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section" id="insights" style={{ background: 'rgba(0, 0, 0, 0.02)' }}>
        <div className="container">
          <div className="services-header">
            <h2>Expert Insights & Case Studies</h2>
            <p>Explore our latest thinking on how AI is reshaping the business landscape today and for years to come.</p>
          </div>

          <div className="insights-grid">
            <div className="insight-card glass-card">
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
            </div>

            <div className="insight-card glass-card">
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
            </div>

            <div className="insight-card glass-card">
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
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <h2>Turn Ideas into AI Realities</h2>
            <p>A collaborative hub that accelerates the development of cutting-edge AI solutions to solve real-world challenges. Discover and test the latest technologies today.</p>
            <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Explore AI-First Lab
            </button>
          </div>
        </div>
      </section>

      {/* About Us / Contact Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="features-container">
            <div className="feature-content">
              <div className="badge" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}>Our Story</div>
              <h2>Pioneering AI-Driven Advisory</h2>
              <p>
                Founded on the belief that AI should be accessible, actionable, and aligned with core business values, Anglap Infotech Advisory LLC bridges the critical gap between technological potential and real-world economic results.
              </p>
              
              <div className="contact-info-grid" style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: 'var(--accent-1)', padding: '8px', borderRadius: '8px', color: 'white' }}>
                      <Phone size={20} />
                    </div>
                    <h4 style={{ margin: 0 }}>US Headquarters</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>+1 615 616 8616</p>
                  <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Nashville, TN, USA</p>
                </div>

                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: 'var(--accent-2)', padding: '8px', borderRadius: '8px', color: 'white' }}>
                      <Mail size={20} />
                    </div>
                    <h4 style={{ margin: 0 }}>Official Support</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>admin@anglapinfotech.com</p>
                  <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>24/7 Global Response</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '32px', marginTop: '48px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-1)' }}>15+</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Global Markets</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-2)' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Client Trust</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981' }}>2026</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Vision Ready</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '24px' }}>Let's Build the Future</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input type="text" placeholder="Full Name" className="form-input" />
                  <input type="email" placeholder="Work Email" className="form-input" />
                </div>
                <select className="form-input">
                  <option>Select Service Interest</option>
                  <option>CRM Strategy</option>
                  <option>AI Transformation</option>
                  <option>Data Engineering</option>
                  <option>Digital Strategy</option>
                </select>
                <textarea placeholder="How can we help you?" className="form-input" rows={4} style={{ resize: 'none' }}></textarea>
                <button className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                  Send Message <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-container">
                <img src="/logo.png" alt="Anglap Infotech Logo" className="logo-img" />
                <span className="logo-text">Anglap Infotech</span>
              </div>
              <p>Empowering global enterprises with AI-ingrained innovations, leading the digital and business transformation journey.</p>
            </div>
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#">Data Engineering & Analytics</a></li>
                <li><a href="#">AI Center of Excellence</a></li>
                <li><a href="#">Enterprise Planning</a></li>
                <li><a href="#">Digital Transformation</a></li>
                <li><a href="#">CRM Solutions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Industries</h4>
              <ul>
                <li><a href="#">Technology & Comms</a></li>
                <li><a href="#">Retail & CPG</a></li>
                <li><a href="#">Financial Services</a></li>
                <li><a href="#">Manufacturing & Energy</a></li>
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
            <div>&copy; {new Date().getFullYear()} Anglap Infotech Advisory LLC. All rights reserved.</div>
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
