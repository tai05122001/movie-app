import React from "react"; // we need this to make JSX compile
import MainNavigate from "./MainNavigate";
import ControlMenu from "./ControlMenu";
import { useNavigate } from 'react-router-dom';

const items = ["Movie", "Series", "Originals"];
const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between pt-4 ">
        <button onClick={() => navigate("/")}>
          <img src="logo.png" alt="" width={80} height={80} />
        </button>
        <MainNavigate items={items}></MainNavigate>
        <ControlMenu></ControlMenu>
      </div>
    </>
  );
};
export default Header;
