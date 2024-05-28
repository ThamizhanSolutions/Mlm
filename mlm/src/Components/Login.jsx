


import React from "react";
import Modal from 'react-bootstrap/Modal';
import { IoCloseSharp } from "react-icons/io5";
import "../Assets/Css/Login.css"
import { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";



function Memberlogin(props)  {
 

  //Login
 const [logindata, setLoginData]=useState({
  email:"",
  password:"",
 });

 const handleLoginChange=(e)=>{
  const {name,value}=e.target;
  setLoginData((prevData)=>({
    ...prevData,
    [name]:value
  }))
 }

 const handleLoginSubmit=async(e)=>{
  e.preventDefault();
  try{
    const response= await axios.post("http://localhost:5000/Reglogin", logindata);
    const {success, message}=response.data;
    window.location.href = '/homepage'

    if(success){
  
      console.log("login success")
     
      
    }
    else{
      console.log(message)
    }
  }
  catch(error){
console.error("login error")
  }

  setLoginData({
    email:"",
    password:""
  })
 }




 //Registration
  const [registrationdata, setRegistrationData] = useState({
    username: "",
    email: "",
    contact: "",
    password: ""
  })

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

  }

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", registrationdata);
      console.log(response.data);
      alert(response.data.message)
    }
    catch (error) {
      console.log(error)

    }
    setRegistrationData({
      username: "",
      email: "",
      contact:"",
      password: ""
    })

  };




  const [showFirstPopup, setShowFirstPopup] = useState(true);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [showThirdPopup, setShowThirdPopup] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const handleContinue = () => {
    setShowFirstPopup(false);
    setShowSecondPopup(true);

    setShowBackButton(true);
  };
  const handleContinue1 = () => {
    setShowFirstPopup(false);
    setShowSecondPopup(false);
    setShowThirdPopup(true);
    setShowBackButton(true);
  };


  const handleBack = () => {
    setShowSecondPopup(false);
    setShowFirstPopup(true);
    setShowBackButton(false);
  };

  const handleBack1 = () => {
    setShowSecondPopup(true);
    setShowFirstPopup(false);
    setShowThirdPopup(false);
    setShowBackButton(false);
  };

  return (

    <div>
      {showFirstPopup && (
        <Modal




          {...props}
          size="md"
          background-color="red"
          aria-labelledby="contained-modal-title-vcenter"
          centered


        >
          <div className="row login-col" style={{ backgroundColor: "grey" }}


          >

            <div className="col ">
              <div className="signup">
                <h1> <span style={{ color: "rgb(255 104 107) " }}> SIGN </span> IN</h1>
                <button className="close" onClick={props.onHide}><IoCloseSharp style={{ fontSize: "30px" }} /></button>
              </div>
              <div>
                <h6 className='text-center join'>Join with us to Improve your Own Company Business</h6>

              </div>
              <form className='fill mt-4 'onSubmit={handleLoginSubmit}>
                <div class="mb-4 ">
                  <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email or Mobile number'
                    name="email"   value={logindata.email} onChange={handleLoginChange}
                    required
             
                   />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" placeholder='password'
                   name="password" value={logindata.password} onChange={handleLoginChange}
                   required  />
                </div>
                <div className="text-end ">
                  <a className="forgot-pswrd" onClick={handleContinue1}>Forgot Password?</a>
                </div>

                <button className='but my-4' type="submit">Sign in</button>
                <h6 className='text-center fw-semibold p-3 sign-a'>Don't have an account? <span><a onClick={handleContinue}>Sign Up</a></span></h6>
              </form>


            </div>
          </div>
        </Modal>

      )}

      {showSecondPopup && (



        <Modal




          {...props}
          size="md"
          background-color="red"
          aria-labelledby="contained-modal-title-vcenter"
          centered


        >
          <div className="row login-col" style={{ backgroundColor: "grey" }}


          >

            <div className="col ">
              <div className="signup">
                <button className="close-back " onClick={handleBack}><MdArrowBackIos style={{ fontSize: "55px", color: "white" }} /></button>
                <h1> <span style={{ color: "rgb(255 104 107) " }}> SIGN </span> UP</h1>
                <button className="close" onClick={props.onHide}><IoCloseSharp style={{ fontSize: "30px", color: "white" }} /></button>
              </div>
              <div>
                <h6 className='text-center join'>Join with us to Improve your Own Company Business</h6>

              </div>
              <form className='fill mt-4 'onSubmit={handleRegistrationSubmit}>
                <div class="mb-4 ">
                  <input type="username" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' 
                   name="username"   value={registrationdata.username} onChange={handleRegistrationChange}
                   required
                  />
                </div>
                <div class="mb-4 ">
                  <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'
                   name="email"   value={registrationdata.email} onChange={handleRegistrationChange}
                   required
                   />
                </div>
                <div class="mb-4 ">
                  <input type="number" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Mobile number'
                   name="contact"   value={registrationdata.contact} onChange={handleRegistrationChange}
                   required
                   />
                </div>


                <div class="mb-3">
                  <input type="password" class="form-control" placeholder='Password'
                   name="password"   value={registrationdata.password} onChange={handleRegistrationChange}
                   required
                   />
                </div>

                <button className='but' type="submit">Sign in</button>
                <h6 className='text-center fw-semibold p-3 sign-a'>Already have an account? <span><a onClick={handleBack}>Sign In</a></span></h6>


              </form>


            </div>
          </div>
        </Modal>





      )}
      {showThirdPopup && (

        <div className='container-fluid '>

          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <div className="row login-col" style={{ backgroundColor: "grey" }}


            >

              <div className="col ">
                <div className="signup">
                  <button className="close-back " onClick={handleBack}><MdArrowBackIos style={{ fontSize: "55px", color: "white" }} /></button>
                  <h1> <span style={{ color: "rgb(255 104 107) " }}> Forgot </span> Password?</h1>
                  <button className="close" onClick={props.onHide}><IoCloseSharp style={{ fontSize: "30px", color: "white" }} /></button>
                </div>
                <div>
                  <p className='text-center join'>Enter Your Email below to receive your password <br></br> reset instruction</p>

                </div>
                <form className='fill m-4 '>

                  <div class="mb-4 ">
                    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                  </div>





                  <button className='but'>Continue</button>


                </form>


              </div>
            </div>

          </Modal>

        </div>




      )}


    </div>
  )
}
export default Memberlogin; 