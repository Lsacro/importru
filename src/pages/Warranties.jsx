import { useState } from 'react';

export default function Warranties() {
  const [message, setMessage] = useState('');
  function query() {
    const serial = document
      .getElementById('serialInput')
      .value.trim()
      .toUpperCase();
    const vendor = document.getElementById('vendorSelect').value;
    const found = vendor === 'DELL' && serial === 'DL-760-99428-EC';
    document.getElementById('warrantyResultCard').hidden = !found;
    setMessage(
      found
        ? 'Resultado de demostración.'
        : serial
          ? 'No hay datos de demostración para este equipo.'
          : 'Ingresa el número de serie.',
    );
  }
  function loadDemo(vendor, serial) {
    document.getElementById('vendorSelect').value = vendor;
    document.getElementById('serialInput').value = serial;
    query();
  }
  function toggleFaq(element) {
    element.querySelector('.faq-content').classList.toggle('hidden');
    element.querySelector('.faq-icon').classList.toggle('rotate-180');
  }
  function triggerAction() {
    window.alert('Acción no disponible en la demostración.');
  }
  return (
    <>
      <main className='flex-grow'>
        {/* 2. Dark Hero / Header Section with High-Tech Datacenter Visuals */}

        <section
          className='relative w-full bg-[#1b0d0f] overflow-hidden'
          id='garantias'
        >
          {/* Dark Datacenter background with glow overlay */}

          <div className='absolute inset-0 z-0'>
            <div
              className='w-full h-full bg-cover bg-center opacity-35 filter brightness-75 contrast-125'
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAW_8a1bKYpyuj5rzVUR_3BKUcQxDnV6oxVeSoZSzRzm2eQb_vgpq8DKMA5Zvre6RKJ3t7zC_mymfqvgRca-CQ_uaAuvOZzaDDlWUPG0VMdXF6ucKX-uk0ONfuDqGC66H6Tok9FrrK1XByHShy8b9qeflEt2gSDK5um7asYMA7pwuZNS3iE1g_ezW-TvcjMJToU72_CiJnEKULeXinH6HwBqDkUGFGvdVnSTbe5-JXct3UKi-rqqcFSE18OPoh0OUTI65qI2c6jbkFw')",
              }}
            ></div>

            <div className='absolute inset-0 bg-gradient-to-b from-[#1b0d0f]/90 via-[#1b0d0f]/80 to-[#1b0d0f]'></div>
          </div>

          <div className='relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24 flex flex-col justify-center'>
            <div className='max-w-4xl mb-10'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-primary/40 text-white text-xs font-medium mb-6 backdrop-blur-md shadow-lg'>
                <span className='size-2 rounded-full bg-primary animate-pulse'></span>

                <span className='uppercase tracking-wider font-semibold'>
                  Garantías y Soporte Oficial Tier-1
                </span>

                <span className='text-gray-400'>| Ecuador Datacenter Hub</span>
              </div>

              <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]'>
                Consulta y Gestión de <br className='hidden sm:inline' />
                <span className='text-white'>Garantías TI Empresariales</span>
              </h1>

              <p className='text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
                Explora un ejemplo de vigencia, SLA contractual y condiciones
                técnicas certificadas de tus servidores, almacenamiento y
                networking Dell, HPE, Lenovo, Cisco e IBM con repuestos locales
                en Quito y Guayaquil.
              </p>
            </div>

            {/* Sleek High-Contrast Search Component */}

            <div className='w-full bg-[#120708]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl'>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 items-end'>
                {/* Vendor Selection */}

                <div className='lg:col-span-4 flex flex-col gap-2'>
                  <label
                    className='text-xs uppercase tracking-wider font-bold text-gray-300 flex items-center gap-2'
                    htmlFor='vendorSelect'
                  >
                    <span className='material-symbols-outlined text-primary text-base'>
                      memory
                    </span>
                    Fabricante / Arquitectura
                  </label>

                  <div className='relative'>
                    <select
                      className='w-full h-12 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-medium px-4 appearance-none focus:outline-none focus:border-primary transition-colors cursor-pointer'
                      id='vendorSelect'
                      defaultValue='DELL'
                    >
                      <option className='bg-[#211113] text-white' value='DELL'>
                        Dell Technologies Enterprise
                      </option>

                      <option
                        className='bg-[#211113] text-white'
                        value='LENOVO'
                      >
                        Lenovo ISG (ThinkSystem / ThinkAgile)
                      </option>

                      <option className='bg-[#211113] text-white' value='HPE'>
                        HPE ProLiant / Alletra Storage
                      </option>

                      <option className='bg-[#211113] text-white' value='CISCO'>
                        Cisco Enterprise &amp; Meraki
                      </option>

                      <option className='bg-[#211113] text-white' value='IBM'>
                        IBM Systems &amp; FlashSystem
                      </option>
                    </select>

                    <span className='material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl'>
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Serial Input */}

                <div className='lg:col-span-5 flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <label
                      className='text-xs uppercase tracking-wider font-bold text-gray-300 flex items-center gap-2'
                      htmlFor='serialInput'
                    >
                      <span className='material-symbols-outlined text-primary text-base'>
                        qr_code_scanner
                      </span>
                      Service Tag / Serial Number
                    </label>

                    <span className='text-[11px] text-gray-400 hidden sm:inline'>
                      Servidores, SAN, Storage y Redes
                    </span>
                  </div>

                  <div className='relative flex items-center'>
                    <span className='material-symbols-outlined absolute left-4 text-gray-400 text-xl'>
                      search
                    </span>

                    <input
                      className='w-full h-12 bg-white/10 border border-white/20 rounded-lg text-white font-mono text-sm tracking-wider pl-12 pr-12 focus:outline-none focus:border-primary uppercase placeholder-gray-500 transition-colors'
                      id='serialInput'
                      placeholder='Ingresa Service Tag (ej. DL-760-99428-EC)'
                      type='text'
                      defaultValue='DL-760-99428-EC'
                    />

                    <button
                      className='absolute right-3 text-gray-400 hover:text-primary transition-colors'
                      title='Escanear código'
                      type='button'
                    >
                      <span className='material-symbols-outlined text-xl'>
                        barcode_scanner
                      </span>
                    </button>
                  </div>
                </div>

                {/* Action Button */}

                <div className='lg:col-span-3'>
                  <button
                    className='w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-[#d61731] text-white text-sm font-bold shadow-lg shadow-black/40 transition-all active:scale-95'
                    id='btnQuery'
                    onClick={query}
                    type='button'
                  >
                    <span className='material-symbols-outlined text-xl'>
                      verified
                    </span>

                    <span>Consultar Garantía</span>
                  </button>
                </div>
              </div>
              <p role='status' className='mt-3 text-sm text-gray-300'>
                {message}
              </p>
              \n{/* Quick Demo Buttons */}
              <div className='flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-white/10 text-xs'>
                <span className='text-gray-400 font-medium'>
                  Activos de prueba:
                </span>

                <button
                  className='px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-200 rounded-full font-medium transition-colors flex items-center gap-1.5 border border-white/10'
                  onClick={(event) => loadDemo('DELL', 'DL-760-99428-EC')}
                  type='button'
                >
                  <span className='size-1.5 rounded-full bg-primary'></span>
                  Dell PowerEdge R760
                </button>

                <button
                  className='px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-200 rounded-full font-medium transition-colors flex items-center gap-1.5 border border-white/10'
                  onClick={(event) => loadDemo('LENOVO', 'LN-SR650-88319-EC')}
                  type='button'
                >
                  <span className='size-1.5 rounded-full bg-gray-400'></span>
                  Lenovo ThinkSystem SR650 V3
                </button>

                <button
                  className='px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-200 rounded-full font-medium transition-colors flex items-center gap-1.5 border border-white/10'
                  onClick={(event) => loadDemo('HPE', 'HP-DL380-55104-EC')}
                  type='button'
                >
                  <span className='size-1.5 rounded-full bg-gray-400'></span>
                  HPE ProLiant DL380 Gen11
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Metric Counters Band (Exact row from SCREEN_35) */}

        <section className='bg-white dark:bg-[#1a0e10] border-b border-gray-200 dark:border-gray-800'>
          <div className='max-w-7xl mx-auto px-4 md:px-10 py-8'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-gray-200 dark:divide-gray-800'>
              <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  &lt; 4h
                </span>

                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  SLA On-Site Presencial
                </span>
              </div>

              <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  100%
                </span>

                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  Repuestos Originales OEM
                </span>
              </div>

              <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  99.99%
                </span>

                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  Uptime Misión Crítica
                </span>
              </div>

              <div className='flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left'>
                <span className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  24/7/365
                </span>

                <span className='text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide'>
                  Soporte NOC &amp; L3 Fábrica
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Warranty Result & Details Section (Body) */}

        <section className='py-16 md:py-20 bg-background-light dark:bg-[#211113]'>
          <div className='max-w-7xl mx-auto px-4 md:px-10'>
            {/* Active Result Card Container */}

            <div
              className='bg-white dark:bg-[#1a0e10] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden mb-16 transition-all duration-300'
              id='warrantyResultCard'
            >
              {/* Card Header / Asset Meta */}

              <div className='p-6 md:p-8 bg-gray-50/80 dark:bg-gray-900/40 border-b border-gray-200 dark:border-gray-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6'>
                <div className='flex items-start gap-4'>
                  <div className='size-14 rounded-xl bg-red-50 dark:bg-red-900/20 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-3xl'>
                      dns
                    </span>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <div className='flex flex-wrap items-center gap-2 mb-1'>
                      <span
                        className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider'
                        id='assetStatusBadge'
                      >
                        <span className='size-2 rounded-full bg-emerald-500 animate-ping'></span>
                        Vigente &amp; Activa (Misión Crítica)
                      </span>

                      <span className='text-xs text-text-secondary dark:text-gray-400 font-mono'>
                        Contrato: IMP-EC-88391-MC
                      </span>
                    </div>

                    <h2
                      className='text-2xl md:text-3xl font-bold text-text-main dark:text-white tracking-tight'
                      id='assetName'
                    >
                      Dell PowerEdge R760 2U Rack Server (Dual Xeon Gold, 128GB
                      RAM, SAS RAID)
                    </h2>

                    <div className='flex flex-wrap items-center gap-3 text-xs md:text-sm text-text-secondary dark:text-gray-400 mt-1'>
                      <span>
                        Service Tag:
                        <strong
                          className='text-primary font-mono font-bold'
                          id='assetSerial'
                        >
                          DL-760-99428-EC
                        </strong>
                      </span>

                      <span>•</span>

                      <span>
                        Sede:
                        <strong className='text-text-main dark:text-gray-200'>
                          Data Center Quito Norte (Rack 04-A)
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expiration Countdown & WhatsApp Support */}

                <div className='flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[260px]'>
                  <div className='p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
                    <div className='flex items-center justify-between text-xs text-text-secondary dark:text-gray-400 mb-1'>
                      <span className='uppercase tracking-wider font-semibold'>
                        Vencimiento Póliza
                      </span>

                      <span
                        className='text-primary font-bold'
                        id='assetRemaining'
                      >
                        (Restan 842 días)
                      </span>
                    </div>

                    <div
                      className='text-xl font-bold text-text-main dark:text-white mb-2'
                      id='assetExpiration'
                    >
                      14 Nov 2027
                    </div>

                    <div className='w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden'>
                      <div
                        className='bg-primary h-full rounded-full transition-all duration-700'
                        id='warrantyProgressBar'
                        style={{ width: '72%' }}
                      ></div>
                    </div>
                  </div>

                  <a
                    className='flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-whatsapp-green text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm'
                    href='https://wa.me/593999951096?text=Hola,%20requiero%20soporte%20para%20el%20Service%20Tag%20DL-760-99428-EC'
                    rel='noopener'
                    target='_blank'
                  >
                    <span className='material-symbols-outlined text-lg'>
                      chat
                    </span>

                    <span>WhatsApp Soporte Inmediato</span>
                  </a>
                </div>
              </div>

              {/* 6 Technical Condition Cards in Balanced Grid (Matching SCREEN_35 Style) */}

              <div className='p-6 md:p-8 bg-white dark:bg-[#1a0e10]'>
                <div className='mb-6 flex items-center justify-between'>
                  <div>
                    <span className='text-xs uppercase tracking-widest font-bold text-primary'>
                      TÉRMINOS CONTRACTUALES
                    </span>

                    <h3 className='text-xl font-bold text-text-main dark:text-white'>
                      Condiciones Técnicas y Cobertura Certificada
                    </h3>
                  </div>

                  <span className='text-xs text-text-secondary dark:text-gray-400 hidden sm:inline'>
                    Auditado bajo normativa ISO/IEC 20000
                  </span>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {/* Card 1 */}

                  <div className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:border-primary/50 transition-colors flex flex-col justify-between'>
                    <div>
                      <div className='inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider mb-3'>
                        <span className='material-symbols-outlined text-[16px]'>
                          bolt
                        </span>
                        Nivel de Servicio &amp; SLA
                      </div>

                      <h4
                        className='text-base font-bold text-text-main dark:text-white mb-2'
                        id='slaTitle'
                      >
                        ProSupport Plus Mission Critical 24x7x365
                      </h4>

                      <p className='text-sm text-text-secondary dark:text-gray-400 leading-relaxed'>
                        Tiempo de respuesta presencial en sitio homologado menor
                        a
                        <strong className='text-text-main dark:text-gray-200'>
                          4 horas
                        </strong>
                        . Escalado directo a ingeniería L3 de fábrica sin
                        filtros de mesa general.
                      </p>
                    </div>

                    <div className='mt-4 pt-3 border-t border-gray-200/60 dark:border-gray-800 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      <span className='material-symbols-outlined text-base'>
                        check_circle
                      </span>
                      Cobertura 24/7 en Sitio
                    </div>
                  </div>

                  {/* Card 2 */}

                  <div className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:border-primary/50 transition-colors flex flex-col justify-between'>
                    <div>
                      <div className='inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider mb-3'>
                        <span className='material-symbols-outlined text-[16px]'>
                          verified
                        </span>
                        Entidad a Cargo &amp; Ejecución
                      </div>

                      <h4
                        className='text-base font-bold text-text-main dark:text-white mb-2'
                        id='vendorEntity'
                      >
                        Dell Technologies &amp; IMPROTRU Ecuador
                      </h4>

                      <p className='text-sm text-text-secondary dark:text-gray-400 leading-relaxed'>
                        Canal directo oficial Tier-1. Emisión de actas técnicas
                        de entrega-recepción y cumplimiento legal tributario
                        válido para auditorías de SRI y SEPS.
                      </p>
                    </div>

                    <div className='mt-4 pt-3 border-t border-gray-200/60 dark:border-gray-800 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      <span className='material-symbols-outlined text-base'>
                        check_circle
                      </span>
                      Canal Directo Autorizado
                    </div>
                  </div>

                  {/* Card 3 */}

                  <div className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:border-primary/50 transition-colors flex flex-col justify-between'>
                    <div>
                      <div className='inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider mb-3'>
                        <span className='material-symbols-outlined text-[16px]'>
                          inventory_2
                        </span>
                        Disponibilidad de Repuestos
                      </div>

                      <h4 className='text-base font-bold text-text-main dark:text-white mb-2'>
                        Bodegas Locales en Quito y Guayaquil
                      </h4>

                      <p className='text-sm text-text-secondary dark:text-gray-400 leading-relaxed'>
                        Stock crítico pre-nacionalizado en custodia: fuentes
                        redundantes, discos SAS Enterprise, controladoras PERC y
                        módulos DIMM DDR5 sin demoras de aduana.
                      </p>
                    </div>

                    <div className='mt-4 pt-3 border-t border-gray-200/60 dark:border-gray-800 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      <span className='material-symbols-outlined text-base'>
                        check_circle
                      </span>
                      Stock Inmediato UIO &amp; GYE
                    </div>
                  </div>

                  {/* Card 4 */}

                  <div className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:border-primary/50 transition-colors flex flex-col justify-between'>
                    <div>
                      <div className='inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider mb-3'>
                        <span className='material-symbols-outlined text-[16px]'>
                          engineering
                        </span>
                        Ingeniería Certificada Asignada
                      </div>

                      <h4 className='text-base font-bold text-text-main dark:text-white mb-2'>
                        Dell Certified Master / IMPROTRU NOC
                      </h4>

                      <p className='text-sm text-text-secondary dark:text-gray-400 leading-relaxed'>
                        Atención ejecutada exclusivamente por especialistas de
                        planta acreditados por el fabricante con seguro
                        complementario y herramientas OEM de diagnóstico.
                      </p>
                    </div>

                    <div className='mt-4 pt-3 border-t border-gray-200/60 dark:border-gray-800 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      <span className='material-symbols-outlined text-base'>
                        check_circle
                      </span>
                      Personal Certificado L2/L3
                    </div>
                  </div>

                  {/* Card 5 */}

                  <div className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:border-primary/50 transition-colors flex flex-col justify-between'>
                    <div>
                      <div className='inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider mb-3'>
                        <span className='material-symbols-outlined text-[16px]'>
                          terminal
                        </span>
                        Firmware &amp; Licenciamiento
                      </div>

                      <h4 className='text-base font-bold text-text-main dark:text-white mb-2'>
                        iDRAC9 Enterprise &amp; VMware Homologado
                      </h4>

                      <p className='text-sm text-text-secondary dark:text-gray-400 leading-relaxed'>
                        Acceso garantizado a microcódigo oficial, remediación de
                        vulnerabilidades de seguridad CVE y asesoría para
                        migración de hipervisores bajo contrato.
                      </p>
                    </div>

                    <div className='mt-4 pt-3 border-t border-gray-200/60 dark:border-gray-800 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      <span className='material-symbols-outlined text-base'>
                        check_circle
                      </span>
                      Actualizaciones Oficiales
                    </div>
                  </div>

                  {/* Card 6 */}

                  <div className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:border-primary/50 transition-colors flex flex-col justify-between'>
                    <div>
                      <div className='inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-wider mb-3'>
                        <span className='material-symbols-outlined text-[16px]'>
                          thermostat
                        </span>
                        Requisitos Ambientales &amp; Póliza
                      </div>

                      <h4 className='text-base font-bold text-text-main dark:text-white mb-2'>
                        Data Center Homologado (ASHRAE A2)
                      </h4>

                      <p className='text-sm text-text-secondary dark:text-gray-400 leading-relaxed'>
                        Operación con rango térmico 18°C a 22°C, humedad
                        relativa 40%-55%, alimentación UPS estabilizada y doble
                        línea eléctrica trifásica redundante.
                      </p>
                    </div>

                    <div className='mt-4 pt-3 border-t border-gray-200/60 dark:border-gray-800 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                      <span className='material-symbols-outlined text-base'>
                        check_circle
                      </span>
                      Cumplimiento ASHRAE
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Toolbar */}

              <div className='p-6 md:px-8 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='flex items-center gap-2 text-xs text-text-secondary dark:text-gray-400'>
                  <span className='material-symbols-outlined text-primary text-base'>
                    sync
                  </span>

                  <span>
                    Fuente:
                    <strong className='text-text-main dark:text-gray-200'>
                      Datos de demostración
                    </strong>
                  </span>
                </div>

                <div className='flex flex-wrap items-center gap-3 w-full sm:w-auto'>
                  <button
                    className='flex-1 sm:flex-none flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-white/5 transition-colors'
                    onClick={(event) => triggerAction('download')}
                    type='button'
                  >
                    <span className='material-symbols-outlined text-base'>
                      picture_as_pdf
                    </span>

                    <span>Certificado PDF</span>
                  </button>

                  <button
                    className='flex-1 sm:flex-none flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-white/5 transition-colors'
                    onClick={(event) => triggerAction('renew')}
                    type='button'
                  >
                    <span className='material-symbols-outlined text-base'>
                      update
                    </span>

                    <span>Extender Póliza</span>
                  </button>

                  <button
                    className='w-full sm:w-auto flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-primary hover:bg-[#d61731] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95'
                    onClick={(event) => triggerAction('ticket')}
                    type='button'
                  >
                    <span className='material-symbols-outlined text-base'>
                      confirmation_number
                    </span>

                    <span>Abrir Ticket RMA / Falla</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Infrastructure Warehouse Showcase (Matching Card Presentation) */}

            <div className='grid lg:grid-cols-2 gap-12 items-center bg-white dark:bg-[#1a0e10] p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl mb-16'>
              <div>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4'>
                  <span className='material-symbols-outlined text-[16px]'>
                    warehouse
                  </span>
                  LOGÍSTICA CRÍTICA LOCAL EN ECUADOR
                </div>

                <h3 className='text-3xl font-bold text-text-main dark:text-white mb-6'>
                  Bodegas y Repuestos Propios Sin Intermediación
                </h3>

                <p className='text-base text-text-secondary dark:text-gray-300 mb-6 leading-relaxed'>
                  A diferencia de revendedores convencionales que dependen de
                  fletes internacionales de emergencia, IMPROTRU mantiene stock
                  crítico de partes originales homologadas pre-nacionalizadas en
                  Quito y Guayaquil.
                </p>

                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-0.5'>
                      check_circle
                    </span>

                    <span className='text-sm text-text-secondary dark:text-gray-300'>
                      Despacho de piezas críticas en menos de 120 minutos para
                      zonas metropolitanas.
                    </span>
                  </li>

                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-0.5'>
                      check_circle
                    </span>

                    <span className='text-sm text-text-secondary dark:text-gray-300'>
                      Pólizas de fiel cumplimiento bancarias y actas de entrega
                      legal para el SRI.
                    </span>
                  </li>

                  <li className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary mt-0.5'>
                      check_circle
                    </span>

                    <span className='text-sm text-text-secondary dark:text-gray-300'>
                      Trazabilidad oficial directa en los portales mundiales del
                      fabricante.
                    </span>
                  </li>
                </ul>

                <div className='flex gap-4'>
                  <a
                    className='flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-red-600 transition-colors'
                    href='#contact'
                  >
                    <span className='material-symbols-outlined text-base'>
                      support_agent
                    </span>
                    Hablar con un Especialista
                  </a>
                </div>
              </div>

              <div className='relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group'>
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcb5H6ZVYvGcq5dNcVzIapIQ-jkpEYN_I2RqRyVRvGEMrsNAF1aPPCzkJzTPBTx28jLZCqqlng2JJPi1ApIvmtti7-OcbdePzYENJByh1WZgZ15kWNlq7mV9uSoo3DyNxqaysgBBVk7VSfFZi1_5YuO3S9um_IvkHJneltVs0aqbKgi_f8JrbnHWRdACcmw7acjvzGPbNLnf3Tn19uNfqy4bSV4z6ampAlnyKJ8x4A')",
                  }}
                ></div>

                <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6'>
                  <div className='bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl w-full text-white shadow-2xl'>
                    <div className='flex items-center justify-between mb-2'>
                      <div className='flex items-center gap-2'>
                        <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>

                        <span className='font-bold text-xs tracking-wide'>
                          Hub Logístico UIO / GYE
                        </span>
                      </div>

                      <span className='text-[11px] font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-900/50'>
                        DISPONIBLE
                      </span>
                    </div>

                    <div className='grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/10'>
                      <div>
                        <div className='text-gray-300'>Despacho Inmediato</div>

                        <div className='text-white font-mono font-bold'>
                          &lt; 120 min
                        </div>
                      </div>

                      <div className='text-right'>
                        <div className='text-gray-300'>Partes Homologadas</div>

                        <div className='text-white font-mono font-bold'>
                          100% OEM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion (Clean Style) */}

            <div className='max-w-4xl mx-auto bg-white dark:bg-[#1a0e10] p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl'>
              <div className='text-center mb-8'>
                <span className='text-xs uppercase tracking-widest font-bold text-primary'>
                  PREGUNTAS FRECUENTES
                </span>

                <h3 className='text-2xl md:text-3xl font-bold text-text-main dark:text-white mt-1'>
                  Condiciones de Cobertura y Operatividad
                </h3>
              </div>

              <div className='space-y-3'>
                <div
                  className='border border-gray-200 dark:border-gray-800 rounded-xl p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors'
                  onClick={(event) => toggleFaq(event.currentTarget)}
                >
                  <div className='flex items-center justify-between gap-4'>
                    <h4 className='text-base font-bold text-text-main dark:text-white'>
                      ¿Cómo tramitar un reemplazo de partes por falla de
                      hardware con IMPROTRU?
                    </h4>

                    <span className='material-symbols-outlined text-primary text-xl faq-icon transition-transform'>
                      expand_more
                    </span>
                  </div>

                  <div className='faq-content hidden pt-3 text-sm text-text-secondary dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 mt-3'>
                    El proceso se inicia ingresando el número de serie en este
                    portal y haciendo clic en “Abrir Ticket RMA / Falla”, o
                    comunicándose a nuestro NOC 24/7. Nuestro ingeniero realiza
                    el diagnóstico remoto por telemetría (iDRAC, XClarity, iLO)
                    para validar el código de error y despacha inmediatamente el
                    componente desde nuestras bodegas en Quito o Guayaquil.
                  </div>
                </div>

                <div
                  className='border border-gray-200 dark:border-gray-800 rounded-xl p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors'
                  onClick={(event) => toggleFaq(event.currentTarget)}
                >
                  <div className='flex items-center justify-between gap-4'>
                    <h4 className='text-base font-bold text-text-main dark:text-white'>
                      ¿Qué cubre la garantía On-Site 4 Horas en Quito y
                      Guayaquil frente a provincias?
                    </h4>

                    <span className='material-symbols-outlined text-primary text-xl faq-icon transition-transform'>
                      expand_more
                    </span>
                  </div>

                  <div className='faq-content hidden pt-3 text-sm text-text-secondary dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 mt-3'>
                    En las áreas metropolitanas de Quito y Guayaquil
                    garantizamos la presencia física del especialista con la
                    refacción en un plazo máximo de 4 horas para contratos
                    Mission Critical. En otras provincias (Cuenca, Manta,
                    Machala, Ambato, etc.), el tiempo de atención en sitio se
                    ajusta de 6 a 8 horas mediante nuestros hubs de logística
                    regional y partners autorizados.
                  </div>
                </div>

                <div
                  className='border border-gray-200 dark:border-gray-800 rounded-xl p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors'
                  onClick={(event) => toggleFaq(event.currentTarget)}
                >
                  <div className='flex items-center justify-between gap-4'>
                    <h4 className='text-base font-bold text-text-main dark:text-white'>
                      ¿Cómo extender una garantía o renovar un contrato próximo
                      a vencer?
                    </h4>

                    <span className='material-symbols-outlined text-primary text-xl faq-icon transition-transform'>
                      expand_more
                    </span>
                  </div>

                  <div className='faq-content hidden pt-3 text-sm text-text-secondary dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 mt-3'>
                    Recomendamos solicitar la renovación con al menos 45 días de
                    anticipación al vencimiento. Al hacer clic en “Extender
                    Póliza”, nuestro equipo corporativo emite la cotización
                    oficial con precios preferenciales de fabricante, evitando
                    recargos de “Reinstatement Fee” que imponen las marcas por
                    contratos vencidos.
                  </div>
                </div>

                <div
                  className='border border-gray-200 dark:border-gray-800 rounded-xl p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors'
                  onClick={(event) => toggleFaq(event.currentTarget)}
                >
                  <div className='flex items-center justify-between gap-4'>
                    <h4 className='text-base font-bold text-text-main dark:text-white'>
                      ¿Los servicios cumplen con los requerimientos de la
                      Contraloría y el SERCOP?
                    </h4>

                    <span className='material-symbols-outlined text-primary text-xl faq-icon transition-transform'>
                      expand_more
                    </span>
                  </div>

                  <div className='faq-content hidden pt-3 text-sm text-text-secondary dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 mt-3'>
                    Sí. IMPROTRU emite contratos y cartas de garantía formal con
                    respaldo del fabricante que cumplen estrictamente con los
                    términos de referencia para instituciones públicas y
                    corporaciones privadas reguladas bajo la Superintendencia de
                    Bancos y Compañías.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Strategic Technology Partners Strip (Exact style from SCREEN_35) */}

        <section
          className='py-16 bg-white dark:bg-[#150a0b] border-t border-gray-100 dark:border-gray-800 overflow-hidden relative'
          id='partners'
        >
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

              {/* Loop duplication for continuous ticker */}

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

        {/* 6. Ready to work with us? CTA Section (Exact from SCREEN_35) */}

        <section className='relative py-32 bg-white dark:bg-[#211113] overflow-hidden border-t border-gray-100 dark:border-gray-800'>
          <div className='max-w-4xl mx-auto px-4 md:px-10 relative z-10 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6 tracking-tight'>
              Ready to work with us?
            </h2>

            <p className='text-lg text-text-secondary dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
              Experience the difference of enterprise-grade IT solutions.
              Whether you're looking for infrastructure modernization, cloud
              strategy, or professional support, our team is here to help you
              scale.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
                className='flex items-center justify-center h-14 px-10 rounded-lg bg-[#ED1A37] text-white font-bold text-base hover:bg-red-600 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto'
                href='#contact'
              >
                Contact Us
              </a>

              <a
                className='flex items-center justify-center h-14 px-10 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto'
                href='#'
              >
                View Careers
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
