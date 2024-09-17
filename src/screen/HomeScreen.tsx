import React from "react";
import Header from "../component/common/Header";
import Content from "../component/home/Content";
const HomeScreen: React.FC = () => {
  return (
    <>
      <div className="app-container bg-bgWeb w-4/5 m-auto">
        <div className="main-layout-wrapper">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
