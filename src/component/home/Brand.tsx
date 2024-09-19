import React from "react";
import { FaCaretRight } from "react-icons/fa6";

interface BrandProps {
  content: string;
  image: string;
}

const Brand: React.FC<BrandProps> = (props) => {
  const styles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    
  };
  return (
    <div className="brand-layout-wrapper size-full rounded-lg min-h-[13rem] p-2 relative" style={styles}>
      {/* <img src={ props.url} alt="" height={ props.height} width={props.width} className="" />   */}
      <div className=" max-w-[9.5rem] break-words ">
        <p className="text-[24px] text-white font-semibold">{props.content}</p>
      </div>
      <div className="absolute flex bottom-1 w-40 items-center">
        <button className="min-h-10 min-w-10 rounded-full bg-opacity-50 bg-black text-white mr-8 font-semibold pl-3 shadow-lg">
          <FaCaretRight color="white" />
        </button>
        <p className="whitespace-nowrap text-white">Let Play Movie</p>
      </div>
    </div>
  );
};
export default Brand;
