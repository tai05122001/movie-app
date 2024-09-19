import React, { useState, useContext } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../provider/AppProvider";
interface MainNavigateProps {
  items: any[]; // Define that the 'items' prop is an array of strings
}
const MainNavigate: React.FC<MainNavigateProps> = ({ items }) => {
  const {state, setState} = useContext(AppContext)
  console.log('state',state)
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<number | null>(0);
  // Handle click event to select an item
  const handleItemClick = (index: number, item: any) => {
      setState(index);
      navigate(item.link);
  };
  return (
    <>
      <ul className="list-none flex-row flex bg-bgNav text-center h-12 rounded-full main-nav ">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index, item)}
            className={`text-xs pt-4 w-20 cursor-pointer ${
              state === index ? " text-white" : "text-textNav"
            }`}
          >
            {item.title}
          </li>
        ))}
        <div className="p-4 rounded-full bg-bgMagnify mr-1 ">
          <FaMagnifyingGlass color="#aaafb6" />
        </div>
      </ul>
    </>
  );
};
export default MainNavigate;
