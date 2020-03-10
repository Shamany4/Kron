import React, {Component} from "react";
import Card from "./Card/Card";
import ContentFilter from "./ContentFilter/ContentFilter";
import device from "./device";
import "./content.sass"

class Content extends Component {
  state = {
    isOpen: false,

  }

  render() {

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