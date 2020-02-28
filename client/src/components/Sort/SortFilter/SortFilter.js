import React, {Component} from "react";

class SortFilter extends Component{
  state = {
    sortFor: ['цене', 'дате', 'просмотрам']
  }

  render() {
    const renderBtn = () => {
      return this.state.sortFor.map((name, index) => {
        return(
          <a href="/" className="sort-filter_price" key={index}>{name}</a>
        );
      });
    }
    return(
      <div className="sort-filter">
        <h3 className="sort-filter__title">Сортировать:</h3>
        {renderBtn()}
      </div>
    );
  }
}

export default SortFilter;