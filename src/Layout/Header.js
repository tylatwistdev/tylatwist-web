import { Link } from "react-router-dom";
import './Header.css'; // External CSS for styling
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

// Import icons from a library (e.g., Font Awesome)
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { theme, toggleTheme } = useContext(DataContext);
  
  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${theme === 'dark' ? 'bg-dark navbar-dark' : 'bg-body-tertiary'}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand fw-bold ${theme === 'dark' ? 'text-light' : 'text-primary'}`} to="/">MyLogo</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-uppercase ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-uppercase ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-uppercase ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-uppercase ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className={`nav-link dropdown-toggle text-uppercase ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className={`dropdown-menu ${theme === 'dark' ? 'bg-dark' : ''}`}>
                <li><Link className={`dropdown-item ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/action1">Action</Link></li>
                <li><Link className={`dropdown-item ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/action2">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className={`dropdown-item ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/something-else">Something else here</Link></li>
              </ul>
            </li>
            {/* Enhanced Toggle Dark Mode Switch with Icons */}
            <li className="nav-item">
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="themeSwitch"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <label htmlFor="themeSwitch" className={`switch ${theme === 'dark' ? 'dark' : ''}`}>
                  <span className="slider">
                    {theme === 'dark' ? <FaSun className="icon" /> : <FaMoon className="icon" />}
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
