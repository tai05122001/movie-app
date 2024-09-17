import React from "react";

interface BrandProps {
  content: string;
}

const Brand: React.FC<BrandProps> = (props) => {
  return (
    <div className="brand-layout-wrapper">
      {/* <img src={ props.url} alt="" height={ props.height} width={props.width} className="" />   */}
      <div className="brand-content-layout">
        <p>{props.content}</p>
      </div>
      <div className="brand-play-button">
        <button><span></span>{">"}</button>
        <p>Let Play Movie</p>
      </div>
    </div>
  );
};
export default Brand;
