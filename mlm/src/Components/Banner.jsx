import React from "react";
import "../Assets/Css/Banner.css"
import Banimg from "../Assets/Images/OBJECTS.png"
const Banner=()=>{
    return(
        <>
        <div className="container-fluid">
            <h1 className="crypto p-2 ">We Provide <span>Crypto</span> Knowledge</h1>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1, row-cols-1 p-3 d-flex justify-content-around">
                <div className="col col-title">
                    <h5>Do you want to make your own Crypto Company?</h5>
                    <p>There's a lot of innovation happening in the cryptocurrency <br></br>
                    space, and starting a company in this field could be an <br></br>
                    exciting venture. It would require a strong understanding of <br></br>
                    blockchain technology, cryptography, finance, and <br></br>
                    regulatory compliance, among other things. If you're <br></br>
                    considering starting a crypto company, It's important to <br></br>
                    throughly research the market, identify a niche or problem <br></br>
                    to solve, and assemble a talented team to bring your vision to <br></br>
                    life.
                    
                    </p>

                </div>
                <div className="col col-title">
                   <img src={Banimg} className="img-fluid" alt=""/>
                    
                    </div>
            </div>
        </div>
        </>
    )
}
export default Banner;