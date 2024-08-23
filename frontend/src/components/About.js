import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <>
    <section id="about" 
    className="about section"
    >
    <div className="container" 
    data-aos="zoom-in"
    >
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide><img src="assets/img/about/1.jpg" className='about-img' alt="" /></SwiperSlide>
      <SwiperSlide><img src="assets/img/about/2.jpg" className='about-img' alt="" /></SwiperSlide>
      <SwiperSlide><img src="assets/img/about/3.jpg" className='about-img' alt="" /></SwiperSlide>
      <SwiperSlide><img src="assets/img/about/4.jpg" className='about-img' alt="" /></SwiperSlide>
      <SwiperSlide><img src="assets/img/about/5.jpg" className='about-img' alt="" /></SwiperSlide>
    </Swiper>
    </div>
    <div className="container section-title mt-5" data-aos="fade-up">
      <h2>{t('formationHistoryTitle')}</h2>
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <p>{t('formationHistoryText1')}</p>
      <p>{t('formationHistoryText2')}</p>
      <p>{t('formationHistoryText3')}</p>

      <div className='why-us p-0'>
        <div className="faq-container" data-aos="fade-up" data-aos-delay="200">
          <a href="https://sapatelemed.kz/" target="_blank" rel="noopener noreferrer" className='d-block mb-3'>
            <div className="faq-item faq-pointer">
              <h3><span>01</span> {t('company1')}</h3>
            </div>
          </a>

          <div className="faq-item faq-pointer">
            <h3><span>02</span> {t('company2')}</h3>
          </div>

          <a href="https://qazaqtechnology.kz/" target="_blank" rel="noopener noreferrer" className='d-block mb-3'>
            <div className="faq-item faq-pointer">
              <h3><span>03</span> {t('company3')}</h3>
            </div>
          </a>

          <a href="https://eltexalatau.kz/" target="_blank" rel="noopener noreferrer" className='d-block mb-3'>
            <div className="faq-item faq-pointer">
              <h3><span>04</span> {t('company4')}</h3>
            </div>
          </a>

          <div className="faq-item faq-pointer">
            <h3><span>05</span> {t('company5')}</h3>
          </div>

          <div className="faq-item faq-pointer">
            <h3><span>06</span> {t('company6')}</h3>
          </div>
        </div>
      </div>

      <p className='mt-3'>{t('regulationsUpdateText')}</p>
      <p>{t('accreditationText')}</p>

        <div className='d-flex flex-column align-items-center'>
        <img src="assets/img/clients/cert.png" className="img-fluid" alt="" />
        </div>
      </div>

      <div className="container section-title mt-5" data-aos="fade-up">
        <h2>{t('missionTitle2')}</h2>
      </div>

      <div className="container" data-aos="fade-up">
        <p>{t('missionStatement')}</p>
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>{t('goal1')}</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>{t('goal2')}</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>{t('goal3')}</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>{t('goal4')}</span></li>
            </ul>
          </div>
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="300">
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>{t('goal5')}</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>{t('goal6')}</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>{t('goal7')}</span></li>
            </ul>
          </div>
        </div>
      </div>
      </section>

      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="assets/img/cta-bg.jpg" alt="" />

        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-xl-9 text-center text-xl-start">
              <h3>{t('partnersTitle')}</h3>
              <p className='fw-bolder'>{t('partnersStatement')}</p>
            </div>
          </div>
        </div>
      </section>

            <section id="services" className="services section">    
              <div className="container">
                <div className="row gy-4">
                  <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-item position-relative shadow-none d-flex justify-content-center align-items-center">
                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                    </div>
                  </div>
        
                  <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-item position-relative shadow-none d-flex justify-content-center align-items-center">
                    <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                    </div>
                  </div>
        
                  <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item position-relative shadow-none d-flex justify-content-center align-items-center">
                    <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                    </div>
                  </div>
        
                  <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item position-relative shadow-none d-flex justify-content-center align-items-center">
                    <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item position-relative shadow-none d-flex justify-content-center align-items-center">
                    <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item position-relative shadow-none d-flex justify-content-center align-items-center">
                    <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div>
          </div>
            </>
  );
          }
  
  export default About;