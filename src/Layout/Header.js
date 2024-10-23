import { Link } from "react-router-dom";
import './Header.css'; // External CSS for styling

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        {/* Logo on the left side */}
        <Link className="navbar-brand fw-bold text-primary" to="/">MyLogo</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Links on the right side */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-uppercase" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-uppercase" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/action1">Action</Link></li>
                <li><Link className="dropdown-item" to="/action2">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
