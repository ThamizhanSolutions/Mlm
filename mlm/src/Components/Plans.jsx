
import Navbar2 from "./Navbar2";
import image from "../Assets/Images/plans.png";
import tick from "../Assets/Images/tick.png"
import "../Assets/Css/Plans.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";


let Plans = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="plansBackground">
            <Navbar2 />
            <div className="container text-center" data-aos="fade-in">
                <div className="row">
                    <h1 className="plansTitle mt-5">Our Pricing Plans</h1>
                </div>
                <div className="row">
                    <p className="plansSubTitle mt-3">Pick an account plan that fits your workflow</p>
                </div>
                <div className="row">
                    <img src={image} alt="" className="img-fluid mt-3" />
                </div>
            </div>
            <div className="container d-flex justify-content-center mt-5" data-aos="fade-right">
                <div className="col-md-6">
                    <div className="card position-relative">
                        <div className="card-body plansCardBody">
                            <input type="radio" id="radioButton" name="radioGroup" className="top-left-radio"/>
                            <div className="mt-2">
                                <h5 className="card-title mb-3 text-center plansSubTitle">Basic</h5>
                                <h5 className="card-title mb-3 text-center plansTitle">Binary Plan</h5>
                                <h5 className="card-title mb-3 text-center plansTitle">$ 199</h5>
                            </div>
                            <ul className="plansList">
                                <p className="plansSubTitle">Binary plans often have various bonuese and incentives</p>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> View list of products.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Commission shared on Sale price.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Bonus based on the number of referrals.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Binary pairubg capping 1:1 & capping mechanism features</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Processed withdrawal report.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Commission shared on Sale price</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Processed withdrawal report.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Users can add a user using the E-pin system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center mt-5" data-aos="fade-left">
                <div className="col-md-6">
                    <div className="card position-relative">
                        <div className="card-body plansCardBody">
                            <input type="radio" id="radioButton" name="radioGroup" className="top-left-radio"/>
                            <div className="mt-2">
                                <h5 className="card-title mb-3 text-center plansSubTitle">Standard</h5>
                                <h5 className="card-title mb-3 text-center plansTitle">Matrix Plan</h5>
                                <h5 className="card-title mb-3 text-center plansTitle">$ 299</h5>
                            </div>
                            <ul className="plansList">
                                <p className="plansSubTitle">Matrix plans often have various bonuses and incentives.</p>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> User can view different wallet statement is very useful for MLM companies.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> In multilevel marketing, users can get level commissions.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> A drag-and-drop page and menu builder with full content management.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Uswrs can enjoy BV pair (1:1) commissions.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Both users and the company can earn genealogy commissions.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Each Multilevel user will get cash back only for purchased products.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Users of Multi-Level Marketing will be rewarded.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Our mail notification system providers users with all internal informations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center mt-5 mb-5" data-aos="fade-right">
                <div className="col-md-6">
                    <div className="card plansCard position-relative">
                        <div className="card-body plansCardBody">
                            <input type="radio" id="radioButton" name="radioGroup" className="top-left-radio"/>
                            <div className="mt-2">
                                <h5 className="card-title mb-3 text-center plansSubTitle">Premium</h5>
                                <h5 className="card-title mb-3 text-center plansTitle">Unilevel Plan</h5>
                                <h5 className="card-title mb-3 text-center plansTitle">$ 599</h5>
                            </div>
                            <ul className="plansList">
                                <p className="plansSubTitle">Unilevel plans often have various bonuses and incentives.</p>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> The sponsor gets 5% of the downlines pack purchase (managed in admin side).</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> User will get 5 level commissions. The admin can manage all commissions.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> After pack purchase user receives ROI (1% pack purchased), admin manages 1%.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> You will get a high ROI based on users choice of packages.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> We have a multi-level security system that is free from hackers and malware.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Several data can be loaded simultaneously into our database.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Open-source code script and can customize our Unilevel script based on your need.</li>
                                <li className="list-group-item plansSubTitleList"><img src={tick} alt="" className="img-fluid" style={{height:"20px"}}/> Users can add a user using the E-pin system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center mb-5">
                    <button className="plansButton">Buy Plans</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Plans;
