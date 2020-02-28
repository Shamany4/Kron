import React, {Component} from "react";
import "./header.sass"

class Header extends Component{
  state = {
    cityName: ['Новосибирске', 'Москве', 'Владивостоке']
  }
  render() {
    return(
      <div className="headers">
        <div className="container">
          <h1 className="headers__title">Продажа б/у телефонов в {this.state.cityName[0]}</h1>
          <a href="/" className="headers__btn">Подписаться на новые объявления</a>
        </div>
      </div>
    );
  }
};

export default Header;