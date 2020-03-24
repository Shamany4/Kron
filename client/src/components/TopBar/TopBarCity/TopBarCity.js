import React from "react";

const TopBarCity = () => {
  return(
    <div className="top-bar-city">
      <span className="top-bar-city__name">Новосибирск</span>
      <a href="/"><i className="fas fa-sort-down top-bar-city__btn"></i></a>
    </div>
  );
};

export default TopBarCity;