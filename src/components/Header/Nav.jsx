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
    <>
      {!isMobile ? (
        <header className="bg-dark d-flex justify-content-between nav-height">
          <div className="w-50 d-flex justify-content-center align-items-center">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100px"
              height="100px"
              fill="red"
              viewBox="0 0 466.337 466.337"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M233.168,0C104.604,0,0,104.604,0,233.168c0,128.565,104.604,233.169,233.168,233.169
		c128.565,0,233.169-104.604,233.169-233.169C466.337,104.604,361.733,0,233.168,0z M223.984,441.874
		c-22.321,0-46.405-41.384-59.045-107.815h118.067C270.371,400.49,246.316,441.874,223.984,441.874z M161.114,310.144
		c-2.738-19.991-4.437-41.781-4.881-65.018H291.74c-0.443,23.237-2.148,45.027-4.869,65.018H161.114z M24.521,245.126h107.704
		c0.443,21.883,2.09,43.859,4.887,65.018H38.768C30.693,289.826,25.818,267.966,24.521,245.126z M223.984,24.464
		c21.982,0,45.687,40.14,58.484,104.877h-116.97C178.286,64.604,201.996,24.464,223.984,24.464z M286.463,153.245
		c2.978,20.785,4.811,43.596,5.277,67.966H156.222c0.467-24.37,2.295-47.169,5.272-67.966H286.463z M132.226,221.211H24.521
		c1.354-23.926,6.568-46.836,15.332-67.966h97.656C134.462,175.32,132.681,198.312,132.226,221.211z M315.749,245.126h126.065
		c-1.296,22.84-6.188,44.7-14.246,65.018H310.855C313.646,288.985,315.305,267.009,315.749,245.126z M315.749,221.211
		c-0.468-22.898-2.254-45.891-5.29-67.966h116.023c8.77,21.13,13.978,44.04,15.332,67.966H315.749z M414.596,129.33H306.617
		c-7.894-42.067-20.727-78.844-38.195-102.222C330.952,37.799,384.06,76.205,414.596,129.33z M176.073,32.036
		c-15.7,23.459-27.348,58.1-34.699,97.305H51.741C78.657,82.505,123.064,47.1,176.073,32.036z M49.96,334.058h90.895
		c7.311,40.403,19.133,76.205,35.219,100.26C121.944,418.904,76.672,382.378,49.96,334.058z M268.41,439.222
		c17.865-23.938,30.874-61.889,38.697-105.164h109.274C386.15,388.743,332.12,428.339,268.41,439.222z"
                />
              </g>
            </svg>
            <p className="text-white fs-2 push head">
              Internexus Web Development
            </p>
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
                  About Us
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
        <header className="bg-dark d-flex justify-content-evenly align-items-center nav-height">
          <div className="w-75 d-flex justify-content-center align-items-center">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="80px"
              height="80px"
              fill="red"
              viewBox="0 0 466.337 466.337"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M233.168,0C104.604,0,0,104.604,0,233.168c0,128.565,104.604,233.169,233.168,233.169
		c128.565,0,233.169-104.604,233.169-233.169C466.337,104.604,361.733,0,233.168,0z M223.984,441.874
		c-22.321,0-46.405-41.384-59.045-107.815h118.067C270.371,400.49,246.316,441.874,223.984,441.874z M161.114,310.144
		c-2.738-19.991-4.437-41.781-4.881-65.018H291.74c-0.443,23.237-2.148,45.027-4.869,65.018H161.114z M24.521,245.126h107.704
		c0.443,21.883,2.09,43.859,4.887,65.018H38.768C30.693,289.826,25.818,267.966,24.521,245.126z M223.984,24.464
		c21.982,0,45.687,40.14,58.484,104.877h-116.97C178.286,64.604,201.996,24.464,223.984,24.464z M286.463,153.245
		c2.978,20.785,4.811,43.596,5.277,67.966H156.222c0.467-24.37,2.295-47.169,5.272-67.966H286.463z M132.226,221.211H24.521
		c1.354-23.926,6.568-46.836,15.332-67.966h97.656C134.462,175.32,132.681,198.312,132.226,221.211z M315.749,245.126h126.065
		c-1.296,22.84-6.188,44.7-14.246,65.018H310.855C313.646,288.985,315.305,267.009,315.749,245.126z M315.749,221.211
		c-0.468-22.898-2.254-45.891-5.29-67.966h116.023c8.77,21.13,13.978,44.04,15.332,67.966H315.749z M414.596,129.33H306.617
		c-7.894-42.067-20.727-78.844-38.195-102.222C330.952,37.799,384.06,76.205,414.596,129.33z M176.073,32.036
		c-15.7,23.459-27.348,58.1-34.699,97.305H51.741C78.657,82.505,123.064,47.1,176.073,32.036z M49.96,334.058h90.895
		c7.311,40.403,19.133,76.205,35.219,100.26C121.944,418.904,76.672,382.378,49.96,334.058z M268.41,439.222
		c17.865-23.938,30.874-61.889,38.697-105.164h109.274C386.15,388.743,332.12,428.339,268.41,439.222z"
                />
              </g>
            </svg>
            <p
              className="text-white fs-5 head"
              style={{ position: "relative", left: "5px", top: "10px" }}
            >
              Internexus Web Development
            </p>{" "}
          </div>
          <div className="dropdown">
            <Link
              className="btn btn-secondary dropdown-toggle bg-dark boot"
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
                      ? "nav-link text-danger dropdown-item linkies"
                      : "nav-link text-white dropdown-item linkies"
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
                      ? "nav-link text-danger dropdown-item linkies"
                      : "nav-link text-white dropdown-item linkies"
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
                      ? "nav-link text-danger dropdown-item linkies"
                      : "nav-link text-white dropdown-item linkies"
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
                      ? "nav-link text-danger dropdown-item linkies"
                      : "nav-link text-white dropdown-item linkies"
                   }
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}

export default Nav;
