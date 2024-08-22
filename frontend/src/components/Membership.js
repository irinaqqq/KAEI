function Membership() {
    return (  
      <section id="why-us" className="section why-us light-background" data-builder="section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <strong>Преимущества членства</strong>
              </h3>
              <p>
                Почему стоит стать членом КАЕП:
              </p>
            </div>

            <div className="faq-container" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-item">
                <h3><span>01</span> КАЭП продвигает производство электронного оборудования через активное представительство в государственных органах и квазигосударственном секторе, НПП «Атамекен», а также в научно-технических учреждениях и промышленных/торговых организациях в Казахстане и за рубежом.</h3>
              </div>
              
              <div className="faq-item">
                <h3><span>02</span> Участие в формировании критериев для отечественных производителей электроники в рамках государственных закупок.</h3>
              </div>
              
              <div className="faq-item">
                <h3><span>03</span> Возможность получения финансирования на НИОКР и коммерциализацию разработок в рамках государственных программ.</h3>
              </div>

              <div className="faq-item">
                <h3><span>04</span> Возможность участия на совместных стендах на отечественных и зарубежных выставках.</h3>
              </div>

              <div className="faq-item">
                <h3><span>05</span> Получение доступа к аналитике и прогнозированию рынка новых разработок и технологических решений.</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 why-us-img">
            <img src="assets/img/why-us.png" className="img-fluid big-logo" alt="" data-aos="zoom-in" data-aos-delay="100" />
          </div>
        </div>
        <div className="container section-title mt-5" 
        data-aos="fade-up"
        >
        <h2>Как стать членом КАЭП</h2>
      </div>
      <div className="container"
       data-aos="fade-up">
            <p>
            К участию допускаются компании, занимающиеся производством электронного оборудования с существенной добавленной стоимостью за счет производства компонентов, узлов, деталей, средств производства/оборудования для производства электронного оборудования, поставщики EMS, поставщики услуг, такие как тестирование качества/продукции, а также компании, разрабатывающие компоненты и узлы. Компании, производящие оборудование из всех сегментов электроники (т.е. потребительские, телекоммуникационные, ИТ, оборонные, промышленные, медицинские и автомобильные), могут присоединиться к членству КАЭП, как только они начнут производство, сборку или проектирование в стране.           
            </p>
            <p>
            Для вступления требуется направить сканы заполненного заявления на адрес <span className="highlighted">chairman@kaei.kz</span>.
            </p>
        </div>
      </div>
    </section>
    );
  }
  
  export default Membership;