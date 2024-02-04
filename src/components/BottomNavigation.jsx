import React from "react";
import { Home, NotebookText, LineChart, MessageCircleMore } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className=" fixed bottom-0 w-full">
      <div
        style={{ boxShadow: " 0px -4px 10px 0px rgba(0, 0, 0, 0.25)" }}
        className="flex justify-between items-center bg-[#1C1E27] py-6 px-12"
      >
        <Link to="/">
          <Home size={24} color={isActive("/") ? "#1A4CD3" : "#FFF"} />
        </Link>
        <Link to="/documents">
          <NotebookText
            size={24}
            color={isActive("/documents") ? "#1A4CD3" : "#FFF"}
          />
        </Link>
        <Link to="/activity">
          <LineChart
            size={24}
            color={isActive("/activity") ? "#1A4CD3" : "#FFF"}
          />
        </Link>
        <Link>
          <MessageCircleMore
            size={24}
            color={isActive("/message") ? "#1A4CD3" : "#FFF"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;
