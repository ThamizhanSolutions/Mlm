import React from "react";
import "../Assets/Css/Footer.css";
import logo from "../Assets/Images/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

  return (
    <footer className="footer-section " >
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6">
            <div className="logo-container d-flex justify-content-start">
              <img src={logo} alt="Logo" className="footer-logo"  />
            </div>
            <p className="footerContent">
              Crypto Mania operate on a business model where <br />
              individuals earn income through the sale of products <br />
              or services, as well as through recruiting others into <br />
              the organization. These recruits then become part of <br />
              the original seller's dowline, and the original seller <br />
              earns commissions from their sales.
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <div className="row">
              {/* First Column */}
              <div className="col-md-3">
                <h5 className="ulHeading ">Explore</h5>
                <ul className="list-unstyled list">
                  <li>Home</li>
                  <li>Products</li>
                  <li>Stories</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="ulHeading ">Services</h5>
                <ul className="list-unstyled list">
                  <li>Business Plan</li>
                  <li>Our Features</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="ulHeading">Help</h5>
                <ul className="list-unstyled list">
                  <li>Contact Us</li>
                  <li>Payment Options</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="ulHeading">Legal</h5>
                <ul className="list-unstyled list">
                  <li>About Us</li>
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="hhh"/>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <p className="copy-rights">Copy Rights © 2024 <span className="footerCryptoMania"> Crypto ManiA </span> All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-end">
              <p className="privacy-policy">User Terms & Conditions |  Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
