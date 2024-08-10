
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
function Works() {

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

      <main id="main" >
       
      <div className='erp-background' style={{ marginTop:'-34px'}}>

<div class="inner-top-img-clr">
      <div class="inner-top-img     ">
         <div class="inner-top-img-text section-title">
         <h2 style={{color:'#fff'}}>Works</h2>
           
         </div>
      </div>
   </div>
   </div>

<div  class="services"   >
          <div className="container" >
            <div class="section-title" ref={(el) => {
          if (el && !skewUpRef.current.includes(el)) {
            skewUpRef.current.push(el);
          }
        }} >
              
            
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
                          <img src={`${service.image}`} className="img-fluid" alt={service.name} />
                          <div className="portfolio-info">
                            <h4>{service.name}</h4>
                            <div className="portfolio-links">
                            

<a href={`${service.image}`} data-gallery="portfolioGallery" className="portfolio-lightbox" title={service.name}>
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
</div>
<Footer />
</main>












      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>





    </body>
  );
}

export default Works;
