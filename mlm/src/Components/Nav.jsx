import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import "../Assets/Css/Nav.css";
import Memberlogin from "./Login";
import logo from "../Assets/Images/Logo.png"
import { Link } from "react-router-dom";

let Nav = () => {

  const [modalShow, setModalShow] = useState(false);
  
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
                  
                 
              
                  
                 
                 
                
            
                
                <button className="button btn-login"onClick={() => setModalShow(true)}> LOG IN</button> 
                    
                </ul>
             

              </div>
            </div>
          </div>
        </nav>
        <Memberlogin
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
      </div>
    </>
  );
}

export default Nav;
