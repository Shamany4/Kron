import React from 'react';
import TopBar from '../components/TopBar/TopBar';
import Navbar from '../components/Navbar/Navbar';
import Header from "../components/Headers/Header";
import Sort from "../components/Sort/Sort";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Header />
      <Sort />
    </div>
  );
};

export default HomePage;