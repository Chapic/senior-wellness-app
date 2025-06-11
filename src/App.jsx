import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Rutinas from './Pages/Rutinas';

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/rutinas"
        element={
          <Layout>
            <>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <h3>✅ Ejercicios completados: {contador}</h3>
                <button
                  onClick={() => setContador(contador + 1)}
                  style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}
                >
                  +1 Ejercicio
                </button>
              </div>
              <Rutinas />
            </>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
