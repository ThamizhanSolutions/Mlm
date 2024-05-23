
import "../Assets/Css/Whychoose.css";
import image from "../Assets/Images/why.png";
import icon from "../Assets/Images/icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const reasons = [
  {
    title: "Flexibility",
    description: "We allows individuals to work on their own schedule, making it an attractive option for those seeking flexibility in their work.",
  },
  {
    title: "Income potential",
    description: "MLM offers the potential for significant income, especially if you're skilled at sales and networking. Successful MLM participants can earn substantial commissions and bonuses.",
  },
  {
    title: "Low Barrier to entry",
    description: "We usually requires a relatively small investment compared to other business ventures. This makes it accessible to a wide range of people who may not have large amounts of capital to invest.",
  },
  {
    title: "Opportunity for personal growth",
    description: "We involves building a team and developing leadership skills. This can provide valuable personal and professional development opportunities.",
  },
  {
    title: "Training and support",
    description: "Many MLM companies offer training programs and support to help their distributors succeed. This can be beneficial for individuals who are new to entrepreneurship or sales.",
  },
];

let Whychoose = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="whyCooseBackground">
      <div className="container whyCooseBackground">
        <h2 className="text-center mb-5 pt-4 whyTitle" data-aos="fade-in">
          Why <span className="chooseLetter">Choose</span> us?
        </h2>   
        <div className="row">
          <div className="col-md-4 text-center text-md-start" data-aos="fade-right">
            <img src={image} alt="Description of image" className="img-fluid" />
          </div>
          <div className="col-md-8" data-aos="fade-left">
            <div className="row">
              {reasons.map((reason, index) => (
                <div className="col-12 mb-3" key={index}>
                  <h2 className="whyHeading fw-semibold">
                    <img src={icon} alt="" height={40} /> {reason.title}
                  </h2>
                  <p className="chooseSubHeading fw-light">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
