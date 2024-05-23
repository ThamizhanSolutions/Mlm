import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import "../Assets/Css/Nav.css";
import logo from "../Assets/Images/Logo.png"

let Nav = () => {
  return (
    <>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-md navBackground bsb-navbar bsb-navbar-hover bsb-navbar-caret">
          <div className="container innerNav">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="MLM Logo" width="200" height="60" className="mx-2 my-2" />
            </a>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <BiMenuAltRight color="rgb(245, 245, 245)"/>
            </button>
            <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
              <img src={logo} alt="MLM Logo" width="200" height="60" className="mx-2 my-2" />
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ backgroundColor: "rgb(245, 245, 245)" }}></button>
              </div>
              <div className="offcanvas-body ">
                <hr />
                <ul className="navbar-nav justify-content-end flex-grow-1 ">
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">Home</a>
                  </li>
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">About</a>
                  </li>
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">Products</a>
                  </li>
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">Services</a>
                  </li>
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">Apps</a>
                  </li>
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">Videos</a>
                  </li>
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">Contact us</a>
                  </li>
                  <li className="nav-item my-1">
                    <a href="/" className="nav-link menus fw-semibold mx-2">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
