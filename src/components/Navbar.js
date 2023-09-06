import React from 'react'
import logo from '../logo/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
 return (
  
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
          <span className="ms-2">InsightfulChronicle</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Technology">
                Technology
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Connect to us!
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Github
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    twitter
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Leetcode
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )

}
export default Navbar