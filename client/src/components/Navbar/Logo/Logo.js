import React from "react";
import {Link} from "react-router-dom";


const Logo = (props) => {
  return (
    <div className="logo">
      <Link to="/" className="logo__title">{props.logoname}</Link>
    </div>
  );
}
export default Logo;