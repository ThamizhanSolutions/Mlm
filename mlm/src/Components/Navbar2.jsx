import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import "../Assets/Css/Nav.css";
import logo from "../Assets/Images/Logo.png"
import { Link } from "react-scroll";

let Navbar2 = () => {
  const handleLogout = () => {
    // Clear authentication state (replace with your own logout logic)
    // For example, clear token from localStorage
    localStorage.removeItem('token');

    // Redirect to login page
    window.location.href = '/';
  };
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
                    <a href="/contactus" className="nav-link menus fw-semibold mx-2">Contact us</a>
                  </li>
                  {/* <li className="nav-item my-1">
                  <a href="/" className="nav-link menus fw-semibold mx-2">Contact us</a>
                    <Link
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link menus fw-semibold mx-2"
                    >
                      FAQ
                    </Link>
                  </li> */}
                
                <button className="button btn-login mx-4" onClick={handleLogout}> LOG OUT</button> 
                    
                </ul>
             

              </div>
            </div>
          </div>
        </nav>
     
      </div>
    </>
  );
}

export default Navbar2;
