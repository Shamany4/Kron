import React, {Component} from "react";
import './navbar.sass';
import Logo from "../Navbar/Logo/Logo";
import Menu from "../Navbar/Menu/Menu";
import ButtonCta from "../Navbar/ButtonCta/ButtonCta";

class Navbar extends Component {
  state = {
    logoName: "KrÖn",
    menuItem: [
      {
        menuItemName: 'iPhone',
        menuItemPath: '/iphone'
      },
      {
        menuItemName: 'Galaxy S',
        menuItemPath: '/galaxy-S'
      },
      {
        menuItemName: 'iPad',
        menuItemPath: '/ipad'
      },
      {
        menuItemName: 'Galaxy Tab',
        menuItemPath: '/galaxy-tab'
      },
      {
        menuItemName: 'Watch',
        menuItemPath: '/watch'
      },
      {
        menuItemName: 'Аксессуары',
        menuItemPath: '/accessories'
      },

    ]
  }

  render() {

    let renderLinks = () => {
      return this.state.menuItem.map((item, index) => {
        return(
          <li className="menu__item" key={index + 1}>
            {/*<Link to={item.menuItemPath} className="menu__btn" >{item.menuItemName}</Link>*/}
            <a href="#" className="menu__btn">{item.menuItemName}</a>
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