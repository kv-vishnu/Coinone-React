import React from 'react'
import { useState,useEffect,useRef } from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery'
import './Style.css'
function Crm() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        adaptiveHeight: true,
          cssEase: "linear"
      };
      const [isMobile, setIsMobile] = useState(false);

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
  const headerRef = useRef(null);

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


<div className='erp-background' style={{ marginTop:'-34px'}}>

<div class="inner-top-img-clr">
      <div class="inner-top-img     ">
         <div class="inner-top-img-text section-title">
         <h2 style={{color:'#fff'}}>CRM Development</h2>
           
         </div>
      </div>
   </div>


  <div>
<div className="container in-p">
            <div class="section-title">
              

            </div>
            {/* <h2 className='text-center mb-4'>Enterprise Resource Planing (ERP)</h2> */}
            <div className="col-12">
                {/* <h2 >Enterprise Resource Planing (ERP)</h2> */}
                <div className="row">



                    <div className="col-md-6 erp">
                        <h2 style={{color:'#000'}} >CRM DEVELOPMENT</h2>
                        <p >Customer relationship management (CRM) applications, on the other hand, were created to enhance front-office functions including sales, marketing, and service and support. CRM Suite is designed to help businesses to meet the overall goals of customer relationship management in the following business processes
                            <br /> <br />
                            <li>Customer data and Customer interaction</li>
                            <li>Access business information</li>
                            <li> Automate sales</li>
                            <li> Track leads and Customer support</li>
                            <li> Clients and contacts</li>
                            <li>Support vendor / partner relationships</li>
                        </p>
                        
                       
                    </div>
                    <div className="col-md-6">
                        <div className="slider-container">
                            <Slider  {...settings}>

                            <div>
                                          <img className='rounded img-fluid' src={require('../src/images/retail.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/Oracle-ERP-Dashboard-Screenshot.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={'https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/1a19aba1-b8ca-4d03-812e-5d9e400c2f95.png?ixlib=rb-1.0.0&ch=Width%2CDPR&auto=format&w=750&h=450&q=50'} alt="" />
                                      </div>


                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  </div>
       
    </div>


        
        <Footer />
    
    </>
  )
}
Crm.displayName = 'CRM';
export default Crm