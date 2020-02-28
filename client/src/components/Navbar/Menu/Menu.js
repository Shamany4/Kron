import React from "react";

const Menu = (props) => {
  return (
    <div className="menu">
      <ul className="menu-list">
        {props.links}
      </ul>
    </div>
  );
};

export default Menu;
