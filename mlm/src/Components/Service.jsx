// import React from "react";
// import "../Assets/Css/Service.css";
// import ServiceProductData from "../Assets/Product/Servicedata"
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// function Services(){

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//     return(
//        <div className="container-fluid services-bg">
//         <h1 className="Services pt-5">Our <span>Services</span></h1>
    
//         <div className="row row-cols-lg-3 row-cols-mg-3 row-cols-sm-3 row-cols-2 mt-5 ">
//         {ServiceProductData.map((data) => {
//               return (
//                 <div  className="col pb-4 h-40 d-flex justify-content-around ">
//         <h1 className="Services pt-5" data-aos="fade-in">Our <span>Services</span></h1>
//         <div className="row row-cols-lg-3 row-cols-mg-3 row-cols-sm-3 row-cols-2 mt-5">
//         {ServiceProductData.map((data) => {
//               return (
//                 <div  className="col pb-4 h-40 d-flex justify-content-around" data-aos="fade-right">
//                     <div  class="card card_services ">
//                         <div className="circle" >
//                       <img
//                       style={{height:"65px",objectFit:"contain"}}
//                         class="img-fluid "
//                         src={data.productImag}
                        
//                         alt=""
//                       />

//                       <p className="change">{data.productcontent}</p>
//                        </div>
//                       <p className="product" > {data.productName}</p>
                     
                       
                      
                   
//                       <p > {data.productName}</p>
//                     </div>
//                   </div>
//               );
//             })}
//         </div>
//        </div>
//         </div>
//         </div>
//     )
// }
// export default Services


import React, { useEffect } from "react";
import "../Assets/Css/Service.css";
import ServiceProductData from "../Assets/Product/Servicedata";
import AOS from "aos";
import "aos/dist/aos.css";
import Whychoose from "./Whychoose";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container-fluid services-bg">
      <h1 className="Services pt-5" data-aos="fade-in">
        Our <span>Services</span>
      </h1>

      <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-2 mt-5">
        {ServiceProductData.map((data, index) => (
          <div key={index} className="col pb-4 h-40 d-flex justify-content-around">
            <div className="card card_services" data-aos="fade-right">
              <div className="circle">
                <img
                  style={{ height: "65px", objectFit: "contain" }}
                  className="img-fluid"
                  src={data.productImag}
                  alt=""
                />
                <p className="change">{data.productcontent}</p>
              </div>
              <p className="product">{data.productName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;