import { Link } from 'react-router-dom';

function Header({ isAuthenticated, user, onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">MERN App</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <span className="user-welcome">Welcome, {user.name}</span>
                </li>
                <li>
                  <button onClick={onLogout} className="btn btn-logout">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;