import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Shobhub
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Thuis
          </Link>
          <Link to="/checkout" className="navbar-link">
            Winkelwagen
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hallo, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>Log uit</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
