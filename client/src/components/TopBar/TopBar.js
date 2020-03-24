import React from 'react';
import './topbar.sass';
import TopBarCity from "./TopBarCity/TopBarCity";
import TopBarAccount from "./TopBarAccount/TopBarAccount";

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-flex">
          <TopBarCity />
          <TopBarAccount click={props.click} auth={props.isAuth}/>
        </div>
      </div>
    </div>
  )
};

export default TopBar;