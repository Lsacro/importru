import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('datacenter');

  return (
    <>
      <div className='grow relative group'>
        <section className='relative w-full bg-[#211113] overflow-hidden'>
          <div className='absolute inset-0 z-0'>
            <div
              className='w-full h-full bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAW_8a1bKYpyuj5rzVUR_3BKUcQxDnV6oxVeSoZSzRzm2eQb_vgpq8DKMA5Zvre6RKJ3t7zC_mymfqvgRca-CQ_uaAuvOZzaDDlWUPG0VMdXF6ucKX-uk0ONfuDqGC66H6Tok9FrrK1XByHShy8b9qeflEt2gSDK5um7asYMA7pwuZNS3iE1g_ezW-TvcjMJToU72_CiJnEKULeXinH6HwBqDkUGFGvdVnSTbe5-JXct3UKi-rqqcFSE18OPoh0OUTI65qI2c6jbkFw')",
              }}
            ></div>
          </div>
          <div className='relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-32 flex flex-col justify-center min-h-[600px]'>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-primary/30 text-white text-xs font-medium mb-8 backdrop-blur-md shadow-lg'>
                <span className='material-symbols-outlined text-[16px]'>
                  layers
                </span>
                Soluciones de infraestructura
              </div>
              <div className='relative h-[160px] md:h-[180px] lg:h-[200px] mb-6 drop-shadow-lg'>
                <h1 className='text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight invisible'>
                  Infraestructura TI empresarial
                  <br />
                  Diseñada para crecer
                </h1>
                <h1
                  className='absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]'
                  style={{
                    animationDelay: '0s',
                  }}
                >
                  Moderniza tu
                  <br />
                  infraestructura TI
                </h1>
                <h1
                  className='absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]'
                  style={{
                    animationDelay: '3s',
                  }}
                >
                  Infraestructura TI empresarial
                  <br />
                  Diseñada para crecer
                </h1>
                <h1
                  className='absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]'
                  style={{
                    animationDelay: '6s',
                  }}
                >
                  Prepara para el futuro tu
                  <br />
                  estrategia digital
                </h1>
              </div>
              <p className='text-white text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]'>
                Desde equipos de alto rendimiento para centros de datos hasta
                virtualización resiliente en la nube y protección sólida de
                datos. Diseñamos la infraestructura que impulsa el crecimiento
                de tu empresa.
              </p>
              <div className='flex gap-4'>
                <button className='flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors'>
                  Explorar soluciones
                </button>
                <button className='flex items-center justify-center h-12 px-8 rounded-lg border border-white/30 bg-black/40 backdrop-blur-md text-white text-sm font-bold hover:bg-black/60 transition-colors shadow-lg shadow-black/30'>
                  Ver casos de éxito
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white dark:bg-[#1a0e10] border-b border-gray-200 dark:border-gray-800'>
          <div className='max-w-7xl mx-auto px-4 md:px-10 py-8'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-gray-200 dark:divide-gray-800'>
              <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  +5
                </span>
                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  Años de experiencia
                </span>
              </div>
              <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  20+
                </span>
                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  Clientes empresariales
                </span>
              </div>
              <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  99%
                </span>
                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  Disponibilidad garantizada
                </span>
              </div>
              <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  24/7
                </span>
                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  Soporte especializado
                </span>
              </div>
            </div>
          </div>
        </section>
        <div
          id='solutions'
          className='min-w-0 scroll-mt-[var(--navbar-height,73px)]'
        >
          <div className=' top-[var(--navbar-height,73px)] z-40 bg-white/90 dark:bg-[#1a0e10]/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm tab-nav-container'>
            <div className='w-full px-4 md:px-8 overflow-x-auto'>
              <nav className='flex items-center justify-between gap-2 md:gap-4 text-sm font-bold whitespace-nowrap h-14 w-full'>
                <button
                  type='button'
                  onClick={() => setActiveTab('datacenter')}
                  aria-pressed={activeTab === 'datacenter'}
                  className='text-text-secondary dark:text-gray-400 hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent select-none text-xs font-semibold uppercase tracking-wider h-full flex flex-1 items-center justify-center text-center px-3 py-2 aria-pressed:text-primary aria-pressed:border-primary'
                >
                  Soluciones para centros de datos
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('servers')}
                  aria-pressed={activeTab === 'servers'}
                  className='text-text-secondary dark:text-gray-400 hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent select-none text-xs font-semibold uppercase tracking-wider h-full flex flex-1 items-center justify-center text-center px-3 py-2 aria-pressed:text-primary aria-pressed:border-primary'
                >
                  Servidores empresariales
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('licensing')}
                  aria-pressed={activeTab === 'licensing'}
                  className='text-text-secondary dark:text-gray-400 hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent select-none text-xs font-semibold uppercase tracking-wider h-full flex flex-1 items-center justify-center text-center px-3 py-2 aria-pressed:text-primary aria-pressed:border-primary'
                >
                  Licenciamiento empresarial
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('virtualization')}
                  aria-pressed={activeTab === 'virtualization'}
                  className='text-text-secondary dark:text-gray-400 hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent select-none text-xs font-semibold uppercase tracking-wider h-full flex flex-1 items-center justify-center text-center px-3 py-2 aria-pressed:text-primary aria-pressed:border-primary'
                >
                  Virtualización y nube
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('protection')}
                  aria-pressed={activeTab === 'protection'}
                  className='text-text-secondary dark:text-gray-400 hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent select-none text-xs font-semibold uppercase tracking-wider h-full flex flex-1 items-center justify-center text-center px-3 py-2 aria-pressed:text-primary aria-pressed:border-primary'
                >
                  Protección de datos
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('servicios')}
                  aria-pressed={activeTab === 'servicios'}
                  className='text-text-secondary dark:text-gray-400 hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent select-none text-xs font-semibold uppercase tracking-wider h-full flex flex-1 items-center justify-center text-center px-3 py-2 aria-pressed:text-primary aria-pressed:border-primary'
                >
                  Servicios TI
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('dimensionamiento')}
                  aria-pressed={activeTab === 'dimensionamiento'}
                  className='text-text-secondary dark:text-gray-400 hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent select-none text-xs font-semibold uppercase tracking-wider h-full flex flex-1 items-center justify-center text-center px-3 py-2 aria-pressed:text-primary aria-pressed:border-primary'
                >
                  Dimensionamiento TI
                </button>
              </nav>
            </div>
          </div>
          <section
            className='py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300'
            hidden={activeTab !== 'datacenter'}
            id='datacenter'
          >
            <div className='max-w-7xl mx-auto px-4 md:px-10'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div className='order-2 lg:order-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                    <span className='material-symbols-outlined text-[16px]'>
                      dns
                    </span>
                    INFRAESTRUCTURA DE ALTO RENDIMIENTO
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3'>
                    <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                      <span className='material-symbols-outlined'>dns</span>
                    </span>
                    Soluciones para centros de datos
                  </h2>
                  <p className='text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed'>
                    Impulsa tus aplicaciones críticas con equipos robustos.
                    Colaboramos con líderes del sector para ofrecer servidores,
                    almacenamiento y equipos de red diseñados para maximizar la
                    disponibilidad y facilitar el crecimiento.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Cómputo de alto rendimiento
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Procesadores de última generación diseñados para
                          ejecutar cargas de inteligencia artificial y análisis
                          de grandes volúmenes de datos con estabilidad y sin
                          interrupciones.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Sistemas de almacenamiento escalables
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Arquitecturas SAN/NAS unificadas, optimizadas para
                          almacenamiento flash y latencia ultrabaja.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Infraestructura de red inteligente
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Conmutación de baja latencia, telemetría automatizada
                          y compatibilidad con redes definidas por software
                          (SDN).
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        send
                      </span>
                      Solicitar Consultoría Técnica
                    </button>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        description
                      </span>
                      Ficha Técnica
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwNbut33n1gtN-jdNK6jnHQ3WDbotMgH4L4xyy-ZYcXch3dAeHXNkfqSMK5QGO4bLvT35AYBV_HcZL-g3W86zubo7rhTivtDMm-qPNF4D2SmoTMGLAl2jno6QOoXb4RTj6JVZGHxb3NEl-0BdlT0OHYjLKjAZfEjSJvNGUPerpeN7om2OjQv977d81gwVWlF03Krk9Iz1EelOrbOF3HycInkc6KAy8qKPBwumJDo9wjSDmySpP04yqVQ')",
                    }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full text-white shadow-2xl'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                          <span className='font-bold text-sm tracking-wide'>
                            Optimización de cómputo y centros de datos
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                          ESTADO: ÓPTIMO
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mb-3'>
                        <div className='bg-primary h-full w-[88%]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 text-xs pt-2 border-t border-white/10'>
                        <div className='text-gray-300'>
                          <div>Eficiencia Operativa</div>
                          <div className='text-white font-mono text-base font-bold'>
                            99.98%
                          </div>
                        </div>
                        <div className='text-right text-gray-300'>
                          <div>Rendimiento I/O</div>
                          <div className='text-white font-mono text-base font-bold'>
                            Latencia inferior a 1 ms
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className='py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300'
            hidden={activeTab !== 'servers'}
            id='servers'
          >
            <div className='max-w-7xl mx-auto px-4 md:px-10'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div className='order-2 lg:order-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                    <span className='material-symbols-outlined text-[16px]'>
                      storage
                    </span>
                    ARQUITECTURA DE SERVIDORES EMPRESARIALES
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3'>
                    <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                      <span className='material-symbols-outlined'>storage</span>
                    </span>
                    Servidores empresariales
                  </h2>
                  <p className='text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed'>
                    Implementa infraestructura de servidores de alta densidad
                    para operaciones críticas. Nuestros servidores empresariales
                    ofrecen la potencia, la capacidad de expansión y la
                    fiabilidad que requieren las cargas de trabajo actuales.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Sistemas multinodo en rack y blade
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Formatos modulares optimizados para maximizar la
                          densidad de cómputo y la eficiencia energética.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Alta disponibilidad para operaciones críticas
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Fuentes de alimentación redundantes e intercambiables
                          en caliente, refrigeración automatizada y memoria ECC
                          para operar sin interrupciones las 24 horas.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Administración remota integrada
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Telemetría empresarial fuera de banda con iDRAC o iLO
                          para automatizar el aprovisionamiento.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        send
                      </span>
                      Solicitar Consultoría Técnica
                    </button>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        description
                      </span>
                      Ficha Técnica
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh1hgumhVLYqbZpHsbXBH1gJM-lhu4djNRTwjRup_eXj1OJVV8ik3q_zldcR8kGZFKIKysNAZ59lsUmjpcTMPJL3A3Kss8tpXXP5yukrHaMQHivkFP_bRnEbXpG6MdVpK1JNWZNSBkxvtHM4VZkQ4pwDpc9BaAhSbdXZOCN958bXz9aoVLKbo9fxZEmhF1IfgO2rNLcsfEfGHHvHQu4f1pnVpAzuFAgD6OYX9WRieo-c-tQAqIsEvaVg')",
                    }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full text-white shadow-2xl'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                          <span className='font-bold text-sm tracking-wide'>
                            Telemetría &amp; Eficiencia de Servidores
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                          UTILIZACIÓN: 91%
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mb-3'>
                        <div className='bg-primary h-full w-[91%]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 text-xs pt-2 border-t border-white/10'>
                        <div className='text-gray-300'>
                          <div>Densidad de Carga</div>
                          <div className='text-white font-mono text-base font-bold'>
                            Doble socket de cuarta generación
                          </div>
                        </div>
                        <div className='text-right text-gray-300'>
                          <div>Tasa de Disponibilidad</div>
                          <div className='text-white font-mono text-base font-bold'>
                            99.995% SLA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className='py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300'
            hidden={activeTab !== 'licensing'}
            id='licensing'
          >
            <div className='max-w-7xl mx-auto px-4 md:px-10'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div className='order-2 lg:order-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                    <span className='material-symbols-outlined text-[16px]'>
                      workspace_premium
                    </span>
                    GESTIÓN Y CUMPLIMIENTO DE LICENCIAS
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3'>
                    <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                      <span className='material-symbols-outlined'>
                        workspace_premium
                      </span>
                    </span>
                    Licenciamiento empresarial
                  </h2>
                  <p className='text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed'>
                    Simplifica la adquisición de software y asegura el
                    cumplimiento de las licencias. Centralizamos la gestión del
                    licenciamiento empresarial para reducir la carga
                    administrativa y aprovechar mejor tu inversión.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Socios estratégicos oficiales
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Socio certificado de primer nivel de Red Hat,
                          Broadcom, Veeam, VMware y Microsoft.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Cumplimiento y optimización de licencias
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Revisiones preventivas para evitar gastos innecesarios
                          y mantenerte preparado para auditorías con plena
                          transparencia.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Gestión de suscripciones y renovaciones
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Unificación de fechas de vencimiento y notificaciones
                          automáticas para proteger la continuidad operativa.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        send
                      </span>
                      Solicitar Consultoría Técnica
                    </button>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        description
                      </span>
                      Ficha Técnica
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800 bg-[#0f0809]'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-overlay'
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuiznO7lOhZDxhl3gtN85YIXk8YQoTDBkhvIkUFDEEdrZ859oj01TxbyVAS_Sn8gBXMK1cJv4qq1rgBemnjNvi0xGdTvj8b9fc3qcAv7l7ssb_YsZQUtLXv1RGetRmv_4nOSBergAp_dFm1_XNFj0m9IihiPZpwgpa-y9uWWKAg7J8cXyce3oqLAtkC-XzrAn-zS3hgnE7HxQhZWgHMEpdAfwedT5i8AmwQ7DpbDsENmQyaTIXwvYcUg')",
                    }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-8'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full text-white shadow-2xl'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                          <span className='font-bold text-sm tracking-wide'>
                            Auditoría de Licenciamiento Activo
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                          CUMPLIMIENTO: 100%
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mb-3'>
                        <div className='bg-primary h-full w-[96%]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 text-xs pt-2 border-t border-white/10'>
                        <div className='text-gray-300'>
                          <div>Suscripciones con vencimiento unificado</div>
                          <div className='text-white font-mono text-base font-bold'>
                            Más de 50 equipos anfitriones
                          </div>
                        </div>
                        <div className='text-right text-gray-300'>
                          <div>Ahorro OPEX</div>
                          <div className='text-white font-mono text-base font-bold'>
                            -28% Anual
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className='py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300'
            hidden={activeTab !== 'virtualization'}
            id='virtualization'
          >
            <div className='max-w-7xl mx-auto px-4 md:px-10'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div className='order-2 lg:order-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                    <span className='material-symbols-outlined text-[16px]'>
                      cloud_queue
                    </span>
                    VIRTUALIZACIÓN HÍBRIDA Y MULTINUBE
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3'>
                    <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                      <span className='material-symbols-outlined'>
                        cloud_queue
                      </span>
                    </span>
                    Virtualización y nube
                  </h2>
                  <p className='text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed'>
                    Combina tu infraestructura local con la agilidad de la nube.
                    Nuestras soluciones de virtualización optimizan el uso de
                    recursos y simplifican el despliegue de aplicaciones en
                    entornos híbridos.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Orquestación de nube híbrida
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Plano de control unificado para mover cargas de
                          trabajo entre servidores físicos y proveedores de nube
                          a hiperescala.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Kubernetes empresarial con Red Hat OpenShift
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Orquestación de contenedores a escala empresarial con
                          operaciones automatizadas y seguridad integrada.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Modernización VMware &amp; Broadcom SDDC
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Arquitecturas de centros de datos definidos por
                          software de nueva generación para maximizar la
                          agilidad y la densidad de cómputo.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        send
                      </span>
                      Solicitar Consultoría Técnica
                    </button>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        description
                      </span>
                      Ficha Técnica
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800 bg-[#0f0809]'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80'
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuiznO7lOhZDxhl3gtN85YIXk8YQoTDBkhvIkUFDEEdrZ859oj01TxbyVAS_Sn8gBXMK1cJv4qq1rgBemnjNvi0xGdTvj8b9fc3qcAv7l7ssb_YsZQUtLXv1RGetRmv_4nOSBergAp_dFm1_XNFj0m9IihiPZpwgpa-y9uWWKAg7J8cXyce3oqLAtkC-XzrAn-zS3hgnE7HxQhZWgHMEpdAfwedT5i8AmwQ7DpbDsENmQyaTIXwvYcUg')",
                    }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full text-white shadow-2xl'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                          <span className='font-bold text-sm tracking-wide'>
                            Rendimiento en la nube y nodos virtuales
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                          EFICIENCIA: 98.2%
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mb-3'>
                        <div className='bg-primary h-full w-[98.2%]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 text-xs pt-2 border-t border-white/10'>
                        <div className='text-gray-300'>
                          <div>Nodos Activos</div>
                          <div className='text-white font-mono text-base font-bold'>
                            1248 nodos
                          </div>
                        </div>
                        <div className='text-right text-gray-300'>
                          <div>Tasa de transferencia híbrida</div>
                          <div className='text-white font-mono text-base font-bold'>
                            40 Gbps
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className='py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300'
            hidden={activeTab !== 'protection'}
            id='protection'
          >
            <div className='max-w-7xl mx-auto px-4 md:px-10'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div className='order-2 lg:order-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                    <span className='material-symbols-outlined text-[16px]'>
                      shield_lock
                    </span>
                    PROTECCIÓN CRÍTICA DE DATOS
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3'>
                    <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                      <span className='material-symbols-outlined'>
                        shield_lock
                      </span>
                    </span>
                    Protección y respaldo de datos
                  </h2>
                  <p className='text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed'>
                    Ante el aumento de las ciberamenazas, tus datos son tu
                    activo más valioso. Implementamos estrategias integrales de
                    respaldo y recuperación ante desastres con Veeam para
                    asegurar la continuidad del negocio.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Respaldos inmutables y aislados de la red
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Políticas de almacenamiento resistentes al ransomware
                          que impiden la eliminación o el cifrado no
                          autorizados.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Recuperación inmediata de máquinas virtuales y datos
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Reduce drásticamente los tiempos objetivo de
                          recuperación (RTO) ejecutando cargas críticas
                          directamente desde los archivos de respaldo.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Movilidad de datos en entornos de nube híbrida
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Gestión coordinada del ciclo de vida de los datos
                          entre equipos de almacenamiento locales y repositorios
                          en la nube.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        send
                      </span>
                      Solicitar Consultoría Técnica
                    </button>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        description
                      </span>
                      Ficha Técnica
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0'
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABpIUJhMf9ynNNRoi33RTgZlh6g-e3IW9arO7Hej7iOPmi5i4FXl_S-qg377pGFmtl-T6c9GDb38-d9XF6VEUuAkFfqW6H_5BnmziPNpzkwdgxAC3a8oRKamDDSiDbHJzxok10zrFEUwIBL7CaHcDnyoOtxOW0cg38BueV5rkim-LqicD1kQ0fv9kcqhpagybaXmQHGyriyBI_YxfYcYar9DwZ1hqcAIREP3nGw1m9s5JcIov4o68e5g')",
                    }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full text-white shadow-2xl'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                          <span className='font-bold text-sm tracking-wide'>
                            Seguridad &amp; Telemetría de Respaldo
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                          ESTADO: SEGURO
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mb-3'>
                        <div className='bg-[#00b336] h-full w-[98%]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 text-xs pt-2 border-t border-white/10'>
                        <div className='text-gray-300'>
                          <div>Sincronización en la nube</div>
                          <div className='text-white font-mono text-base font-bold'>
                            98% Completada
                          </div>
                        </div>
                        <div className='text-right text-gray-300'>
                          <div>Motor de Protección</div>
                          <div className='text-[#00b336] font-mono text-base font-bold'>
                            VEEAM B&amp;R
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className='py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300'
            hidden={activeTab !== 'servicios'}
            id='servicios'
          >
            <div className='max-w-7xl mx-auto px-4 md:px-10'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div className='order-2 lg:order-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                    <span className='material-symbols-outlined text-[16px]'>
                      support_agent
                    </span>
                    SOPORTE GESTIONADO &amp; CONSULTORÍA
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3'>
                    <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                      <span className='material-symbols-outlined'>
                        support_agent
                      </span>
                    </span>
                    Servicios TI
                  </h2>
                  <p className='text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed'>
                    Servicios integrales de TI para acompañar tu transformación
                    digital. Desde servicios gestionados hasta soporte técnico
                    especializado, ayudamos a que tu tecnología funcione de
                    acuerdo con los objetivos de tu empresa.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Servicios gestionados de infraestructura (24/7/365)
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Telemetría proactiva desde el centro de operaciones de
                          red (NOC), monitoreo del estado y mantenimiento
                          preventivo de equipos de TI.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Soporte técnico especializado (niveles 2 y 3)
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Ingenieros certificados por los fabricantes que
                          resuelven incidentes críticos con acuerdos de nivel de
                          servicio garantizados.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Consultoría estratégica en arquitectura TI
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Diseño de planes tecnológicos, auditorías de TI y
                          asistencia para migrar sistemas heredados.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        send
                      </span>
                      Solicitar Consultoría Técnica
                    </button>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        description
                      </span>
                      Ficha Técnica
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfUIHP0XrakLvXvOBy9gWDA-WY0eZmtCVoy6V-uCEFTjM_ZzHHyIKSi4cyzeDIHmjnMOR7BHLU-9tSSd_qnOFe0wtSvJ8l_qmnmeNXGzMuC7EY1s00l7sHf7WtJag4MUKceJu6hfsJBP43JsOUsC0S67H8BEkQIGPIocC--0BbCsTGpxjFk_hObhBLfrlup_pffASS5qh9T2UQxIKqGLYZgeqD4g4FdsqOeWs6mHLK8rFZHyANc-vpCQ')",
                    }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full text-white shadow-2xl'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                          <span className='font-bold text-sm tracking-wide'>
                            Mesa de Ayuda &amp; SLA Activo
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                          SLA: 99.8%
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mb-3'>
                        <div className='bg-primary h-full w-[95%]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 text-xs pt-2 border-t border-white/10'>
                        <div className='text-gray-300'>
                          <div>Tiempo de Respuesta</div>
                          <div className='text-white font-mono text-base font-bold'>
                            &lt; 15 min
                          </div>
                        </div>
                        <div className='text-right text-gray-300'>
                          <div>Resolución Primer Contacto</div>
                          <div className='text-white font-mono text-base font-bold'>
                            94.2% Éxito
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className='py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300'
            hidden={activeTab !== 'dimensionamiento'}
            id='dimensionamiento'
          >
            <div className='max-w-7xl mx-auto px-4 md:px-10'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div className='order-2 lg:order-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                    <span className='material-symbols-outlined text-[16px]'>
                      architecture
                    </span>
                    PLANIFICACIÓN &amp; ARQUITECTURA PREDICTIVA
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3'>
                    <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                      <span className='material-symbols-outlined'>
                        query_stats
                      </span>
                    </span>
                    Dimensionamiento de Infraestructura TI
                  </h2>
                  <p className='text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed'>
                    Evaluación técnica y modelado predictivo para calcular con
                    precisión la capacidad de cómputo, almacenamiento y red
                    requerida por su empresa, eliminando el
                    sobredimensionamiento y garantizando alta disponibilidad.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Análisis Heurístico de Cargas de Trabajo
                          (caracterización de cargas de trabajo)
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Medición de IOPS, tasa de transferencia, latencia y
                          vCPU/RAM en tiempo real.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Modelado Predictivo de Crecimiento &amp; TCO
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Planificación de capacidad a 3-5 años optimizando la
                          inversión CAPEX/OPEX.
                        </span>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='material-symbols-outlined text-primary mt-1'>
                        check_circle
                      </span>
                      <div>
                        <strong className='text-text-main dark:text-white block'>
                          Compatibilidad y Validación Multimarca
                        </strong>
                        <span className='text-sm text-text-secondary dark:text-gray-400'>
                          Homologación para arquitecturas Dell, HPE, Lenovo,
                          Cisco y entornos virtualizados.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        send
                      </span>
                      Solicitar Consultoría Técnica
                    </button>
                    <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                      <span className='material-symbols-outlined text-[18px]'>
                        description
                      </span>
                      Ficha Técnica
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida/ALJJyrAe5dYf8MpkLq4f5W9o3Lmxk1EOGVEsKS734qHYAnc9kFDUCpQ35IpK8aHHOlo0IYwtgzuhhZe2hGWZzD3n_Plhf58qjtSeoT5fL7I1sb0ulPb-_vlSYJKZ0X6FWWMN73HdIN-zXLzj2Q8hXR6gQUFKaO3svlXFj6aNPnqdncq6tRce-rdOcv1FcQzEQ6MIGv-1gKW1QLXEUT1r0ikJ0_l_9siVQskwqwjb84HCaOJUGA')",
                    }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full text-white shadow-2xl'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <span className='material-symbols-outlined text-primary'>
                            insights
                          </span>
                          <span className='font-bold text-sm tracking-wide'>
                            Capacidad Planificada &amp; Eficiencia
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                          Ahorro CAPEX: -35%
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mb-3'>
                        <div className='bg-primary h-full w-[85%]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 text-xs pt-2 border-t border-white/10'>
                        <div className='text-gray-300'>
                          <div>Certeza Operativa</div>
                          <div className='text-white font-mono text-base font-bold'>
                            99%
                          </div>
                        </div>
                        <div className='text-right text-gray-300'>
                          <div>Densidad de dimensionamiento</div>
                          <div className='text-white font-mono text-base font-bold'>
                            Relación de 4,2×
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class='py-16 bg-white dark:bg-[#150a0b] border-t border-gray-100 dark:border-gray-800 overflow-hidden relative'>
            <div class='max-w-7xl mx-auto px-4 md:px-10 mb-10 text-center relative z-10'>
              <h3 class='text-sm font-bold uppercase tracking-widest text-text-secondary dark:text-gray-400 mb-2'>
                Strategic Technology Partners
              </h3>
              <div class='h-0.5 w-12 bg-primary mx-auto'></div>
            </div>
            <div class='relative w-full mask-linear'>
              <div class='flex w-max animate-scroll'>
                <div class='flex gap-16 md:gap-24 items-center px-8 md:px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500'>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <span class='material-symbols-outlined text-primary text-4xl'>
                      star
                    </span>
                    RedHat
                  </div>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <div class='h-8 w-8 rounded-full border-4 border-primary'></div>
                    BROADCOM
                  </div>
                  <div class='flex items-center gap-1 font-black text-2xl text-text-main dark:text-white tracking-tighter'>
                    <span class='text-primary'>V</span>
                    EEAM
                  </div>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <div class='flex gap-[2px] items-end h-6 pb-1'>
                      <div class='w-1 h-2 bg-primary'></div>
                      <div class='w-1 h-4 bg-primary'></div>
                      <div class='w-1 h-2 bg-primary'></div>
                      <div class='w-1 h-4 bg-primary'></div>
                      <div class='w-1 h-2 bg-primary'></div>
                    </div>
                    CISCO
                  </div>
                  <div class='flex items-center gap-2 font-light text-2xl text-text-main dark:text-white'>
                    <span class='font-bold border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center text-xs p-1'>
                      DE
                    </span>
                    DELL
                    <span class='text-xs font-bold text-gray-500 -ml-1 mt-1'>
                      Technologies
                    </span>
                  </div>
                  <div class='flex items-center gap-2 font-black text-2xl text-text-main dark:text-white tracking-widest'>
                    <div class='w-6 h-3 bg-primary'></div>
                    HPE
                  </div>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <span class='material-symbols-outlined text-primary text-3xl'>
                      change_history
                    </span>
                    Microsoft Azure
                  </div>
                </div>
                <div class='flex gap-16 md:gap-24 items-center px-8 md:px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500'>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <span class='material-symbols-outlined text-primary text-4xl'>
                      star
                    </span>
                    RedHat
                  </div>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <div class='h-8 w-8 rounded-full border-4 border-primary'></div>
                    BROADCOM
                  </div>
                  <div class='flex items-center gap-1 font-black text-2xl text-text-main dark:text-white tracking-tighter'>
                    <span class='text-primary'>V</span>
                    EEAM
                  </div>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <div class='flex gap-[2px] items-end h-6 pb-1'>
                      <div class='w-1 h-2 bg-primary'></div>
                      <div class='w-1 h-4 bg-primary'></div>
                      <div class='w-1 h-2 bg-primary'></div>
                      <div class='w-1 h-4 bg-primary'></div>
                      <div class='w-1 h-2 bg-primary'></div>
                    </div>
                    CISCO
                  </div>
                  <div class='flex items-center gap-2 font-light text-2xl text-text-main dark:text-white'>
                    <span class='font-bold border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center text-xs p-1'>
                      DE
                    </span>
                    DELL
                    <span class='text-xs font-bold text-gray-500 -ml-1 mt-1'>
                      Technologies
                    </span>
                  </div>
                  <div class='flex items-center gap-2 font-black text-2xl text-text-main dark:text-white tracking-widest'>
                    <div class='w-6 h-3 bg-primary'></div>
                    HPE
                  </div>
                  <div class='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                    <span class='material-symbols-outlined text-primary text-3xl'>
                      change_history
                    </span>
                    Microsoft Azure
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class='relative py-32 bg-white dark:bg-[#211113] overflow-hidden border-t border-gray-100 dark:border-gray-800'>
            <div class='max-w-4xl mx-auto px-4 md:px-10 relative z-10 text-center'>
              <h2 class='text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6 tracking-tight'>
                Ready to work with us?
              </h2>
              <p class='text-lg text-text-secondary dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
                Experience the difference of enterprise-grade IT solutions.
                Whether you're looking for infrastructure modernization, cloud
                strategy, or professional support, our team is here to help you
                scale.
              </p>
              <div class='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <button class='flex items-center justify-center h-14 px-10 rounded-lg bg-[#ED1A37] text-white font-bold text-base hover:bg-red-600 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto'>
                  Contact Us
                </button>
                <button class='flex items-center justify-center h-14 px-10 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
                  View Careers
                </button>
              </div>
            </div>
          </section>
          <footer
            class='bg-[#1b0e0f] text-white pt-16 pb-24 md:pb-8'
            id='contact'
          >
            <div class='max-w-7xl mx-auto px-4 md:px-10'>
              <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12'>
                <div class='flex flex-col gap-5 text-center md:text-left items-center md:items-start'>
                  <div class='flex items-center gap-2'>
                    <div class='size-6 text-primary'>
                      <svg
                        class='w-full h-full'
                        fill='none'
                        viewBox='0 0 48 48'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6 6H42L36 24L42 42H6L12 24L6 6Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </div>
                    <span class='text-lg font-bold'>IMPROTRU Corp.</span>
                  </div>
                  <p class='text-gray-400 text-sm leading-relaxed max-w-sm'>
                    Delivering enterprise-grade IT infrastructure and hardware
                    solutions to businesses worldwide.
                  </p>
                  <div class='flex flex-col gap-2 pt-2 text-xs text-gray-400'>
                    <div class='flex items-center gap-2 justify-center md:justify-start'>
                      <span class='material-symbols-outlined text-primary text-[18px]'>
                        location_on
                      </span>
                      <span>Av. Eloy Alfaro n34-118, Quito</span>
                    </div>
                    <a
                      class='flex items-center gap-2 hover:text-white transition-colors justify-center md:justify-start'
                      href='tel:+593999951096'
                    >
                      <span class='material-symbols-outlined text-primary text-[18px]'>
                        call
                      </span>
                      <span>+593 999951096</span>
                    </a>
                    <a
                      class='flex items-center gap-2 hover:text-white transition-colors justify-center md:justify-start'
                      href='mailto:contact@importru.com'
                    >
                      <span class='material-symbols-outlined text-primary text-[18px]'>
                        mail
                      </span>
                      <span>contact@importru.com</span>
                    </a>
                  </div>
                </div>
                <div class='flex flex-col gap-3 text-center md:text-left items-center md:items-start'>
                  <h4 class='text-sm font-bold uppercase tracking-wider text-gray-500 mb-1'>
                    Solutions
                  </h4>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#datacenter'
                  >
                    Data Centers
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#servers'
                  >
                    Enterprise Servers
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#licensing'
                  >
                    Enterprise Licensing
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#virtualization'
                  >
                    Cloud Services
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#protection'
                  >
                    Data Protection &amp; Cybersecurity
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#servicios'
                  >
                    Servicios TI
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#dimensionamiento'
                  >
                    Dimensionamiento TI
                  </a>
                </div>
                <div class='flex flex-col gap-3 text-center md:text-left items-center md:items-start'>
                  <h4 class='text-sm font-bold uppercase tracking-wider text-gray-500 mb-1'>
                    Company
                  </h4>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#'
                  >
                    About Us
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#'
                  >
                    Partners &amp; Alliances
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#'
                  >
                    Careers &amp; Culture
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#'
                  >
                    Press &amp; Insights
                  </a>
                  <a
                    class='text-gray-300 hover:text-primary transition-colors text-sm py-1 block'
                    href='#'
                  >
                    Case Studies
                  </a>
                </div>
              </div>
              <div class='pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
                <p class='text-gray-500 text-sm'>
                  © 2023 IMPROTRU Corporate. All rights reserved.
                </p>
                <div class='flex items-center gap-4 text-sm text-gray-500'>
                  <a
                    class='text-gray-500 hover:text-white py-1 transition-colors'
                    href='#'
                  >
                    Privacy Policy
                  </a>
                  <span class='text-gray-700'>•</span>
                  <a
                    class='text-gray-500 hover:text-white py-1 transition-colors'
                    href='#'
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
