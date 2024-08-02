
import './App.css';
import { useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import 'typed.js'
import '@splidejs/splide/dist/css/splide.min.css';
import axios from 'axios';
import { ReactTyped } from "react-typed";
import './App.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function App() {
  const id = 123; 
  const [selectedCategory, setSelectedCategory] = useState('1'); // All 

  const [datas, setDatas] = useState({
    clients: [],
    slidercoinone: [],
    countcoinone: [],
    servicescategory: [],
    services: [],
    Testimonials: [],
    technology: [],
    contacts:[]
  });

  const skewUpRef = useRef([]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredServices = selectedCategory === '1'
  ? datas.services
  : datas.services.filter(service => service.category_id === selectedCategory);


useEffect(() => {
  window.scrollTo(0, 0);
  axios.get('https://luluthattukada.com/coinone/api.php')
    .then(res => {
      setDatas(res.data)
      console.log(res.data);
    })
}, [])

  return (
    <body>
    {/* Start Header */}
    <Header />
    {/* End Header */}

    {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" class="hero d-flex align-items-center ">
        <video
          autoPlay muted loop id="bg-video">
          <source src={require('../src/images/coinone 1.mp4')} type="video/mp4" />
        </video>
        <div className="video-overlay">
          <div className="carousel-inner">
            {datas.slidercoinone.map((slide, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center" style={{ marginTop: '280px' }}>
                      <h1 data-aos="fade-up">We develop <br /> <span ><ReactTyped strings={["smart and scalable solution", "custom Mobile & Web App"]} typeSpeed={120} backSpeed={50} loop={true} /></span></h1>
                      <h2 ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }} >{slide.description}</h2>
                      <div data-aos="fade-up" data-aos-delay="800">
                        <a href='#services' type="button" style={{ fontSize: '14px' }} class="btn btn-outline-light btn-lg mx-2">Our Services<i className="bi bi-arrow-right mx-1"></i></a>


                  <Link to={'/contact'}>  <button type="button" style={{ fontSize: '14px' }} class="btn btn-dark btn-lg ">Get in touch<i className="bi bi-envelope mx-1"></i></button></Link>    



                      </div>
                    </div>
               
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>

<p id="about"></p>


      {/* <!-- End Hero --> */}

      <main id="main" >
        <section  class="bg-light paddingtop80" >
   <div class="container features_mbg" data-aos="fade-up" data-aos-delay="100">
            <div class="row flex-row-reverse">
              <div class="col-md-12 col-lg-9 features_box_bg">
                <div class="row  ">
                  <div class="features_text" >
                    <h3 className='font-bold text-dark ' ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }}>Why choose Coinone Global Solution ?</h3>
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
                <img src={'https://coinoneglobal.com/coinone/static/media/2023-10-26.3388e941412e4732e8a2.jpg'} class="img-fluid rounded" alt="best web designers in kerala
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
                <Link to={`/services/mobile`}>
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
                <Link to={`/services/crm`}>
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
               <Link to={`/services/restaurant`}> <a href="#"> <div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >
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
                <Link to={`/services/temple`}>
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
                <Link to={`/services/boutique`}>
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

              <Link to={`/services/retail`}><a href=""><div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >   
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

<Link to={`/services/billing`}><a href=""><div class="service-box text-left wow fadeIn" data-wow-delay=".3s" >   
    <div class="icon icon-shape lazyloaded">
    <img src="https://img.icons8.com/fluency/48/billing-machine.png" />
     
    </div>
     <h5 ref={(el) => {
if (el && !skewUpRef.current.includes(el)) {
skewUpRef.current.push(el);
}
}}>Billing and Invoicing</h5>
    <p>We are the best Application software companies in Cochin which provide custom Billling and Invoice services..</p>
  </div>

  </a>
  </Link> 
</div>
                     </div> 
                     </div> 
                     </section>


<p id="testimonials"></p>

                     <section  class="testimonials paddingtop80">
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




<p id='works'></p>

<section  class="services paddingtop80"   >
          <div className="container" >
            <div class="section-title" ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }} >
              <h2 style={{ color: '#fff' }}>Works</h2>
            
            </div>

            <div className="row">
              <div className="col-md-3 p-0">




                <div className="scroll" style={{ overflow: 'scroll', height: '655px' }}>
                  <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <div
                      className={`col-md-12 col-lg-12 align-items-stretch mb-5 mb-lg-0 p-3 ${selectedCategory === 'All' ? '' : ''}`}
                      id="v-pills-home-tab"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                      onClick={() => handleCategoryClick('All')}
                    >

                    </div>
                    {datas.servicescategory.map(category => (
                      <div
                        key={category.id}
                        className={`col-md-12 col-lg-12 align-items-stretch mb-5 mb-lg-0 pb-3 pt-0 `}
                        role="tab"

                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <div className={`icon-box text-center aos-animate ${selectedCategory === category.id ? 'icon-color' : ''}`} data-aos="fade-up" data-aos-delay={200} onMouseOver={() => setSelectedCategory(category.id)}>
                          {/* <div className="icon"></div> */}

                          <div className="title"><i className={category.icon}></i>{category.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>



              </div>

              <div className="col-md-9">
                <div className="tab-pane fade show active shadow rounded  p-1" role="tabpanel">
                  <h4 className="text-center mb-4  ">{selectedCategory === 'All' ? 'All Services' : datas.servicescategory.find(cat => cat.id === selectedCategory)?.none}</h4>
                  <div className="row portfolio">
                    {filteredServices.map(service => (
                      <div key={service.id} className="col-lg-6 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                          <img src={`/coinone/${service.image}`} className="img-fluid" alt={service.name} />
                          <div className="portfolio-info">
                            <h4>{service.name}</h4>
                            <div className="portfolio-links">
                            

<a href={`/coinone/${service.image}`} data-gallery="portfolioGallery" className="portfolio-lightbox" title={service.name}>
                                <i className="bx bx-plus"></i>
                              </a>
                              <a href={service.link} target='_blank' title="More Details">
                                <i className="bx bx-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
</section>
<Footer />
</main>












      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>





    </body>
  );
}

export default App;
