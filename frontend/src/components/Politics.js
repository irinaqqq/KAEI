import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Politics() {
  const { t } = useTranslation();
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
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('statePolicyTitle')}</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="assets/img/skills.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-up" data-aos-delay="300">
              <h3>{t('mainLawTitle')}</h3>
              <p className="fst-italic" data-aos="fade-up" data-aos-delay="400">
                {t('mainLawDescription')}
              </p>
            </div>
          </div>
        </div>
        <div className="container section-title section-title2 mt-5" data-aos="fade-up">
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-up" data-aos-delay="300">
              <h3>{t('trustedSoftwareTitle')}</h3>
              <p className="fst-italic" data-aos="fade-up" data-aos-delay="400">
                {t('trustedSoftwareDescription')}
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
              <strong>{t('briefInstructionTitle')}</strong> <span>{t('briefInstructionSubtitle')}</span>
            </h3>
          </div>

          <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-item faq-active faq-pointer">
              <h3>
                <span>01</span> {t('step1Title')}
              </h3>
              <div className="faq-content">
                <p>
                  {t('step1Description1')}
                  <br />
                  {t('step1Description2')}
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>
            {/* End Faq item */}

            <div className="faq-item faq-pointer">
              <h3>
                <span>02</span> {t('step2Title')}
              </h3>
              <div className="faq-content">
                <p>
                  {t('step2Description')}
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>
            {/* End Faq item */}

            <div className="faq-item faq-pointer">
              <h3>
                <span>03</span> {t('step3Title')}
              </h3>
              <div className="faq-content">
                <p>
                  {t('step3Description1')}
                  <br />
                  {t('step3Description2')}
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>
            {/* End Faq item */}

            <div className="faq-item faq-pointer">
              <h3>
                <span>04</span> {t('step4Title')}
              </h3>
              <div className="faq-content">
                <p>
                  {t('step4Description1')}
                  <br />
                  {t('step4Description2')}
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>
            {/* End Faq item */}

            <div className="faq-item faq-pointer">
              <h3>
                <span>05</span> {t('step5Title')}
              </h3>
              <div className="faq-content">
                <p>
                  {t('step5Description')}
                </p>
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
                <span>{t('requiredDocumentsTitle')}</span>
              </h3>
              <div className="faq-content">
                <p>
                  {t('document1')}
                  <br />
                  {t('document2')}
                  <br />
                  {t('document3')}
                  <br />
                  {t('document4')}
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