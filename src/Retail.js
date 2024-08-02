import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import Slider from 'react-slick';
import $ from 'jquery'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from './Header';
import Footer from './Footer';
function Retail() {
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


<div className='erp-background ' style={{marginTop:'-34px'}}>

<div class="inner-top-img-clr">
      <div class="inner-top-img     ">
         <div class="inner-top-img-text section-title">
         <h2 style={{color:'#fff'}}>Retail Management System</h2>
           
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
                        <h2 style={{color:'#000'}} >RETAIL MANAGEMENT SYSTEM</h2>
                        <p >A retail management system (RMS) is a platform that combines several useful tools to aid in running a retail store, such as inventory management and point of sale (POS). As a retail business, you can't afford to lose stock or write-off unsold goods. A retail management system can take the pain away
                        </p>
                        
                       
                    </div>
                    <div className="col-md-6">
                        <div className="slider-container">
                            <Slider arrows={false} {...settings}>

                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/retail.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/retail1.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/retail2.png')} alt="" />
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

export default Retail