import './App.css';
import { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import 'typed.js'
import $ from 'jquery'
import axios from 'axios';
import './App.css'
import { Link } from 'react-router-dom';

function Header() {
  

      
  const [data, setData] = useState(null);
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

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop <= 150 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);



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
  useEffect(() => {
    axios.get('https://luluthattukada.com/coinone/fetches_data.php')
      .then(result => {
        setData(result.data)
        // console.log(result.data);
        // console.log(data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

      {/* <!-- ======= Header ======= --> */}
      <header id="header" className={` fixed-top ${isScrolled ? 'scrolled' : ''}`} >
          <div class="container container-xl d-flex align-items-center justify-content-between">

              <div class="logo">
              <Link to={'/'}><h1><a href="#"><img src="/assets/img/header-logo.svg" /></a></h1></Link>  
              </div>




              <nav id="navbar" className={`navbar ${isMobile ? 'navbar-mobile' : ''}`} >
             
                  <ul>
                    <Link to={'/'}> <li><a class="nav-link scrollto active" href="#hero" onClick={() => setIsMobile(false)}>Home</a></li></Link> 
                    <Link to={'/about'}> <li><a class="nav-link scrollto" onClick={() => setIsMobile(false)}>About</a></li></Link> 
                    
                      
                {/* <NavDropdown
              id="nav-dropdown-dark-example"
              title="Services"
              menuVariant="dark" >  

    <Link style={{display:'contents'}} to={'/crm'}><Dropdown.Item href="#/action-1">CRM Development</Dropdown.Item></Link>    
       <Link to={'/erp'} style={{display:'contents'}}><Dropdown.Item href="#/action-2">ERP Development</Dropdown.Item></Link> 
       <Link to={'/web'} style={{display:'contents'}}> <Dropdown.Item href="#/action-3">Web Development</Dropdown.Item></Link>
      <Link to={'/mobile'} style={{display:'contents'}}><Dropdown.Item href="#/action-3">Mobile Development</Dropdown.Item></Link>  
      <Link to={'/restuarant'} style={{display:'contents'}}><Dropdown.Item href="#/action-3">Restuarant POS System</Dropdown.Item></Link>  
     <Link to={'/temple'} style={{display:'contents'}}> <Dropdown.Item href="#/action-3">Temple Management System</Dropdown.Item></Link>  
       <Link to={'/boutique'} style={{display:'contents'}}><Dropdown.Item href="#/action-3">Boutique Management System</Dropdown.Item></Link> 
    <Link to={'/retail'} style={{display:'contents'}}><Dropdown.Item href="#/action-3">Retail Management System</Dropdown.Item></Link>   
      <Link to={'/billing'} style={{display:'contents'}}><Dropdown.Item href="#/action-3">Billing And Invoicing</Dropdown.Item></Link>  

     
    </NavDropdown> */}

    <Link to={'/services/crm'}> <li><a class="nav-link scrollto" onClick={() => setIsMobile(false)}>Services</a></li></Link>
                       <Link to={'/works'}> <li><a class="nav-link scrollto" onClick={() => setIsMobile(false)}>Works</a></li></Link> 
                      <li><Link to={'/contact'} style={{display:'contents'}}><a class="nav-link scrollto" href="#contact" onClick={() => setIsMobile(false)}>Contact us</a></Link></li>
                      <li className='ml-3'>
                         <Link to={'/contact'}> <button type="button" class="btn btn-outline-light btn-3d " data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-phone mx-2"></i>Get In Touch</button></Link>
                      </li>


                  </ul>
                

                  <i className={`bi ${isMobile ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}></i>
                
              </nav>
              
              {/* <!-- .navbar --> */}

          </div> 
      </header>
      
      {/* <!-- End Header --> */}
</div>


  );
}

export default Header;
