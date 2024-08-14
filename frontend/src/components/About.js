import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


function About() {
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
      <div className="container section-title mt-5" 
      data-aos="fade-up"
      >
        <h2>История</h2>
      </div>

      <div className="container"
       data-aos="fade-up"
       data-aos-delay="100">
            <p>
            ОЮЛ «Казахстанская Ассоциация Электронной Промышленности» (далее - Ассоциация) основана в июне 2023 года 3 учредительными предприятиями электронной промышленности ТОО «QazaQ Technology», ТОО «Qazaq Technology Ltd» и ТОО «Infinity Way» и с тех пор активно работает над развитием и поддержкой электронной промышленности в Казахстане.
            За прошедший период, Ассоциация провела ряд работ, направленных на расширение состава участников Ассоциации, определение перечня приоритетных задач для членов Ассоциации, отработку с уполномоченным органом в сфере электронной промышленности (МЦРИАП РК) и другими государственными органами и квазигосударственными организациями приоритетов по развитию отрасли электронной промышленности и поддержки отечественных производителей, а также налаживание сотрудничества с высшими учебными заведениями по вопросам интеграции усилий данных организаций с предприятиями отрасли в сфере подготовки кадров, и проведения совместных прикладных научных исследований.
            В результате данной работы, на сегодняшний день в состав Ассоциации дополнительно вошли два предприятия электронной промышленности – ТОО «Телемедицинский центр «Сапа» (отечественный разработчик телемедицинской платформы дистанционного мониторинга и производитель цифровых 12-канальных портативных электрокардиографов с функцией интернет-телеметрии) и ТОО «QR Systems» (производитель противопожарных систем, систем видеонаблюдения и других приборов для системы «умного дома»). 
            Также, Ассоциация включена в ряд рабочих групп уполномоченным органом в сфере электронной промышленности (Министерство цифрового развития, инноваций и аэрокосмической промышленности РК) по совершенствованию нормативно-правовых актов в сфере мер государственной поддержки предприятий отрасли В частности, были внесены предложения в МЦРИАП РК по совершенствованию критериев для включения в Реестр доверенного ПО и продукции электронной промышленности, которые концептуально были одобрены руководством уполномоченного органа и приняты в работу. 
            КАЭП аккредитована в МЦРИАП РК как объединение субъектов частного предпринимательства и иных некоммерческих организаций.
            </p>
      </div>

      <div className="container section-title mt-5" 
      data-aos="fade-up"
      >
        <h2>Миссия и Цели</h2>
      </div>
      <div className="container"
       data-aos="fade-up">
            <p>
            Наша миссия - создание наиболее благоприятных условий для интеграции усилий государства, бизнес-сообщества и науки с целью развития электронной промышленности Казахстана.
            </p>
            <div className="row gy-4">
            <div className="col-lg-6 content"  data-aos="fade-up"
       data-aos-delay="100">
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Стимулирование научно-технического прогресса в электронной промышленности.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Поддержка членов ассоциации в их профессиональном росте и развитии.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Продвижение казахстанской электронной продукции на международные рынки.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Создание справедливой и прозрачной экосистемы между государством и бизнес-сообществом.</span></li>
            </ul>
            </div>
            <div className="col-lg-6 content"        data-aos="fade-up"
       data-aos-delay="200">
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Содействие реализации государственных программ и задач, связанных с отраслью электронной промышленности.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Представление интересов членов Ассоциации в государственных, негосударственных и международных учреждениях и организациях.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Инициирование идей по созданию благоприятного инвестиционного климата для локализации зарубежных производств в Казахстане.</span></li>
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
                  <h3>Наши партнеры</h3>
                  <p className='fw-bolder'>
                  КАЭП подписаны Меморандумы о сотрудничестве с 2 ВУЗами – Алматинский университет энергетики и связи, Евразийский национальный университет, в рамках которых Ассоциация ведет тесню работу с данными ВУЗами в части совершенствования образовательных программ, содействия в прохождения производственных практик для студентов и магистрантов на предприятиях электронной промышленности, а также содействие в коллаборации по вопросам совместных НИОКР. 
                  </p>
                </div>
              </div>
            </div>
          </section>
            <section id="services" className="services section">    
              <div className="container">
                <div className="row gy-4">
                  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-item position-relative shadow-none">
                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                    </div>
                  </div>
        
                  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-item position-relative shadow-none">
                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                    </div>
                  </div>
        
                  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item position-relative shadow-none">
                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                    </div>
                  </div>
        
                  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item position-relative shadow-none">
                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
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