import React from "react";
import Header from "../../component/common/Header";
import Content from "../../component/home/Content";
import Footer from "../../component/common/Footer";
const Home: React.FC = () => {
  const myStyle = {
    
    backgroundImage:
        "url('/img/illustration-anime-character-rain.jpg')",
    height: "140vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
    filter: "blur(10px)",
    top: 0,
    left:0

  };
  return (
    <>
      <div className="flex justify-center items-center size-full h-lvh absolute " style={myStyle} >
      </div>
      <div className="main-layout-wrapper m-auto h-4/5 mt-8 rounded-lg">
          <Header />
          <Content />
          <Footer />
        </div>
    </>
  );
};

export default Home;
