import React from "react";

const SortCount = (props) => {
  return(
    <div className="sort-count">
      <h3 className="sort-count__title">Всего объявлений:</h3>
      <span className="sort-count__span">{props.count}</span>
    </div>
  );
}

export default SortCount;