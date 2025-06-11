import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Rutinas from './Pages/Rutinas'; // NUEVA PÁGINA

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rutinas" element={<Rutinas />} /> {/* NUEVA RUTA */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
