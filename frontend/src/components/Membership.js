import { useTranslation } from 'react-i18next';

function Membership() {
  const { t } = useTranslation();
    return (  
      <section id="why-us" className="section why-us light-background" data-builder="section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <strong>{t('membershipBenefitsTitle')}</strong>
              </h3>
              <p>{t('membershipBenefitsIntro')}</p>
            </div>

            <div className="faq-container" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-item">
                <h3><span>01</span> {t('benefit1')}</h3>
              </div>
              
              <div className="faq-item">
                <h3><span>02</span> {t('benefit2')}</h3>
              </div>
              
              <div className="faq-item">
                <h3><span>03</span> {t('benefit3')}</h3>
              </div>

              <div className="faq-item">
                <h3><span>04</span> {t('benefit4')}</h3>
              </div>

              <div className="faq-item">
                <h3><span>05</span> {t('benefit5')}</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 why-us-img">
            <img src="assets/img/why-us.png" className="img-fluid big-logo" alt="" data-aos="zoom-in" data-aos-delay="100" />
          </div>
        </div>
        <div className="container section-title mt-5" 
        data-aos="fade-up">
          <h2>{t('joinUsTitle')}</h2>
        </div>
        <div className="container" data-aos="fade-up">
          <p>{t('joinUsDetails')}</p>
          <p>{t('joinUsInstructions')} <span className="highlighted">{t('email')}</span>.</p>
        </div>
      </div>
    </section>
    );
  }
  
  export default Membership;