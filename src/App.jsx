import './App.css';

function App() {
  return (
    <div className='contenedor-pantalla-completa'>
      <picture className='picture-completo'>
        {/* Imagen para celulares (pantallas de 768px o menos) */}
        <source media='(max-width: 768px)' srcSet='/Under_construction_mobil.jpg' />

        {/* Imagen por defecto para PC y pantallas grandes */}
        <img src='/Under_construction.jpg' alt='En construcción' className='imagen-completa' />
      </picture>
    </div>
  );
}

export default App;
