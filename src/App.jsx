import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EnterpriseHome from './components/Enterprise/EnterpriseHome';
import EnterpriseSolutions from './components/Enterprise/EnterpriseSolutions';
import EnterpriseContact from './components/Enterprise/EnterpriseContact';
import StoreHome from './components/Store/StoreHome';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/enterprise" replace />} />
        <Route path="/enterprise" element={<EnterpriseHome />} />
        <Route path="/enterprise/solutions" element={<EnterpriseSolutions />} />
        <Route path="/enterprise/contact" element={<EnterpriseContact />} />
        <Route path="/store" element={<StoreHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
