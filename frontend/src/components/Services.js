import React from 'react';

const services = [
  {
    icon: 'bi bi-info-circle',
    title: 'Консультации и поддержка:',
    description: 'Предоставление экспертных консультаций по различным аспектам электронной промышленности в рамках государственных мер государственной поддержки.',
    delay: 100
  },
  {
    icon: 'bi bi-search',
    title: 'Исследования и анализ:',
    description: 'Проведение исследований рынка и анализ текущих тенденций.',
    delay: 200
  },
  {
    icon: 'bi bi-people-fill',
    title: 'Представление интересов:',
    description: 'Представление интересов членов ассоциации в государственных органах и квазигосударственных организациях, а также в казахстанских и зарубежных мероприятиях и выставках.',
    delay: 300
  },
  {
    icon: 'bi bi-briefcase',
    title: 'Организация круглых столов, конференций и семинаров:',
    description: 'Организация различных мероприятий, с целью обсуждение актуальных вопросов с участием заинтересованных государственных органов и организаций, презентации компаний, обучения и установления контактов.',
    delay: 400
  }
];

const Services = () => {
  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Услуги</h2>
        <p>КАЭП готова оказать следующие услуги членам Ассоциации:</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="service-item position-relative w-100">
                <div className="icon"><i className={service.icon}></i></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
