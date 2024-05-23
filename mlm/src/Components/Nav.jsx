import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "../Css/Nav.css"
let Nav = () => {
  return (
    <>
    <div className="sticky-top "> 
      <nav class="navbar navbar-expand-md navBackground bsb-navbar bsb-navbar-hover bsb-navbar-caret">
        <div class="container">
          
          <a class="navbar-brand" href="/">
            <img src="{logo}" alt="Mobile Logo" width="120" height="35" className="mx-2 my-2" />
          </a>
          
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <CgMenuRight />
          </button>
          
          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h1 class="offcanvas-title fw-bold menus" id="offcanvasNavbarLabel ">Menu</h1>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1">
                <li class="nav-item my-1">
                  <a to="/" class="nav-link menus fw-semibold" >Home</a>
                </li>
                <li class="nav-item my-1">
                  <a to="/cart" class="nav-link menus fw-semibold" href="">About</a>
                </li>
                <li class="nav-item my-1">
                  <a to="/cart" class="nav-link menus fw-semibold" href="">Products</a>
                </li>
             
                <li class="nav-item my-1">
                 <a to="/contact"> <a class="nav-link menus fw-semibold" href="">Services</a></a>
                </li>
                <li class="nav-item my-1">
                 <a to="/contact"> <a class="nav-link menus fw-semibold" href="">Apps</a></a>
                </li>
                <li class="nav-item my-1">
                 <a to="/contact"> <a class="nav-link menus fw-semibold" href="">Videos</a></a>
                </li>
                <li class="nav-item my-1">
                 <a to="/contact"> <a class="nav-link menus fw-semibold" href="">Clients</a></a>
                </li>
                <li class="nav-item my-1">
                 <a to="/contact"> <a class="nav-link menus fw-semibold" href="">Contact us</a></a>
                </li>
                <li class="nav-item my-1">
                 <a to="/contact"> <a class="nav-link menus fw-semibold" href="">Blog</a></a>
                </li>
                <li class="nav-item my-1">
                 <a to="/contact"> <a class="nav-link menus fw-semibold" href="">FAQ</a></a>
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
