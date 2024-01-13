import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Nav() {
  const currentPage = useLocation().pathname;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 755);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {!isMobile ? (
        <header className="bg-dark d-flex justify-content-between nav-height">
          <div className="w-50 d-flex justify-content-center align-items-center">
            <p className="text-white fs-2">Jacob Fournier-Martin</p>
          </div>
          <div className="w-50 d-flex justify-content-center align-items-center">
            <ul className="nav nav-tabs justify-content-end">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    currentPage === "/"
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
          </div>
        </header>
      ) : (
        <header className="bg-dark d-flex justify-content-between align-items-center nav-height">
          <div className="w-75 d-flex justify-content-center align-items-center">
            <p className="text-white fs-2">Jacob-Fournier-Martin</p>
          </div>
          <div className="dropdown">
            <Link
              className="btn btn-secondary dropdown-toggle bg-dark"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </Link>

            <ul
              className="dropdown-menu bg-dark border-white"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link
                  to="/"
                  className={
                    currentPage === "/"
                      ? "nav-link text-danger dropdown-item"
                      : "nav-link text-white dropdown-item"
                  }
                >
                  About Me
                </Link>
              </li>
              <li>
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
              <li>
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
              <li>
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
          </div>
        </header>
      )}
    </div>
  );
}

export default Nav;
