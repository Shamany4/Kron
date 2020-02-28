import React, {Component} from "react";
import "./info.sass"


class Info extends Component {

  render() {
    return(
      <div className="info">
        <div className="info-wrap">
          <div className="info-block">
            <a href="/" className="info-block__btn">Политика конфедициальности</a>
            <a href="/" className="info-block__btn">Контакты</a>
            <a href="/" className="info-block__btn">О сервисе</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;