import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🌿 Senior Wellness App</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/home">🏠 Home</Link> | <Link to="/about">ℹ️ About</Link>
      </nav>
      <p>Welcome! Use the menu to explore the app.</p>
    </div>
  );
}
