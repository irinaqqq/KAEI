import React, { useEffect } from 'react';

function Politics() {
  useEffect(() => {
    // Функция для переключения класса "faq-active"
    const handleFaqToggle = (event) => {
      event.currentTarget.parentNode.classList.toggle('faq-active');
    };

    // Находим все элементы с заголовками и иконками переключателей
    const faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle');

    // Добавляем обработчики кликов
    faqItems.forEach((faqItem) => {
      faqItem.addEventListener('click', handleFaqToggle);
    });

    // Очистка событий при размонтировании компонента
    return () => {
      faqItems.forEach((faqItem) => {
        faqItem.removeEventListener('click', handleFaqToggle);
      });
    };
  }, []);
    return (
        <>
      <section id="skills" className="skills skills2 section">
      <div className="container section-title" 
      data-aos="fade-up"
      >
        <h2>Государственная Политика</h2>
      </div>
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="assets/img/skills.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-up" data-aos-delay="300">
              <h3>Основные НПА, регулирующие деятельность электронной промышленности</h3>
              <p className="fst-italic" data-aos="fade-up" data-aos-delay="400">
              Основным законом РК, в котором определено понятие электронной промышленности и функции уполномоченного органа данной отрасли. 
              Согласно Закону, электронная промышленность – отрасль промышленности, включающая в себя разработку, сборку, испытание и производство устройств, таких как компьютеры, компьютерное периферийное оборудование, коммуникационное оборудование, электронные приборы для потребителей, измерительные, тестирующие и авиационные, иррадиационно-стойкие компоненты для космоса, электромедицинское и электротерапевтическое оборудование, оптические приборы и оборудование, оборудование для исследования магнитной и оптической среды, а также производство узлов, составляющих (интегральных микросхем, электронных компонентов "активных" и "пассивных") и запасных частей для продукции электронной промышленности.
              </p>
            </div>
          </div>
        </div>
        <div className="container section-title section-title2 mt-5" 
      data-aos="fade-up"
      >
      </div>
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="row">

            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-up" data-aos-delay="300">
              <h3>Реестр доверенного программного обеспечения и продукции электронной промышленностии</h3>
              <p className="fst-italic" data-aos="fade-up" data-aos-delay="400">
              Реестр доверенного программного обеспечения и продукции электронной промышленности (далее - Реестр) – перечень программного обеспечения и продукции электронной промышленности создан для целей обеспечения обороны страны и безопасности государства (пп.52-1, ст. 1 Закона об информатизации РК).
При этом, нахождение продукции в Реестр предоставляет преимущественное право участвовать в предварительном квалификационном отборе (ПКО) в государственных закупках и закупках субъектов квазигосударственного сектора, в том числе закупок Фонда «Самрук-Казына». 
</p>
            </div>
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
              <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="section why-us why-us2 light-background" data-builder="section">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <strong>Краткая инструкция </strong>
                <span>для включения продукции в реестр доверенного программного обеспечения и продукции электронной промышленности</span>
              </h3>
            </div>

            <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">

              <div className="faq-item faq-active faq-pointer">
                <h3>
                  <span>01</span> Подготовка заявки
                </h3>
                <div className="faq-content">
                  <p>
                  - Заполните заявление о включении продукции электронной промышленности в Реестр.
                  <br />
                  - Подготовьте необходимые документы.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item faq-pointer">
                <h3>
                  <span>02</span> Подача заявления
                </h3>
                <div className="faq-content">
                  <p>
                  - Отправьте заявление вместе с документами в уполномоченный орган посредством информационной системы www.elicense.kz.                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item faq-pointer">
                <h3>
                  <span>03</span> Рассмотрение заявки
                </h3>
                <div className="faq-content">
                  <p>
                  - Уполномоченный орган проверит документы на соответствие требованиям Правил в течении 5 рабочих дней;
                  <br />
                  - Уполномоченный орган и Комиссия проверит соответствие заявленной продукции критериям включения в Реестр в течение 14 рабочих дней в порядке очередности.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item faq-pointer">
                <h3>
                  <span>04</span> Результаты
                </h3>
                <div className="faq-content">
                  <p>
                  - На основании рекомендации Комиссии уполномоченный орган принимает соответствующее решение и направляет уведомление о включении либо не включении с указанием причины в Реестр заявителю.
                  <br />
                  - В случае включения в Реестр, уполномоченный орган направляет актуализированный Реестр в Министерство финансов РК с целью актуализации данных о потенциальных поставщиках и продукции электронной промышленности на сайте государственных закупок в разделе ПКО.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

              <div className="faq-item faq-pointer">
                <h3>
                  <span>05</span> Актуализация данных
                </h3>
                <div className="faq-content">
                  <p>
                  - При изменении данных, повторно подайте заявление для актуализации реестра.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* End Faq item */}

            </div>

          </div>

          <div className="col-lg-5 order-1 order-lg-2 why-us-img">
            <img
              src="assets/img/2.png"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>


        </div>

        
        <div className="col-lg-12 d-flex flex-column justify-content-center order-4 order-lg-1 my-4">
            <div className="faq-container px-xl-5" data-aos="fade-up">
              <div className="faq-item faq-active faq-pointer">
                <h3>
                  <span>Необходимые документы:</span>
                </h3>
                <div className="faq-content">
                  <p>
                  - Заявление о включении (исключении).
                  <br />
                  - Описание и требуемые функциональные, технические, качественные и эксплуатационные характеристики продукции электронной промышленности на государственном или русском языках в произвольной форме с указанием функционала, особенностей и преимуществ, области применения, потребителей, а также фотоизображение продукции;
                  <br />
                  - Документ, подтверждающий исключительное право на объект промышленной собственности или договора о передаче права пользования объектом промышленной собственности на территории Республики Казахстан;
                  <br />
                  - Копия сертификата соответствия требованиям информационной безопасности в соответствии с СТ РК ISO/IEC 15408-3 не ниже 4 уровня доверия для программного обеспечения, входящего в состав продукции электронной промышленности (в актуальной версии на момент проведения сертификации) (в случае невозможности сертифицировать программное обеспечение, входящее в состав продукции электронной промышленности, в соответствии с СТ РК ISO/IEC 15408-3, заявитель обращается к не менее двум органам по подтверждению соответствия для предоставления заключения о невозможности сертификации) или наличие протокола испытаний.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              </div>
              </div>

      </div>
    </section>
        </>
      );
  }
  
  export default Politics;