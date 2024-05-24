import React from "react";
import "../Assets/Css/Service.css";
import ServiceProductData from "../Assets/Product/Servicedata"
import Featuresdata from "../Assets/Product/Featuresdata";
function Services(){
    return(
       <div className="container-fluid services-bg">
        <h1 className="Services pt-5">Our <span>Features</span></h1>
        <div className="row row-cols-lg-3 row-cols-mg-3 row-cols-sm-3 row-cols-2 mt-5">
        {Featuresdata.map((data) => {
              return (
                <div  className="col pb-4 h-40 d-flex justify-content-around">
                    <div  class="card card_services ">
                        <div className="circle" >
                      <img
                      style={{height:"65px",objectFit:"contain"}}
                        class="img-fluid "
                        src={data.img}
                        
                        alt=""
                      />
                       </div>
                      <p > {data.Featurename}</p>
                     
                       
                      
                   
                    </div>
                  </div>
              );
            })}
        </div>
       </div>
    )
}
export default Services