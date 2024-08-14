import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import '../assets/swiper/swiper-bundle.min.css';

function Home() {
  return (
    <>
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
            // data-aos="zoom-out"
          >
            <h1>Казахстанская Ассоциация Электронной Промышленности</h1>
            <p>КАЭП объединяет ведущие предприятия и организации, работающие в сфере электронной промышленности Казахстана. Мы способствуем развитию отрасли, поддерживаем инновации и способствуем укреплению сотрудничества между участниками рынка.</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Присоединиться</a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i><span>Посмотреть презентацию</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img d-flex justify-content-center"
            // data-aos="zoom-out"
            // data-aos-delay="200"
          >
            <img
              src={logo}
              className="img-fluid animated"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
    

    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView="auto"
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
          onSwiper={(swiper) => {
            swiper.wrapperEl.classList.add('align-items-center');
          }}
        >
          <SwiperSlide><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  </>
  )
}

export default Home;
// return (
//   <div className="home-container">
//     <img src={logo} alt="Brand Logo" className="logo-full" />
//     <h1>Добро пожаловать на сайт Казахстанской Ассоциации Электронной Промышленности (КАЭП)!</h1>
//     <p>КАЭП объединяет ведущие предприятия и организации, работающие в сфере электронной промышленности Казахстана. Мы способствуем развитию отрасли, поддерживаем инновации и способствуем укреплению сотрудничества между участниками рынка.</p>
//   </div>
  
// );

