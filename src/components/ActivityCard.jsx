import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({ activity, icon, to }) => {
  return (
    <Link to={`/${to}`} className=" flex items-center gap-5 bg-[#1C1E27] p-5 rounded-2xl">
      {icon}
      <h3 className=" text-xl font-medium">{activity}</h3>
    </Link>
  );
};

export default ActivityCard;
