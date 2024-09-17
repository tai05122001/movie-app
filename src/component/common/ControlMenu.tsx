import React from "react";
import { FaBell, FaUser  } from "react-icons/fa";
const ControlMenu: React.FC = () => {
  return (
    <>
      <div className="flex w-16" >
        <FaBell color="#b5c8cb" className="m-1" title="Notification"/>
        <FaUser color="#b5c8cb" className="m-1" title="Login"/>
      </div>
    </>
  );
};
export default ControlMenu;
