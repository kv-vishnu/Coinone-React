import React from 'react'
import { useRef,useCallback } from 'react';
import Slider from "react-slick";
import $ from 'jquery'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { gsap } from "gsap";
import SplitType from 'split-type';
import Erp from './Erp';
import Header from './Header';
import Footer from './Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";
function About() {

  
    const [data, setData] = useState(null);
 
    const el = useRef(null);
    const typedInstance = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('1'); // All 
  
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    gsap.registerPlugin(ScrollTrigger);
  
   
    const skewUpRef = useRef([]);
  
    const addAnimation = useCallback(() => {
      skewUpRef.current.forEach((textInstance) => {
        const text = new SplitType(textInstance, {
          types: 'lines, words',
          lineClass: 'word-line',
        });
  
        const line = textInstance.querySelectorAll('.word-line');
        const word = textInstance.querySelectorAll('.word');
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: textInstance,
            start: 'top 85%',
            end: 'top 85%',
            onComplete: () => {
              textInstance.classList.remove('skew-up');
            },
          },
        });
  
        tl.set(textInstance, { }).from(word, {
          y: '100%',
          skewX: '-6',
          duration: 2,
          stagger: 0.03,
          ease: 'expo.out',
        });
      });
    }, []);
  
    useEffect(() => {
      
      addAnimation();
  
      const handleResize = () => {
        if (window.innerWidth >= 992) {
          addAnimation();
        }
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [addAnimation]);

    const API_URL = 'https://luluthattukada.com/coinone/api.php'
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return {
          clients: [],
          slidercoinone: [],
          countcoinone: [],
          servicescategory: [],
          services: [],
          testimonials: [],
          technology: []
        };
      }
    };
  
    const [datas, setDatas] = useState({
      clients: [],
      slidercoinone: [],
      countcoinone: [],
      servicescategory: [],
      services: [],
      Testimonials: [],
      technology: []
    });
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

    
  
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 650 && !isScrolled) {
          setIsScrolled(true);
        } else if (scrollTop <= 650 && isScrolled) {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isScrolled]);
  
    
    // useEffect(() => {
    //   if (datas && datas.slidercoinone && el.current) {
    //     const strings = datas.slidercoinone.map(slide => slide.title); // Extract strings from slidercoinone
  
    //     // Destroy the previous instance if it exists
    //     if (typedInstance.current) {
    //       typedInstance.current.destroy();
    //     }
  
    //     // Create a new instance of Typed.js
    //     typedInstance.current = new Typed(el.current, {
    //       strings: strings,
    //       typeSpeed: 130,
    //       backSpeed: 50,
    //       loop: true,
    //     });
    //   }
  
    //   // Cleanup on component unmount or when datas changes
    //   return () => {
  
    //     if (typedInstance.current) {
    //       typedInstance.current.destroy();
    //     }
    //   };
    // }, [datas]); 
  
    // Dependency array includes datas to run this effect when datas changes
  
  
    // Handle category click
    const handleCategoryClick = (categoryId) => {
      setSelectedCategory(categoryId);
    };
  
  
  
    const filteredServices = selectedCategory === '1'
      ? datas.services
      : datas.services.filter(service => service.category_id === selectedCategory);
  
  
    useEffect(() => {
      axios.get('https://luluthattukada.com/coinone/api.php')
        .then(res => {
          setDatas(res.data)
          console.log(res.data);
        })
    }, [])
  
  
  
  
  
  
  
    const options = {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      autoplay: true,
      pauseOnHover: false,
      resetProgress: false,
      arrows: false,
      pagination: true,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        640: {
          perPage: 1,
        },
      },
    };

  return (
    <>
    <Header />


<div className='erp-background ' style={{marginTop:'-34px'}} >

<div class="inner-top-img-clr">
      <div class="inner-top-img     ">
         <div class="inner-top-img-text section-title">
         <h2 style={{color:'#fff'}}>About Us</h2>
           
         </div>
      </div>
   </div>



</div>




        <section  class="bg-light paddingtop80" >
          {/* <div class="container">
            <div class="row">

           

              <div class="col text-center slogantext">
                <h1 data-aos="fade-up" class="font-weight-bold slogan">Our company develops <strong>websites and
                  apps</strong> <br />bringing your brilliant ideas to life.As a team,we aim to
                  produce<br /><strong>high-quality goods</strong> and deliver them on schedule..</h1>
                <h4 class="text-green" data-aos="fade-up" data-aos-delay="400"></h4>



                




              </div>
            </div>
          </div> */}

          <div class="container features_mbg" >
            <div class="row flex-row-reverse">
              <div class="col-md-12 col-lg-9 features_box_bg">
                <div class="row  ">
                  <div class="features_text" >
                    <h3 className='font-bold text-dark ' ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Why Choose Coinone Global Solution ?</h3>
                    <p>Coinone Global Solution is committed to connecting businesses across the world towards digitalisation highlighting the knowledge of skills. We, the ideal digital agency, provide bespoke solutions to meet all your digital needs. Coinone aims to expand, innovate, or enhance businesses and propel your projects to new heights. Coinone holds the power for better experiences.
                    We as a Team, ensure to develop products in high standards keeping the technology in mind and you receive consistent quality deliverable. 
Coinone always make sure to deliver the best quality products keeping the customer satisfaction up to mark.

Coinone always make sure to deliver the best quality products keeping the customer satisfaction up to mark.
                    </p>
                  </div>
                  
                  <div class="col-md-6 features_box f_box1" >

                    <h3> 12 +</h3>
                    <p> Years of Experiences </p>
                  </div>
                  <div class="col-md-6 features_box f_box2">
                    <h3> 1000 +</h3>
                    <p>  Projects Completed </p>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-12 col-lg-3  bubbles_anmtn_bg">
                <img src={require('../src/images/2023-10-26.jpg')} class="img-fluid rounded" alt="best web designers in kerala
                  "/>

              </div>
            </div>
          </div>
        </section>
<p id="services"></p>
    <section  class="page-service--list lazyloaded paddingtop80 " >
          <div class="container">
          <div className="section-title"  ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }} >
          <h2 className=''>our Services</h2>
          
        </div>


            <div class="row "  >
              <div class="col-md-6 col-lg-4 box-gap"  >
                <Link to={`/services/erp`}>
                <a href="#">
                  <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                    <div class="icon icon-shape lazyloaded"> <img alt="icon" className='img-fluid lazyloaded' src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/60/external-erp-digital-transformation-parzival-1997-outline-color-parzival-1997.png"  />
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>ERP Development</h5> <p >We Enterprise resource planning (ERP) is the integrated management of main business processes</p>
                  </div>
                </a>
                </Link>
              </div>


              <div class="col-md-6 col-lg-4 box-gap"  >
                <Link to={`/services/web`}>
                <a href="#">
                  <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                    <div class="icon icon-shape lazyloaded"> <img alt="icon" className='img-fluid lazyloaded' src="https://img.icons8.com/color/48/code.png"  />
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Web Development</h5> <p >We design top-quality websites that will be a sure asset for your business and brand concepts.</p>
                  </div>
                </a>
                </Link>
              </div>

              <div class="col-md-6 col-lg-4 box-gap"  >
                <Link to={'/services/mobile'}>
                <a href="#">
                  <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                    <div class="icon icon-shape lazyloaded"> <img alt="icon" className='img-fluid lazyloaded' src="https://img.icons8.com/external-vectorslab-flat-vectorslab/60/external-33-web-design-and-development-vectorslab-flat-vectorslab.png"  />
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Mobile App Development</h5> <p > Most trusted among  Mobile App Development Company in Kerala</p>
       
                  </div>
                </a>
                </Link>
              </div>



              <div class="col-md-6 col-lg-4 box-gap">
                <Link to={'/services/crm'}>
                <a href="#">
                  <div data-wow-delay=".3s" class="service-box text-left wow fadeIn lazyloaded" >
                    <div class="icon icon-shape lazyloaded">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/external-crm-media-agency-flaticons-lineal-color-flat-icons-2.png"/>
                  
                    </div>
                    <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>CRM Development</h5>
                    <p>We develop top-quality Crm Development Services that will be a sure asset for your business and brand concepts.</p>
                     </div> 
                     </a> 
                     </Link>
                     </div> 
                    
           
             
            
              <div class="col-md-6 col-lg-4 box-gap">
               <Link to={'/services/restaurant'}> <a href="#"> <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                  <div class="icon icon-shape lazyloaded">
                    <img alt="icon" src="https://img.icons8.com/color/60/pos-terminal--v1.png" />
                  </div>
                  <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Restuarant POS System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Restuarant Pos System services..</p>
                </div>
                </a>
                </Link>
              </div>

              <div class="col-md-6 col-lg-4 box-gap">
                <Link to={'/services/temple'}>
                <a href="#"> <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                  <div class="icon icon-shape lazyloaded">
                  <img src="https://img.icons8.com/color-glass/48/temple.png"/>
                  
                  </div>
                  <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Temple Management System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Temple Management  services..</p>
                </div>
                </a>
                </Link>
              </div>
              <div class="col-md-6 col-lg-4 box-gap">
                <Link to={'/services/boutique'}>
                <a href="#"> <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
                  <div class="icon icon-shape lazyloaded">
                  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/external-boutique-hotel-management-flaticons-lineal-color-flat-icons.png" />
                   
                  </div>
                  <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Boutique Management System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Boutique Management services..</p>
                </div>
            
                </a>
                </Link>
              </div>

              <div class="col-md-6 col-lg-4 box-gap">

              <Link to={'/services/retail'}><a href=""><div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >   
                  <div class="icon icon-shape lazyloaded">
                  <img src="https://img.icons8.com/fluency/60/imac-settings.png" />
                   
                  </div>
                   <h5 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Retail Management System</h5>
                  <p>We are the best Application software companies in Cochin which provide custom Retail Management services..</p>
                </div>
              
                </a>
                </Link> 
              </div>
              <div class="col-md-6 col-lg-4 box-gap">

<Link to={'/services/billing'}><a href=""><div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >   
    <div class="icon icon-shape lazyloaded">
    <img src="https://img.icons8.com/fluency/48/billing-machine.png" />
     
    </div>
     <h5 ref={(el) => {
if (el && !skewUpRef.current.includes(el)) {
skewUpRef.current.push(el);
}
}}>Billing and Invoicing</h5>
    <p>We are the best Application software companies in Cochin which provide custom Retail Management services..</p>
  </div>

  </a>
  </Link> 
</div>
                     </div> 
                     </div> 
                     </section>

                     <section id="testimonials" class="testimonials padding25">
          <div class="container">

            {/* <div class="section-title" data-aos="fade-up">
              <h2>Our Clients</h2>

            </div> */}

            <div class="clients-slider swiper" >
            <div class="section-title" ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }} >
              <h2 >Our Clients</h2>
              
            </div>
              <div class="client-slider">
                <div class="client-slide-track ">
                

                  {datas.clients.map((items, index) => (
                    <div className='client-slide logo-wrapper'>
                      <img src={`/coinone/${items.image}`} alt="" />
                    </div>
                  ))}




                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>

          </div>
        </section>


        <Footer />
    
    
    </>
  )
}

export default About