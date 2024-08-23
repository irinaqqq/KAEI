import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <>
    <section id="home" 
    className="hero home section"
    >
    <div className="" 
    data-aos="zoom-in"
    >
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      loop={true}
      autoplay={{
        delay: 8000,
      }}
    >
      <SwiperSlide>
        <div className="slide-content" style={{ backgroundImage: "url('assets/img/about/1.png')" }}>
        <div className="container h-100">
        <div className="row gy-4 h-100">
        <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center h-100p-5"
            style={{ backgroundColor: 'rgba(72, 122, 198, 0.6)' }}
            data-aos="zoom-out"
          >
            <h1>{t('associationTitle')}</h1>
            <p>{t('associationDescription')}</p>            
            <div className="d-flex">
              <NavLink to="/membership" className="btn-get-started">{t('joinUs')}</NavLink>
              {/* <NavLink to="/about" className="glightbox btn-watch-video d-flex align-items-center"> <i className="bi bi-play-circle"></i><span>Посмотреть презентацию</span></NavLink> */}
            </div>
          </div>
        </div>
      </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content" style={{ backgroundImage: "url('assets/img/about/2.png')" }}>
        <div className="container h-100">
        <div className="row gy-4 h-100">
        <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center h-100p-5"
            style={{ backgroundColor: 'rgba(72, 122, 198, 0.6)' }}
            data-aos="zoom-out"
          >
          <h1>{t('missionTitle')}</h1>
          <p>{t('missionDescription')}</p>
          <div className="d-flex">
            <NavLink to="/about" className="btn-get-started">
              {t('aboutUs')}
            </NavLink>
              {/* <NavLink to="/about" className="glightbox btn-watch-video d-flex align-items-center"> <i className="bi bi-play-circle"></i><span>Посмотреть презентацию</span></NavLink> */}
            </div>
          </div>
        </div>
      </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div
          className="slide-content bg-center"
          style={{
            backgroundImage: "url('assets/img/about/7.jpg')",
            backgroundPosition: "top",
          }}
        >
        <div className="container h-100">
        <div className="row gy-4 h-100">
        <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center h-100p-5"
            style={{ backgroundColor: 'rgba(72, 122, 198, 0.6)' }}
            data-aos="zoom-out"
          >
            <h1>{t('roundtableEventsTitle')}</h1>
            <p>{t('roundtableEventsDescription')}</p>
            <div className="d-flex">
              <NavLink to="/services" className="btn-get-started">
                {t('learnMore')}
              </NavLink>
              {/* <NavLink to="/about" className="glightbox btn-watch-video d-flex align-items-center"> <i className="bi bi-play-circle"></i><span>Посмотреть презентацию</span></NavLink> */}
            </div>
          </div>

        </div>
      </div>
        </div>
      </SwiperSlide>
    </Swiper>

    </div>
    </section>
    {/* <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="zoom-out"
          >
            <h1>Казахстанская Ассоциация Электронной Промышленности</h1>
            <p>КАЭП объединяет ведущие предприятия и организации, работающие в сфере электронной промышленности Казахстана. Мы способствуем развитию отрасли, поддерживаем инновации и способствуем укреплению сотрудничества между участниками рынка.</p>
            <div className="d-flex">
              <NavLink to="/membership" className="btn-get-started">Присоединиться</NavLink>
              <NavLink to="/about" className="glightbox btn-watch-video d-flex align-items-center"> <i className="bi bi-play-circle"></i><span>Посмотреть презентацию</span></NavLink>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img d-flex justify-content-center align-items-center big-logo-div"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={logo}
              className="img-fluid animated big-logo"
              alt="Hero"/>
          </div>
        </div>
      </div>
    </section> */}
    

    <section id="clients" className="clients section light-background">
      <div className="container" 
      data-aos="zoom-in"
      >
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
              slidesPerView: 5,
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
        </Swiper>
      </div>
    </section>
  </>
  )
}

export default Home;

