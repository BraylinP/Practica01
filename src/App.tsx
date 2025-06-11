import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Quizz from './pages/Quizz';
import Lista from './pages/Lista';
import Detalle from './pages/Detalle';
import Combos from './pages/Combos';
import Factura from './pages/Factura';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quizz" element={<Quizz />} />
        <Route path="/Lista" element={<Lista />} />
        <Route path="/Detalle/:id" element={<Detalle />} />
        <Route path="/Combos" element={<Combos />} />
        <Route path="/Factura" element={<Factura />} />
      </Routes>
      <Footer/>
    </Router>   
  );
};

export default App;
