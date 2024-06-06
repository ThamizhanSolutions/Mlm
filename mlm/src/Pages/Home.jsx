import React from "react";
import Services from "../Components/Service";
import Whychoose from "../Components/Whychoose";
import Features from "../Components/Features";
import Business from "../Components/Business";
import Faq from "../Components/Faq";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Homepage(){
    return(
        <div>
         <Nav/>
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