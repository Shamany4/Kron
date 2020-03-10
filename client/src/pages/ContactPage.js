import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Info from "../components/Info/Info";

const ContactPage = () => {
  return(
    <div className="contact">
      <TopBar />
      <Navbar />
      <Info />
      <div className="container">
        <h1 style={{fontSize: 35, fontWeight: 700, marginTop: 50}}>Контакты</h1>
        <p style={{marginTop: 25, fontSize: 18}}>Какой-то текст</p>
      </div>
    </div>
  );
}

export default ContactPage;