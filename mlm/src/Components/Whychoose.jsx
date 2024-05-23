import "../Assets/Css/Whychoose.css"
import image from "../Assets/Images/why.png"
import icon from "../Assets/Images/icon.png"
let Whychoose=()=>{
    return(
        <div className="whyCooseBackground">
                    <div className="container  whyCooseBackground">
                    <h2 className="text-center mb-5 pt-4 whyTitle">Why <span className="chooseLetter">Choose</span> us?</h2>
                    <div className="row">
                        <div className="col-md-4 text-center text-md-start">
                        <img src={image} alt="Description of image" className="img-fluid " />
                        </div>
                        <div className="col-md-8 ">
                        <div className="row">
                            <div className="col-12 mb-3">
                             <h2 className="whyHeading fw-bold"> <img src={icon} alt="" height={40}/> Flexibility</h2>
                            <p className="chooseSubHeading fw-light">We allows individuals to work on their own schedule, making it an attractive option for those seeking flexibilty in their work</p>
                            </div>
                            <div className="col-12 mb-3">
                            <h2 className="whyHeading fw-bold">  <img src={icon} alt="" height={40}/> Income potential</h2>
                            <p className="chooseSubHeading fw-light">MLM offers the potential for significant income, especially if you're skilled at sales and networking. Successful MLM participants can earn substantial commisions and bounses.</p>
                            </div>
                            <div className="col-12 mb-3">
                            <h2 className="whyHeading fw-bold"> <img src={icon} alt="" height={40}/> Low Barrier to entry</h2>
                            <p className="chooseSubHeading fw-light">We usually requires a relatively small investment compared to other busniess ventures. This makes it accessible to a wide range of people who may not have large amounts of capital to invest.</p>
                            </div>
                            <div className="col-12 mb-3">
                            <h2 className="whyHeading fw-bold"> <img src={icon} alt="" height={40}/> Oppertunity for personal growth</h2>
                            <p className="chooseSubHeading fw-light">We involves building a team and developing leadership skills. This can provide valuable personal and professional development opportunities.</p>
                            </div>
                            <div className="col-12 mb-3">
                            <h2 className="whyHeading fw-bold">  <img src={icon} alt="" height={40}/> Training and support</h2>
                            <p className="chooseSubHeading fw-light">Many MLM companies offer training programs and support to help their distributors succes. This can be beneficial for indivduals who are new to enterpreneurship or sales.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
    )
}
export default Whychoose