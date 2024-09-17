import React from "react";
import Brand from "./Brand";
const Content: React.FC = () => {
  return (
    <div className="pt-4">
      <div className="brand flex justify-between">
        <div className="brand-list-layout">
          <div className="brand_child_1">
            <Brand content="The Adventure Of Blue Sword" />
          </div>
          <div className="brand_child_2">
            <Brand content="Recalling the journey of Dol's Exciting Story" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
