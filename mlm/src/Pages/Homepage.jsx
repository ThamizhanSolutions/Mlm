import React from "react";
import Services from "../Components/Service";
import Whychoose from "../Components/Whychoose";
import Features from "../Components/Features";
import Business from "../Components/Business";
import Faq from "../Components/Faq";
import Banner2 from "../Components/Banner2";
import Navbar2 from "../Components/Navbar2";
function Homepg(){
    return(
        <div>
            <Navbar2/>
            <Banner2/>
        <Services/>
        <Whychoose/>
        <Features/>
        <Business/>
        <Faq/>
    
        </div>      
    )
}
export default Homepg