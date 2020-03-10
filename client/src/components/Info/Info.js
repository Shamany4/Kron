import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./info.sass"


class Info extends Component {

  render() {
    return(
      <div className="info">
        <div className="info-wrap">
          <div className="info-block">
            <Link to="/politics" className="info-block__btn">Политика конфедициальности</Link>
            <Link to="/contact" className="info-block__btn">Контакты</Link>
            <Link to="/service" className="info-block__btn">О сервисе</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;