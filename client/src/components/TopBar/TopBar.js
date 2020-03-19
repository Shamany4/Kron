import React, {Component} from 'react';
import './topbar.sass';
import TopBarCity from "./TopBarCity/TopBarCity";
import TopBarAccount from "./TopBarAccount/TopBarAccount";

class TopBar extends Component{
  state = {
    cityName: "Новосибирск",
  }

  render() {

    return (
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-flex">
            <TopBarCity name={this.state.cityName}/>
            <TopBarAccount />
          </div>
        </div>
      </div>
    );
  }
};

export default TopBar;