import React from "react";

const TopBarCity = (props) => {
  return(
    <div className="top-bar-city">
      <span className="top-bar-city__name">{props.name}</span>
      <a href="/"><i className="fas fa-sort-down top-bar-city__btn"></i></a>
    </div>
  );
};

export default TopBarCity;