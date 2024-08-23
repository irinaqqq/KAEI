import React from 'react';
import { useTranslation } from 'react-i18next';

const services = (t) => [
  {
    icon: 'bi bi-info-circle',
    title: t('servicesConsultingTitle'),
    description: t('servicesConsultingDescription'),
    delay: 100
  },
  {
    icon: 'bi bi-search',
    title: t('servicesResearchTitle'),
    description: t('servicesResearchDescription'),
    delay: 200
  },
  {
    icon: 'bi bi-people-fill',
    title: t('servicesRepresentationTitle'),
    description: t('servicesRepresentationDescription'),
    delay: 300
  },
  {
    icon: 'bi bi-briefcase',
    title: t('servicesOrganizationTitle'),
    description: t('servicesOrganizationDescription'),
    delay: 400
  }
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('servicesTitle')}</h2>
        <p>{t('servicesIntro')}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services(t).map((service, index) => (
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
