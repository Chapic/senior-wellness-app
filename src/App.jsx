import React, { useState } from 'react';
import Layout from './Components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Rutinas from './Pages/Rutinas';

const App = () => {
  const [contador, setContador] = useState(0);

  return (
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
  );
};

export default App;
