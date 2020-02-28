import React, {Component} from "react";
import './navbar.sass';
import Logo from "../Navbar/Logo/Logo";
import Menu from "../Navbar/Menu/Menu";
import ButtonCta from "../Navbar/ButtonCta/ButtonCta";

class Navbar extends Component {
  state = {
    logoName: "KrÖn",
    menuItem: ['iPhone', 'Galaxy S', 'iPad', 'Galaxy Tab', 'Watch', 'Аксессуары']
  }

  render() {

    let renderLinks = () => {
      return this.state.menuItem.map((item, index) => {
        return(
          <li className="menu__item" key={index + 1}>
            <a href="/" className="menu__btn">{item}</a>
          </li>
        );
      });
    }

    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar-flex">

            <Logo logoname={this.state.logoName}/>
            <Menu links={renderLinks()}/>
            <ButtonCta />

          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;