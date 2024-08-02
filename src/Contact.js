import React from 'react'
import { useState,useEffect } from 'react';
import $ from'jquery';

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
function Contact() {
  

    const [isMobile, setIsMobile] = useState(false);
    const [name,setName]=useState('');
    const [successMessage,setSuccessMessage]=useState('');
    const [developmentType, setDevelopmentType] = useState('');
    const [email, setEmail] = useState('');
    const [phone,setPhone]=useState('');
    const [message,setMessage]=useState('');
const btnDisable= !(name && email && phone)

const userDetails = [{ name: name , email: email  , phone: phone  , developmentType : developmentType , message : message }];
//const userDetails = [{ name: 1 , email: 'param1' , phone: '7012713312' , developmentType : 'web' }];
const handleSubmit = (e) => {
  e.preventDefault();
    axios.post('https://luluthattukada.com/coinone/contacts.php', {
      userDetails: userDetails
    })
    .then(response => {
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        setSuccessMessage('');
    }, 3000);
      // console.log('success');
      // console.log(response.data);
    })
  .catch((error) => {
    console.error('Error:', error);
  });
};


    useEffect(() => {


      window.scrollTo(0, 0);
      // Handle mobile nav toggle click
      $('.mobile-nav-toggle').on('click', function () {
        setIsMobile(!isMobile);
      });
  
      // Handle link clicks in mobile view
      $('.nav-link.scrollto').on('click', function () {
        if (isMobile) {
          setIsMobile(false);
        }
      });
  
      // Cleanup function
      return () => {
        $('.mobile-nav-toggle').off('click');
        $('.nav-link.scrollto').off('click');
      };
    }, [isMobile]); // Dependency on isMobile
  
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50 && !isScrolled) {
          setIsScrolled(true);
        } else if (scrollTop <= 50 && isScrolled) {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isScrolled]);



  return (

    <>
    <Header />
   
      <div style={{marginTop:'-34px'}} >

      <div class="inner-top-img-clr" ><div class="inner-top-img">
        <div class="inner-top-img-text section-title"><h2 style={{color:'rgb(255, 255, 255)'}}>Contact Us</h2></div></div></div>
              <div className="container mt-5 mb-5">
                  
                  <div className="row">
                  { successMessage  && ( <div class="alert alert-success">{successMessage}</div> )}


                      <div className="col-lg-8 col-md-7 form-container">
                          <div>
                              <form onSubmit={handleSubmit} >
                                  <div className="row">
                                      <div className="col-md-6">
                                          <p>
                                             
                                              <input  name='name' value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder='Name'  />
                                          
                                          </p>
                                      </div>
                                      <div className="col-md-6">
                                          <p>
                                             
                                              <input name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email'  />
        
                                          </p>
                                      </div>
                                      <div className="col-md-6">
                                          <p>
                                             
                                              <input name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}  placeholder='Phone number' />
                                            
                                          </p>
                                      </div>
                                      <div className="col-md-6">
                                          <p>
                                             
                                              <select value={developmentType}  onChange={(e)=>{setDevelopmentType(e.target.value)}}  
       
        required>
                                                  
                                                  <option  value='ERP Development' >ERP Development</option>
                                                  <option value="CRM Development">CRM Development</option>
                                                  <option value="Web Development">Web Development</option>
                                                  <option value="Mobile Development">Mobile Development</option>
                                                  <option value="Restaurant Management">Restaurant Management</option>
                                                  <option value="Temple Management">Temple Management</option>
                                                  <option value="Boutique Management">Boutique Management</option>
                                                  <option value="Retail Management">Retail Management</option>
                                                  <option value="Billing & Invoice">Billing & Invoice</option>
                                              </select>
                                             
                                  
                                          </p>
                                      </div>
                                      <div className="col-md-12">
                                          <p><input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}  placeholder='Enter your requirements'/></p>
                                      </div>
                                      <div className="col-md-12">
                                          <p>
                                             
                                              <button type="submit" disabled={btnDisable}  className='btn btn-outline-dark btn-3d mt-3'>submit</button>
          
                                          </p>
                                      </div>
                                  </div>
                              </form>
                              {/* {message && <p>{message}</p>} */}
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-5 mb-5" style={{background: 'rgb(233, 236, 239)',borderRadius:'10px'}}>
                          <h4 className='text-center mt-3' style={{ fontWeight:'bold'}}>Office Address</h4>
                          <h5 className='mt-3' style={{ fontWeight:'bold'}}>Kochi</h5>
                          <p className='contact-details'>
                          Thapasya Building<br />
                          Phase 1 , 4th floor Infopark TBC<br />
                          Room No 11 , Infopark<br />
                          Kochi P.O Kakkanad<br />
                          682042,Kerala
                        </p>
                        <h5 className='mt-3' style={{ fontWeight:'bold'}}>Vazhithala</h5>
                        <p className='contact-details'>
                          Sreyas City Plaza , <br /> 
                          beside Thrikkekkunnu Sree Mahadeva Temple ,<br /> 
                          Vazhithala ,<br /> 
                          Kerala 685583
                        </p>
                      </div>
                  </div>
               

                  {/* <div className="col-lg-12 pt-3">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <label htmlFor="" className='contact-label'>Office Address</label>
                        <p className='contact-details'>
                          <span style={{fontWeight:'700'}}>Kochi:</span>
                          Thapasya Building,
                      Phase 1, <br />4th floor,Infopark TBC
                      <br />
                      Room No 11,Infopark
                      <br />
                      Kochi P.O Kakkanad
                      <br />682042,Kerala

                        </p>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-4">
                      <p className='contact-details'>
                          <span style={{fontWeight:'700'}}>Vazhithala:</span>
                          Sreyas City Plaza, <br /> beside Thrikkekkunnu Sree Mahadeva Temple,<br /> Vazhithala,<br /> Kerala 685583
                        </p>
                      </div>
                      <div className="col-lg-4">
                      <label htmlFor="" className='contact-label'>social media</label>
                      <div class="social-links"><a href="https://x.com/coinoneglobal" class="twitter"><i class="bi bi-twitter"></i></a><a href="https://www.facebook.com/coinoneglobal/" class="facebook"><i class="bi bi-facebook"></i></a><a href="#" class="instagram"><i class="bi bi-whatsapp"></i></a><a href="https://www.linkedin.com/company/coinoneglobal-solutionspvtltd/about/" class="linkedin"><i class="bi bi-linkedin"></i></a></div>
                      </div>
                    </div>
                  </div> */}
              </div>
          </div>

          <Footer />
          
          </>
  )
}

export default Contact