import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div>
    <p>ergeargrg</p>
    <ul className="nav nav-tabs justify-content-end bg-dark">
      <li className="nav-item">
      <Link
          to="/Aboutme"
          className={currentPage === '/Aboutme' ? 'nav-link text-danger' : 'nav-link text-white'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link text-danger' : 'nav-link text-white'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link text-danger' : 'nav-link text-white'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link text-danger' : 'nav-link text-white'}
        >
          Resume
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default Nav;
