import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Info/Info";
import HomePage from "./pages/HomePage";
import PoliticsPage from "./pages/PoliticsPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import NewItemPage from "./pages/NewItemPage";
import Auth from "./components/Login/Auth/Auth";
import Reg from "./components/Login/Reg/Reg";

class App extends Component{

  state = {
    isClick: false
  }

  clickHandler = () => {
    this.setState(({isClick}) => {
      return {
        isClick: !isClick
      };
    });
  }

  render() {
    return (
      <div className="App">
        {
          !this.state.isClick
            ?
            <BrowserRouter>
              <TopBar click={this.clickHandler}/>
              <Navbar />
              <Info />
              <Route path="/" component={HomePage} exact />
              <Route path="/politics" component={PoliticsPage} exact />
              <Route path="/contact" component={ContactPage} exact />
              <Route path="/service" component={ServicePage} exact />
              <Route path="/new-ad" component={NewItemPage} exact />
            </BrowserRouter>
            :
            <BrowserRouter>
              <Route path="/auth" exact>
                <Auth click={this.clickHandler} />
              </Route>
              <Route path="/register" exact>
                <Reg click={this.clickHandler}/>
              </Route>
            </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;
