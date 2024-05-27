import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "../Assets/Css/Business.css";
import busniess1 from "../Assets/Images/busniess1.png";
import busniess2 from "../Assets/Images/busniess2.png";
import busniess3 from "../Assets/Images/busniess3.png";
import busniess4 from "../Assets/Images/busniess4.png";
import busniess5 from "../Assets/Images/busniess5.png";
import busniess6 from "../Assets/Images/busniess6.png";

const cards = [
    {
      title: "Crypto product services",
      description: "Our crypto plans usually offer a cryptocurrency product or service. This could be a new cryptocurrancy coin, a trading platform, amining coin, a trading platform, amining operation, or some other crypto-related service.",
      image: busniess1,
    },
    {
      title: "Analyze the risk",
      description: "There are significant risks associaated with our crypto plans. The valye of cryptocurrencies can be highly volatile, and there have been numerous cases of MLM crypto schemes turning out to be scams or ponzi schemes.",
      image: busniess2,
    },
    {
      title: "Componsation structure",
      description: "Our crypto plans have complex compensation structures. They often involve multiple levels of commissions, bounses, and rewards based on the sales or investment avtivities of the participants and their downlines.",
      image: busniess3,
    },
    {
      title: "Regulatory Concern",
      description: "Our crypto plans often operate in a regulatory gray area. Depending on the jurisdiction, they may be subject to refulations goverining securites, investments, or pyramid schemes. Many countries have issued warnings or taken legal action against MLM crypto schemes.",
      image: busniess4,
    },
    {
      title: "Investment Component",
      description: "Our crypto plans require participants to invest money to join the program or purchase products. These investments are often tired to promises of high returns or future profits from the cryptocrrency product or service.",
      image: busniess6,
    },
    {
      title: "Requirment",
      description: "Our schemes heavily rely on recruitment. Participants are encouraged to recruit others to join the program as distributors or investors. They earn commissions or boneses based on the sales made by their recruits or their recruit's recruits (downline).",
      image: busniess5,
    },
];

let Business = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="card-section businessBackground">
            <div className="container">
                <h2 className="text-center mb-5 pt-4 section-title" data-aos="fade-in">
                    Our <span className="busniess">Business</span> Plans
                </h2>
                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-md-4 mb-4" key={index} data-aos="fade-left">
                            <div className="card busniessCard h-100">
                                <div className="card-body busniessCardBody">
                                    <h5 className="card-title text-center busniessCardTitle">{card.title}</h5>
                                    <p className="card-text busniessCardDescription">{card.description}</p>
                                </div>
                                <img src={card.image} className="card-img-bottom" alt={card.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Business;
