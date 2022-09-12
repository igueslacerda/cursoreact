import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PortifolioIgues from './pages/portifolioIgues';
import PortifolioPernalonga from './pages/portifolioJose';
import Home from './pages/home';

function App() {
  return (
    <>
    <Link to="/">Inicio</Link>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/igues" element={<PortifolioIgues/>} />
      <Route path="/pernalonga" element={<PortifolioPernalonga/>} />
    </Routes>
    </>
  );
}

export default App;
