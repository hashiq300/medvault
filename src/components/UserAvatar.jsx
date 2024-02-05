import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userStore from "@/store/userStore";
import { Link } from "react-router-dom";

const UserAvatar = () => {
  const { user } = userStore();
  let userName = user.displayName.toUpperCase();
  return (
    <Link to="/profile">
      <Avatar>
        <AvatarImage src={user.photoURL} />
        <AvatarFallback>{userName[0]}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
