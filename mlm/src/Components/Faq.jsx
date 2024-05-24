import React from 'react';
import '../Assets/Css/Faq.css'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import image from "../Assets/Images/accordionImage.png";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";


const Faq = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className='faqBackground'>
            <div className="container">
                <div className="row text-center">
                    <h1 className='mt-5 faqTitle' data-aos="fade-in">Frequently <span className='askedQuestions'>Asked Questions</span></h1>
                </div>
                <div className="row d-flex justify-content-center">
                    <img src={image} alt="" className="img-fluid faqImage mt-5"  />
                </div>
            </div>
            <div className="container  mt-5 pb-5" data-aos="fade-right">
                <div id="accordion" className="accordion accordionBox">
                    <div className="card" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                        <div className="card-header" id="headingOne" >
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                    What are the steps that you need to take in order to start my own Crypto company?
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body accordionContent" >
                                <hr />
                                We pride ourselves on providing excellent services to each of our clients to ensure that their busniess is successful.
                            </div>
                        </div>
                    </div>
                    <div className="card" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                    Are you able to offer gaurantee of any kind?
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body accordionContent" >
                                <hr />
                               A free demo, document, and 3 months of free support are provided with  our MLM script for client convenience and to assist in any customization that may be required
                            </div>
                        </div>
                    </div>
                    <div className="card" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                    The length of time that I will be able to use a software after I buy it?
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body accordionContent" >
                                <hr />
                                As customer of our MLM software, you can use it for an unlimited period of time without any additional fees or renewals.
                            </div>
                        </div>
                    </div>
                    <div className="card" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn btn-link">
                                    What is the expected timeframe for delivery from your end after I make the payment
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div className="card-body accordionContent" >
                                <hr />
                                The download link will be sent to you within 24 hours on working days (Monday-Friday). if it is the weekend then the script will be sent to you within 48 hours (Saturday-Sunday)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
