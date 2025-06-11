import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Rutinas from './Pages/Rutinas';

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <Router>
      <Layout>
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <h3>✅ Ejercicios completados: {contador}</h3>
          <button onClick={() => setContador(contador + 1)} style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}>
            +1 Ejercicio
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rutinas" element={<Rutinas />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
