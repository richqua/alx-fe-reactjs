import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#4b1a1aff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>
        MyCompany
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
          About
        </Link>
        <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>
          Services
        </Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;