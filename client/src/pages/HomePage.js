import React from 'react';
import Header from "../components/Headers/Header";
import Sort from "../components/Sort/Sort";
import Content from "../components/Content/Content";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Sort />
      <Content />
    </div>
  );
};

export default HomePage;