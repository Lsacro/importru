import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import Home from './pages/Home';
import MainLayout from './layouts/MainLauout';
import Solutions from './pages/Solutions';
import Warranties from './pages/Warranties';
import Partners from './pages/Partners';
import Us from './pages/Us';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/warranties' element={<Warranties />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/about' element={<Us />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
