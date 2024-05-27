


import React from "react";
import Modal from 'react-bootstrap/Modal';
import { IoCloseSharp } from "react-icons/io5";
import "../Assets/Css/Login.css"
import { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Memberlogin(props){

 
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

    return(

        <div>
               {showFirstPopup && (
                    <Modal

         
         
         
                    {...props}
                    size="md"
                   background-color="red"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  
                   
                  >
                              <div className="row login-col" style={{backgroundColor:"grey"}}
                            
                              
                              >
                                 
                                  <div className="col ">
                          <div className="signup">
                               <h1> <span style={{color:"rgb(255 104 107) "}}> SIGN </span> IN</h1>
                               <button className="close" onClick={props.onHide}><IoCloseSharp style={{fontSize:"30px"}}/></button>
                          </div>
                          <div> 
                          <h6 className='text-center join'>Join with us to Improve your Own Company Business</h6>
                          
                               </div>
                                    <form className='fill mt-4 '>
                                      <div class="mb-4 ">
                                          <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email or Mobile number'/>
                                      </div>
                                      <div class="mb-3">
                                          <input type="password" class="form-control" placeholder='password'/>
                                      </div>
                                      <div className="text-end ">
                                        <a className="forgot-pswrd" onClick={handleContinue1}>Forgot Password?</a>
                                      </div>
                                    
                                      <button className='but my-4'>Sign in</button>
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
          <div className="row login-col" style={{backgroundColor:"grey"}}
        
          
          >
             
              <div className="col ">
      <div className="signup">
      <button className="close-back " onClick={handleBack}><MdArrowBackIos   style={{fontSize:"55px",color:"white"}}/></button>
           <h1> <span style={{color:"rgb(255 104 107) "}}> SIGN </span> UP</h1>
           <button className="close" onClick={props.onHide}><IoCloseSharp  style={{fontSize:"30px", color:"white"}}/></button>
      </div>
      <div> 
      <h6 className='text-center join'>Join with us to Improve your Own Company Business</h6>

           </div>
                <form className='fill mt-4 '>
                  <div class="mb-4 ">
                      <input  type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                  </div>
                  <div class="mb-4 ">
                      <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                  </div>
                  <div class="mb-4 ">
                      <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Mobile number'/>
                  </div>

                  
                  <div class="mb-3">
                      <input type="password" class="form-control" placeholder='Password'/>
                  </div>
                
                  <button className='but'>Sign in</button>
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
<div className="row login-col" style={{backgroundColor:"grey"}}
        
          
        >
           
            <div className="col ">
    <div className="signup">
    <button className="close-back " onClick={handleBack}><MdArrowBackIos   style={{fontSize:"55px",color:"white"}}/></button>
         <h1> <span style={{color:"rgb(255 104 107) "}}> Forgot </span> Password?</h1>
         <button className="close" onClick={props.onHide}><IoCloseSharp  style={{fontSize:"30px", color:"white"}}/></button>
    </div>
    <div> 
    <p className='text-center join'>Enter Your Email below to receive your password <br></br> reset instruction</p>

         </div>
              <form className='fill m-4 '>
                
                <div class="mb-4 ">
                    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
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
export default Memberlogin