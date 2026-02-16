import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/Enterprise/HomePage';
import Solutions from './components/pages/Enterprise/Solutions';
import Contacts from './components/pages/Enterprise/Contacts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/solutions' element={<Solutions />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  );
}

export default App;
