import React from 'react';
import TopBar from '../components/TopBar/TopBar';
import Navbar from '../components/Navbar/Navbar';
import Header from "../components/Headers/Header";
import Sort from "../components/Sort/Sort";
import Info from "../components/Info/Info";
import Content from "../components/Content/Content";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Header />
      <Sort />
      <Info />
      <Content />
    </div>
  );
};

export default HomePage;