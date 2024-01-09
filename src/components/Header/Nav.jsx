import { Link, useLocation } from "react-router-dom";
import './Nav.css'

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <header className="bg-dark d-flex justify-content-between nav-height">
      <p className="text-white fs-3">Jacob Fournier-Martin</p>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <Link
            to="/Aboutme"
            className={
              currentPage === "/Aboutme"
                ? "nav-link text-danger"
                : "nav-link text-white"
            }
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={
              currentPage === "/Portfolio"
                ? "nav-link text-danger"
                : "nav-link text-white"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact"
                ? "nav-link text-danger"
                : "nav-link text-white"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={
              currentPage === "/Resume"
                ? "nav-link text-danger"
                : "nav-link text-white"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
