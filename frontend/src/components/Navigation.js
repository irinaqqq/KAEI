import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
function Navigation() {

  const location = useLocation(); 

  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
        <img src={logo} alt="Логотип" />
          <h1 className="sitename">KAEI</h1>
        </NavLink>
  
              <nav id="navmenu" className="navmenu">
            <ul>
              <li><NavLink to="/">{t('home')}</NavLink></li>
              <li><NavLink to="/about">{t('about')}</NavLink></li>
              {/* <li><NavLink to="/partners">{t('partners')}</NavLink></li> */}
              <li><NavLink to="/membership">{t('membership')}</NavLink></li>
              <li><NavLink to="/services">{t('services')}</NavLink></li>
              <li className="dropdown">
                <button className='navBtn'>
                  <span>{t('navButton')}</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </button>
                <ul style={{ marginLeft: '15px' }}>
                  <li><NavLink to="/politics">{t('politics')}</NavLink></li>
                  <li><NavLink to="/branch">{t('branch')}</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/contact">{t('contact')}</NavLink></li>
              <li className="dropdown">
                <button className='navBtn'>
                  <span>{t('dropdownNews')}</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </button>
                <ul>
                  <li><NavLink to="/news">{t('news')}</NavLink></li>
                  <li><NavLink to="/events">{t('events')}</NavLink></li>
                </ul>
              </li>
              <li className="dropdown">
                <button className='navBtn'>
                  <span>{t('language')}</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </button>
                <ul>
                  <li><button onClick={() => changeLanguage('en')} className='navBtn btndrop'>English</button></li>
                  <li><button onClick={() => changeLanguage('ru')} className='navBtn btndrop'>Русский</button></li>
                  <li><button onClick={() => changeLanguage('kz')} className='navBtn btndrop'>Қазақша</button></li>
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