import image from "../Assets/Images/VideoImage.png"
import "../Assets/Css/Video.css"
import Binary from "./Binary"
import Navbar2 from "./Navbar2"
let Videos=()=>{
    return(

<div className="videoBackground">
    <Navbar2/>

    <div class="container">
        <div class="row">
            <div class="col-md-6 ">
                <h1 className="mt-5 videosTitle"><span className="demo">Demo Videos</span> For Business ideas</h1>
                <h3 className="mt-3 videoSubTitle">Purpose of Demo Videos?</h3>
                <p className="mt-3 videoPara">We provide demo videos to showcase our products in action, <br />
                highlighting features, benifits, and use cases. These videos <br />
                help potential customers understand how the prodcut wokrs <br />
                and how it can solve thier problems. And providing training <br />
                and educational content to employees, customers, or partners. <br />
                They can explain complex processes, demonstrate <br />
                best practices, or onboard new users to a platform or <br />
                software.</p>
            </div>
            <div class="col-md-6">
                <img src={image} alt="Description of image" class="img-fluid mt-5"/>
            </div>
        </div>
    </div>
    <Binary/>
</div>
    )
}
export default Videos