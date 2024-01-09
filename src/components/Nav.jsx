import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div className="bg-dark d-flex justify-content-between">
      <p className="text-white">dfgsdfgsdfg</p>
    <ul className="nav nav-tabs justify-content-end">
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
