import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#eee', padding: '10px' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>🏠 Inicio</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>ℹ️ Acerca de</Link>
        <Link to="/rutinas">🏃 Rutinas</Link> {/* NUEVO ENLACE */}
      </nav>
    </header>
  );
}

export default Header;
