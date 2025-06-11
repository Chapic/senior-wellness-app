import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

const Home = () => <h1>🏠 Página de Inicio funcionando</h1>;
const About = () => <h1>ℹ️ Página Acerca funcionando</h1>;
const Rutinas = () => <h1>🏋️ Página Rutinas funcionando</h1>;

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
