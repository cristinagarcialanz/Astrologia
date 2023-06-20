import NavBar from './componentes/NavBar';
import Home from './componentes/Home';
import Sesiones from './componentes/Sesiones';
import Footer from './componentes/Footer';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">

      <NavBar />

      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/Sesiones' element={<Sesiones />} />

        <Route path="*" element={<h2>¡Página no encontrada!</h2>} />
      </Routes>


      <Footer />

    </div>
  );
}

export default App;
