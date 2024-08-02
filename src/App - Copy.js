import logo from './logo.svg';
import './App.css';
import WOW from 'wowjs';
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'typed.js'
import Typed from 'typed.js';
import CountUp from 'react-countup';
// import Slider from 'react-slick';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import $ from 'jquery'
import axios from 'axios';
import { Link } from 'react-scroll';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import { useRef } from 'react';
// import $ from "jquery"

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);
  const el = useRef(null);
  const typedInstance = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('1');
  







const API_URL='https://luluthattukada.com/coinone/api.php'
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
    Testimonials:[],
    technology:[]
});




    useEffect(() => {
     fetchData().then(data => {
            console.log('Fetched data:', data); // Debug: Check fetched data
            setDatas(data);

            const strings = data.slidercoinone.map(slide => slide.title); // Extract strings from slidercoinone

            // Destroy the previous instance if it exists
            if (typedInstance.current) {
                typedInstance.current.destroy();
            }

            // Create a new instance of Typed.js
            typedInstance.current = new Typed(el.current, {
                strings: strings,
                typeSpeed: 100,
                backSpeed: 90,
                loop: true,
            });

            // Cleanup on component unmount or when datas changes
            return () => {
                if (typedInstance.current) {
                    typedInstance.current.destroy();
                }
            };
        });
    }, []);

// Handle category click
const handleCategoryClick = (categoryId) => {
  setSelectedCategory(categoryId);
};



const filteredServices = selectedCategory === '1'
? datas.services
: datas.services.filter(service => service.category_id === selectedCategory);


useEffect(()=>{
  axios.get('https://luluthattukada.com/coinone/api.php')
  .then(res=>{setDatas(res.data)
    console.log(res.data);
  })
},[])


// useEffect(() => {
//   fetchData().then(data => {
//       console.log('Fetched data:', data); // Debug: Check fetched data
//       setDatas(data);
//   });
// }, []);





  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  
  //     strings: ['smart and scalable Solutions', 'Custom, Mobile & Web Apps', 'application solution for all business needs'],
   
  //     typeSpeed: 100,
  //     backSpeed: 90,
  //     loop: true,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  // testimonials
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

  // useEffect(() => {
  //   $('.mobile-nav-toggle').on('click', function(e) {
  //     $('#navbar').toggleClass('navbar-mobile');
  //     $(this).toggleClass('bi-list bi-x');
  //   });

  //   $('.navbar .dropdown > a').on('click', function(e) {
  //     if ($('#navbar').hasClass('navbar-mobile')) {
  //       e.preventDefault();
  //       $(this).next('.dropdown-menu').toggleClass('dropdown-active');
  //     }
  //   });

  //   // Cleanup function
  //   return () => {
  //     // Remove event listeners
  //     $('.mobile-nav-toggle').off('click');
  //     $('.navbar .dropdown > a').off('click');
  //   };
  // }, []); // Empty dependency array ensures this runs once on component mount



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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



  useEffect(() => {
    // DOM is fully loaded here
    const handleMouseOver = function () {

      // alert('hiii')
      // Get the parent container of the hovered icon-box
      const parentContainer = $(this).closest('.nav-pills-custom',);


      // Remove icon-color class from all icon-box elements within the parent container
      parentContainer.find('.icon-box').removeClass('icon-color');

      // Add icon-color class to the hovered icon-box
      $(this).addClass('icon-color');
    };

    // Attach event listener to all icon-box elements
    $('.icon-box').on('mouseover', handleMouseOver);

    // Cleanup function to remove event listeners
    return () => {
      $('.icon-box').off('mouseover', handleMouseOver);
    };
  }, []);

//   useEffect(() => {
//     // Set all categories active on page reload
//     setSelectedCategory('All');

//     // Mouseover event handler
//     const handleMouseOver = function () {
//         // Get the category ID from the data attribute or another identifier
//         const categoryId = $(this).data('category-id');
        
//         // Update selectedCategory when mouseover happens
//         setSelectedCategory(categoryId);
//     };

//     // Attach mouseover event listener to all .icon-box elements
//     $('.icon-box').on('mouseover', handleMouseOver);

//     // Cleanup function to remove event listener
//     return () => {
//         $('.icon-box').off('mouseover', handleMouseOver);
//     };
// }, []); // Empty dependency array to run only once on mount







   // Empty dependency array means this runs once after the initial render


