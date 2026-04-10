import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Target, Database, Settings, Cloud, Share2, Layers, Cpu, Code } from 'lucide-react';
import './App.css';

const CRMStrategy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
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

  return (
    <div className="app-container" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      {/* Return to Home Navigation */}
      <div className="container" style={{ padding: '40px 24px 20px 24px' }}>
        <a href="#" className="service-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
          <ArrowLeft size={18} /> Back to Home
        </a>
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ marginBottom: '60px' }}
        >
          <motion.div variants={fadeUp} className="badge" style={{ background: 'rgba(102, 126, 234, 0.1)', color: '#667eea' }}>
            Service Deep Dive
          </motion.div>
          <motion.h1 variants={fadeUp} style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-1px' }}>
            CRM Strategy & <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #667eea, #764ba2)' }}>Implementation</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.8' }}>
            Optimize your customer relationships with AI-driven CRM solutions. Enhance lead management, sales automation, and customer retention.
          </motion.p>
        </motion.div>

        {/* The Strategy: The Why */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{ marginBottom: '80px' }}
        >
          <motion.h2 variants={fadeUp} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '40px' }}>
            The Strategy <span style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1.5rem' }}>(The Why)</span>
          </motion.h2>
          
          <div className="services-grid">
            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '24px' }}>
                <Target size={28} color="#0ea5e9" />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Business Process Mapping</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Auditing current sales, marketing, and service workflows to identify bottlenecks and optimize efficiency.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '24px' }}>
                <Layers size={28} color="#8b5cf6" />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Platform Selection Advice</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Helping clients choose between Salesforce, HubSpot, Microsoft Dynamics, or niche platforms strictly based on ROI goals.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '24px' }}>
                <Database size={28} color="#10b981" />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Data Governance Policy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Defining how data is collected, cleaned, and maintained to ensure absolute reliance on a "Single Source of Truth."</p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '24px' }}>
                <Settings size={28} color="#ec4899" />
              </div>
              <h3 style={{ marginBottom: '16px' }}>KPI & Dashboard Design</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Defining the metrics that matter (CAC, LTV, Pipeline Velocity) before the technical build begins for measurable outcomes.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* The Implementation: The How */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{ marginBottom: '80px' }}
        >
          <motion.h2 variants={fadeUp} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '40px' }}>
            The Implementation <span style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1.5rem' }}>(The How)</span>
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <Cloud size={28} color="var(--accent-2)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h3 style={{ marginBottom: '12px' }}>End-to-End Deployment</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Initial setup, user roles, security architecture, and custom object configuration uniquely modeled to your organization.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <Database size={28} color="var(--accent-2)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h3 style={{ marginBottom: '12px' }}>Legacy Data Migration</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Mapping and moving data from old spreadsheets or deprecated systems with strict zero data loss assurances.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <Share2 size={28} color="var(--accent-2)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h3 style={{ marginBottom: '12px' }}>Custom API Integrations</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Connecting the CRM intelligently to ERPs, accounting software, or specialized tools (like Varicent for compensation tracking).</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card" style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <Settings size={28} color="var(--accent-2)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h3 style={{ marginBottom: '12px' }}>Automation & Workflow Rules</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Leveraging native automation tools alongside Python to completely eliminate manual data entry and human error.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us / Advanced Hooks */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{ background: 'var(--text-primary)', color: 'white', borderRadius: '24px', padding: '60px 40px', overflow: 'hidden', position: 'relative' }}
        >
          {/* Decorative background glow inside the black box */}
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.h2 variants={fadeUp} style={{ marginBottom: '48px', color: 'white' }}>Why Choose Us: Technical Edge</motion.h2>

            <div className="services-grid" style={{ gap: '32px' }}>
              <motion.div variants={fadeUp} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Target size={32} color="#f59e0b" style={{ marginBottom: '20px' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'white' }}>Sales Performance Management (SPM)</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>We uniquely link your CRM data directly to complex commission structures and incentive plans to seamlessly motivate sales reps.</p>
              </motion.div>

              <motion.div variants={fadeUp} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Cpu size={32} color="#38bdf8" style={{ marginBottom: '20px' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'white' }}>AI-Driven Insights</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>We implement predictive lead scoring and automated sentiment analysis natively within your CRM using local or cloud-based AI models.</p>
              </motion.div>

              <motion.div variants={fadeUp} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Code size={32} color="#10b981" style={{ marginBottom: '20px' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'white' }}>Custom Scripting</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>For integrations that "out-of-the-box" connectors simply cannot manage, we write custom Python architecture to handle complex data transformations.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CRMStrategy;
