import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#f0f0f0', padding: '1rem', textAlign: 'center' }}>
      <nav>
        <Link to="/" style={{ margin: '1rem' }}>Inicio</Link>
        <Link to="/rutinas" style={{ margin: '1rem' }}>Rutinas</Link>
        <Link to="/about" style={{ margin: '1rem' }}>Acerca de</Link>
      </nav>
    </header>
  );
};

export default Header;
