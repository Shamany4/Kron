import React, {Component} from 'react';
import './topbar.sass';
import TopBarCity from "./TopBarCity/TopBarCity";
import TopBarAccount from "./TopBarAccount/TopBarAccount";
import Login from "../Login/Login";


class TopBar extends Component{
  state = {
    cityName: "Новосибирск",
    isActive: false
  }

  changeActiveHandler = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }


  render() {

    return (
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-flex">

            <TopBarCity name={this.state.cityName}/>

            <TopBarAccount
              status={this.changeActiveHandler}
            />

            { this.state.isActive ? <Login click={this.changeActiveHandler}/> : null }

          </div>
        </div>
      </div>
    );
  }
};

export default TopBar;