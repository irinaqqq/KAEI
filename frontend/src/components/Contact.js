function ContactUs() {
    return (
      <section id="contact" className="contact section contact2">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Наши контакты</h2>
        <p>Мы всегда на связи в социальных сетях и готовы ответить на любые вопросы. Следите за нашими новостями и обновлениями, пишите нам — мы рады общению и вашему интересу.</p>
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
                <h3 className="socLinks">Facebook</h3>
                </a>
                </div>
              </div>
              {/* End Info Item */}

              <div className="info-item d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-linkedin flex-shrink-0"></i>
                <div className="align-content-center">
                <a href="https://linkedin.com/company/kaep" target="_blank" rel="noopener noreferrer">
                <h3 className="socLinks">Linkedin</h3>
                </a>
                </div>
              </div>
              {/* End Info Item */}

              <div className="info-item d-flex mb-0 justify-content-center" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-instagram flex-shrink-0"></i>
                <div className="align-content-center">
                <a href="https://facebook.com/kaep" target="_blank" rel="noopener noreferrer">
                  <h3 className="socLinks">Instagram</h3>
                  </a>
                </div>
              </div>
              {/* End Info Item */}
              </div>

              <div className="col-lg-6">
              <h3 className="socLinks">Мы на связи!</h3>
              <p>
              Для связи с нами вы можете использовать социальные сети или отправить сообщение на нашу электронную почту: <span className="highlighted">chairman@kaei.kz</span>. Мы с удовольствием ответим на ваши вопросы и предложения!
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