function NavbarEnterprise() {
  return (
    <header className='sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'>
      <div className='px-4 md:px-10 py-4 max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='size-8 text-primary'>
            <svg className='w-full h-full' fill='none' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
              <path d='M6 6H42L36 24L42 42H6L12 24L6 6Z' fill='currentColor'></path>
            </svg>
          </div>
          <h1 className='text-text-main dark:text-white text-xl font-bold tracking-tight'>
            IMPROTRU
            <span className='text-text-secondary font-normal'>Corporate</span>
          </h1>
        </div>
        <div className='hidden lg:flex items-center gap-8'>
          <nav className='flex gap-6 items-center'>
            <a className='text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200' href='#'>
              Home
            </a>
            <a className='text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200' href='#solutions'>
              Solutions
            </a>
            <a className='text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200' href='#contact'>
              Contact
            </a>
          </nav>
          <div className='h-6 w-px bg-gray-300 dark:bg-gray-700'></div>
          <div className='flex items-center gap-4'>
            <div className='relative group'>
              <button className='flex items-center gap-2 text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors'>
                🇺🇸 EN
                <span className='material-symbols-outlined text-sm'>expand_more</span>
              </button>
              <div className='absolute right-0 top-full pt-2 w-32 hidden group-hover:block'>
                <div className='bg-white dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl p-1 flex flex-col'>
                  <a
                    className='flex items-center gap-3 px-3 py-2 text-sm text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors'
                    href='#'
                  >
                    <span className='text-lg'>🇪🇸</span>
                    ES
                  </a>
                  <a
                    className='flex items-center gap-3 px-3 py-2 text-sm text-primary font-bold bg-gray-50 dark:bg-gray-800/50 rounded transition-colors'
                    href='#'
                  >
                    <span className='text-lg'>🇺🇸</span>
                    EN
                  </a>
                </div>
              </div>
            </div>
            <button className='flex items-center gap-2 rounded-full h-10 pl-4 pr-5 bg-[#ED1A37] text-white text-sm font-bold hover:bg-[#d61731] transition-all shadow-md'>
              <span className='material-symbols-outlined text-lg'>shopping_bag</span>
              <span className='tracking-wide'>Switch to Store</span>
            </button>
          </div>
        </div>
        <button className='lg:hidden text-text-main dark:text-white'>
          <span className='material-symbols-outlined'>menu</span>
        </button>
      </div>
    </header>
  );
}

export default NavbarEnterprise;
