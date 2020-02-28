import React, {Component} from "react";
import "./sort.sass";
import SortCount from "./SortCount/SortCount";
import SortFilter from "./SortFilter/SortFilter";

class Sort extends Component {
  state = {
    countAd: 645
  }
  render() {
    return(
      <div className="sort">
        <div className="container">
          <div className="sort-flex">

            <SortCount count={this.state.countAd}/>

            <SortFilter />
          </div>
        </div>
      </div>
    );
  }
};

export default Sort;