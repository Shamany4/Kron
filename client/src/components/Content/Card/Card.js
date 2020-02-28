import React from "react";
import CardRating from "./CardRating/CardRating";

const Card = (props) =>  {
  return(
    <div className="card">
      <div className="card-header">
        <div className="card-headers-img">
          <img src={props.img} alt={props.name} className="card-header-img__image"/>
        </div>
        <div className="card-header-title">
          <h2 className="card-header-title__name">{props.name}</h2>
          <span className="card-header-title__date">{props.date}</span>
        </div>
      </div>
      <div className="card-desc">
        <div className="card-desc-block">
          <p className="card-desc__text">Цвет:</p>
          <span className="card-desc__span">{props.color}</span>
        </div>
        <div className="card-desc-block">
          <p className="card-desc__text">Эксплуатация:</p>
          <span className="card-desc__span">{props.expl}</span>
        </div>
        <div className="card-desc-block">
          <p className="card-desc__text">Комплект:</p>
          <span className="card-desc__span">{props.kit}</span>
        </div>
      </div>
      <div className="card-result">

        <CardRating rating={props.rating}/>

        <div className="card-result-price">
          <h3 className="card-result-price__cost">{props.price} ₽</h3>
        </div>
        <div className="card-result-views">
          <span className="card-result-views__img"><i className="fas fa-eye"></i></span>
          <p className="card-result-views__view">{props.view}</p>
          <span className="card-result-views__view_new">+ {props.new_view}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;