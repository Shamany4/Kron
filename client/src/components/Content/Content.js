import React, {Component} from "react";
import Card from "./Card/Card";
import ContentFilter from "./ContentFilter/ContentFilter";
import device from "./device";
import "./content.sass"

class Content extends Component {
  state = {

  }

  render() {

    // <span className="card-result-stars__item"><i className="fas fa-star"></i></span>               - 20%
    // <span className="card-result-stars__item"><i className="fas fa-star-half-alt"></i></span>      - 10%
    // <span className="card-result-stars__item"><i className="far fa-star"></i></span>               - 0%

    let checkRating = (value) => {
      if (value == 10) {
        return(
          <div>
            <span className="card-result-stars__item"><i className="fas fa-star-half-alt"></i></span>
            <span className="card-result-stars__item"><i className="far fa-star"></i></span>
            <span className="card-result-stars__item"><i className="far fa-star"></i></span>
            <span className="card-result-stars__item"><i className="far fa-star"></i></span>
            <span className="card-result-stars__item"><i className="far fa-star"></i></span>
          </div>
        );
      }
    }

    let renderCard = () => {
      return device.devices.map((item, index) => {
        return (
          <Card
            key={index + 1}
            img={item.card_img}
            name={item.card_name}
            date={item.card_date}
            color={item.device_color}
            expl={item.device_exp}
            kit={item.device_kit}
            price={item.device_price}
            view={item.card_view}
            new_view={item.card_new_view}
            rating={item.device_rating}
          />
        );
      });
    }

    return(
      <div className="content">
        <div className="container">
          <div className="content-wrap">

            <div className="content-wrap-card">
            {renderCard()}
            </div>

            <ContentFilter />

          </div>
        </div>
      </div>
    );
  }
}

export default Content;