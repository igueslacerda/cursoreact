import './App.css';
import { Routes, Route } from 'react-router-dom';
import PortifolioIgues from './pages/portifolioIgues';
import PortifolioPernalonga from './pages/portifolioJose';
import Home from './pages/home';
import ResponsiveAppBar from './components/menu';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/igues" element={<PortifolioIgues/>} />
      <Route path="/pernalonga" element={<PortifolioPernalonga/>} />
    </Routes>
    </>
  );
}

export default App;
