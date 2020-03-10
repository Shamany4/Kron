import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import PoliticsPage from "./pages/PoliticsPage";
import NewItemPage from "./pages/NewItemPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={HomePage} exact/>
        <Route path="/service" component={ServicePage} exact/>
        <Route path="/contact" component={ContactPage} exact/>
        <Route path="/politics" component={PoliticsPage} exact/>
        <Route path="/new-ad" component={NewItemPage} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
