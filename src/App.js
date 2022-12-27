
import './App.css';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Inicio from './Paginas/Inicio';
import Contacto from './Paginas/Contacto';
import Destacados from './Paginas/Destacados';
import Informacion from './Paginas/Informacion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/destacados' element={<Destacados/>}/>
          <Route path='/informacion' element={<Informacion/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
