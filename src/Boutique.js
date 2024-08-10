import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import Slider from 'react-slick';
import $ from 'jquery'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from './Header';
import Footer from './Footer';
function Boutique() {

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
         <h2 style={{color:'#fff'}}>Boutique Management system</h2>
           
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
                        <h2 style={{color:'#000'}} >BOUTIQUE MANAGEMENT SYSTEM</h2>
                        <p >Mobile apps are making a change in the way millions of people live, work, and conduct their business. With a customer-centric architecture, WebCastle is the most trusted mobile app development Company in Kochi. WebCastle delivers high-quality mobile app development services to startups as well as enterprise clients. Our bunch of experienced and professional mobile app developers designs smooth and seamless mobile applications according to your requirements, which provide you an edge over the competition. WebCastle Media is an expert in delivering high-performance and scalable enterprise mobile apps in Android and iOS
                       
                        </p>
                        
                       
                    </div>
                    <div className="col-md-6">
                        <div className="slider-container">
                            <Slider arrows={false} {...settings}>

                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique inventory system.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique.png')} alt="" />
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

export default Boutique