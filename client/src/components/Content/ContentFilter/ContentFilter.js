import React, { Component } from "react";

class ContentFilter extends Component {
  state = {

  }
  render() {
    return (
      <div className="content-filter">

        <div className="filter-header">
          <h2 className="filter-header__title">Фильтр поиска</h2>
        </div>

        <div className="filter-block">
          <div className="filter-title">
            <h3 className="filter-title__item">Цена:</h3>
          </div>
          <div className="filter-block-price">
            <input type="text" className="filter-block-price__input" placeholder="От"/>
            <input type="text" className="filter-block-price__input" placeholder="До"/>
          </div>
        </div>

        <div className="filter-block">
          <div className="filter-title">
            <h3 className="filter-title__item">Торг:</h3>
          </div>
          <div className="filter-block-check">
            <input type="checkbox" className="filter-block-check__checkbox"/>
            <span className="filter-block-check__label">да</span>
            <input type="checkbox" className="filter-block-check__checkbox"/>
            <span className="filter-block-check__label">нет</span>
          </div>
        </div>

        <div className="filter-block">
          <div className="filter-title">
            <h3 className="filter-title__item">Эксплуатация:</h3>
          </div>
          <div className="filter-block-kit">
            <select name="select_kit" id="select_kit" className="filter-block-kit__select">
              <option value="0" className="filter-block-kit__item">Не выбрано</option>
              <option value="1" className="filter-block-kit__item">Более 1 года</option>
              <option value="2" className="filter-block-kit__item">Более 2 лет</option>
            </select>
          </div>
        </div>

        <div className="filter-block">
          <div className="filter-title">
            <h3 className="filter-title__item">Гарантия:</h3>
          </div>
          <div className="filter-block-check">
            <input type="checkbox" className="filter-block-check__checkbox"/>
            <span className="filter-block-check__label">да</span>
            <input type="checkbox" className="filter-block-check__checkbox"/>
            <span className="filter-block-check__label">нет</span>
          </div>
        </div>

        <div className="filter-block">
          <div className="filter-title">
            <h3 className="filter-title__item">Был ли в ремонте:</h3>
          </div>
          <div className="filter-block-check">
            <input type="checkbox" className="filter-block-check__checkbox"/>
            <span className="filter-block-check__label">да</span>
            <input type="checkbox" className="filter-block-check__checkbox"/>
            <span className="filter-block-check__label">нет</span>
          </div>
        </div>

        <div className="filter-block">
          <a href="/" className="filter-block__btn">Применить</a>
        </div>
      </div>
    );
  }
}
export default ContentFilter;