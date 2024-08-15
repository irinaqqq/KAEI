import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {

  const location = useLocation(); 

  useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && 
          !selectHeader.classList.contains('sticky-top') && 
          !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    // Добавляем обработчики событий
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Удаляем обработчики событий при размонтировании компонента
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  useEffect(() => {
    // Обработчик клика для выпадающих меню
    const handleDropdownToggle = (e) => {
      e.preventDefault();
      const target = e.currentTarget;
      target.parentNode.classList.toggle('active');
      const nextSibling = target.parentNode.nextElementSibling;
      if (nextSibling) {
        nextSibling.classList.toggle('dropdown-active');
      }
      e.stopImmediatePropagation();
    };

    // Добавление обработчиков кликов
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', handleDropdownToggle);
    });

    // Очистка обработчиков кликов
    return () => {
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.removeEventListener('click', handleDropdownToggle);
      });
    };
  }, []);

  useEffect(() => {
    // Функция для переключения мобильного меню
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    
    const mobileNavToogle = () => {
      document.querySelector('#root').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };

    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    return () => {
      mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
    };
  }, []);

  useEffect(() => {
    const closeMobileNav = () => {
      document.querySelector('#root').classList.remove('mobile-nav-active');
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.classList.add('bi-list');
        mobileNavToggleBtn.classList.remove('bi-x');
      }
    };

    closeMobileNav(); // Закрыть меню при изменении маршрута
  }, [location]); 

    return (
      <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
  
        <NavLink to="/" className="logo d-flex align-items-center me-auto">
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1 className="sitename">KAEI</h1>
        </NavLink>
  
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/">Главная страница</NavLink> </li>
            
            <li><NavLink to="/about">О нас</NavLink></li>
            {/* <li><NavLink to="/partners">Наши партнеры</NavLink></li> */}
            <li><NavLink to="/membership">Членство</NavLink></li>
            <li><NavLink to="/services">Услуги</NavLink></li>
            <li className="dropdown"><button className='navBtn'><span>Политика и Отрасль</span> <i className="bi bi-chevron-down toggle-dropdown"></i></button>
            <ul style={{ marginLeft: '15px' }}>
                <li><NavLink to="/politics">Государственная<br /> политика</NavLink></li>
                <li><NavLink to="/branch">Отрасль</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact">Связаться с нами</NavLink></li>
            <li className="dropdown"><button className='navBtn'><span>Новости</span> <i className="bi bi-chevron-down toggle-dropdown"></i></button>
              <ul>
                <li><NavLink to="/news">Новости</NavLink></li>
                <li><NavLink to="/events">События</NavLink></li>
              </ul>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
    );
  }
export default Navigation;