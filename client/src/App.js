import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Info/Info";
import HomePage from "./pages/HomePage";
import PoliticsPage from "./pages/PoliticsPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import NewItemPage from "./pages/NewItemPage";
import Reg from "./components/Login/Reg/Reg";
import Auth from "./components/Login/Auth/Auth";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <TopBar />
        <Navbar />
        <Info />
        <Route path="/" component={HomePage} exact />
        <Route path="/politics" component={PoliticsPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/service" component={ServicePage} exact />
        <Route path="/new-ad" component={NewItemPage} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
