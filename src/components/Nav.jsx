import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
      <Link
          to="/Aboutme"
          className={currentPage === '/AboutMe' ? 'nav-link danger' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link danger' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link danger' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link danger' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
