import React, { useState, useEffect } from 'react';
import { getNews } from '../api';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
  <section>      
    <div className="container section-title mb-0 pb-0" 
      data-aos="fade-up"
      >
        <h2>Новости</h2>
      </div>
    {news.map((item) => (
      <div key={item.id} className="container mt-5" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            {item.image && (
              <img src={item.image} className="img-fluid" alt={item.title} />
            )}
          </div>
          <div className={item.image ? "col-lg-6 pt-4 pt-lg-0 content" : "col-lg-12 pt-4 pt-lg-0 content"}>
          <h3>{item.title}</h3>
            <p>{item.content}</p>
            <small>{new Date(item.published_date).toLocaleDateString()}</small>
          </div>
        </div>
      </div>
    ))}
  </section>

    </>
  );
}

export default News;


{/* <section id="skills" class="skills section">

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row">

    <div class="col-lg-6 d-flex align-items-center">
      <img src="assets/img/skills.png" class="img-fluid" alt="">
    </div>

    <div class="col-lg-6 pt-4 pt-lg-0 content">

      <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
      <p class="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>

</div>

</section> */}