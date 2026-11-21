const address = encodeURIComponent('Av. Eloy Alfaro N34-118, Quito, Ecuador');
const directions = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
const mapUrl = `https://maps.google.com/maps?q=${address}&output=embed`;
const visit = `https://wa.me/593999951096?text=${encodeURIComponent('Hola, quisiera coordinar una visita a la oficina de Importru.')}`;

export default function Contact() {
  return (
    <main className='flex-grow'>
      <section className='relative bg-background-light dark:bg-[#1a0e10] py-20 border-b border-gray-200 dark:border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 md:px-10 text-center'>
          <span className='inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20'>
            Atención directa
          </span>
          <h1 className='text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6'>
            Conozca a nuestros especialistas
          </h1>
          <p className='max-w-2xl mx-auto text-lg text-text-secondary dark:text-gray-400'>
            Contacte directamente al especialista de su área, sin pasar por una
            cola de atención general, para recibir soluciones adaptadas a su
            empresa.
          </p>
        </div>
      </section>
      <section className='py-16 bg-background-light dark:bg-[#211113]'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
            <div className='group relative bg-white dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
              <div className='flex items-start justify-between mb-6'>
                <div className='flex items-center gap-4'>
                  <div className='size-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md'>
                    <img
                      alt='Carlos Rodriguez'
                      className='w-full h-full object-cover'
                      src='https://lh3.googleusercontent.com/aida-public/AB6AXuDPyYN4POiFka4WVtRjE5WgUJ_VhQwx5vTnkFgC06CFMogTD26oGPYg9cYTje-ZwarFXpEqr7tluk0MY7MsHHOtO3djCbyPfGnQrdxRwsSPvCFNSD27p7CPRe1bEeO-lwquwKARDcMSxpw0S9v-7OMzXyk4OZFwF6xaua0oTdP23CVhg3mjKqZXx6jpRIcAMICk4SB4hM_WNtgDahvtSu6hVvCw6sdX7FI8M3l8GEUosJXQz0rcbpDI7Nqxj3TfKs4tsphgvJrzL2C7'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-text-main dark:text-white'>
                      Carlos Rodriguez
                    </h3>
                    <p className='text-primary text-sm font-medium'>
                      Especialista en infraestructura
                    </p>
                  </div>
                </div>
              </div>
              <div className='space-y-4 mb-6'>
                <div className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400'>
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    dns
                  </span>
                  <span>Centro de datos y hardware</span>
                </div>
                <div className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400'>
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    schedule
                  </span>
                  <span>Lun. a vie.: 08:30 - 17:30</span>
                </div>
                <a
                  className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link'
                  href='mailto:carlos.r@improtru.com'
                >
                  <span className='material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]'>
                    mail
                  </span>
                  carlos.r@improtru.com
                </a>
                <a
                  className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link'
                  href='tel:+593991234567'
                >
                  <span className='material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]'>
                    call
                  </span>
                  +593 99 123 4567
                </a>
              </div>
              <div className='pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
                <div className='flex flex-col'>
                  <span className='text-[10px] uppercase font-bold text-gray-400 tracking-wider'>
                    Tiempo medio de respuesta
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-white'>
                    &lt; 2 horas
                  </span>
                </div>
                <a
                  href='mailto:carlos.r@improtru.com'
                  aria-label='Enviar correo'
                  className='size-10 rounded-full bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm'
                >
                  <span className='material-symbols-outlined'>
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className='group relative bg-white dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
              <div className='flex items-start justify-between mb-6'>
                <div className='flex items-center gap-4'>
                  <div className='size-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md'>
                    <img
                      alt='Ana Mikovic'
                      className='w-full h-full object-cover'
                      src='https://lh3.googleusercontent.com/aida-public/AB6AXuCSCSi6Mn3_MORK9HgV38BXiXQoe23BDe9c9cLUpaq_vX1eWB4s8ySSjQ_1WVSO8i0Cwx2m3FmEdRSMiNplwCXYizsYb36QKQqAgOIfcAsb4dhc6DEv6KayFtQxjkpcllrNMYg361FJKm-vJWAfl4gGoENZGWELFUExNlBRfWnSN1q-wzzwq0n26xvhSuGtgh_fYcexVpUDoV1Raddj0j7GMF2o1iFfkbt5zEojFOQw5sM6st8OPZ_5P7tntlQ0kbDPJggQmtjIhPE-'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-text-main dark:text-white'>
                      Ana Mikovic
                    </h3>
                    <p className='text-primary text-sm font-medium'>
                      Consultora de licenciamiento
                    </p>
                  </div>
                </div>
              </div>
              <div className='space-y-4 mb-6'>
                <div className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400'>
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    workspace_premium
                  </span>
                  <span>Software y cumplimiento normativo</span>
                </div>
                <div className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400'>
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    schedule
                  </span>
                  <span>Lun. a vie.: 09:00 - 18:00</span>
                </div>
                <a
                  className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link'
                  href='mailto:ana.m@improtru.com'
                >
                  <span className='material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]'>
                    mail
                  </span>
                  ana.m@improtru.com
                </a>
                <a
                  className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link'
                  href='tel:+593997654321'
                >
                  <span className='material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]'>
                    call
                  </span>
                  +593 99 765 4321
                </a>
              </div>
              <div className='pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
                <div className='flex flex-col'>
                  <span className='text-[10px] uppercase font-bold text-gray-400 tracking-wider'>
                    Tiempo medio de respuesta
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-white'>
                    &lt; 1 hora
                  </span>
                </div>
                <a
                  href='mailto:ana.m@improtru.com'
                  aria-label='Enviar correo'
                  className='size-10 rounded-full bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm'
                >
                  <span className='material-symbols-outlined'>
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className='group relative bg-white dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
              <div className='flex items-start justify-between mb-6'>
                <div className='flex items-center gap-4'>
                  <div className='size-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md'>
                    <img
                      alt='David Chen'
                      className='w-full h-full object-cover'
                      src='https://lh3.googleusercontent.com/aida-public/AB6AXuA4yt5s6ipWo1OAFVtbULtizBwK4pLIV9ArF8IzrzL42ucBXamojE3ZgB5Y85Etf_Mh0d1CxiOxGLwaMkPdKrsT2h09bty0PXK7UpNI8y-AHj9hshnmf8LQlQKBu6JA0RMoB-SO4T0FgQn4KtG3oEr_pMnMfLZU3iiC5x0NLXLKkPzOjw_ZxxeAx8r5uQp9FlNk3Hl65iJ0Inz3z0d3QpH-nDwQar0-8UtRj5VQflG_MyzTMIgDhVbXiPCDmlKC_RbaeXdznNl8Lgkq'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-text-main dark:text-white'>
                      David Chen
                    </h3>
                    <p className='text-primary text-sm font-medium'>
                      Arquitecto de soluciones en la nube
                    </p>
                  </div>
                </div>
              </div>
              <div className='space-y-4 mb-6'>
                <div className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400'>
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    cloud_queue
                  </span>
                  <span>Virtualización y nube</span>
                </div>
                <div className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400'>
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    schedule
                  </span>
                  <span>Lun. a vie.: 08:00 - 16:00</span>
                </div>
                <a
                  className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link'
                  href='mailto:david.c@improtru.com'
                >
                  <span className='material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]'>
                    mail
                  </span>
                  david.c@improtru.com
                </a>
                <a
                  className='flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link'
                  href='tel:+593995550199'
                >
                  <span className='material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]'>
                    call
                  </span>
                  +593 99 555 0199
                </a>
              </div>
              <div className='pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between'>
                <div className='flex flex-col'>
                  <span className='text-[10px] uppercase font-bold text-gray-400 tracking-wider'>
                    Tiempo medio de respuesta
                  </span>
                  <span className='text-xs font-bold text-text-main dark:text-white'>
                    &lt; 3 horas
                  </span>
                </div>
                <a
                  href='mailto:david.c@improtru.com'
                  aria-label='Enviar correo'
                  className='size-10 rounded-full bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm'
                >
                  <span className='material-symbols-outlined'>
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-background-light dark:bg-[#1a0e10] border-t border-gray-200 dark:border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <div className='bg-white dark:bg-[#211113] rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-800'>
            <div className='grid lg:grid-cols-2 gap-12 items-start'>
              <div className='space-y-10'>
                <div>
                  <h2 className='text-3xl font-bold text-text-main dark:text-white mb-6'>
                    Visite nuestra oficina
                  </h2>
                  <p className='text-text-secondary dark:text-gray-400'>
                    Conozca nuestras soluciones en el centro de demostraciones.
                    Coordine una visita o acérquese durante el horario de
                    atención.
                  </p>
                </div>
                <div className='space-y-8'>
                  <div className='flex gap-5'>
                    <div className='size-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0'>
                      <span className='material-symbols-outlined text-primary text-2xl'>
                        location_on
                      </span>
                    </div>
                    <div>
                      <h4 className='font-bold text-text-main dark:text-white text-lg mb-2'>
                        Oficina principal
                      </h4>
                      <p className='text-text-secondary dark:text-gray-400 font-medium leading-relaxed'>
                        Av. Eloy Alfaro n34-118,
                        <br />
                        Edificio Maldonado ofi 2000
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='size-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0'>
                      <span className='material-symbols-outlined text-primary text-2xl'>
                        schedule
                      </span>
                    </div>
                    <div>
                      <h4 className='font-bold text-text-main dark:text-white text-lg mb-2'>
                        Horario de atención
                      </h4>
                      <div className='grid grid-cols-2 gap-x-3 sm:gap-x-8 gap-y-2 text-sm text-text-secondary dark:text-gray-400'>
                        <span className='font-medium'>Lunes a viernes</span>
                        <span className='text-right'>09:00 - 18:00</span>
                        <span className='font-medium'>Sábado</span>
                        <span className='text-right'>Previa cita</span>
                        <span className='font-medium'>Domingo</span>
                        <span className='text-right'>Cerrado</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-4 pt-4'>
                    <a
                      href={directions}
                      aria-label='Cómo llegar'
                      className='flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-red-600 transition-colors shadow-lg shadow-primary/25'
                    >
                      <span className='material-symbols-outlined'>map</span>
                      Cómo llegar
                    </a>
                    <a
                      href={visit}
                      aria-label='Solicitar visita'
                      className='flex items-center gap-2 px-6 py-3 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-text-main dark:text-white rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors'
                    >
                      <span className='material-symbols-outlined'>
                        calendar_month
                      </span>
                      Coordinar visita
                    </a>
                  </div>
                </div>
              </div>
              <div className='relative h-[400px] lg:h-[500px] w-full bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-inner border border-gray-200 dark:border-gray-800'>
                <iframe
                  title='Mapa de la oficina de Importru'
                  allowFullScreen
                  className='grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700'
                  height='100%'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  src={mapUrl}
                  style={{ border: 0 }}
                  width='100%'
                ></iframe>
                <div className='absolute top-4 right-4 bg-white dark:bg-[#211113] p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 pointer-events-none'>
                  <div className='flex items-center gap-2 text-xs font-bold text-text-main dark:text-white'>
                    <span className='relative flex h-2 w-2'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
                    </span>
                    Ubicación de la oficina
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