useEffect(()=>{
  axios.get('https://luluthattukada.com/coinone/fetches_data.php')
  .then(result=>{
    setData(result.data)
    console.log(result.data);
    console.log(data);
  })
  .catch(err=>console.log(err))
},[])

  return (
    <body>

      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container container-xl d-flex align-items-center justify-content-between">

          <div class="logo">
            {/* <!-- <h1><a href="index.html">Vesperr</a></h1>  --> */}
            <h1><a href="index.html"><img src="/coinone/assets/img/header-logo.svg" /></a></h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
      --> */}
          </div>
          {/* <nav id="navbar" className={`navbar ${isMobile ? 'navbar-mobile' : ''}`}>
      <ul>
        <li>
          <Link 
            className="nav-link scrollto" 
            to="hero" 
            smooth={true} 
            duration={500}
            offset={-100}
            onClick={() => setIsMobile(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            className="nav-link scrollto" 
            to="about" 
            smooth={true} 
            offset={-100}
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            About us
          </Link>
        </li>
        <li>
          <Link 
            className="nav-link scrollto" 
            to="services" 
            smooth={true} 
            offset={-100}
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            className="nav-link scrollto" 
            to="technology" 
            smooth={true} 
            duration={500}
            offset={-200}
            onClick={() => setIsMobile(false)}
          >
            Technology
          </Link>
        </li>
        <li>
          <Link 
            className="nav-link scrollto" 
            to="contact" 
            smooth={true} 
            duration={500}
            offset={50}
            onClick={() => setIsMobile(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <i 
        className={`bi ${isMobile ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} 
        onClick={() => setIsMobile(!isMobile)}
      ></i>
    </nav> */}

          <nav id="navbar" className={`navbar ${isMobile ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><a class="nav-link scrollto active" href="#hero" onClick={() => setIsMobile(false)}>Home</a></li>
              <li><a class="nav-link scrollto" href="#about" onClick={() => setIsMobile(false)}>About us</a></li>
              <li><a class="nav-link scrollto" href="#services" onClick={() => setIsMobile(false)}>Services</a></li>
              <li><a class="nav-link scrollto" href="#technology" onClick={() => setIsMobile(false)}>Technology</a></li>
            

              <li><a class="nav-link scrollto" href="#contact" onClick={() => setIsMobile(false)}>Contact</a></li>
            </ul>
       
            <i className={`bi ${isMobile ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}></i>
          </nav>
          {/* <!-- .navbar --> */}

        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="hero d-flex align-items-center">







        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          {/* <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
              {datas.slidercoinone.map((slide, index) => (
                <div className="row" key={index}>
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">We develop <span ref={el}></span></h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">{slide.description}</h2>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <a href="#"
                               className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                <span className='mx-1'>Our Services</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            <a href="#"
                               className="btn-get-started-none scrollto d-inline-flex align-items-center justify-content-center align-self-center mx-1">
                                <span className='mx-1'>Get in touch</span>
                                <i className="bi bi-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                        <img src={slide.image} className="img-fluid animated" />
                    </div>
                </div>
            ))}
                {/* <div class="row">
              
                         <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">





                      <h1 data-aos="fade-up">We develop <span ref={el}></span></h1>
                    <h2 data-aos="fade-up" data-aos-delay="400">We as a Team look forward to develop quality products and deliver on time.</h2>
                    <div data-aos="fade-up" data-aos-delay="800">
                      <a href="#"
                        class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                        <span className='mx-1'>Our Services</span>
                       
                        <i class="bi bi-arrow-right"></i>
                      </a>
                      <a href="#"
                        class="btn-get-started-none scrollto d-inline-flex align-items-center justify-content-center align-self-center mx-1">
                        <span className='mx-1' >Get in touch</span>

                        <i class="bi bi-envelope"></i>
                      </a>
                    </div>
                 
                    
                      </div>
                    
               
                   
                    
                  <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                    <img src="/coinone/assets/img/hero-img.png" class="img-fluid animated" alt="" />
                  </div>
                </div> */}
              </div>
            </div>


          </div>


        </div>



      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        <section id="about" class="bg-blue text-blue">
          <div class="container">
            <div class="row">
              <div class="col text-center slogantext">
                <h1 data-aos="fade-up" class="font-weight-bold slogan">Our company develops <strong>websites and
                  apps</strong> <br />bringing your brilliant ideas to life.As a team,we aim to
                  produce<br /><strong>high-quality goods</strong> and deliver them on schedule..</h1>
                <h4 class="text-green" data-aos="fade-up" data-aos-delay="400"></h4>


                
                {/* <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.id}: {item.name} ({item.email}) - {item.description}
          </li>
        ))}
      </ul> */}




            
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======= Slogan Section ======= --> */}

        {/* <!-- ======= Slogan Section ======= --> */}
        {/* <!-- ======= About Us Section ======= --> */}

        <section id="counts" class="counts">
          <div class="container" id="container">
          <div className="row">
            {datas.countcoinone.map((count, index) => (
                <div className="col-md-3 d-md-flex align-items-md-stretch" key={count.id}>
                    <div className="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0 count">
                        <div className="icon-boxes" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon">
                                <i className={count.icon}></i>
                                <CountUp end={parseInt(count.count)} duration={5}><span></span></CountUp>
                            </div>
                            <p className="description text-center" id="description">
                                <strong><b style={{ fontWeight: 'bold' }}>{count.title}</b></strong><br />
                                {count.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

            {/* <div class="row">


              <div class="col-xl-12 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                <div class="content d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-md-3 d-md-flex align-items-md-stretch">
                      <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0 count">
                        <div class="icon-boxes" data-aos="fade-up" data-aos-delay="100">
                          <div class="icon">


                            <i class="bi bi-emoji-smile"></i>
                            <CountUp end={50} duration={5}><span></span></CountUp>
                         
                          </div>
                          <p class="description text-center" id="description"> <strong> <b style={{ fontWeight: 'bold' }}>Happy
                            Clients</b> </strong><br /> Voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi,ng</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 d-md-flex align-items-md-stretch">
                      <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0 count ">
                        <div class="icon-boxes" data-aos="fade-up" data-aos-delay="100">
                          <div class="icon">
                            <i class="bi bi-journal-richtext"></i>
                            <CountUp end={85} duration={5}><span></span></CountUp>
                          </div>
                          <p class="description text-center"><strong><b style={{ fontWeight: 'bold' }}>Projects</b></strong>
                            <br /> Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 d-md-flex align-items-md-stretch">
                      <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0 count ">
                        <div class="icon-boxes" data-aos="fade-up" data-aos-delay="100">
                          <div class="icon">
                            <i class="bi bi-clock"></i>
                            <CountUp end={18} duration={5}><span></span></CountUp>
                          </div>
                          <p class="description text-center"><strong> <b style={{ fontWeight: 'bold' }}>Years of
                            experience</b></strong> Voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 d-md-flex align-items-md-stretch">
                      <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0 count">
                        <div class="icon-boxes" data-aos="fade-up" data-aos-delay="100">
                          <div class="icon">
                            <i class="bi bi-award"></i>
                            <CountUp end={10} duration={5}><span></span></CountUp>
                          </div>
                          <p class="description text-center"><strong> <b style={{ fontWeight: 'bold' }}>Awards</b></strong> <br />
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div> */}

          </div>
        </section>




        {/* <!-- section content --> */}


        <div class="section four">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="bg-block"></div>
                <div class="content-block contents">
                  <h2 class="h2">Coinone always make sure to deliver the best quality products keeping the customer
                    satisfaction up to mark.</h2>
                  <p class="p">We have designed and delivered multiple applications across the globe into different
                    verticals markets.</p>
                  <p class="btn-wrapper"><a href="our-services" class="btn btn-three">More</a></p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-6 product-list-block">
                <div class="content-block" style={{ marginTop: '34px' }}>
                  <div class="product-list-wrapper">
                    <h2 class="h2" style={{ textAlign: 'center' }}>We develop and design for the following vertical markets</h2>
                    <div class="block-wrapper">
                      <div class="blocks">
                        <ul>
                          <li> Distributor</li>
                          <li> Education</li>
                          <li> Food and beverage</li>
                          <li> Healthcare</li>
                          <li> Insurance</li>
                          <li> Legal</li>
                        </ul>
                      </div>
                      <div class="blocks">
                        <ul>
                          <li> Service Sector</li>
                          <li> Textiles</li>
                          <li> Transportation</li>
                          <li> Technology</li>
                          <li> Wholesale &amp; Retail</li>
                          <li> Manufacturing</li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End Counts Section --> */}

        {/* <!-- next section --> */}
        {/* color: #116299; font-size: 2rem; margin: auto; */}
        <section>
          <h2 class=" text-center pb-5" style={{ color: '#116299', fontSize: '2rem', margin: 'auto' }}>Product Highlight Advantage</h2>
          <div class="container">
            <div class="row">
              <div class="col-md-6 blocks">
                <ul>
                  <li className='p-1'>User friendly</li>
                  <li className='p-1'>Easy to Understand</li>
                  <li className='p-1'>Security enabled and Password Protected</li>
                  <li className='p-1'>Easy Menu Navigation</li>
                  <li className='p-1'>Web Apps works online and offline mode</li>
                  <li className='p-1'>Easy and Fast billing option equivalent to windows application</li>
                  <li className='p-1'>User controls for find and search , save, edit, delete, print etc</li>
                </ul>
              </div>
              <div class="col-md-6 blocks">
                <ul>
                  <li className='p-1'>  Accessible from anywhere in the globe with single point controls for all modules.</li>
                  <li className='p-1'>  System integration with external devices.</li>
                  <li className='p-1'>  Fully menu driven.</li>
                  <li className='p-1'>  Very easy to implement and servicing.</li>
                  <li className='p-1'> System alerts through SMS and E-mail.</li>
                  <li className='p-1'>  Tally Integration.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div class="section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>What we do as an App Development Company?</p>
            </div>
        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" class="services">
          <div class="container">
          <div class="section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>What we do as an App Development Company?</p>
            </div>


            <div class="py-5 header services" id="services">
              <div class="container py-4">
                <div class="row tab">
                  <div class="col-md-3 p-0">
                    <div class="scroll" style={{ overflow: 'scroll', height: '655px' }}>

                  



                      <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <div class="col-md-12 col-lg-12 align-items-stretch mb-5 mb-lg-0 p-3 " id="v-pills-home-tab"
                          data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home"
                          aria-selected="true">

                          <div class=" icon-box icon-color text-center" id="portfolio-flters" data-aos="fade-up"
                            data-aos-delay="100">
                            <div class="icon"><i class="bi bi-pc-display"></i></div>
                            <h4 class="title filter-active" data-filter="*"><a href="">All</a></h4>
                          </div>
                        </div>

                        <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0 p-3  " id="v-pills-home-tab"
                          data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-home"
                          aria-selected="true">
                          <div class="icon-box text-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon "><i class="bi bi-apple "></i></div>
                            <h4 class="title"><a href="" data-filter=".filter-app">Android & IOS App Development</a></h4>

                          </div>
                        </div>
                        <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0  p-3 " id="v-pills-home-tab"
                          data-toggle="pill"  href="#v-pills-messages" role="tab" aria-controls="v-pills-home"
                          aria-selected="true">
                          <div class="icon-box text-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon "><i class="bi bi-apple text-center"></i></div>
                            <h4 class="title" data-filter=".filter-web"><a href="">web design & Development</a></h4>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>


                  <div class="col-md-9 pt-3">
                
                    <div class="tab-content" id="v-pills-tabContent">
                      <div class="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel"
                        aria-labelledby="v-pills-home-tab">


                        <h2 class="text-center mb-4">All</h2>
                        <div class="row portfolio" id="portfolio" data-aos="fade-up" data-aos-delay="200">

                      
                          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>

             

                          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                     


                          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        

                          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                      
                          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                       
                          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                     
                          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                  

                          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab" data-filter=".filter-app" >
                        <h4 class="text-center mb-4">App development</h4>
                        <div class="row portfolio">
                          {/* <!-- image 1 --> */}
                          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- image 2 --> */}

                          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>

                          </div>

                          {/* <!-- image 3 --> */}

                          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>




                      </div>


                      <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab" data-filter=".filter-web">
                        <h4 class="text-center mb-4">web</h4>
                        <div class="row portfolio">
                          {/* <!-- image 1 --> */}
                          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- image 2 --> */}
                          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>


                          {/* <!-- image 3 --> */}

                          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                              <img src="/coinone/assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
                              <div class="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div class="portfolio-links">
                                  <a href="/coinone/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>



                      </div>


                    </div>
                  </div>
                </div>
              </div>









 



            </div>
          </div>



          <div className="container">


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
                        className={`col-md-12 col-lg-12 align-items-stretch mb-5 mb-lg-0 p-3 ${selectedCategory === category.id ? 'icon-color' : ''} `}
                        role="tab"
                        
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <div className={`icon-box text-center `} data-aos="fade-up" data-aos-delay={200} onMouseOver={() => setSelectedCategory(category.id)}>
                            <div className="icon"><i className={category.icon}></i></div>
                            <h4 className="title">{category.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        {/* <div className="scroll" style={{ overflow: 'scroll', height: '655px' }}>
    
            <div className="nav flex-column  nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div
                    className={`col-md-12  col-lg-12 align-items-stretch mb-5 mb-lg-0 p-3 ${selectedCategory === 'All' ? '' : ''}`}
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
                              className={` col-md-12 col-lg-12 align-items-stretch mb-5 mb-lg-0 p-3 ${selectedCategory === category.id ? '' : ''}`}
                              role="tab"
                              aria-controls={`v-pills-${category.name.toLowerCase().replace(/\s/g, '-')}`}
                              aria-selected={selectedCategory === category.id}
                              onClick={() => {handleCategoryClick(category.id)}}
                          >
                              <div className="icon-box text-center" data-aos="fade-up" data-aos-delay="200">
                                  <div className="icon"><i className={category.icon}></i></div>
                                  <h4 className="title">{category.name}</h4>
                              </div>
                          </div>
                      ))}
            </div>
        </div> */}
    </div>

    <div className="col-md-9">
        <div className="tab-pane fade show active shadow rounded bg-white p-5" role="tabpanel">
            <h4 className="text-center mb-4  ">{selectedCategory === 'All' ? 'All Services' : datas.servicescategory.find(cat => cat.id === selectedCategory)?.name}</h4>
            <div className="row portfolio">
                      {filteredServices.map(service => (
                          <div key={service.id} className="col-lg-4 col-md-6 portfolio-item">
                              <div className="portfolio-wrap">
                                  <img src={service.image} className="img-fluid" alt={service.name} />
                                  <div className="portfolio-info">
                                      <h4>{service.name}</h4>
                                      <div className="portfolio-links">
                                          <a href={service.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={service.name}>
                                              <i className="bx bx-plus"></i>
                                          </a>
                                          <a href="portfolio-details.html" title="More Details">
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
        {/* <!-- End Services Section --> */}



      



        <main >

          {/* <!-- Example 1 --> */}
          <div class="section-title" id='technology' data-aos="fade-up">
            <h2 >Technology</h2>
            <p>technologies that our business uses</p>
          </div>
          <ul class="example-2">
            <li class="icon-content">
              <a aria-label="Spotify" data-social="spotify">
                <div class="filled"></div>
                

                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"/> */}
                <img src='https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg' alt="" />
                {/* <i class="fa-brands fa-html5"style={{color:'#fc490b'}}></i> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="#e36d0d"
                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                </svg> */}
              </a>
              <div class="tooltip">HTML</div>
            </li>
            <li class="icon-content">
              <a aria-label="Pinterest" data-social="pinterest">
                <div class="filled"></div>
                <img src='https://seekvectors.com/files/download/02ea29b275684260b5a57a5799cd7e7f.jpg' alt="" />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMMp558ihNOVU07e7TPgMiIXEHB-Bcl5GQuOghq_zc89qXhYw6GluxC7A2Ghz090g4ik&usqp=CAU" alt="" /> */}
            
                {/* <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="#0959e1"
                    d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                </svg> */}
              </a>
              <div class="tooltip">CSS</div>
            </li>
            <li class="icon-content">
              <a aria-label="Dribbble" data-social="dribbble">
                <div class="filled"></div>
                <img src="https://thumbs.dreamstime.com/b/javascript-logo-editorial-illustrative-white-background-javascript-logo-editorial-illustrative-white-background-eps-download-208329460.jpg" alt=""  />
                {/* <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path fill="#e4c70c"
                    d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg> */}
              </a>
              <div class="tooltip">JAVASCRIPT</div>
            </li>
            <li class="icon-content">
              <a aria-label="Telegram" data-social="telegram">
                <div class="filled"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="" />
                {/* <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512">
                  <path fill="#4f5b93"
                    d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
                </svg> */}
              </a>
              <div class="tooltip">PHP</div>
            </li>
          </ul>

          {/* <!-- Example 2 --> */}
          <ul class="example-2">
            <li class="icon-content">
              <a aria-label="Spotify" data-social="spotify">
                <div class="filled"></div>
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_nqx_sCd8ZIeIcodS0sfeMKJ8rVTslmQHUe_udwGNH2Pg=s900-c-k-c0x00ffffff-no-rj"
                  alt="" />

              </a>
              <div class="tooltip">FLUTTER</div>
            </li>

            <li class="icon-content">
              <a aria-label="Pinterest" data-social="pinterest">
                <div class="filled"></div>
                <img src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" alt="" />
                {/* <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="#54d4fa"
                    d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                </svg> */}
              </a>
              <div class="tooltip">REACT</div>
            </li>
            <li class="icon-content">
              <a aria-label="Dribbble" data-social="dribbble">
                <div class="filled"></div>
                <img src="https://logosandtypes.com/wp-content/uploads/2020/07/microsoft-NET.png" alt="" />
              </a>
              <div class="tooltip">.NET</div>
            </li>
            <li class="icon-content">
              <a aria-label="Telegram" data-social="telegram">
                <div class="filled"></div>
                <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="" />
              </a>
              <div class="tooltip">NODE JS</div>
            </li>
          </ul>

          <ul className="example-2">
            {datas.technology.map((tech, index) => (
                <li className="icon-content" key={index}>
                    <a aria-label={tech.name} data-social={tech.name.toLowerCase()}>
                        <div className="filled"></div>
                        <img src={tech.image} alt={tech.name} />
                    </a>
                    <div className="tooltip">{tech.name}</div>
                </li>
            ))}
        </ul>

        </main>

        {/* <!-- ================= Footer ================= --> */}


        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
       

        <section id="testimonials" className="testimonials section-bg black-gradient">
          <div className="swiper-container">
            <div className="section-title" data-aos="fade-up">
              <h2>Testimonials</h2>
              <p className="text-white">Magnam dolores commodi suscipit eum quidem consectetur velit</p>
            </div>
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <Splide options={options}>
                {datas.Testimonials.map((items,index)=>(
                  <SplideSlide>
                                    <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src={items.image} className="testimonial-img" alt="" />
                      <h3>{items.name}</h3>
                      <h4>{items.designation}</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {items.content}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                  </SplideSlide>
                ))}

                <SplideSlide>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="/coinone/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                        Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="/coinone/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                        quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="/coinone/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                        tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </SplideSlide>
                
              </Splide>
            </div>
          </div>
        </section>

        {/* <!-- End Testimonials Section --> */}



        {/* <!-- End F.A.Q Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" class="testimonials">
          <div class="container">

            <div class="section-title" data-aos="fade-up">
              <h2>Our Clients</h2>

            </div>

            <div class="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div class="client-slider">
                <div class="client-slide-track">

                {datas.clients.map((items,index)=>(
                  <div className='client-slide'>
                    <img src={items.image} alt="" />
                  </div>
                ))}



                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>

          </div>
        </section>


        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="contact bg-white pb-0">
          <div class="container">

            <div class="section-title" data-aos="fade-up">
              <h2>Contact Us</h2>
            </div>

            <div class="row">

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="contact-about">
                  <h3><a href="index.html"><img src="/coinone/assets/img/header-logo.svg" /></a></h3>
                  <p>


                  </p>
                  <div class="social-links">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                <div class="info">
                  <div>
                    <i class="ri-map-pin-line"></i>
                    <p>NRI TB, Thapasya Rd, Infopark Campus, Infopark<br />Kochi, Kakkanad, Kerala 682030</p>
                  </div>

                  <div>
                    <i class="ri-mail-send-line"></i>
                    <p>info@coinoneglobal.com</p>
                  </div>

                  <div>
                    <i class="ri-phone-line"></i>
                    <p>9995205444</p>
                  </div>

                </div>
              </div>

              <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form" >
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="1" id="message" placeholder="Message"
                      required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center">
                    <button type="submit" >Send Message</button>
                  </div>
                </form>
              </div>

            </div>

          </div>
          {/* <!-- ======= Footer ======= --> */}
          <footer id="footer" class="mt-4">
            <div class="container">
              <div class="row d-flex align-items-center">
                <div class="col-lg-6 text-lg-left text-center">
                  <div class="copyright">
                    &copy; Copyright <strong>Vesperr</strong>. All Rights Reserved
                  </div>
                  <div class="credits">
                    Designed by <a href="https://bootstrapmade.com/">Coinone</a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                    <a href="#home" class="scrollto">Home</a>
                    <a href="#about" class="scrollto">About</a>
                    <a href="#services">Services</a>
                    <a href="#technology">Technology</a>
                    {/* <a href="#">Portfolio</a> */}
                    <a href="#contact">Contact</a>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
          {/* <!-- End Footer --> */}
        </section>
        {/* <!-- End Contact Section --> */}

      </main>
      {/* <!-- End #main --> */}











      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>





    </body>
  );
}

export default App;
