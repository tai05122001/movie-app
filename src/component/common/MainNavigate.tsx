import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface MainNavigateProps {
  items: string[]; // Define that the 'items' prop is an array of strings
}

const MainNavigate: React.FC<MainNavigateProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  // Handle click event to select an item
  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };
  return (
    <>
      <ul className="list-none flex-row flex bg-bgNav text-center h-12 rounded-full main-nav ">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={`text-xs pt-4 w-20 cursor-pointer ${
                selectedItem === index ? ' text-white' : 'text-textNav'
              }`}

          >
            {item}
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
