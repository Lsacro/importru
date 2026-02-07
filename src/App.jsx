import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/HomePage';
import Solutions from './components/pages/Solutions';
import Contacts from './components/pages/Contacts';

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
