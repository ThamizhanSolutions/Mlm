import React from "react";
import "../Assets/Css/Service.css";
import ServiceProductData from "../Assets/Product/Servicedata"
import Featuresdata from "../Assets/Product/Featuresdata";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";
import Business from "./Business";

function Features(){

  useEffect(() => {
    AOS.init({
        duration: 2000,
        easing: "ease-in-out",
        once: true,
    });
}, []);

    return(
       <div className="container-fluid services-bg">
        <h1 className="Services pt-5" data-aos="fade-in">Our <span>Features</span></h1>
        <div className="row row-cols-lg-3 row-cols-mg-3 row-cols-sm-3 row-cols-2 mt-5">
        {Featuresdata.map((data) => {
              return (
                <div  className="col pb-4 h-40 d-flex justify-content-around" data-aos="fade-left">
                    <div  class="card card_services ">
                        <div className="circle" >
                      <img
                      style={{height:"65px",objectFit:"contain"}}
                        class="img-fluid "
                        src={data.img}
                        
                        alt=""
                      />
                       </div>
                      <p className="product"> {data.Featurename}</p>
                     
                       
                      
                   
                    </div>
                  </div>
              );
            })}
        </div>
       </div>
    )
}
export default Features