import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/discover">
            Capital Movies
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle fw-bold"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My List
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/discover/popular">
                      Popular Movies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/discover/latest">
                      Latest Movies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/discover/favourite">
                      Favourite Movies
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="nav__item">
              <Link to="/discover/login" className="nav__link2">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
