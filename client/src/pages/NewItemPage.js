import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Info from "../components/Info/Info";

const NewItemPage = () => {
  return(
    <div className="add-item">
      <TopBar />
      <Navbar />
      <Info />
      <div className="container">
        <h1 style={{fontSize: 35, fontWeight: 700, marginTop: 50}}>Добавление нового объявления</h1>
        <p style={{marginTop: 25, fontSize: 18}}>Какой-то текст</p>
      </div>
    </div>
  );
}

export default NewItemPage;