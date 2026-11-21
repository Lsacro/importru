import React, { useState } from 'react';

const whatsapp = (message) =>
  `https://wa.me/593999951096?text=${encodeURIComponent(message)}`;
const filterBase =
  'shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-primary';
const activeFilter = `${filterBase} bg-primary text-white shadow-sm`;
const inactiveFilter = `${filterBase} text-text-secondary hover:bg-white dark:text-gray-300 dark:hover:bg-gray-800`;

export default function Partners() {
  const [filter, setFilter] = useState('all');

  return (
    <main className='relative min-w-0 overflow-hidden bg-background-light font-sans text-text-main dark:bg-background-dark dark:text-white'>
      <section className='relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#1b0d0f] border-b border-neutral-800 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(#262a36_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none'></div>
        <div className='absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-primary/20 rounded-full blur-3xl pointer-events-none'></div>
        <div className='absolute top-1/3 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none'></div>
        <div className='relative max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
            <div className='lg:col-span-7 flex flex-col items-start space-y-6 text-left'>
              <div className='inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700 shadow-inner text-xs font-semibold tracking-wider text-red-300 uppercase'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
                </span>
                <span>
                  Alianzas Certificadas Oficiales Tier-1 · Ecuador &amp; LATAM
                </span>
              </div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]'>
                Nuestros Partners <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#DE1E2F] to-red-400'>
                  Estratégicos Globales
                </span>
              </h1>
              <p className='text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed'>
                Alianzas Tier-1 de nivel mundial para impulsar la
                infraestructura crítica y la transformación tecnológica de su
                organización. Garantía directa en Ecuador, despliegue llave en
                mano por ingenieros certificados y facturación local en dólares
                sin comisiones.
              </p>
              <div className='flex flex-wrap gap-4 pt-2'>
                <a
                  className='inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary hover:bg-[#DE1E2F] text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-primary/30 hover:scale-[1.02]'
                  href='#catalogo-partners'
                >
                  <span>Explorar Alianzas Tier-1</span>
                  <span className='material-symbols-outlined text-base'>
                    arrow_downward
                  </span>
                </a>
                <a
                  className='inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-white text-sm font-semibold tracking-wide transition-all'
                  href={whatsapp(
                    'Hola, quisiera hablar con un especialista de Importru.',
                  )}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='material-symbols-outlined text-base text-primary'>
                    chat
                  </span>
                  <span>Hablar con un Especialista</span>
                </a>
              </div>
            </div>
            <div className='lg:col-span-5 relative'>
              <div className='relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900/80 p-2.5 shadow-2xl backdrop-blur-md'>
                <div className='relative rounded-xl overflow-hidden aspect-[4/3] bg-neutral-950'>
                  <img
                    className='w-full h-full object-cover object-center'
                    alt='Futuristic Tier-1 enterprise datacenter with optical red and cool cyan indicators'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuAR3HRs5uqUYQpc3NqZ25MWtSBb5PBblj2OZz7rosc7tkMHXa0auklNw92F6O6BTYDAU7eOGpwykfUMUm1zLeLI7Khbt4KzqFmvto74k4U_SZONL7Tq2ih-3U3tUIQzYUAyyaGhB5bQbTZzyV-Pc71X3QXtwMxcjY5zd1ifXJU20w6DH6ZHra3JUWrH5VY3RlK9T6uooGXQ6O6htBkUJhvxGaK0O2vEMRiWQP1l29pw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 right-4 text-white'>
                    <div className='inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-red-300 bg-black/70 border border-neutral-700 px-2.5 py-0.5 rounded-full mb-1.5'>
                      <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse'></span>
                      <span>Infraestructura Crítica</span>
                    </div>
                    <p className='text-sm font-bold text-white'>
                      Centro de Soluciones Corporativas Quito &amp; Guayaquil
                    </p>
                    <p className='text-xs text-neutral-400 mt-0.5'>
                      Homologado para entidades financieras y corporaciones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 pt-10 border-t border-neutral-800/80'>
            <div className='bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:border-neutral-700 transition-all'>
              <div className='w-11 h-11 rounded-lg bg-neutral-800 flex items-center justify-center text-primary shrink-0 border border-neutral-700'>
                <span className='material-symbols-outlined text-2xl'>
                  verified_user
                </span>
              </div>
              <div>
                <p className='text-[11px] font-semibold text-neutral-400 uppercase tracking-wider'>
                  Garantía Local Ecuador
                </p>
                <h3 className='text-2xl font-bold text-white mt-1'>
                  100% Directa
                </h3>
                <p className='text-[11px] font-medium text-emerald-400 flex items-center gap-1 mt-1'>
                  <span className='material-symbols-outlined text-xs'>
                    check_circle
                  </span>
                  Respaldo Oficial Fabricante
                </p>
              </div>
            </div>
            <div className='bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:border-neutral-700 transition-all'>
              <div className='w-11 h-11 rounded-lg bg-neutral-800 flex items-center justify-center text-primary shrink-0 border border-neutral-700'>
                <span className='material-symbols-outlined text-2xl'>hub</span>
              </div>
              <div>
                <p className='text-[11px] font-semibold text-neutral-400 uppercase tracking-wider'>
                  Alianzas Globales
                </p>
                <h3 className='text-2xl font-bold text-white mt-1'>
                  +10 Tier-1
                </h3>
                <p className='text-[11px] font-medium text-emerald-400 flex items-center gap-1 mt-1'>
                  <span className='material-symbols-outlined text-xs'>
                    handshake
                  </span>
                  Canal Oficial Autorizado
                </p>
              </div>
            </div>
            <div className='bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:border-neutral-700 transition-all'>
              <div className='w-11 h-11 rounded-lg bg-neutral-800 flex items-center justify-center text-primary shrink-0 border border-neutral-700'>
                <span className='material-symbols-outlined text-2xl'>
                  speed
                </span>
              </div>
              <div>
                <p className='text-[11px] font-semibold text-neutral-400 uppercase tracking-wider'>
                  SLA en Sitio
                </p>
                <h3 className='text-2xl font-bold text-white mt-1'>
                  &lt; 4 Horas
                </h3>
                <p className='text-[11px] font-medium text-emerald-400 flex items-center gap-1 mt-1'>
                  <span className='material-symbols-outlined text-xs'>
                    bolt
                  </span>
                  Misión Crítica Onsite
                </p>
              </div>
            </div>
            <div className='bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:border-neutral-700 transition-all'>
              <div className='w-11 h-11 rounded-lg bg-neutral-800 flex items-center justify-center text-primary shrink-0 border border-neutral-700'>
                <span className='material-symbols-outlined text-2xl'>
                  support_agent
                </span>
              </div>
              <div>
                <p className='text-[11px] font-semibold text-neutral-400 uppercase tracking-wider'>
                  Soporte Enterprise
                </p>
                <h3 className='text-2xl font-bold text-white mt-1'>
                  24/7 NOC &amp; L3
                </h3>
                <p className='text-[11px] font-medium text-emerald-400 flex items-center gap-1 mt-1'>
                  <span className='material-symbols-outlined text-xs'>
                    headset_mic
                  </span>
                  Ingenieros Residentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='scroll-mt-24 py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12'
        id='catalogo-partners'
      >
        <div className='flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-10 border-b border-gray-200 dark:border-gray-800'>
          <div>
            <div className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2'>
              <span>Ecosistema Tecnológico</span>
            </div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main dark:text-white tracking-tight'>
              Alianzas Estratégicas Tier-1 Certificadas
            </h2>
            <p className='text-sm text-text-secondary dark:text-gray-400 mt-1 max-w-xl'>
              Soluciones homologadas con ingenieros residentes y centros de
              repuestos autorizados en territorio ecuatoriano.
            </p>
          </div>

          <div className='min-w-0 max-w-full overflow-x-auto pb-2 md:pb-0'>
            <div className='inline-flex w-max p-1.5 bg-background-light dark:bg-[#211113] rounded-full border border-gray-200 dark:border-gray-800 gap-1.5 whitespace-nowrap'>
              <button
                type='button'
                aria-pressed={filter === 'all'}
                onClick={() => setFilter('all')}
                className={filter === 'all' ? activeFilter : inactiveFilter}
              >
                Todos los Partners (10)
              </button>
              <button
                type='button'
                aria-pressed={filter === 'infra'}
                onClick={() => setFilter('infra')}
                className={filter === 'infra' ? activeFilter : inactiveFilter}
              >
                Infraestructura &amp; Servidores
              </button>
              <button
                type='button'
                aria-pressed={filter === 'cloud'}
                onClick={() => setFilter('cloud')}
                className={filter === 'cloud' ? activeFilter : inactiveFilter}
              >
                Cloud &amp; Híbrido
              </button>
              <button
                type='button'
                aria-pressed={filter === 'software'}
                onClick={() => setFilter('software')}
                className={
                  filter === 'software' ? activeFilter : inactiveFilter
                }
              >
                Software &amp; Base de Datos
              </button>
              <button
                type='button'
                aria-pressed={filter === 'devices'}
                onClick={() => setFilter('devices')}
                className={filter === 'devices' ? activeFilter : inactiveFilter}
              >
                Workstations &amp; Dispositivos
              </button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          <div
            className={
              filter === 'all' || 'infra devices'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      LEN
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Lenovo ISG
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Data Center Group
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary animate-ping'></span>
                  Titanium Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Servidores ThinkSystem &amp; Almacenamiento ThinkSystem
                        DE/DM
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Hiperconvergencia Nutanix / VMware vSAN ReadyNodes
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Edge Computing &amp; Servidores de Alta Densidad GPU
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Stock de repuestos críticos en Ecuador, dimensionamiento
                    certificado por ingenieros locales y garantía Premier
                    Support con atención Onsite 24x7.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                Garantía: Onsite 3-5 Años
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'infra devices'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      DELL
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Dell Technologies
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Enterprise &amp; Storage
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Titanium Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>Servidores PowerEdge de 15ª y 16ª Generación</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Almacenamiento PowerStore, PowerScale &amp; PowerVault
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>Soluciones VxRail HCI nativas para VMware</span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Arquitectura certificada Dell ProDeploy, migración
                    transparente de cargas y soporte ProSupport Plus con Account
                    Manager dedicado.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                Garantía: ProSupport Plus
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'infra software'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      IBM
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      IBM
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Power Systems &amp; Security
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Gold Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Servidores IBM Power Systems (AIX, IBM i, Linux)
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Almacenamiento FlashSystem &amp; Tape Libraries LTO
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        IBM Security QRadar SIEM &amp; Guardium Data Protection
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Especialistas en continuidad de negocio para la banca y
                    cooperativas del Ecuador, auditoría de licencias y
                    mantenimiento preventivo.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                Mantenimiento: IBM TSS
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'cloud software'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      ORCL
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Oracle
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Database &amp; OCI Cloud
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Principal Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Oracle Database Enterprise Edition &amp; RAC Clustering
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Oracle Cloud Infrastructure (OCI) Compute &amp;
                        Autonomous DB
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Oracle Exadata Cloud@Customer en Data Center Local
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Consultoría de optimización de cores (ULAs y Pallas),
                    tunning de bases de datos de alto volumen transaccional y
                    facturación local en dólares.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                Soporte: Oracle Premier
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'cloud software'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      RHAT
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Red Hat
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Open Hybrid Cloud
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Premier Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Red Hat Enterprise Linux (RHEL) Server Edition
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Plataforma de Contenedores Kubernetes Red Hat OpenShift
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Automatización de TI con Red Hat Ansible Automation
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Arquitectura cloud-native para modernización de aplicaciones
                    legadas bancarias y del sector telecomunicaciones en
                    Ecuador.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                Suscripciones Oficiales
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'cloud'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      AZR
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Microsoft Azure
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Cloud Infrastructure
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Tier-1 Direct CSP
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Infraestructura Híbrida Azure Arc &amp; Azure Stack HCI
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Disaster Recovery as a Service (Azure Site Recovery)
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Modern Data Platform con Azure Synapse &amp; Databricks
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Facturación corporativa en Ecuador con cumplimiento
                    tributario SRI, optimización de costos FinOps mensual y
                    conectividad ExpressRoute dedicada.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                SLA: 99.95% FinOps
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'software'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      MSFT
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Microsoft 365
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Modern Workplace &amp; Security
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Solutions Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Licenciamiento Microsoft 365 E3/E5 &amp; Microsoft
                        Copilot
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Seguridad Zero Trust con Microsoft Defender &amp;
                        Purview
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Gestión de terminales Microsoft Intune &amp; Entra ID P2
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Despliegue y migración masiva de correo corporativo Exchange
                    sin caída operativa, adopción de usuario final y hardening
                    de seguridad.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                CSP Direct Authorised
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'cloud'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      AWS
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Amazon Web Services
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Cloud Compute &amp; Storage
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Advanced Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Cómputo Elastic Compute Cloud (EC2) &amp; Storage S3
                        Glacier
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Bases de datos administradas RDS &amp; Aurora Multi-AZ
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        AWS Well-Architected Framework &amp; Migraciones Cloud
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Solución de facturación tributaria local en Ecuador
                    (retenciones SRI sin penalidad en divisa extranjera) y
                    monitoreo 24/7 mediante NOC IMPROTRU.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                AWS Certified Engineers
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'devices'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      HP
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      HP Inc.
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Personal Systems &amp; Print
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Amplify Power Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>Workstations de Alto Rendimiento HP Z by HP</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Laptops Corporativas EliteBook &amp; ProBook con HP Sure
                        Start
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Soluciones Poly de Videoconferencia &amp; Salas Híbridas
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Servicio DaaS (Device as a Service) para flotas corporativas
                    en Ecuador con sustitución inmediata ante siniestro y
                    garantía extendida in-situ.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                HP Care Pack Oficial
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>

          <div
            className={
              filter === 'all' || 'infra cloud'.split(' ').includes(filter)
                ? 'partner-card group bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(187,0,37,0.12)] hover:border-primary/40 transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between'
                : 'hidden'
            }
          >
            <div>
              <div className='flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-background-light dark:bg-[#211113] flex items-center justify-center font-black text-xl tracking-tighter text-text-main dark:text-white group-hover:text-primary transition-colors border border-gray-200 dark:border-gray-800'>
                    <span className='text-primary font-mono text-sm tracking-normal font-bold'>
                      HPE
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-text-main dark:text-white'>
                      Hewlett Packard Enterprise
                    </h3>
                    <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                      Hybrid IT &amp; Networking
                    </span>
                  </div>
                </div>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-900/20 text-primary border border-gray-200 dark:border-gray-800'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Platinum Partner
                </span>
              </div>
              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-[11px] uppercase tracking-wider text-text-secondary dark:text-gray-400 font-semibold mb-2'>
                    Soluciones Clave
                  </p>
                  <ul className='text-xs text-text-secondary dark:text-gray-400 space-y-1.5 font-normal'>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Servidores HPE ProLiant Gen11 &amp; Almacenamiento
                        Alletra
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Plataforma HPE GreenLake Cloud Services On-Premises
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-xs text-primary'>
                        arrow_forward_ios
                      </span>
                      <span>
                        Networking Corporativo Aruba CX Switches &amp; Wi-Fi 6E
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-background-light dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-xl p-3.5 text-xs text-text-secondary dark:text-gray-300'>
                  <p className='font-bold text-text-main dark:text-white text-[11px] uppercase tracking-wide mb-1 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm text-primary'>
                      verified
                    </span>
                    Valor Agregado IMPROTRU
                  </p>
                  <p className='leading-relaxed text-[12px] text-text-secondary dark:text-gray-400'>
                    Diseño de centro de datos hiperconvergente, contratos HPE
                    Pointnext con cobertura directa 24x7 y stock de repuestos en
                    Quito y Guayaquil.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
              <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                Garantía: HPE Pointnext
              </span>
              <a
                className='text-xs font-bold text-primary hover:text-[#DE1E2F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform'
                href={whatsapp(
                  'Hola, quisiera solicitar una ficha técnica del catálogo de partners.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Solicitar ficha
                <span className='material-symbols-outlined text-sm'>
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white dark:bg-[#1a0e10] border-y border-gray-200 dark:border-gray-800'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='text-center max-w-3xl mx-auto mb-14'>
            <span className='text-xs font-bold uppercase tracking-widest text-primary'>
              Respaldo Institucional
            </span>
            <h2 className='text-2xl sm:text-3xl font-bold text-text-main dark:text-white mt-1'>
              Garantías Corporativas &amp; Capacidad Operativa en Ecuador
            </h2>
            <p className='text-sm text-text-secondary dark:text-gray-400 mt-2'>
              Respaldamos cada proyecto con pólizas de fiel cumplimiento,
              contratos de nivel de servicio (SLA) exigentes e ingenieros con
              certificaciones vigentes emitidas por cada fabricante.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between'>
              <div>
                <div className='w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 text-primary flex items-center justify-center mb-4'>
                  <span className='material-symbols-outlined'>shield</span>
                </div>
                <h4 className='text-base font-bold text-text-main dark:text-white'>
                  Garantía Directa
                </h4>
                <p className='text-xs text-text-secondary dark:text-gray-400 mt-1.5 leading-relaxed'>
                  Sin intermediarios ni remisiones internacionales. Tramitación
                  inmediata de RMA y repuestos con inventario en bodegas
                  locales.
                </p>
              </div>
              <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
                <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                  Efectividad RMA
                </span>
                <span className='text-xs font-bold text-primary'>99.8%</span>
              </div>
            </div>
            <div className='bg-white dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between'>
              <div>
                <div className='w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 text-primary flex items-center justify-center mb-4'>
                  <span className='material-symbols-outlined'>schedule</span>
                </div>
                <h4 className='text-base font-bold text-text-main dark:text-white'>
                  SLA 4 Horas Onsite
                </h4>
                <p className='text-xs text-text-secondary dark:text-gray-400 mt-1.5 leading-relaxed'>
                  Ingenieros de campo desplegados en sitio para fallas críticas
                  de servidores y storage con repuestos físicos disponibles.
                </p>
              </div>
              <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
                <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                  Tiempo Promedio
                </span>
                <span className='text-xs font-bold text-primary'>2h 45m</span>
              </div>
            </div>
            <div className='bg-white dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between'>
              <div>
                <div className='w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 text-primary flex items-center justify-center mb-4'>
                  <span className='material-symbols-outlined'>school</span>
                </div>
                <h4 className='text-base font-bold text-text-main dark:text-white'>
                  Ingenieros Certificados
                </h4>
                <p className='text-xs text-text-secondary dark:text-gray-400 mt-1.5 leading-relaxed'>
                  Más de 45 certificaciones técnicas activas en Lenovo ISG, Dell
                  Titanium, Azure Solutions Architect, Red Hat RHCE y HPE
                  Master.
                </p>
              </div>
              <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
                <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                  Personal Local
                </span>
                <span className='text-xs font-bold text-primary'>
                  +45 Certs
                </span>
              </div>
            </div>
            <div className='bg-white dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between'>
              <div>
                <div className='w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 text-primary flex items-center justify-center mb-4'>
                  <span className='material-symbols-outlined'>
                    receipt_long
                  </span>
                </div>
                <h4 className='text-base font-bold text-text-main dark:text-white'>
                  Facturación SRI Ecuador
                </h4>
                <p className='text-xs text-text-secondary dark:text-gray-400 mt-1.5 leading-relaxed'>
                  Adquisición de software cloud y hardware en moneda de curso
                  legal (USD) sin penalización de retención internacional ni
                  comisiones swift.
                </p>
              </div>
              <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
                <span className='text-[11px] text-text-secondary dark:text-gray-400'>
                  Cumplimiento Fiscal
                </span>
                <span className='text-xs font-bold text-emerald-600 font-semibold'>
                  100% Legal
                </span>
              </div>
            </div>
          </div>

          <div className='mt-12 bg-white dark:bg-[#1a0e10] rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                <div className='flex justify-between items-center text-xs mb-2'>
                  <span className='text-text-main dark:text-white font-semibold'>
                    Cumplimiento de SLA Enterprise
                  </span>
                  <span className='text-primary font-bold'>99.4%</span>
                </div>
                <div className='h-2.5 bg-background-light dark:bg-[#211113] rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-primary to-[#DE1E2F] rounded-full'
                    style={{ width: '99.4%' }}
                  ></div>
                </div>
                <p className='text-[11px] text-text-secondary dark:text-gray-400 mt-2'>
                  Monitoreo continuo sobre más de 120 contratos vigentes
                </p>
              </div>
              <div>
                <div className='flex justify-between items-center text-xs mb-2'>
                  <span className='text-text-main dark:text-white font-semibold'>
                    Disponibilidad de Repuestos Tier-1
                  </span>
                  <span className='text-primary font-bold'>96.8%</span>
                </div>
                <div className='h-2.5 bg-background-light dark:bg-[#211113] rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-primary to-[#DE1E2F] rounded-full'
                    style={{ width: '96.8%' }}
                  ></div>
                </div>
                <p className='text-[11px] text-text-secondary dark:text-gray-400 mt-2'>
                  Inventario en bodegas autorizadas Quito y Guayaquil
                </p>
              </div>
              <div>
                <div className='flex justify-between items-center text-xs mb-2'>
                  <span className='text-text-main dark:text-white font-semibold'>
                    Satisfacción Post-Venta (CSAT)
                  </span>
                  <span className='text-primary font-bold'>4.9 / 5.0</span>
                </div>
                <div className='h-2.5 bg-background-light dark:bg-[#211113] rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-primary to-[#DE1E2F] rounded-full'
                    style={{ width: '98%' }}
                  ></div>
                </div>
                <p className='text-[11px] text-text-secondary dark:text-gray-400 mt-2'>
                  Evaluación semestral auditada por casas matrices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='bg-[#211113] rounded-2xl border border-neutral-800 p-8 lg:p-12 shadow-2xl relative overflow-hidden text-white'>
          <div className='absolute -right-24 -bottom-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none'></div>
          <div className='absolute -left-24 -top-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none'></div>
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
            <div className='lg:col-span-8 space-y-4'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-red-400'>
                <span className='w-1.5 h-1.5 rounded-full bg-primary animate-ping'></span>
                Asesoría Técnica Especializada
              </div>
              <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight'>
                ¿Listo para potenciar la infraestructura de su empresa en
                Ecuador?
              </h3>
              <p className='text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl'>
                Nuestros arquitectos de soluciones certificados diseñan
                configuraciones a la medida de su presupuesto y requerimiento
                técnico. Hable hoy mismo con un especialista en preventa.
              </p>
            </div>
            <div className='lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3'>
              <a
                className='w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-[#DE1E2F] text-white font-bold text-sm transition-all shadow-lg shadow-primary/20'
                href={whatsapp(
                  'Hola, quisiera coordinar una reunión técnica con Importru.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='material-symbols-outlined text-lg'>
                  calendar_month
                </span>
                <span>Agendar Reunión Técnica</span>
              </a>
              <a
                className='w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-700 hover:border-neutral-500 bg-neutral-900/60 text-neutral-200 hover:text-white font-semibold text-sm transition-all'
                href='tel:+593999951096'
              >
                <span className='material-symbols-outlined text-lg'>call</span>
                <span>Llamar a un Especialista</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
