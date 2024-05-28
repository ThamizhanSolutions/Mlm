import { FaPlay } from "react-icons/fa";
import matrix1 from "../Assets/Images/matrix1.jpg"
import matrix2 from "../Assets/Images/matrix2.jpg"
import matrix3 from "../Assets/Images/matrix3.jpg"
import Unilevel from "./Unilevel";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

let Matrix=()=>{

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return(
        <div>
             <div style={{backgroundColor:"rgb(25,25,25)"}}>
           <div className="container">
            <div className="row text-center  ">
                <h1 className="binaryTitle mt-4" data-aos="fade-in">Matrix Plan</h1>
            </div>
            <div className="row text-center binarySubTitle mt-3">
                <p>Matrix plans can offer benefits such as simplicity in organization and potentially greater teamwork among <br /> distributors due to the forced structure. However, they also have limitations, such as the potential for <br /> limited income growth beyond a certain point, as distributors can only have a set number of frontline <br /> distributors.</p>
            </div>
            <div class="row mt-3 ">
            <div class="col-md-4 mb-5">
                <div class="card cardBackground" data-aos="fade-up">
                    <img src={matrix1} class="card-img-top" alt="Card image 1"/>
                    <div class="card-body cardBody">
                        <h5 class="card-title text-center videoCardTitle">#1 Demo Video</h5>
                        <p class="card-text text-center videoCardSubTitle">Benifits of Matrix Plan</p>
                    </div>
                    <div className="overlay"></div>
                    <span class="video-icon"><FaPlay /></span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card cardBackground" data-aos="fade-down">
                    <img src={matrix2} class="card-img-top" alt="Card image 2"/>
                    <div class="card-body cardBody">
                        <h5 class="card-title text-center videoCardTitle">#2 Demo Video</h5>
                        <p class="card-text text-center videoCardSubTitle">What is Matrix plan ?</p>
                    </div>
                    <div className="overlay"></div>
                    <span class="video-icon"><FaPlay /></span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card cardBackground" data-aos="fade-up">
                    <img src={matrix3} class="card-img-top" alt="Card image 3"/>
                    <div class="card-body cardBody">
                        <h5 class="card-title text-center videoCardTitle">#3 Demo Video</h5>
                        <p class="card-text text-center videoCardSubTitle">Matrix Investment Management ?</p>
                    </div>
                    <div className="overlay"></div>
                    <span class="video-icon"><FaPlay /></span>
                </div>
            </div>
        </div>
           </div>
            
        </div>
        <Unilevel/>
        </div>
    )
}
export default Matrix