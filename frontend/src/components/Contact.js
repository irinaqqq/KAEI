import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact section contact2">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('contactUs')}</h2>
        <p>{t('contactDescription')}</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="info-wrap">
              <div className="row gy-4">
                <div className="col-lg-6">

                  <div className="info-item d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-facebook flex-shrink-0"></i>
                    <div className="align-content-center">
                      <a href="https://facebook.com/kaep" target="_blank" rel="noopener noreferrer" className="socLinks">
                        <h3 className="socLinks">{t('facebook')}</h3>
                      </a>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="info-item d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-linkedin flex-shrink-0"></i>
                    <div className="align-content-center">
                      <a href="https://www.linkedin.com/in/janibek-mukhamejanov-707a9735/" target="_blank" rel="noopener noreferrer">
                        <h3 className="socLinks">{t('linkedin')}</h3>
                      </a>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="info-item d-flex mb-0 justify-content-center" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-instagram flex-shrink-0"></i>
                    <div className="align-content-center">
                      <a href="https://instagram.com/kaep" target="_blank" rel="noopener noreferrer">
                        <h3 className="socLinks">{t('instagram')}</h3>
                      </a>
                    </div>
                  </div>
                  {/* End Info Item */}
                </div>

                <div className="col-lg-6">
                  <h3 className="socLinks">{t('stayConnected')}</h3>
                  <p>
                    {t('contactEmailPart1')} <span className="highlighted">chairman@kaei.kz</span>. {t('contactEmailPart2')}
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
