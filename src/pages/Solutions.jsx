import { useState } from 'react';

export default function Solutions() {
  const [active, setActive] = useState('datacenter');
  const tabClass = (id) =>
    'flex shrink-0 items-center gap-2 h-full px-4 border-b-2 transition-colors cursor-pointer ' +
    (active === id
      ? 'border-primary text-primary'
      : 'border-transparent text-text-secondary dark:text-gray-400 hover:text-text-main dark:hover:text-white');
  return (
    <main className='flex-grow relative group'>
      <div className='w-full' id='solutions-interactive-container'>
        {/* Sticky Tab Bar */}
        <div
          className='sticky top-[var(--navbar-height,73px)] scroll-mt-[var(--navbar-height,73px)] z-40 bg-white/95 dark:bg-[#1a0e10]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm'
          id='solutions'
        >
          <div className='max-w-7xl mx-auto px-4 md:px-10 overflow-x-auto'>
            <div className='flex items-center justify-start gap-2 md:gap-8 text-sm font-bold whitespace-nowrap h-16 w-max min-w-full xl:justify-center'>
              <button
                className={tabClass('datacenter')}
                id='btn-tab-datacenter'
                aria-pressed={active === 'datacenter'}
                onClick={() => setActive('datacenter')}
                type='button'
              >
                <span className='material-symbols-outlined text-[20px]'>
                  dns
                </span>
                <span className=''>Data Center Solutions</span>
              </button>
              <button
                className={tabClass('servers')}
                id='btn-tab-servers'
                aria-pressed={active === 'servers'}
                onClick={() => setActive('servers')}
                type='button'
              >
                <span className='material-symbols-outlined text-[20px]'>
                  storage
                </span>
                <span className=''>Enterprise Servers</span>
              </button>
              <button
                className={tabClass('licensing')}
                id='btn-tab-licensing'
                aria-pressed={active === 'licensing'}
                onClick={() => setActive('licensing')}
                type='button'
              >
                <span className='material-symbols-outlined text-[20px]'>
                  workspace_premium
                </span>
                <span className=''>Enterprise Licensing</span>
              </button>
              <button
                className={tabClass('virtualization')}
                id='btn-tab-virtualization'
                aria-pressed={active === 'virtualization'}
                onClick={() => setActive('virtualization')}
                type='button'
              >
                <span className='material-symbols-outlined text-[20px]'>
                  cloud_queue
                </span>
                <span className=''>Virtualization &amp; Cloud</span>
              </button>
              <button
                className={tabClass('protection')}
                id='btn-tab-protection'
                aria-pressed={active === 'protection'}
                onClick={() => setActive('protection')}
                type='button'
              >
                <span className='material-symbols-outlined text-[20px]'>
                  shield_lock
                </span>
                <span className=''>Data Protection</span>
              </button>
              <button
                className={tabClass('servicios')}
                id='btn-tab-servicios'
                aria-pressed={active === 'servicios'}
                onClick={() => setActive('servicios')}
                type='button'
              >
                <span className='material-symbols-outlined text-[20px]'>
                  support_agent
                </span>
                <span className=''>Servicios TI</span>
              </button>
            </div>
          </div>
        </div>
        {/* TAB 1: Data Center Solutions */}
        <div
          className='py-20 bg-[#F9F9F9] dark:bg-[#1a0e10] transition-opacity duration-300'
          id='panel-datacenter'
          hidden={active !== 'datacenter'}
        >
          <div className='max-w-7xl mx-auto px-4 md:px-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-start'>
              <div className='order-2 lg:order-1'>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider border border-red-100 dark:border-red-900/30'>
                    <span className='material-symbols-outlined text-sm'>
                      memory
                    </span>
                    Infraestructura Crítica B2B
                  </div>
                  <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 text-xs font-bold uppercase tracking-wider border border-green-500/30'>
                    <span className='material-symbols-outlined text-xs'>
                      verified
                    </span>
                    Stock Local Ecuador
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-3'>
                  <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                    <span className='material-symbols-outlined'>dns</span>
                  </span>
                  Soluciones de Data Center
                </h2>
                <p className='text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed'>
                  Modernizamos y blindamos el núcleo computacional de su
                  organización con plataformas de misión crítica de
                  <strong>Dell Technologies</strong> y <strong>Cisco</strong>.
                  Reduzca la latencia, consolide centros de datos y asegure
                  disponibilidad ininterrumpida ante picos de demanda
                  transaccional.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>-38%</div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      TCO a 3 Años
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      99.999%
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Disponibilidad SLA
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      &lt; 4 hrs
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Soporte con Repuesto On-Site
                    </div>
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Cómputo de Alta Densidad para IA y Analytics
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Procesadores Intel Xeon / AMD EPYC optimizados para
                        virtualización masiva y cargas intensivas de Machine
                        Learning.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Almacenamiento NVMe All-Flash Ultrarrápido
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Matrices SAN/NAS con deduplicación y compresión nativa
                        4:1 garantizada por contrato.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Topología Spine-Leaf y SDN Cisco ACI
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Microsegmentación de tráfico este-oeste sin cuellos de
                        botella y orquestación unificada.
                      </span>
                    </div>
                  </li>
                </ul>
                <div className='p-4 mb-6 rounded-xl bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-transparent border border-red-100 dark:border-red-900/30'>
                  <div className='flex items-center gap-2 mb-2 text-primary font-bold text-sm'>
                    <span className='material-symbols-outlined text-base'>
                      card_giftcard
                    </span>
                    Assessment Inicial Gratuito para Empresas
                  </div>
                  <p className='text-xs text-text-secondary dark:text-gray-300 leading-relaxed'>
                    <strong>¿Qué incluye sin costo?:</strong> Estudio térmico y
                    de consumo energético actual, dimensionamiento de I/O por
                    carga de trabajo, y cálculo exacto de retorno de inversión
                    (ROI).
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-800 mb-6'>
                  <span className='text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400'>
                    Alianzas Oficiales:
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    DELL Titanium Partner
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    CISCO Premier
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    BROADCOM Elite
                  </span>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      className='flex items-center justify-center gap-2 min-h-12 py-2 text-center px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/30 hover:bg-red-600 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20asesoria%20comercial%20en%20Data%20Center'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        assignment
                      </span>
                      Agendar Diagnóstico de Data Center sin Costo
                    </a>
                    <a
                      className='flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20asesoria%20comercial%20en%20Data%20Center'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-whatsapp-green text-lg'>
                        chat
                      </span>
                      Hablar con Arquitecto
                    </a>
                  </div>
                  <p className='text-[11px] text-text-secondary dark:text-gray-400 flex items-center gap-2'>
                    <span className='material-symbols-outlined text-xs text-primary'>
                      lock
                    </span>
                    Respuesta en &lt; 2 horas hábiles • Acuerdo de
                    Confidencialidad (NDA) garantizado
                  </p>
                </div>
              </div>
              <div className='order-1 lg:order-2 space-y-6'>
                <div className='relative h-[440px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <img
                    alt='Data Center Solutions'
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    src='https://lh3.googleusercontent.com/aida/AEtjO1Ux8cY8qSeC7WInO4FvCy20YSck8c_wtegBihpoYqoLCcrkfam3c73lZ8So23XUhxM60kDjqRKpwThJmdTmlYB_83iBnyWMF5bkaF2m0c9k7jYMD_kCt3DkCw7VGmiodF97ThJ1GzX_p--k2B7dxQDHK5xoA8ti7OkDozJj6C5Et-6EulWdKBzFFgCACChP4EwwTm4UVZDuuC0rSn_2jLkstRsq11nENFZkdajSxvSZhEZRQc2wweZ9PViQ'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full'>
                      <div className='flex items-center justify-between text-white mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='material-symbols-outlined text-primary'>
                            tune
                          </span>
                          <span className='font-bold text-sm'>
                            Eficiencia Operativa Medida
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 font-bold'>
                          94% Reducción Latencia
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
                        <div className='bg-primary h-full w-[94%]'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-5 bg-white dark:bg-[#211113] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm'>
                      checklist
                    </span>
                    Entregables Concretos de la Propuesta:
                  </div>
                  <div className='grid grid-cols-2 gap-3 text-xs text-text-secondary dark:text-gray-300'>
                    <div className=''>✔ Topología técnica llave en mano</div>
                    <div className=''>
                      ✔ Matriz comparativa de costos CAPEX vs OPEX
                    </div>
                    <div className=''>✔ SLA firmado con repuestos locales</div>
                    <div className=''>
                      ✔ Prueba de Concepto (PoC) en laboratorio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TAB 2: Enterprise Servers */}
        <div
          className='py-20 bg-[#EEEEEE] dark:bg-[#211113] transition-opacity duration-300'
          id='panel-servers'
          hidden={active !== 'servers'}
        >
          <div className='max-w-7xl mx-auto px-4 md:px-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-start'>
              <div className='order-2 lg:order-1'>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider border border-red-100 dark:border-red-900/30'>
                    <span className='material-symbols-outlined text-sm'>
                      developer_board
                    </span>
                    Cómputo Empresarial de Alta Densidad
                  </div>
                  <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 text-xs font-bold uppercase tracking-wider border border-green-500/30'>
                    <span className='material-symbols-outlined text-xs'>
                      verified
                    </span>
                    Garantía 5 Años 24x7
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-3'>
                  <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                    <span className='material-symbols-outlined'>storage</span>
                  </span>
                  Servidores Empresariales
                </h2>
                <p className='text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed'>
                  Despliegue servidores Rack, Blade y Multi-nodo certificados de
                  última generación (Dell PowerEdge, HPE ProLiant y Cisco UCS).
                  Diseñados específicamente para transacciones financieras
                  críticas, analítica en tiempo real e inteligencia artificial
                  on-premise.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      99.999%
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Continuidad Operativa
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>+65%</div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Rendimiento por Watt
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      2 Horas
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Tiempo de Reemplazo Físico
                    </div>
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Servidores Rack y Blade con Redundancia Total
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Fuentes de poder redundantes Platinum/Titanium,
                        ventilación hot-swap y memoria ECC autoreparable.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Chasis Aceleradores de GPU para IA y Modelado
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Soporte para GPUs NVIDIA Tensor Core para aceleración de
                        inferencia y procesamiento masivo.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Gestión Fuera de Banda Segura (iDRAC9 / iLO 6 /
                        Intersight)
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Telemetría preventiva con inteligencia artificial que
                        detecta fallos de disco o memoria antes de ocurrir.
                      </span>
                    </div>
                  </li>
                </ul>
                <div className='p-4 mb-6 rounded-xl bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-transparent border border-red-100 dark:border-red-900/30'>
                  <div className='flex items-center gap-2 mb-2 text-primary font-bold text-sm'>
                    <span className='material-symbols-outlined text-base'>
                      verified
                    </span>
                    Prueba de Concepto (PoC) en sus Instalaciones
                  </div>
                  <p className='text-xs text-text-secondary dark:text-gray-300 leading-relaxed'>
                    <strong>Garantía de rendimiento:</strong> Ponemos a prueba
                    equipos demo en su entorno productivo o de contingencia sin
                    compromiso para validar KPIs de velocidad y fiabilidad antes
                    de comprar.
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-800 mb-6'>
                  <span className='text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400'>
                    Fabricantes Homologados:
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    HPE Enterprise
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    DELL Technologies
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    CISCO UCS
                  </span>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      className='flex items-center justify-center gap-2 min-h-12 py-2 text-center px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/30 hover:bg-red-600 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20solicito%20cotizacion%20de%20Servidores%20Empresariales'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        calculate
                      </span>
                      Solicitar Cotización y Dimensionamiento a Medida
                    </a>
                    <a
                      className='flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20solicito%20cotizacion%20de%20Servidores%20Empresariales'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-whatsapp-green text-lg'>
                        chat
                      </span>
                      Chat con Especialista
                    </a>
                  </div>
                  <p className='text-[11px] text-text-secondary dark:text-gray-400 flex items-center gap-2'>
                    <span className='material-symbols-outlined text-xs text-primary'>
                      inventory_2
                    </span>
                    Disponibilidad inmediata de inventario para despachos en
                    Quito y Guayaquil
                  </p>
                </div>
              </div>
              <div className='order-1 lg:order-2 space-y-6'>
                <div className='relative h-[440px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <img
                    alt='Enterprise Servers'
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    src='https://lh3.googleusercontent.com/aida/AEtjO1V--4bd41Yd4eu2tYTwlG3I4xZMW1q0lgqVNhp1J2j_NCgpb7gpy8aCCiGPkliHGnXtoLi6PUhH3f49TIiUC28qK0Bx3ss27-_9j_B8X4LwzKTJP4JHWri4ksf3SnLDcaFHaYxBfOW1EeUA8ZGwrcY7hBHS5PKZ5Fc3_utzoZJoaFYCfNDwmMa5jYBj36QLAgFY0qiCIABXN4xIOhQtrjA-nUfFPINL1yyAU-h4PoBdddDy1tERS5CpgkqG'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full'>
                      <div className='flex items-center justify-between text-white mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='material-symbols-outlined text-primary'>
                            bolt
                          </span>
                          <span className='font-bold text-sm'>
                            Resiliencia de Cómputo
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 font-bold'>
                          99.999% SLA Uptime
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
                        <div className='bg-primary h-full w-[96%]'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-5 bg-white dark:bg-[#1a0e10] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm'>
                      task_alt
                    </span>
                    Lo que recibirá su equipo de TI:
                  </div>
                  <div className='grid grid-cols-2 gap-3 text-xs text-text-secondary dark:text-gray-300'>
                    <div className=''>
                      ✔ Guía de sizing basada en cargas vivas
                    </div>
                    <div className=''>
                      ✔ Esquema de sustitución en garantía express
                    </div>
                    <div className=''>
                      ✔ Migración de datos sin interrupción de servicio
                    </div>
                    <div className=''>
                      ✔ Soporte técnico en español 24/7/365
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TAB 3: Enterprise Licensing */}
        <div
          className='py-20 bg-[#F9F9F9] dark:bg-[#1a0e10] transition-opacity duration-300'
          id='panel-licensing'
          hidden={active !== 'licensing'}
        >
          <div className='max-w-7xl mx-auto px-4 md:px-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-start'>
              <div className='order-2 lg:order-1'>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider border border-red-100 dark:border-red-900/30'>
                    <span className='material-symbols-outlined text-sm'>
                      verified
                    </span>
                    Gobernanza de Software y Compliance
                  </div>
                  <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 text-xs font-bold uppercase tracking-wider border border-green-500/30'>
                    <span className='material-symbols-outlined text-xs'>
                      shield
                    </span>
                    100% Blindaje Legal
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-3'>
                  <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                    <span className='material-symbols-outlined'>
                      workspace_premium
                    </span>
                  </span>
                  Licenciamiento Corporativo
                </h2>
                <p className='text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed'>
                  Elimine el sobrepago por licencias inactivas y evite
                  penalizaciones en auditorías de software corporativo. Como
                  mayoristas directos y partners nivel 1 de
                  <strong>RedHat</strong>, <strong>Broadcom/VMware</strong>,
                  <strong>Veeam</strong> y <strong>Microsoft</strong>,
                  estructuramos contratos multianuales con descuentos de volumen
                  insuperables.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      Hasta -40%
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Ahorro en Contratos Multianuales
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      0 Riesgos
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Blindaje contra Auditorías Externas
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      Co-Terming
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Fecha Única de Renovación Anual
                    </div>
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Auditoría de Activos SAM (Software Asset Management)
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Identificamos licencias redundantes, núcleos no
                        asignados e hipervisores sobrelicenciados.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Acuerdos Estratégicos Broadcom VMware &amp; RedHat
                        RHEL/OpenShift
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Transición sin fricción al nuevo modelo de suscripción
                        por núcleo con tarifas protegidas.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Consolidación de Contratos y Facturación Local
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Facturación corporativa en dólares con deducción fiscal
                        directa en Ecuador.
                      </span>
                    </div>
                  </li>
                </ul>
                <div className='p-4 mb-6 rounded-xl bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-transparent border border-red-100 dark:border-red-900/30'>
                  <div className='flex items-center gap-2 mb-2 text-primary font-bold text-sm'>
                    <span className='material-symbols-outlined text-base'>
                      manage_search
                    </span>
                    Diagnóstico Gratuito de Licenciamiento Actual
                  </div>
                  <p className='text-xs text-text-secondary dark:text-gray-300 leading-relaxed'>
                    <strong>En solo 48 horas:</strong> Mapeamos su inventario de
                    software y le entregamos una matriz detallada de reducción
                    de costos y oportunidades de consolidación sin costo.
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-800 mb-6'>
                  <span className='text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400'>
                    Autorizaciones Oficiales:
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    RedHat Premier
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    Broadcom Advantage
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    Veeam Platinum
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    Microsoft Cloud Solution
                  </span>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      className='flex items-center justify-center gap-2 min-h-12 py-2 text-center px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/30 hover:bg-red-600 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20optimizar%20el%20licenciamiento%20de%20mi%20empresa'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        find_in_page
                      </span>
                      Solicitar Auditoría Gratuita de Licencias
                    </a>
                    <a
                      className='flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20optimizar%20el%20licenciamiento%20de%20mi%20empresa'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-whatsapp-green text-lg'>
                        chat
                      </span>
                      Cotizar Vía WhatsApp
                    </a>
                  </div>
                  <p className='text-[11px] text-text-secondary dark:text-gray-400 flex items-center gap-2'>
                    <span className='material-symbols-outlined text-xs text-primary'>
                      lock
                    </span>
                    Asesoría confidencial • Cumplimiento estricto de normativas
                    de propiedad intelectual
                  </p>
                </div>
              </div>
              <div className='order-1 lg:order-2 space-y-6'>
                <div className='relative h-[440px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group border border-gray-200 dark:border-gray-700'>
                  <div
                    className='absolute inset-0 opacity-20'
                    style={{
                      backgroundImage:
                        'radial-gradient( #ed1a37 0.5px, transparent 0.5px )',
                      backgroundSize: '15px 15px',
                    }}
                  ></div>
                  <div className='relative z-10 w-4/5 max-w-md bg-white dark:bg-[#211113] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden'>
                    <div className='px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-black/20'>
                      <div className='flex items-center gap-2'>
                        <span className='material-symbols-outlined text-primary'>
                          pie_chart
                        </span>
                        <span className='font-bold text-sm text-text-main dark:text-white'>
                          Panel de Cumplimiento B2B
                        </span>
                      </div>
                      <span className='text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded'>
                        100% Optimizado
                      </span>
                    </div>
                    <div className='p-6 space-y-3'>
                      <div className='flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50'>
                        <div className='flex items-center gap-3'>
                          <div className='size-8 rounded bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 font-bold text-xs'>
                            RH
                          </div>
                          <div>
                            <div className='text-sm font-bold text-text-main dark:text-white'>
                              Red Hat Enterprise Linux
                            </div>
                            <div className='text-[10px] text-gray-400'>
                              240 Cores • Descuento de Volumen Activo
                            </div>
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='text-xs font-bold text-green-600'>
                            -32% Costo
                          </div>
                          <div className='text-[10px] text-gray-400'>
                            Renovación 2026
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50'>
                        <div className='flex items-center gap-3'>
                          <div className='size-8 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 font-bold text-xs'>
                            VM
                          </div>
                          <div>
                            <div className='text-sm font-bold text-text-main dark:text-white'>
                              vSphere Foundation (VCF)
                            </div>
                            <div className='text-[10px] text-gray-400'>
                              Migración Core-Based Asistida
                            </div>
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='text-xs font-bold text-green-600'>
                            Protegido
                          </div>
                          <div className='text-[10px] text-gray-400'>
                            Soporte Oficial
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center justify-between p-3 rounded-lg border border-yellow-100 bg-yellow-50/50 dark:bg-yellow-900/10'>
                        <div className='flex items-center gap-3'>
                          <div className='size-8 rounded bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 font-bold text-xs'>
                            V
                          </div>
                          <div>
                            <div className='text-sm font-bold text-text-main dark:text-white'>
                              Veeam Availability Suite
                            </div>
                            <div className='text-[10px] text-gray-400'>
                              50 Licencias Universales (VUL)
                            </div>
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='text-xs font-bold text-primary'>
                            Co-Terming
                          </div>
                          <div className='text-[10px] text-gray-400'>
                            Ahorro 25%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='px-6 py-3 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-gray-800 text-center'>
                      <span className='text-xs font-bold text-primary'>
                        Certificación oficial de cumplimiento emitida por
                        IMPROTRU
                      </span>
                    </div>
                  </div>
                </div>
                <div className='p-5 bg-white dark:bg-[#211113] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm'>
                      verified_user
                    </span>
                    Beneficios Inmediatos al Contratar:
                  </div>
                  <div className='grid grid-cols-2 gap-3 text-xs text-text-secondary dark:text-gray-300'>
                    <div className=''>
                      ✔ Certificado legal de licenciamiento válido
                    </div>
                    <div className=''>
                      ✔ Congelamiento de precios a 36 meses
                    </div>
                    <div className=''>
                      ✔ Gestión integral de escalamiento a fábrica
                    </div>
                    <div className=''>
                      ✔ Portal unificado de renewals automáticos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TAB 4: Virtualization & Cloud */}
        <div
          className='py-20 bg-[#EEEEEE] dark:bg-[#211113] transition-opacity duration-300'
          id='panel-virtualization'
          hidden={active !== 'virtualization'}
        >
          <div className='max-w-7xl mx-auto px-4 md:px-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-start'>
              <div className='order-2 lg:order-1'>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider border border-red-100 dark:border-red-900/30'>
                    <span className='material-symbols-outlined text-sm'>
                      cloud_sync
                    </span>
                    Arquitectura Híbrida y Multi-Cloud
                  </div>
                  <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 text-xs font-bold uppercase tracking-wider border border-green-500/30'>
                    <span className='material-symbols-outlined text-xs'>
                      speed
                    </span>
                    0 Vendor Lock-in
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-3'>
                  <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                    <span className='material-symbols-outlined'>
                      cloud_queue
                    </span>
                  </span>
                  Virtualización y Nube Híbrida
                </h2>
                <p className='text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed'>
                  Diseñamos arquitecturas hiperconvergentes y multi-nube
                  resilientes que equilibran la elasticidad del cloud público
                  con la seguridad y costos controlados de su infraestructura
                  local. Modernice sus microservicios con
                  <strong>RedHat OpenShift</strong> y optimice sus clusters
                  <strong>VMware</strong> sin fricciones operativas.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>+70%</div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Aceleración CI/CD y Deploy
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>-45%</div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Gasto Ocioso en Cloud Público
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>98.2%</div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Eficiencia de Hipervisor
                    </div>
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Kubernetes Empresarial con RedHat OpenShift
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Orquestación automatizada de contenedores con monitoreo
                        nativo, pipelines DevSecOps y seguridad SELinux.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Estrategia de Optimización VMware Cloud Foundation
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Evaluación técnica para redimensionar recursos,
                        consolidar hosts y mitigar el impacto presupuestario.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Conectividad Directa Híbrida Azure / AWS ExpressRoute
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Túneles privados de baja latencia y alta seguridad entre
                        sus centros de datos y la nube pública.
                      </span>
                    </div>
                  </li>
                </ul>
                <div className='p-4 mb-6 rounded-xl bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-transparent border border-red-100 dark:border-red-900/30'>
                  <div className='flex items-center gap-2 mb-2 text-primary font-bold text-sm'>
                    <span className='material-symbols-outlined text-base'>
                      co_present
                    </span>
                    Sesión de Arquitectura Cloud de 60 Minutos
                  </div>
                  <p className='text-xs text-text-secondary dark:text-gray-300 leading-relaxed'>
                    <strong>Sesión ejecutiva gratuita:</strong> Reunión directa
                    con un Arquitecto Certificado en RedHat y VMware para
                    diagnosticar sus cuellos de botella y trazar un roadmap de
                    modernización con ROI claro.
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-800 mb-6'>
                  <span className='text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400'>
                    Tecnologías Dominadas:
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    RedHat OpenShift
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    VMware by Broadcom
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    Microsoft Azure
                  </span>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      className='flex items-center justify-center gap-2 min-h-12 py-2 text-center px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/30 hover:bg-red-600 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20asesoria%20en%20Virtualizacion%20y%20Cloud'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        calendar_month
                      </span>
                      Agendar Sesión de Arquitectura Gratuita
                    </a>
                    <a
                      className='flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20asesoria%20en%20Virtualizacion%20y%20Cloud'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-whatsapp-green text-lg'>
                        chat
                      </span>
                      Contactar Arquitecto
                    </a>
                  </div>
                  <p className='text-[11px] text-text-secondary dark:text-gray-400 flex items-center gap-2'>
                    <span className='material-symbols-outlined text-xs text-primary'>
                      verified
                    </span>
                    Ingenieros certificados RHCA y VCAP con experiencia en
                    grandes cuentas bancarias y corporativas
                  </p>
                </div>
              </div>
              <div className='order-1 lg:order-2 space-y-6'>
                <div className='relative h-[440px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <img
                    alt='Virtualization and Cloud'
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    src='https://lh3.googleusercontent.com/aida/AEtjO1UF-walU9K91ZO-vAqsTvOAu99jYUGMS4yY5eNSTx_oeIIoP8oTDaFst2jSoBjp8etJ7FRhVOtNqA8UHB92q5HRA3Ch5nyK3LuvWjkqxgAC9YvmiT8kTqLpCu6E_VjRFYXAAtwhVdryawdHSO8CcPeTE4pgdrrGxY_qkRah-fUGIwG371o8WaS6E1QeaodsNTYMqYR4o8GFo5zocDNf5SF8QyOb1c1IW7oX7YiHrBoHWmV9vjJM-UcEbis'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full'>
                      <div className='flex items-center justify-between text-white mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='material-symbols-outlined text-primary'>
                            monitoring
                          </span>
                          <span className='font-bold text-sm'>
                            Rendimiento de Cargas de Trabajo
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 font-bold'>
                          98.2% Throughput
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
                        <div className='bg-primary h-full w-[98.2%]'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-5 bg-white dark:bg-[#1a0e10] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm'>
                      fact_check
                    </span>
                    Entregables del Diagnóstico de Nube:
                  </div>
                  <div className='grid grid-cols-2 gap-3 text-xs text-text-secondary dark:text-gray-300'>
                    <div className=''>✔ Análisis de consumo por clúster</div>
                    <div className=''>
                      ✔ Plan de contingencia ante fallos multi-zona
                    </div>
                    <div className=''>
                      ✔ Estimación comparativa de costos On-Prem vs Cloud
                    </div>
                    <div className=''>
                      ✔ Trazabilidad de seguridad de datos en reposo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TAB 5: Data Protection */}
        <div
          className='py-20 bg-[#F9F9F9] dark:bg-[#1a0e10] transition-opacity duration-300'
          id='panel-protection'
          hidden={active !== 'protection'}
        >
          <div className='max-w-7xl mx-auto px-4 md:px-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-start'>
              <div className='order-2 lg:order-1'>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider border border-red-100 dark:border-red-900/30'>
                    <span className='material-symbols-outlined text-sm'>
                      security
                    </span>
                    Resiliencia Anti-Ransomware
                  </div>
                  <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 text-xs font-bold uppercase tracking-wider border border-green-500/30'>
                    <span className='material-symbols-outlined text-xs'>
                      lock_clock
                    </span>
                    Inmutabilidad WORM
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-3'>
                  <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                    <span className='material-symbols-outlined'>
                      shield_lock
                    </span>
                  </span>
                  Protección de Datos y Backup
                </h2>
                <p className='text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed'>
                  Los datos son el activo más valioso de su corporación.
                  Diseñamos soluciones blindadas de respaldo, recuperación de
                  desastres (DRP) y bóvedas inmutables impulsadas por
                  <strong>Veeam Platinum</strong> y
                  <strong>Dell PowerProtect</strong> que garantizan 0 pérdidas
                  de información y recuperación en minutos ante cualquier
                  ciberataque.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      &lt; 15 Min
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      RTO Instant Recovery
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      RPO = 0
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Cero Pérdida de Datos
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      100% Inmune
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Bóvedas Air-Gapped Anti-Ransomware
                    </div>
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Bóvedas Hardened Inmutables (WORM)
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Repositorios con bloqueo físico y lógico que impiden
                        cifrado, alteración o borrado malicioso por hackers.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Instant VM Recovery y Pruebas Automatizadas SureBackup
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Encendido de máquinas virtuales de varios terabytes
                        directamente desde el backup en menos de 10 minutos.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Regla 3-2-1-1-0 y Movilidad Multi-Nube
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Copias locales ultrarrápidas, réplica off-site remota y
                        archivado seguro en S3/Glacier con cifrado militar
                        AES-256.
                      </span>
                    </div>
                  </li>
                </ul>
                <div className='p-4 mb-6 rounded-xl bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-transparent border border-red-100 dark:border-red-900/30'>
                  <div className='flex items-center gap-2 mb-2 text-primary font-bold text-sm'>
                    <span className='material-symbols-outlined text-base'>
                      verified_user
                    </span>
                    Auditoría de Resiliencia y DRP Gratuita
                  </div>
                  <p className='text-xs text-text-secondary dark:text-gray-300 leading-relaxed'>
                    <strong>Simulacro sin costo:</strong> Evaluamos sus tiempos
                    actuales de recuperación (RTO/RPO) e identificamos
                    vulnerabilidades críticas frente a incidentes de ransomware.
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-800 mb-6'>
                  <span className='text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400'>
                    Validaciones de Fábrica:
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    VEEAM Platinum Partner
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    VMCE Certified Engineers
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    Dell PowerProtect
                  </span>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      className='flex items-center justify-center gap-2 min-h-12 py-2 text-center px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/30 hover:bg-red-600 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20requiero%20solucion%20de%20Backup%20y%20Proteccion%20de%20Datos'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        health_and_safety
                      </span>
                      Solicitar Diagnóstico de Resiliencia DRP
                    </a>
                    <a
                      className='flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20requiero%20solucion%20de%20Backup%20y%20Proteccion%20de%20Datos'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-whatsapp-green text-lg'>
                        chat
                      </span>
                      Consulta de Emergencia
                    </a>
                  </div>
                  <p className='text-[11px] text-text-secondary dark:text-gray-400 flex items-center gap-2'>
                    <span className='material-symbols-outlined text-xs text-primary'>
                      lock
                    </span>
                    Asesoría con estricta confidencialidad • Garantía de
                    inmutabilidad contractual
                  </p>
                </div>
              </div>
              <div className='order-1 lg:order-2 space-y-6'>
                <div className='relative h-[440px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <img
                    alt='Data Protection &amp; Backup'
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    src='https://lh3.googleusercontent.com/aida/AEtjO1XfPrrgOmkLDb5ef1OgUOC_2Kdsn-bZnknu__KP2p3AsQK_3knEsHpwHMnut9v3K7jHRkakwciZYHRpVfkJryj73UUAzPr1vhvFKm5oPY8u7XTSSsQXLq72oRM2CAN4qrRXgwoQEOwo-ft_jgwYCO_YHOQPRVymvGJdDVbbxjKURTXHLamgg0JSCJyX9LGNERi19C8x2DZuUiF49aGn-oEwfmTrzT7QmD8K-QoHbTJonycKccPgbVjsEMIW'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full'>
                      <div className='flex items-center justify-between text-white mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='material-symbols-outlined text-primary'>
                            verified_user
                          </span>
                          <span className='font-bold text-sm'>
                            Integridad de Copias de Respaldo
                          </span>
                        </div>
                        <span className='text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded'>
                          100% INMUTABLE
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
                        <div className='bg-[#00b336] h-full w-full'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-5 bg-white dark:bg-[#211113] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm'>
                      security_update_good
                    </span>
                    Entregables del Plan de Respaldo:
                  </div>
                  <div className='grid grid-cols-2 gap-3 text-xs text-text-secondary dark:text-gray-300'>
                    <div className=''>
                      ✔ Matriz formal de RTO y RPO por aplicación
                    </div>
                    <div className=''>
                      ✔ Configuración de inmutabilidad validada
                    </div>
                    <div className=''>
                      ✔ Protocolo de simulacro de recuperación trimestral
                    </div>
                    <div className=''>
                      ✔ Certificado de cumplimiento para auditorías
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TAB 6: Servicios TI */}
        <div
          className='py-20 bg-[#EEEEEE] dark:bg-[#211113] transition-opacity duration-300'
          id='panel-servicios'
          hidden={active !== 'servicios'}
        >
          <div className='max-w-7xl mx-auto px-4 md:px-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-start'>
              <div className='order-2 lg:order-1'>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider border border-red-100 dark:border-red-900/30'>
                    <span className='material-symbols-outlined text-sm'>
                      headset_mic
                    </span>
                    Servicios Gestionados y Soporte Crítico
                  </div>
                  <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 text-xs font-bold uppercase tracking-wider border border-green-500/30'>
                    <span className='material-symbols-outlined text-xs'>
                      bolt
                    </span>
                    Respuesta Inmediata
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-3'>
                  <span className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary'>
                    <span className='material-symbols-outlined'>
                      support_agent
                    </span>
                  </span>
                  Servicios TI y Soporte Administrado
                </h2>
                <p className='text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed'>
                  Su departamento de TI no puede detenerse por incidentes
                  imprevistos. Ofrecemos Centro de Operaciones de Red (NOC)
                  24/7/365, soporte técnico de Nivel 3 certificado y consultoría
                  de arquitectura estratégica, liberando a su equipo interno
                  para enfocarse en la innovación de su negocio.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      &lt; 15 Min
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Tiempo de Respuesta Nivel 3
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>99.8%</div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Resolución al Primer Contacto
                    </div>
                  </div>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary'>
                      24/7/365
                    </div>
                    <div className='text-xs font-semibold text-text-secondary dark:text-gray-400'>
                      Monitoreo NOC Proactivo
                    </div>
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Monitoreo NOC y Telemetría Preventiva
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Detección proactiva de anomalías antes de que degraden
                        la experiencia de sus usuarios finales.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Ingenieros Residentes Certificados y On-Site
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Especialistas con acreditaciones oficiales ITIL, Cisco
                        CCIE, RedHat RHCE y VMware VCP en Ecuador.
                      </span>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-1'>
                      check_circle
                    </span>
                    <div>
                      <strong className='text-text-main dark:text-white block font-semibold text-sm'>
                        Consultoría Estratégica y Roadmap Tecnológico
                      </strong>
                      <span className='text-xs text-text-secondary dark:text-gray-400'>
                        Planificación de capacidad, dimensionamiento de
                        presupuestos TI y gobernanza de cumplimiento continuo.
                      </span>
                    </div>
                  </li>
                </ul>
                <div className='p-4 mb-6 rounded-xl bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-transparent border border-red-100 dark:border-red-900/30'>
                  <div className='flex items-center gap-2 mb-2 text-primary font-bold text-sm'>
                    <span className='material-symbols-outlined text-base'>
                      support
                    </span>
                    Mes Piloto de Monitoreo NOC sin Costo
                  </div>
                  <p className='text-xs text-text-secondary dark:text-gray-300 leading-relaxed'>
                    <strong>Prueba de servicio real:</strong> Conectamos hasta
                    20 servidores o equipos de red a nuestro NOC durante 30 días
                    para demostrar la efectividad de nuestra detección
                    preventiva antes de cualquier contrato.
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-800 mb-6'>
                  <span className='text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400'>
                    Certificaciones de Equipo:
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    ITIL v4 Expert
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    ISO 27001 Lead Auditor
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    Cisco CCIE
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded'>
                    RHCE
                  </span>
                </div>
                <div className='space-y-3'>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      className='flex items-center justify-center gap-2 min-h-12 py-2 text-center px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/30 hover:bg-red-600 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20informacion%20de%20Servicios%20TI%20y%20Soporte'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-lg'>
                        contact_support
                      </span>
                      Solicitar Propuesta de Soporte y SLA a Medida
                    </a>
                    <a
                      className='flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'
                      href='https://wa.me/593999951096?text=Hola,%20deseo%20informacion%20de%20Servicios%20TI%20y%20Soporte'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='material-symbols-outlined text-whatsapp-green text-lg'>
                        chat
                      </span>
                      Soporte por WhatsApp
                    </a>
                  </div>
                  <p className='text-[11px] text-text-secondary dark:text-gray-400 flex items-center gap-2'>
                    <span className='material-symbols-outlined text-xs text-primary'>
                      verified
                    </span>
                    Soporte en español con escalamiento directo a fábricas
                    fabricantes
                  </p>
                </div>
              </div>
              <div className='order-1 lg:order-2 space-y-6'>
                <div className='relative h-[440px] rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800'>
                  <img
                    alt='Servicios TI Support'
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    src='https://lh3.googleusercontent.com/aida/AEtjO1WREG77p_adSrA3zoiM9Jdx0I_bVc_qjdQn4fAAAT1wix9Xq2cHTEh51DipjzKEUPqNM_XK1zvqtcCXVyezh7Bt1j2wL1G_n3eTY92o1XBlKLO61yRLNM_bQwIkbnGmJBI16I8DxLRIJZ8gFgvolbZ26C_BhvVC9HdelvgY5KohxB8BLfpafOCe--AnglkgcAVXlSeDd_3kTJVQHkMMISJQG2nkRG6DK8-B4-y2iSXv8u4wYNA1jyPF46Y'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl w-full'>
                      <div className='flex items-center justify-between text-white mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='material-symbols-outlined text-primary'>
                            support_agent
                          </span>
                          <span className='font-bold text-sm'>
                            Guardia NOC Activa
                          </span>
                        </div>
                        <span className='text-xs font-mono text-green-400 font-bold'>
                          Respuesta &lt; 15 min
                        </span>
                      </div>
                      <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
                        <div className='bg-primary h-full w-[95%]'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-5 bg-white dark:bg-[#211113] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
                  <div className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-sm'>
                      handshake
                    </span>
                    Qué incluye su contrato de Servicios TI:
                  </div>
                  <div className='grid grid-cols-2 gap-3 text-xs text-text-secondary dark:text-gray-300'>
                    <div className=''>
                      ✔ SLA garantizado por penalización contractual
                    </div>
                    <div className=''>
                      ✔ Mesa de ayuda omnicanal con portal de tickets
                    </div>
                    <div className=''>
                      ✔ Informes ejecutivos mensuales de disponibilidad
                    </div>
                    <div className=''>
                      ✔ Bolsa de horas para proyectos e implementaciones
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className='relative w-full bg-[#211113] overflow-hidden'
        style={{ backgroundColor: 'rgb(249, 249, 249)' }}
      >
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
              Infrastructure Solutions
            </div>
            <div className='relative h-[160px] md:h-[180px] lg:h-[200px] mb-6 drop-shadow-lg'>
              <h1 className='text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight invisible'>
                Enterprise IT Infrastructure <br />
                Built for Scale
              </h1>
              <h1
                className='absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]'
                style={{ animationDelay: '0s' }}
              >
                Modernize Your <br />
                IT Backbone
              </h1>
              <h1
                className='absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]'
                style={{ animationDelay: '3s' }}
              >
                Enterprise IT Infrastructure <br />
                Built for Scale
              </h1>
              <h1
                className='absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]'
                style={{ animationDelay: '6s' }}
              >
                Future-Proof Your <br />
                Digital Strategy
              </h1>
            </div>
            <p className='text-white text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]'>
              From high-performance data center hardware to resilient cloud
              virtualization and impenetrable data protection. We engineer the
              foundation for your enterprise growth.
            </p>
            <div className='flex gap-4'>
              <a
                className='flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors'
                href='#solutions'
              >
                Explore Solutions
              </a>
              <button className='flex items-center justify-center h-12 px-8 rounded-lg border border-white/30 bg-black/40 backdrop-blur-md text-white text-sm font-bold hover:bg-black/60 transition-colors shadow-lg shadow-black/30'>
                View Case Studies
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
                Years Experience
              </span>
            </div>
            <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
              <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                20+
              </span>
              <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                Enterprise Clients
              </span>
            </div>
            <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
              <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                99%
              </span>
              <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                Uptime Guarantee
              </span>
            </div>
            <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
              <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                24/7
              </span>
              <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                Expert Support
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 bg-white dark:bg-[#150a0b] border-t border-gray-100 dark:border-gray-800 overflow-hidden relative'>
        <div className='max-w-7xl mx-auto px-4 md:px-10 mb-10 text-center relative z-10'>
          <h3 className='text-sm font-bold uppercase tracking-widest text-text-secondary dark:text-gray-400 mb-2'>
            Strategic Technology Partners
          </h3>
          <div className='h-0.5 w-12 bg-primary mx-auto'></div>
        </div>
        <div className='relative w-full mask-linear'>
          <div className='flex w-max animate-scroll'>
            <div className='flex gap-16 md:gap-24 items-center px-8 md:px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500'>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <span className='material-symbols-outlined text-primary text-4xl'>
                  star
                </span>
                RedHat
              </div>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <div className='h-8 w-8 rounded-full border-4 border-primary'></div>
                BROADCOM
              </div>
              <div className='flex items-center gap-1 font-black text-2xl text-text-main dark:text-white tracking-tighter'>
                <span className='text-primary'>V</span>EEAM
              </div>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <div className='flex gap-[2px] items-end h-6 pb-1'>
                  <div className='w-1 h-2 bg-primary'></div>
                  <div className='w-1 h-4 bg-primary'></div>
                  <div className='w-1 h-2 bg-primary'></div>
                  <div className='w-1 h-4 bg-primary'></div>
                  <div className='w-1 h-2 bg-primary'></div>
                </div>
                CISCO
              </div>
              <div className='flex items-center gap-2 font-light text-2xl text-text-main dark:text-white'>
                <span className='font-bold border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center text-xs p-1'>
                  DE
                </span>
                DELL
                <span className='text-xs font-bold text-gray-500 -ml-1 mt-1'>
                  Technologies
                </span>
              </div>
              <div className='flex items-center gap-2 font-black text-2xl text-text-main dark:text-white tracking-widest'>
                <div className='w-6 h-3 bg-primary'></div>
                HPE
              </div>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <span className='material-symbols-outlined text-primary text-3xl'>
                  change_history
                </span>
                Microsoft Azure
              </div>
            </div>
            <div className='flex gap-16 md:gap-24 items-center px-8 md:px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500'>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <span className='material-symbols-outlined text-primary text-4xl'>
                  star
                </span>
                RedHat
              </div>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <div className='h-8 w-8 rounded-full border-4 border-primary'></div>
                BROADCOM
              </div>
              <div className='flex items-center gap-1 font-black text-2xl text-text-main dark:text-white tracking-tighter'>
                <span className='text-primary'>V</span>EEAM
              </div>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <div className='flex gap-[2px] items-end h-6 pb-1'>
                  <div className='w-1 h-2 bg-primary'></div>
                  <div className='w-1 h-4 bg-primary'></div>
                  <div className='w-1 h-2 bg-primary'></div>
                  <div className='w-1 h-4 bg-primary'></div>
                  <div className='w-1 h-2 bg-primary'></div>
                </div>
                CISCO
              </div>
              <div className='flex items-center gap-2 font-light text-2xl text-text-main dark:text-white'>
                <span className='font-bold border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center text-xs p-1'>
                  DE
                </span>
                DELL
                <span className='text-xs font-bold text-gray-500 -ml-1 mt-1'>
                  Technologies
                </span>
              </div>
              <div className='flex items-center gap-2 font-black text-2xl text-text-main dark:text-white tracking-widest'>
                <div className='w-6 h-3 bg-primary'></div>
                HPE
              </div>
              <div className='flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white'>
                <span className='material-symbols-outlined text-primary text-3xl'>
                  change_history
                </span>
                Microsoft Azure
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='relative py-32 bg-white dark:bg-[#211113] overflow-hidden border-t border-gray-100 dark:border-gray-800'
        style={{ backgroundColor: 'rgb(238, 238, 238)' }}
      >
        <div className='max-w-4xl mx-auto px-4 md:px-10 relative z-10 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6 tracking-tight'>
            Ready to work with us?
          </h2>
          <p className='text-lg text-text-secondary dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
            Experience the difference of enterprise-grade IT solutions. Whether
            you're looking for infrastructure modernization, cloud strategy, or
            professional support, our team is here to help you scale.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href='https://wa.me/593999951096'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center h-14 px-10 rounded-lg bg-[#ED1A37] text-white font-bold text-base hover:bg-red-600 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto'
            >
              Contact Us
            </a>
            <button className='flex items-center justify-center h-14 px-10 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'>
              View Careers
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
