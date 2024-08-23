import React, { useEffect, useState } from 'react';
import { getEvents } from '../api'; // Импортируем функцию из вашего api.js
import { useTranslation } from 'react-i18next';

const Events = () => {
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section>
    <div className="container section-title mb-0 pb-0" 
      data-aos="fade-up"
      >
        <h2>{t('eventsTitle')}</h2>
      </div>
      {events.map((event) => (
        <div key={event.id} className="container mt-5" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              {event.image && (
                <img src={event.image} className="img-fluid" alt={event.title} />
              )}
            </div>
            <div className={event.image ? "col-lg-6 pt-4 pt-lg-0 content" : "col-lg-12 pt-4 pt-lg-0 content"}>
          <h3>{event.title}</h3>
          <p>{event.content}</p>
          <small>{new Date(event.published_date).toLocaleDateString()}</small>
        </div>
      </div>
    </div>
      ))}
    </section>
  );
};

export default Events;
