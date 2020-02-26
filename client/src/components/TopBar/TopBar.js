import React from 'react';
import './topbar.sass';

const TopBar = () => {
    return (
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-flex">
            <div className="top-bar-city">
              <span className="top-bar-city__name">Новосибирск</span>
              <a href="#"><i className="fas fa-sort-down top-bar-city__btn"></i></a>
            </div>
            <div className="account">
              <div className="account-message">Сообщения</div>
              <div className="account-auth">Личный кабинет</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopBar;