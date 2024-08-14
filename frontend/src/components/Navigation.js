import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import '../styles/Navigation.css';
// import logo from '../assets/logo.png';
function Navigation() {

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
    return (
      <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
  
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1 className="sitename">KAEI</h1>
        </a>
  
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/">Главная страница</NavLink> </li>
            
            <li><NavLink to="/about">О нас</NavLink></li>
            <li><NavLink to="/membership">Членство</NavLink></li>
            <li><NavLink to="/services">Услуги</NavLink></li>
            <li><NavLink to="/contact">Связаться с нами</NavLink></li>
            <li className="dropdown"><a href="#"><span>Новости</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                {/* <li><a href="#">Dropdown 1</a></li> */}
                {/* <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li> */}
                <li><NavLink to="/news">Новости</NavLink></li>
                <li><NavLink to="/events">События</NavLink></li>
                {/* <li><a href="#">Dropdown 4</a></li> */}
              </ul>
            </li>
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
  
        {/* <a className="btn-getstarted" href="#about">Get Started</a> */}
  
      </div>
    </header>
    );
  }
export default Navigation;



// const navRef = useRef();

// const showNavbar = () => {
//   navRef.current.classList.toggle(
//     "responsive_nav"
//   );
// };

      // <header>
      //   <a href="/" className="logo-link">
      //     <img src={logo} alt="Brand Logo" className="logo" />
      //   </a>
      //   <nav ref={navRef}>
      //       <NavLink to="/">Главная страница</NavLink>
      
      //       <NavLink to="/about">О нас</NavLink>

      //       <NavLink to="/membership">Членство</NavLink>

      //       <NavLink to="/services">Услуги</NavLink>

      //       <NavLink to="/news">Новости</NavLink>

      //       <NavLink to="/events">События</NavLink>

      //       <NavLink to="/contact">Связаться с нами</NavLink>
      //       <button
      //         className="nav-btn nav-close-btn"
      //         onClick={showNavbar}>
      //         <FaTimes />
      //       </button>
      //       </nav>
      //       <button
      //         className="nav-btn"
      //         onClick={showNavbar}>
      //         <FaBars />
      //       </button>

      // </header>