import React, { useState } from 'react';
import './App.css';

export default function App() {
  // Sizing Calculator state
  const [calcTab, setCalcTab] = useState('compute');
  const [nodesCount, setNodesCount] = useState(4);
  const [storageTb, setStorageTb] = useState(60);
  const [slaTier, setSlaTier] = useState('24/7 Crítico (Uptime 99.9%)');

  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'Hardware Data Center & Servidores',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* =====================================================================
          FIRST VIEWPORT (Conforming to Impeccable Spec for 1376x768 reference)
          ===================================================================== */}
      <section className="hero-viewport-frame" id="hero">
        <div className="hero-grid-pattern" aria-hidden="true" />

        {/* Region: nav-bar (Integrated from Option B) */}
        <header className="r-nav-bar region chrome" data-region="nav-bar">
          <a href="#hero" className="brand-logo-group">
            <div className="brand-mark-glyph" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="brand-name-text">
              Impor<span>Tru</span>
            </span>
          </a>

          <nav>
            <ul className="nav-links-menu">
              <li><a href="#soluciones" className="nav-link-item">Soluciones TI</a></li>
              <li><a href="#dimensionamiento" className="nav-link-item">Dimensionamiento</a></li>
              <li><a href="#partners" className="nav-link-item">Alianzas</a></li>
              <li><a href="#contacto" className="nav-link-item">Contacto</a></li>
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="nav-status-pill">
              <span className="status-pulse-dot" />
              <span>SLA 24/7 Operativo</span>
            </div>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="nav-cta-btn"
            >
              Cotizar Infraestructura
            </button>
          </div>
        </header>

        {/* Region: hero-headline */}
        <div className="r-hero-headline region text" data-region="hero-headline">
          <h1 className="hero-monumental-headline">
            Infraestructura TI de Misión Crítica para Empresas Corporativas
          </h1>
        </div>

        {/* Region: hero-subhead */}
        <div className="r-hero-subhead region text" data-region="hero-subhead">
          <p className="hero-subhead-text">
            Hardware de cómputo empresarial, virtualización y arquitectura multicloud con 99% de uptime garantizado en Ecuador.
          </p>
        </div>

        {/* Region: metric-kpis */}
        <div className="r-metric-kpis region control" data-region="metric-kpis">
          <div className="kpi-badge-chip">
            <span>⚡</span>
            <span><strong>99% Uptime</strong> Garantizado</span>
          </div>
          <div className="kpi-badge-chip">
            <span>🏢</span>
            <span><strong>+20 Clientes</strong> Corporativos</span>
          </div>
          <div className="kpi-badge-chip">
            <span>🛡️</span>
            <span><strong>+5 Años</strong> de Experiencia</span>
          </div>
        </div>

        {/* Region: hero-ctas */}
        <div className="r-hero-ctas region control" data-region="hero-ctas">
          <button 
            onClick={() => scrollToSection('dimensionamiento')} 
            className="primary-hero-btn"
          >
            <span>Dimensionar Proyecto</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button 
            onClick={() => scrollToSection('contacto')} 
            className="secondary-hero-btn"
          >
            Hablar con un Especialista
          </button>
        </div>

        {/* Region: server-rack-plate */}
        <figure className="r-server-rack-plate region plate" data-region="server-rack-plate">
          <img 
            src="/assets/plates/server-rack-plate.png" 
            alt="Chasis de servidores blade en rack con bus óptico y telemetría de ImporTru"
            className="server-plate-img" 
          />
        </figure>

        {/* Region: partners-banner */}
        <div className="r-partners-banner region chrome" data-region="partners-banner" id="partners">
          <span className="partners-strip-label">Alianzas Oficiales Tier-1:</span>
          <div className="partners-logos-track">
            <span className="partner-logo-item">Lenovo</span>
            <span className="partner-logo-item">Dell Technologies</span>
            <span className="partner-logo-item">HPE</span>
            <span className="partner-logo-item">IBM</span>
            <span className="partner-logo-item">Microsoft Azure</span>
            <span className="partner-logo-item">Veeam</span>
            <span className="partner-logo-item">Oracle</span>
            <span className="partner-logo-item">RedHat</span>
            <span className="partner-logo-item">Broadcom</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: Líneas de Solución Corporativa (Transición a Fondo Blanco)
          ===================================================================== */}
      <section className="solutions-section" id="soluciones">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-title-tag">Portafolio Integral 360°</span>
            <h2 className="section-heading-h2">
              Soluciones Diseñadas para la Continuidad y Escalamiento Empresarial
            </h2>
            <p className="section-lead-paragraph">
              Centralizamos la provisión de hardware de centro de datos, arquitectura cloud, licenciamiento oficial y protección ante desastres bajo un único socio estratégico en Ecuador.
            </p>
          </div>

          <div className="solutions-grid-4">
            {/* Card 1 */}
            <article className="solution-card">
              <div className="solution-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                  <line x1="6" y1="6" x2="6.01" y2="6"/>
                  <line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              </div>
              <h3 className="solution-card-h3">Infraestructura TI para Data Centers</h3>
              <p className="solution-card-desc">
                Diseño, suministro e implementación de servidores blade y en rack de alta densidad, sistemas de almacenamiento SAN/NAS y switches de fibra para cargas de trabajo críticas.
              </p>
              <span className="solution-partners-tag">Lenovo · Dell Technologies · HPE · IBM</span>
            </article>

            {/* Card 2 */}
            <article className="solution-card">
              <div className="solution-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
              </div>
              <h3 className="solution-card-h3">Virtualización y Nube Híbrida</h3>
              <p className="solution-card-desc">
                Estrategias de modernización y migración fluida hacia entornos híbridos. Conectividad segura multi-región, cómputo escalable y gestión de microservicios con soporte local.
              </p>
              <span className="solution-partners-tag">Microsoft Azure · RedHat · Oracle Cloud</span>
            </article>

            {/* Card 3 */}
            <article className="solution-card">
              <div className="solution-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="solution-card-h3">Resiliencia y Respaldo Inmutable</h3>
              <p className="solution-card-desc">
                Planes de continuidad de negocio y recuperación ante desastres (DRP). Copias de seguridad inmutables contra ransomware y replicación geográfica continua con RTO/RPO mínimos.
              </p>
              <span className="solution-partners-tag">Veeam Availability Suite · Azure Backup</span>
            </article>

            {/* Card 4 */}
            <article className="solution-card">
              <div className="solution-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="solution-card-h3">Licenciamiento Empresarial</h3>
              <p className="solution-card-desc">
                Gestión, aprovisionamiento y auditoría preventiva de licencias corporativas para sistemas operativos, bases de datos y suites colaborativas con optimización presupuestaria.
              </p>
              <span className="solution-partners-tag">Microsoft 365 · Windows Server · Broadcom</span>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: Calculadora Interactiva de Dimensionamiento
          ===================================================================== */}
      <section className="calculator-section" id="dimensionamiento">
        <div className="section-container">
          <div className="calculator-layout-split">
            <div className="calc-info-col">
              <span className="section-title-tag">Herramienta de Planificación</span>
              <h2>Dimensionamiento Rápido de Capacidad TI</h2>
              <p>
                Configure el volumen estimado de infraestructura que su organización requiere. Nuestro equipo de ingenieros certificados elabora la arquitectura de dimensionamiento técnico sin costo.
              </p>

              <ul className="calc-features-list">
                <li className="calc-feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Evaluación de compatibilidad con infraestructura actual</span>
                </li>
                <li className="calc-feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Análisis de redundancia N+1 y tolerancia a fallos</span>
                </li>
                <li className="calc-feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Soporte 24/7 con ingenieros residentes en Ecuador</span>
                </li>
              </ul>
            </div>

            <div className="calc-interactive-card">
              <div className="calc-tabs-row">
                <button 
                  className={`calc-tab-btn ${calcTab === 'compute' ? 'active' : ''}`}
                  onClick={() => setCalcTab('compute')}
                >
                  Servidores & Cómputo
                </button>
                <button 
                  className={`calc-tab-btn ${calcTab === 'storage' ? 'active' : ''}`}
                  onClick={() => setCalcTab('storage')}
                >
                  Almacenamiento & Backup
                </button>
                <button 
                  className={`calc-tab-btn ${calcTab === 'hybrid' ? 'active' : ''}`}
                  onClick={() => setCalcTab('hybrid')}
                >
                  Cloud Híbrida
                </button>
              </div>

              {/* Sliders */}
              <div className="calc-slider-group">
                <div className="calc-slider-header">
                  <span className="calc-slider-label">Servidores en Rack / Nodos de Cómputo:</span>
                  <span className="calc-slider-value">{nodesCount} Nodos</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="32" 
                  value={nodesCount} 
                  onChange={(e) => setNodesCount(Number(e.target.value))}
                  className="calc-range-input" 
                />
              </div>

              <div className="calc-slider-group">
                <div className="calc-slider-header">
                  <span className="calc-slider-label">Capacidad de Almacenamiento Primario:</span>
                  <span className="calc-slider-value">{storageTb} TB Usables</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  step="10"
                  value={storageTb} 
                  onChange={(e) => setStorageTb(Number(e.target.value))}
                  className="calc-range-input" 
                />
              </div>

              <div className="calc-slider-group">
                <div className="calc-slider-header">
                  <span className="calc-slider-label">Nivel de Cobertura de SLA:</span>
                  <span className="calc-slider-value" style={{ fontSize: '0.95rem' }}>{slaTier}</span>
                </div>
                <select 
                  value={slaTier} 
                  onChange={(e) => setSlaTier(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    background: '#222121',
                    border: '1px solid #3a3939',
                    borderRadius: '6px',
                    color: '#FFF',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="SLA Estándar (8x5)">SLA Estándar (8x5 Hábil)</option>
                  <option value="24/7 Crítico (Uptime 99.9%)">24/7 Crítico (Uptime 99.9% - Respuesta 15 min)</option>
                  <option value="Platinum Mission-Critical (Ingeniero Dedicado)">Platinum Mission-Critical (Ingeniero Dedicado)</option>
                </select>
              </div>

              <div className="calc-summary-box">
                <div className="calc-summary-meta">
                  <h4>Configuración Recomendada</h4>
                  <p>Cluster Tier-1 ({nodesCount}x Chasis) + {storageTb} TB</p>
                </div>
                <button 
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      serviceType: 'Hardware Data Center & Servidores',
                      message: `Solicito dimensionamiento para: ${nodesCount} nodos de cómputo, ${storageTb} TB de almacenamiento con ${slaTier}.`
                    }));
                    scrollToSection('contacto');
                  }} 
                  className="calc-quote-cta"
                >
                  Cotizar esta Configuración
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: Formulario de Cotización y Contacto Corporativo
          ===================================================================== */}
      <section className="contact-section" id="contacto">
        <div className="section-container">
          <div className="contact-layout-split">
            <div className="contact-info-col">
              <span className="section-title-tag">Canal Oficial de Consultoría</span>
              <h2>Hablemos con su Equipo de TI</h2>
              <p>
                Nuestros ingenieros de soluciones responden en menos de 2 horas hábiles. Brindamos asesoría para dimensionamiento de data centers, migración cloud y renovación de licencias.
              </p>

              <div className="contact-details-box">
                <div className="contact-detail-row">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div className="contact-detail-text">
                    <h4>Sede Corporativa</h4>
                    <p>Av. Eloy Alfaro n34-118 y Catalina Aldaz, Edif. Maldonado Correa Of. 2000, Quito, Ecuador</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div className="contact-detail-text">
                    <h4>Contacto Comercial y Técnico</h4>
                    <p>contacto@importru.com</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div className="contact-detail-text">
                    <h4>Mesa de Soporte Crítico</h4>
                    <p>24 Horas al Día / 7 Días a la Semana bajo contrato</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="contact-form-card">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(237, 26, 55, 0.1)', color: '#ED1A37', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: '#303130', marginBottom: '0.75rem' }}>¡Solicitud Recibida con Éxito!</h3>
                  <p style={{ color: '#666', lineHeight: 1.6, maxWidth: 420, margin: '0 auto 2rem auto' }}>
                    Gracias <strong>{formData.name}</strong>. Un ingeniero consultor de ImporTru revisará su requerimiento para <strong>{formData.company}</strong> y se contactará al correo {formData.email}.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    style={{ padding: '0.75rem 1.5rem', background: '#303130', color: '#FFF', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600 }}
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-grid-2">
                    <div className="form-group-field">
                      <label htmlFor="name">Nombre y Apellido *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ej. Ing. Carlos Mendoza" 
                        className="form-input-control" 
                      />
                    </div>
                    <div className="form-group-field">
                      <label htmlFor="company">Empresa / Organización *</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required 
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Ej. Corporación Andina S.A." 
                        className="form-input-control" 
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group-field">
                      <label htmlFor="email">Correo Corporativo *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="carlos.mendoza@empresa.com" 
                        className="form-input-control" 
                      />
                    </div>
                    <div className="form-group-field">
                      <label htmlFor="phone">Teléfono / Celular</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+593 99 999 9999" 
                        className="form-input-control" 
                      />
                    </div>
                  </div>

                  <div className="form-group-field">
                    <label htmlFor="serviceType">Línea de Solución Requerida</label>
                    <select 
                      id="serviceType" 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="form-input-control"
                    >
                      <option value="Hardware Data Center & Servidores">Hardware Data Center & Servidores (Lenovo, Dell, HPE, IBM)</option>
                      <option value="Virtualización & Migración a Azure">Virtualización & Migración Cloud (Azure, RedHat, Oracle)</option>
                      <option value="Planes de Respaldo & Resiliencia Veeam">Planes de Respaldo & Resiliencia (Veeam Inmutable)</option>
                      <option value="Licenciamiento Enterprise Microsoft / Broadcom">Licenciamiento Enterprise (Microsoft 365, Broadcom)</option>
                      <option value="Soporte y Mantenimiento TI 24/7">Soporte y Mantenimiento TI 24/7</option>
                    </select>
                  </div>

                  <div className="form-group-field">
                    <label htmlFor="message">Detalles del Requerimiento / Proyecto</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describa brevemente la infraestructura a renovar, dimensionamiento o urgencia técnica..."
                      className="form-input-control"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Solicitar Cotización y Dimensionamiento
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER CORPORATIVO
          ===================================================================== */}
      <footer className="footer-corporate">
        <div className="section-container">
          <div className="footer-top-grid">
            <div className="footer-brand-bio">
              <a href="#hero" className="brand-logo-group">
                <div className="brand-mark-glyph" aria-hidden="true" style={{ width: 28, height: 28 }}>
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
                    <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="brand-name-text" style={{ fontSize: '1.4rem' }}>
                  Impor<span>Tru</span>
                </span>
              </a>
              <p>
                Socio tecnológico estratégico para infraestructura de centro de datos, licenciamiento y nube corporativa en Ecuador. Más de 5 años impulsando la alta disponibilidad empresarial.
              </p>
            </div>

            <div className="footer-nav-col">
              <h4>Soluciones</h4>
              <ul className="footer-links-list">
                <li><a href="#soluciones">Data Centers & Servidores</a></li>
                <li><a href="#soluciones">Cloud & Virtualización</a></li>
                <li><a href="#soluciones">Backup Inmutable Veeam</a></li>
                <li><a href="#soluciones">Licenciamiento Enterprise</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4>Alianzas</h4>
              <ul className="footer-links-list">
                <li><a href="#partners">Lenovo Data Center</a></li>
                <li><a href="#partners">Dell Technologies</a></li>
                <li><a href="#partners">HPE & IBM</a></li>
                <li><a href="#partners">Microsoft Azure & Veeam</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4>Contacto</h4>
              <ul className="footer-links-list">
                <li><a href="#contacto">Quito, Ecuador</a></li>
                <li><a href="mailto:contacto@importru.com">contacto@importru.com</a></li>
                <li><a href="#contacto">Mesa de Ayuda 24/7</a></li>
                <li><a href="https://importru.com" target="_blank" rel="noreferrer">importru.com</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© {new Date().getFullYear()} ImporTru. Todos los derechos reservados. Infraestructura TI Corporativa.</span>
            <span>Quito, Ecuador · Garantía de Uptime 99%</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
