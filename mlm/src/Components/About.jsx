import React from "react";
import Navbar2 from "./Navbar2";
import "../Assets/Css/About.css";
import about1 from "../Assets/Images/about1.png";
import about2 from "../Assets/Images/about2.png";
import about3 from "../Assets/Images/about3.png";    
import about4 from "../Assets/Images/about4.png";
import banner from "../Assets/Images/inilevel1.jpg";       
import aboutVideo from "../Assets/Images/bannerVideo.mp4";
import Footer from "./Footer";

const About = () => {
                                                    
    return (
        <div className="aboutBackground">
            <Navbar2 />
            <div className="container">
                <div className="row text-center">
                    <h1 className="aboutTitle mt-5">About Us</h1>
                </div>
                <div className="row text-center">
                    <p className="aboutSubTitle">We are Cryptomania Platform That will Boost Your Business Work.</p>
                </div>
            </div>

            <div className="container d-flex justify-content-center">
                <div className="row no-gutters">
                    <div className="col-md-3 d-flex justify-content-center align-items-center image-container">
                        <img src={about1} alt="Left Image" className="img-fluid" />
                    </div>

                    <div className="col-md-6 d-flex flex-column align-items-center image-container">
                        <img src={about2} alt="Center Image 1" className="img-fluid mb-0" />
                        <img src={about3} alt="Center Image 2" className="img-fluid mt-0" />
                    </div>

                    <div className="col-md-3 d-flex justify-content-center align-items-center image-container">
                        <img src={about4} alt="Right Image" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center">
                    <h1 className="aboutTitle mt-5">Our Vision</h1>
                </div>
                <div className="row text-center">
                    <p className="aboutSubTitle">We often emphasize their commitment to empowering individuals to achieve financial independence and personal growth through their business models.</p>
                </div>
                <div className="row banner-container">
                    <img src={banner} alt="Banner" className="img-fluid" />
                    <div className="banner-overlay">"We Empower companies with innovative and reliable software solutions that drive success and growth."</div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center">
                    <h1 className="aboutTitle mt-5">Our Goals</h1>
                </div>
                <div className="row text-center">
                    <p className="aboutSubTitle">We are committed to specific commitments, and we continuously strive to ongoing efforts or improvements. Together with our community, partners, and stakeholders, we are working towards a future where we describe the ideal state or ultimate goal.</p>
                </div>
                <div className="row mb-5">
                    <video src={aboutVideo} className="video-fluid " muted loop autoPlay></video>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
