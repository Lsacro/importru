import { Outlet } from 'react-router-dom';
import WhatsappLink from '../components/common/WhatsappLink';

import Navbar from '../components/common/Navbar';

export default function MainLayout() {
  return (
    <>
      <div className='font-display bg-background-light  text-text-main   antialiased'>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <WhatsappLink />
        </div>
      </div>
    </>
  );
}
