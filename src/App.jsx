import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

const Home = () => <h1 style={{ textAlign: 'center' }}>🏠 Bienvenido al Inicio</h1>;
const About = () => <h1 style={{ textAlign: 'center' }}>ℹ️ Acerca del Programa</h1>;
const Rutinas = () => <h1 style={{ textAlign: 'center' }}>💪 Tus Rutinas de Bienestar</h1>;

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rutinas" element={<Rutinas />} />
      </Routes>
    </Layout>
  );
};

export default App;
