import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import services from './Services';
const Footer = () => {
const setActiveTab= '';
  const currentUrl = window.location.href;
  const urlSegments = currentUrl.split('/');
  const lastSegment = urlSegments.pop() || urlSegments.pop(); 

  const changeServicesTab = (service) => {
    setActiveTab(service);
  };

  return (
    <div>


{ lastSegment != 'contact' && (
        <section>
        <div class="container aos-init aos-animate" >
        <div class="connect-box">
        <div class="section-title"><h2>Got any questions or doubts ? </h2></div>
        <div className='row p-5' style={{ background: '#e9ecef', borderRadius: '10px' }}>
                <div className='col-md-8'>
    <p>Contact us now or just fill few details. You can expect a quick reply from our team.</p>
                </div>
                <div className='col-md-4' >
                <Link style={{float:'right'}} to={'/contact'}> <button class="btn btn-outline-dark btn-3d"><i class="fa-solid fa-phone mx-2"></i> Get In Touch</button> </Link>
                </div>
                </div>
                
               
            </div>
        </div>
      </section>
      )}

    
  
  <section id="contact" class="contact  pb-0" style={{ background: '#000' }}>
            <div class="container">
  
              {/* <div class="section-title" data-aos="fade-up">
                <h2>Contact Us</h2>
              </div> */}
  
              <div class="row">
  
                <div class="col-lg-3 col-md-6" >
                  <div class="contact-about">
                    <h3><a href="index.html"><img src="/coinone/assets/img/header-logo.svg" /></a></h3>
                    <p>
  
  
                    </p>
                    <div class="social-links">
                      <a href="https://x.com/coinoneglobal" class="twitter"><i class="bi bi-twitter"></i></a>
                      <a href="https://www.facebook.com/coinoneglobal/" class="facebook"><i class="bi bi-facebook"></i></a>
                      <a href="#" class="instagram"><i class="bi bi-whatsapp"></i></a>
                      <a href="https://www.linkedin.com/company/coinoneglobal-solutionspvtltd/about/" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-6 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                  <div class="info">
                    <h3 style={{ fontWeight: '700', fontSize: '15px', color: '#fff' }}>Address</h3>
                    <div className='p-0'>
                      <i class="fa fa-bank"></i>
                      <p>Thapasya Building,
                        Phase 1,4th floor,Infopark TBC
                        Room No 11,Infopark
                        Kochi P.O Kakkanad,682042,Kerala</p>
                    </div>
  
                    <div className='p-0'>
                      <i class="fa fa-envelope"></i>
                      <p>info@coinoneglobal.com</p>
                    </div>
  
                    <div className='p-0'>
                      <i class="fa fa-phone"></i>
                      <p>9995205444</p>
                    </div>
  
                  </div>
                </div>
  
  
  
  
<div class="col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
    <h3 style={{ fontWeight: '700', fontSize: '15px', color: '#fff' }}> Services </h3>
<ul className='p-0 foot'>
    <Link to={'/services/crm'} onClick={()=> changeServicesTab('crm') } style={{display:'contents'}}> <li class="foot"><a className='foot' >CRM Development</a></li></Link>
    <Link to={'/services/erp'} onClick={()=> changeServicesTab('erp') } style={{display:'contents'}}>  <li class="foot"><a className='foot' > ERP Development</a></li></Link>
    <Link to={'/services/web' } onClick={()=> changeServicesTab('web') } style={{display:'contents'}}><li class=""><a className='foot' > Web Development </a></li></Link>
    <Link to={'/services/mobile'} onClick={()=> changeServicesTab('mobile') } style={{display:'contents'}}><li class="foot"><a className='foot'> Mobile Application </a></li></Link>
    <Link to={'/services/restaurant'} onClick={()=> changeServicesTab('restaurant') } style={{display:'contents'}}>  <li class="foot"><a className='foot' > Restaurant Management</a></li></Link>
    <Link to={'/services/temple'} onClick={()=> changeServicesTab('temple') } style={{display:'contents'}}>  <li class="foot"><a className='foot' > Temple Management</a></li></Link>
    <Link to={'/services/boutique'} onClick={()=> changeServicesTab('boutique') } style={{display:'contents'}}>  <li class="foot"><a className='foot' > Boutique Management</a></li></Link>
    <Link to={'/services/retail'} onClick={()=> changeServicesTab('retail') } style={{display:'contents'}}>  <li class="foot"><a className='foot' > Retail Management </a></li></Link>
    <Link to={'/services/billing'} onClick={()=> changeServicesTab('billing') } style={{display:'contents'}}>  <li class="foot"><a className='foot' > Billing and Invoicing </a></li></Link>
</ul>
</div>

  
  
              </div>
  
            </div>
            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer" class="mt-4">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 text-lg-left text-center">
                    <div class="copyright">
                      &copy; Copyright <strong>Coinone</strong>. All Rights Reserved
                    </div>
                    {/* <div class="credits">
                      Designed by <a href="">Coinone</a>
                    </div> */}
                  </div>
                  
                </div>
              </div>
            </footer>
            {/* <!-- End Footer --> */}
  </section>
  <a href="https://wa.me/+918078782730" class="float" target="_blank"><i class="fab fa-whatsapp my-float"></i></a>
  </div>
  );
};

export default Footer;
