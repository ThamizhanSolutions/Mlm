import React, { useEffect } from "react";
import "../Assets/Css/Binary.css";
import { FaPlay } from "react-icons/fa";
import binary1 from "../Assets/Images/binary1.jpg";
import binary3 from "../Assets/Images/binary3.jpg";
import Matrix from "../Components/Matrix";
import AOS from "aos";
import "aos/dist/aos.css";

let Binary = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    
    return (
        <div className="binaryBackground">
           <div className="container">
                <div className="row text-center">
                    <h1 className="binaryTitle mt-4" data-aos="fade-in">Binary Plan</h1>
                </div>
                <div className="row text-center binarySubTitle mt-3">
                    <p>In a binary plan, each distributor recruits and sponsors two new distributors, forming two "legs" or downlines. <br /> Commissions are typically based on the sales volume of the weaker leg, encouraging teamwork and <br /> balanced growth.</p>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4 mb-5">
                        <div className="card cardBackground" data-aos="fade-down">
                            <img src={binary1} className="card-img-top" alt="Card image 1" />
                            <div className="card-body cardBody">
                                <h5 className="card-title text-center videoCardTitle">#1 Demo Video</h5>
                                <p className="card-text text-center videoCardSubTitle">Benefits of Binary Plan</p>
                            </div>
                            <div className="overlay"></div>
                            <span className="video-icon"><FaPlay /></span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card cardBackground" data-aos="fade-up">
                            <img src={binary1} className="card-img-top" alt="Card image 2" />
                            <div className="card-body cardBody">
                                <h5 className="card-title text-center videoCardTitle">#2 Demo Video</h5>
                                <p className="card-text text-center videoCardSubTitle">What is Binary Plan?</p>
                            </div>
                            <div className="overlay"></div>
                            <span className="video-icon"><FaPlay /></span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card cardBackground" data-aos="fade-down">
                            <img src={binary3} className="card-img-top" alt="Card image 3" />
                            <div className="card-body cardBody">
                                <h5 className="card-title text-center videoCardTitle">#3 Demo Video</h5>
                                <p className="card-text text-center videoCardSubTitle">Binary Investment Management?</p>
                            </div>
                            <div className="overlay"></div>
                            <span className="video-icon"><FaPlay /></span>
                        </div>
                    </div>
                </div>
           </div>
           <Matrix />
        </div>
    );
};

export default Binary;
