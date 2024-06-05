import Navbar2 from "./Navbar2"
import "../Assets/Css/Contact.css"
import image from "../Assets/Images/contact.png"
import location from "../Assets/Images/loc.png"
import mail from "../Assets/Images/mail.png"
import phone from "../Assets/Images/phn.png"
import Footer from "./Footer"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

let Contact=()=>{

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return(
       <div className="contactBackground">
            <Navbar2/>
         <div className="contactBlock">

            <div className="container" data-aos="fade-in">
                <div className="row text-center">
                    <h1 className="contactTitle mt-5">Contact Us</h1>
                </div>
                <div className="row text-center">
                    <p className="contactSubTitle">We are here for you! How can we help?</p>
                </div>
            </div> 

    <div className="container mt-5">
           <div class="row text-center">
            <div class="col-md-6" data-aos="fade-right">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control mt-5 contactInput" id="input1" placeholder="Enter your Name"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control mt-3 contactInput" id="input2" placeholder="Enter your Email"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control mt-3 contactInput" id="input3" placeholder="Enter your Feedback"/>
                    </div>
                    <button type="submit" class="contactButton mt-3 contactInput">Submit</button>
                </form>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center mt-3" data-aos="fade-left">
                <img src={image} class="img-fluid" alt="Placeholder Image"/>
            </div>
        </div>
    </div>
    <div className="container text-center mt-5" data-aos="fade-up">
        <div className="row">
            <div className="col"><img src={location} alt="" className="img-fluid" style={{height:"40px"}}/></div>
            <div className="col"><img src={mail} alt="" className="img-fluid" style={{height:"40px"}}/></div>
            <div className="col"><img src={phone} alt="" className="img-fluid" style={{height:"40px"}}/></div>
        </div>
        <div className="row">
            <div className="col"><h5 className="contactSubTitle mt-3">Location</h5></div>
            <div className="col"><h5 className="contactSubTitle mt-3">Email</h5></div>
            <div className="col"><h5 className="contactSubTitle mt-3">Phone</h5></div>
        </div>
        <div className="row">
            <div className="col"><h5 className="contactSecondSubTitle mt-2" >Madurai</h5></div>
            <div className="col"><h5 className="contactSecondSubTitle mt-2" >madurai08@gmail.com</h5></div>
            <div className="col"><h5 className="contactSecondSubTitle mt-2" >+91 9876543210</h5></div>
        </div>
    </div>
    </div>

    <Footer/>
       </div>
    )
}
export default Contact