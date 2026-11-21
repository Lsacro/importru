import { useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const enlaces = [
  { texto: 'Home', href: '/' },
  { texto: 'Soluciones', href: '/solutions' },
  { texto: 'Partners', href: '/partners' },
  { texto: 'Garantías', href: '/warranties' },
  { texto: 'Nosotros', href: '/about' },
];

const claseTienda =
  'group relative flex h-10 items-center justify-center gap-2 rounded-full bg-primary pl-4 pr-5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#d61731] active:scale-95';

function BotonTienda({ href, onClick }) {
  const contenido = (
    <>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-md transition-all group-hover:opacity-100 group-hover:blur-lg'
      />
      <span
        aria-hidden='true'
        className='material-symbols-outlined relative z-10 text-lg'
      >
        shopping_bag
      </span>
      <span className='relative z-10'>Ir a la tienda</span>
    </>
  );

  return href ? (
    <a href={href} onClick={onClick} className={claseTienda}>
      {contenido}
    </a>
  ) : (
    <button type='button' disabled className={claseTienda}>
      {contenido}
    </button>
  );
}

export default function Navbar({ tiendaUrl, inglesUrl }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuId = useId();
  const botonMenu = useRef(null);

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  function manejarEscape(evento) {
    if (evento.key === 'Escape' && menuAbierto) {
      cerrarMenu();
      botonMenu.current?.focus();
    }
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-[10px] transition-all duration-300 dark:border-gray-800/50 dark:bg-background-dark/70'>
      <div className='mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 md:px-10'>
        <a
          href='#'
          onClick={cerrarMenu}
          className='flex items-center gap-3 text-xl font-bold tracking-tight text-text-main dark:text-white'
        >
          <svg
            aria-hidden='true'
            className='size-8 shrink-0 text-primary'
            viewBox='0 0 48 48'
          >
            <path d='M6 6H42L36 24L42 42H6L12 24L6 6Z' fill='currentColor' />
          </svg>
          <span>
            IMPORTRU{' '}
            <span className='hidden font-normal text-text-secondary opacity-80 sm:inline'>
              Corporativo
            </span>
          </span>
        </a>

        {/* Escritorio */}
        <div className='hidden items-center gap-6 lg:flex xl:gap-12'>
          <nav
            aria-label='Navegación principal'
            className='flex items-center gap-4 xl:gap-8'
          >
            {enlaces.map(({ texto, href }) => (
              <Link
                key={texto}
                to={href}
                className='whitespace-nowrap text-xs font-semibold uppercase tracking-[0.1em] text-text-main transition-colors hover:text-primary dark:text-gray-200'
              >
                {texto}
              </Link>
            ))}
          </nav>

          <div
            aria-hidden='true'
            className='h-4 w-px bg-gray-300/50 dark:bg-gray-700/50'
          />

          <div className='flex shrink-0 items-center gap-6'>
            <div className='group relative'>
              <button
                type='button'
                aria-label='Cambiar idioma'
                className='flex items-center gap-1 text-xs font-bold text-text-main transition-colors hover:text-primary dark:text-white'
              >
                ES
                <span
                  aria-hidden='true'
                  className='material-symbols-outlined text-sm'
                >
                  keyboard_arrow_down
                </span>
              </button>

              <div className='absolute right-0 top-full hidden w-36 pt-2 group-hover:block group-focus-within:block'>
                <div className='flex flex-col rounded-lg border border-gray-200 bg-white/90 p-1 shadow-xl backdrop-blur-xl dark:border-gray-800 dark:bg-background-dark/90'>
                  <span className='rounded bg-gray-50 px-3 py-2 text-sm font-bold text-primary dark:bg-gray-800/50'>
                    <span aria-hidden='true'>🇪🇸</span> Español
                  </span>

                  {inglesUrl ? (
                    <a
                      href={inglesUrl}
                      hrefLang='en'
                      className='rounded px-3 py-2 text-sm text-text-main hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
                    >
                      <span aria-hidden='true'>🇺🇸</span> Inglés
                    </a>
                  ) : (
                    <span className='rounded px-3 py-2 text-sm text-text-secondary dark:text-gray-400'>
                      <span aria-hidden='true'>🇺🇸</span> Inglés
                    </span>
                  )}
                </div>
              </div>
            </div>

            <BotonTienda href={tiendaUrl} />
          </div>
        </div>

        {/* Móvil y tablet */}
        <div className='lg:hidden' onKeyDown={manejarEscape}>
          <button
            ref={botonMenu}
            type='button'
            aria-controls={menuId}
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            className='inline-flex size-11 items-center justify-center rounded-lg text-text-main hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-primary dark:text-white dark:hover:bg-gray-800'
          >
            <span
              aria-hidden='true'
              className='material-symbols-outlined text-2xl'
            >
              {menuAbierto ? 'close' : 'menu'}
            </span>
          </button>

          <nav
            id={menuId}
            aria-label='Navegación móvil'
            hidden={!menuAbierto}
            className='absolute inset-x-0 top-full max-h-[calc(100dvh-73px)] overflow-y-auto border-b border-gray-200 bg-white px-4 py-3 shadow-lg dark:border-gray-800 dark:bg-background-dark'
          >
            {enlaces.map(({ texto, href }) => (
              <a
                key={texto}
                href={href}
                onClick={cerrarMenu}
                className='block rounded-lg px-4 py-3 text-sm font-semibold text-text-main hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-800'
              >
                {texto}
              </a>
            ))}

            {inglesUrl && (
              <a
                href={inglesUrl}
                hrefLang='en'
                onClick={cerrarMenu}
                className='block rounded-lg px-4 py-3 text-sm font-semibold text-text-main hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
              >
                Inglés
              </a>
            )}

            <div className='mt-3'>
              <BotonTienda href={tiendaUrl} onClick={cerrarMenu} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
