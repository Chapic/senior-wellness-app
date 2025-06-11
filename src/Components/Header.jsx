import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      background: '#f5f5f5',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      borderBottom: '2px solid #ddd'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Inicio</Link>
      <Link to="/rutinas" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Rutinas</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Acerca de</Link>
    </header>
  );
};

export default Header;
