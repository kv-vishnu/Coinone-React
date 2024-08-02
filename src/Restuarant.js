import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import Slider from 'react-slick';
import $ from 'jquery'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from './Footer';
import Header from './Header';
function Restuarant() {
    
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
         <h2 style={{color:'#fff'}}>Restuarant Pos System</h2>
           
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
                        <h2 style={{color:'#000'}} >RESTUARANT POS SYSTEM</h2>
                        <p >Restaurant billing software is a vital tool used to manage the billing process in restaurants. It can track sales, inventory, table orders, KOT, and more. A good restaurant billing software helps you solve recurring challenges in production, kitchen operations, decision-making, customer retention, and financial management. Having restaurant billing software in a restaurant will help simplify all the business operations and improve the customer experience.
                            <br /> <br />
                            <li>Multi Outlet Configuration</li>
                            <li>Offline/Online Working Mode</li>
                            <li> Barcoding</li>  
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="slider-container">
                            <Slider arrows={false} {...settings}>
                            <div>
                                          <img className='rounded img-fluid' src={require('../src/images/res1.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/restaurant-billing.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/bar-pos.png')} alt="" />
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

export default Restuarant