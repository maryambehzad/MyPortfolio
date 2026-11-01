import { NavLink, useNavigate } from "react-router-dom";
import auth from "../auth-helper.js";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* My custom logo: a circle with my initials */}
      <div className="logo">MB</div>

      {/* Links to each page */}
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/qualification">Qualification</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact Me</NavLink></li>
        

        {/* Dynamic Authentication Links */}
        {!auth.isAuthenticated() ? (
          <>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </>
        ) : (
          <li>
            <button
              onClick={() => auth.clearJWT(() => navigate('/'))}
              style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}
            >
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;