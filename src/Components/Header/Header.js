import React from "react";

const Header = () => {
  return (
    <header className="border-bottom py-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5">
        <div className="container-fluid">
          <a className="navbar-brand fst-italic" href="#">
            FreeFood
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link fw-semibold text-dark"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark">Review</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
