import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Services from "./Components/Service";
import Whychoose from "./Components/Whychoose";
import Features from "./Components/Features"
import Business from "./Components/Business";
import Faq from "./Components/Faq";

let App=()=>{
    return(
        <div>
        <Nav/>
        <Banner/>
        <Services/>
        <Whychoose/>
        <Features/>
        <Business/>
        <Faq/>
        </div>      
    )
}
export default App