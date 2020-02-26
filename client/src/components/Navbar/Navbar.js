import React from "react";
import './navbar.sass';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="container">

        <div className="navbar-flex">
          <div className="logo">KrÖn</div>

          <div className="menu">
            <ul className="menu-list">
              <li className="menu__item"><a href="#" className="menu__btn">iPhone</a></li>
              <li className="menu__item"><a href="#" className="menu__btn">Galaxy S</a></li>
              <li className="menu__item"><a href="#" className="menu__btn">iPad</a></li>
              <li className="menu__item"><a href="#" className="menu__btn">Galaxy Tab</a></li>
              <li className="menu__item"><a href="#" className="menu__btn">Watch</a></li>
              <li className="menu__item"><a href="#" className="menu__btn">Аксессуары</a></li>
            </ul>
          </div>

          <div className="cta"><a href="#" className="cta__btn">Подать объявление</a></div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;