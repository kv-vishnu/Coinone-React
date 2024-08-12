import React from 'react'
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import { useState,useEffect,useRef } from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import $ from 'jquery'
function Services() {

  const { id } = useParams();

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
      const [activeTab, setActiveTab] = useState(id);

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
         <h2 style={{color:'#fff'}}>Services</h2>
           
         </div>
      </div>
   </div>


  <div>
<div className="container">

<section>

<Tab.Container id="left-tabs-example" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="crm">CRM Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="erp">ERP Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="web">Web Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mobile">Mobile Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="restaurant">Restaurant Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="temple">Temple Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="boutique">Boutique Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="retail">Retail Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="billing">Billing & Invoice</Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="crm">
              {/* crm */}
              <div className="row">
                    <div className="col-md-12 erp">
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
                    <div className="col-md-12 mt-4 mb-4">
                        <div className="slider-container">
                            <Slider arrows={false} {...settings}>
                            <div>
                                          <img className='rounded img-fluid' src={require('../src/images/crm.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique1.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique2.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/Oracle-ERP-Dashboard-Screenshot.png')} alt="" />
                                      </div>
                                      
                            </Slider>
                        </div>

                    </div>
                </div>
                {/* crm */}
            </Tab.Pane>
            <Tab.Pane eventKey="erp">
              {/* Erp */}
              <div className="row">
                          <div className="col-md-12 erp">
                              <h2 style={{color:'#000'}} >ERP DEVELOPMENT</h2>
                              <p >Enterprise resource planning (ERP) is business process management software that allows an organization to use a system of integrated applications to manage the business and automate many back office functions related to technology, services and human resources.We Enterprise resource planning (ERP) is the integrated management of main business processes, often in real-time and mediated by software and technology</p>  
                          </div>
                          <div className="col-md-12 mt-4 mb-4">
                              <div className="slider-container">
                                  <Slider arrows={false} {...settings}>

                                  <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique4.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique3.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/erp1.webp')} alt="" />
                                      </div>
                                     
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/erp2.png')} alt="" />
                                      </div>
                                      
                                  </Slider>
                              </div>

                          </div>
                      </div>
                      {/* Erp */}
            </Tab.Pane>
            <Tab.Pane eventKey="web">
              {/* Web */}
              <div className="row">
                          <div className="col-md-12 erp">
                              <h2 style={{color:'#000'}} >WEB DEVELOPMENT</h2>
                              <p >Our team of experienced designers and developers will work with you to create a website that is both visually appealing and functional. We will take the time to understand your needs and goals, and we will create a website that meets your specific requirements Our team of experienced designers and developers will work with you to create a website that is both visually appealing and functional. We will take the time to understand your needs and goals, and we will create a website that meets your specific requirements <br />We offer a wide range of web design and development services in Kochi, including:
                             <br /> <br />
                                <li>Web Designing</li>
                                <li>Web Development</li>
                                <li>Web Hosting</li>
                                <li>Content Management Services(CMS)</li>
                               
                              </p> 
                          </div>
                          <div className="col-md-12 mt-4 mb-4">
                              <div className="slider-container">
                                  <Slider arrows={false} {...settings}>
                                      <div>
                                          <img className='rounded img-fluid' src={'https://luluthattukada.com/coinone/assets/img/portfolio/netlife.png'} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={'https://luluthattukada.com/coinone/assets/img/portfolio/omaglobal.png'} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={'https://luluthattukada.com/coinone/assets/img/portfolio/syswares.png'} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/flowares.png')} alt="" />
                                      </div>
                                  </Slider>
                              </div>
                          </div>
                      </div>
                      {/* Web */}
            </Tab.Pane>
            <Tab.Pane eventKey="mobile">
              {/* Mobile */}
              <div className="row">
                          <div className="col-md-12 erp">
                              <h2 style={{color:'#000'}} >MOBILE DEVELOPMENT</h2>
                              <p >Mobile apps are making a change in the way millions of people live, work, and conduct their business. With a customer-centric architecture, WebCastle is the most trusted mobile app development Company in Kochi. WebCastle delivers high-quality mobile app development services to startups as well as enterprise clients. Our bunch of experienced and professional mobile app developers designs smooth and seamless mobile applications according to your requirements, which provide you an edge over the competition. WebCastle Media is an expert in delivering high-performance and scalable enterprise mobile apps in Android and iOS
                             
                              </p>  
                          </div>
                          <div className="col-md-12">
                              <div className="slider-container">
                                  <Slider arrows={false} {...settings}>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/mobile1.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/thodupuzha.png')} alt="" />
                                      </div>
                                      <div>
                                      <img className='rounded img-fluid' src={require('../src/images/mobile2.png')} alt="" />
                                      </div>
                                      
                                  </Slider>
                              </div>
                          </div>
                      </div>
                      {/* Mobile */}
            </Tab.Pane>
            <Tab.Pane eventKey="restaurant">
              {/* Restaurant */}
              <div className="row">
                    <div className="col-md-12 erp">
                        <h2 style={{color:'#000'}} >RESTUARANT POS SYSTEM</h2>
                        <p >Restaurant billing software is a vital tool used to manage the billing process in restaurants. It can track sales, inventory, table orders, KOT, and more. A good restaurant billing software helps you solve recurring challenges in production, kitchen operations, decision-making, customer retention, and financial management. Having restaurant billing software in a restaurant will help simplify all the business operations and improve the customer experience.
                            <br /> <br />
                            <li>Multi Outlet Configuration</li>
                            <li>Offline/Online Working Mode</li>
                            <li> Barcoding</li>  
                        </p>
                    </div>
                    <div className="col-md-12">
                        <div className="slider-container">
                            <Slider arrows={false} {...settings}>
                            <div>
                                          <img className='rounded img-fluid' src={require('../src/images/res1.png')} alt="" />
                                      </div>
                                     
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/bar-pos.png')} alt="" />
                                      </div>
                            </Slider>
                        </div>

                    </div>
                </div>
                {/* Restaurant */}
            </Tab.Pane>
            <Tab.Pane eventKey="temple">
              {/* Temple */}
              <div className="row">
                          <div className="col-md-12 erp">
                              <h2 style={{color:'#000'}} >TEMPLE MANAGEMENT</h2>
                              <p >Online Temple  Management Software is a web-based application that automates the charitable trusts that run and maintain temple organizations. The challenges addressed include integrating modules to manage donations, devotees’ database, and festivals. The software is built to be an easy-to-use interface and the navigation is simple. We have also integrated modules to generate relevant reports.
                             
                              </p> 
                          </div>
                          <div className="col-md-12">
                              <div className="slider-container">
                                  <Slider arrows={false} {...settings}>
                                  <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique5.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique4.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/temple1.webp')} alt="" />
                                      </div>
                                      
                                  </Slider>
                              </div>
                          </div>
                      </div>
              {/* Temple */}
            </Tab.Pane>
            <Tab.Pane eventKey="boutique">
              {/* Boutique */}
              <div className="row">
                    <div className="col-md-12 erp">
                        <h2 style={{color:'#000'}} >BOUTIQUE MANAGEMENT</h2>
                        <p >Mobile apps are making a change in the way millions of people live, work, and conduct their business. With a customer-centric architecture, WebCastle is the most trusted mobile app development Company in Kochi. WebCastle delivers high-quality mobile app development services to startups as well as enterprise clients. Our bunch of experienced and professional mobile app developers designs smooth and seamless mobile applications according to your requirements, which provide you an edge over the competition. WebCastle Media is an expert in delivering high-performance and scalable enterprise mobile apps in Android and iOS
                       
                        </p>
                    </div>
                    <div className="col-md-12 mt-4 mb-4">
                        <div className="slider-container">
                            <Slider arrows={false} {...settings}>
                            <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique.png')} alt="" />
                                </div>

                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique1.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique2.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique3.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique4.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique5.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/teresa.png')} alt="" />
                                </div>
                              
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* Boutique */}
            </Tab.Pane>
            <Tab.Pane eventKey="retail">
              {/* Retail */}
              <div className="row">
                    <div className="col-md-12 erp">
                        <h2 style={{color:'#000'}} >RETAIL MANAGEMENT</h2>
                        <p >A retail management system (RMS) is a platform that combines several useful tools to aid in running a retail store, such as inventory management and point of sale (POS). As a retail business, you can't afford to lose stock or write-off unsold goods. A retail management system can take the pain away
                        </p>   
                    </div>
                    <div className="col-md-12">
                        <div className="slider-container">
                            <Slider arrows={false} {...settings}>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique1.png')} alt="" />
                                </div>
                                <div>
                                    <img className='rounded img-fluid' src={require('../src/images/boutique3.png')} alt="" />
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
                {/* Retail */}
            </Tab.Pane>
            <Tab.Pane eventKey="billing">
              {/* Billilg */}
              <div className="row">
                          <div className="col-md-12 erp">
                              <h2 style={{color:'#000'}} >BILLING AND INVOICE</h2>
                              <p >

                              An invoice or bill is an important written document that indicates the sale or supply by one business to another business or consumer. It contains information about the particular sale transaction, such as buyer's details, quantity, value, tax, and payment terms
                             
                              </p>            
                          </div>
                          <div className="col-md-12">
                              <div className="slider-container">
                                  <Slider arrows={false} {...settings}>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique5.png')} alt="" />
                                      </div>
                                      <div>
                                          <img className='rounded img-fluid' src={require('../src/images/boutique4.png')} alt="" />
                                      </div>
                                      
                                  </Slider>
                              </div>

                          </div>
                      </div>
                      {/* Billing */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </section>
            
        </div>
  </div>
       
    </div>


        
        <Footer />
    
    </>
  )
}
export default Services
