import React from "react";
import {Link} from "react-router-dom";

const ButtonCta = () => {
  return (
    <div className="cta">
      <Link to="/new-ad" className="cta__btn">Подать объявление</Link>
    </div>
  );
};

export default ButtonCta;