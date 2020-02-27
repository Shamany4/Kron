import React from "react";
import "./header.sass"

const Header = () => {
  return(
    <div className="headers">
      <div className="container">
        <h1 className="headers__title">Продажа б/у телефонов в Нововосибирске</h1>
        <a href="#" className="headers__btn">Подписаться на новые объявления</a>
      </div>
    </div>
  );
};

export default Header;