import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">🏠 Inicio</Link>
        <Link to="/about">ℹ️ Acerca de</Link>
        <Link to="/rutinas">🧘 Rutinas</Link>
      </nav>
    </header>
  );
};

export default Header;
