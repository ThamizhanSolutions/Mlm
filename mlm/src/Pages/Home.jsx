import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Service";
import Whychoose from "../Components/Whychoose";
import Features from "../Components/Features";
import Business from "../Components/Business";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

function Homepage(){
    return(
        <div>
        <Banner/>
        <Services/>
        <Whychoose/>
        <Features/>
        <Business/>
        <Faq/>
        <Footer/>
    
        </div>      
    )
}
export default Homepage