import { FaPlay } from "react-icons/fa";
import uni1 from "../Assets/Images/inilevel1.jpg"
import uni2 from "../Assets/Images/unilevel2.jpg"
import matrix3 from "../Assets/Images/matrix3.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Footer from "./Footer";

let Unilevel=()=>{

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return(
        <div>
               <div style={{backgroundColor:"rgb(22,22,22)"}}>
           <div className="container">
            <div className="row text-center  ">
                <h1 className="binaryTitle mt-4"  data-aos="fade-in">Unilevel Plan</h1>
            </div>
            <div className="row text-center binarySubTitle mt-3">
                <p>A Unilevel compensation plan is a popukar structure used by many direct selling or multi-level marketing <br /> (MLM) companies to compensate their distributors.</p>
            </div>
            <div class="row mt-3   ">
            <div class="col-md-4 mb-5">
                <div class="card cardBackground"  data-aos="fade-down">
                    <img src={uni1} class="card-img-top" alt="Card image 1"/>
                    <div class="card-body cardBody">
                        <h5 class="card-title text-center videoCardTitle">#1 Demo Video</h5>
                        <p class="card-text text-center videoCardSubTitle">Benifits of Unilevel Plan</p>
                    </div>
                    <div className="overlay"></div>
                    <span class="video-icon"><FaPlay /></span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card cardBackground"  data-aos="fade-up">
                    <img src={uni2} class="card-img-top" alt="Card image 2"/>
                    <div class="card-body cardBody">
                        <h5 class="card-title text-center videoCardTitle">#2 Demo Video</h5>
                        <p class="card-text text-center videoCardSubTitle">What is Unilevel plan ?</p>
                    </div>
                    <div className="overlay"></div>
                    <span class="video-icon"><FaPlay /></span>
                </div> 
            </div>
            <div class="col-md-4">
                <div class="card cardBackground"  data-aos="fade-down">
                    <img src={matrix3} class="card-img-top" alt="Card image 3"/>
                    <div class="card-body cardBody">
                        <h5 class="card-title text-center videoCardTitle">#3 Demo Video</h5>
                        <p class="card-text text-center videoCardSubTitle">Unilevel Investment Management ?</p>
                    </div>
                    <div className="overlay"></div>
                    <span class="video-icon"><FaPlay /></span>
                </div>
            </div>
        </div>
           </div>
            
        </div>
        <Footer/>
        </div>
    )
}
export default Unilevel