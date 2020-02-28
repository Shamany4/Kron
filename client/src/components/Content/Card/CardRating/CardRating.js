import React from "react";

const CardRating = (props) => {
  return(
    <div className="card-result-rating">
      <div className="card-result-stars">
        {
          props.rating == 0 ?
            <div>
              <span className="card-result-stars__item"><i className="far fa-star"></i></span>
              <span className="card-result-stars__item"><i className="far fa-star"></i></span>
              <span className="card-result-stars__item"><i className="far fa-star"></i></span>
              <span className="card-result-stars__item"><i className="far fa-star"></i></span>
              <span className="card-result-stars__item"><i className="far fa-star"></i></span>
          </div>:
            props.rating == 10 ?
              <div>
                <span className="card-result-stars__item"><i className="fas fa-star-half-alt"></i></span>
                <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                <span className="card-result-stars__item"><i className="far fa-star"></i></span>
            </div>:
              props.rating == 20 ?
                <div>
                  <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                  <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                  <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                  <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                  <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                </div>:
                props.rating == 30 ?
                  <div>
                    <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                    <span className="card-result-stars__item"><i className="fas fa-star-half-alt"></i></span>
                    <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                    <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                    <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                  </div>:
                  props.rating == 40 ?
                    <div>
                      <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                      <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                      <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                      <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                      <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                    </div>:
                    props.rating == 50 ?
                      <div>
                        <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                        <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                        <span className="card-result-stars__item"><i className="fas fa-star-half-alt"></i></span>
                        <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                        <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                      </div>:
                      props.rating == 60 ?
                        <div>
                          <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                          <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                          <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                          <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                          <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                        </div>:
                        props.rating == 70 ?
                          <div>
                            <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                            <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                            <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                            <span className="card-result-stars__item"><i className="fas fa-star-half-alt"></i></span>
                            <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                          </div>:
                          props.rating == 80 ?
                            <div>
                              <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                              <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                              <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                              <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                              <span className="card-result-stars__item"><i className="far fa-star"></i></span>
                            </div>:
                            props.rating == 90 ?
                              <div>
                                <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                <span className="card-result-stars__item"><i className="fas fa-star-half-alt"></i></span>
                              </div> :
                                <div>
                                  <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                  <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                  <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                  <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                  <span className="card-result-stars__item"><i className="fas fa-star"></i></span>
                                </div>
        }
      </div>
    </div>
  );
}
export default CardRating;