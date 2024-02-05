import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userStore from "@/store/userStore";

const UserAvatar = () => {
  const { user } = userStore();
  let userName = user.displayName.toUpperCase();
  return (
    <Avatar>
      <AvatarImage src={user.photoURL} />
      <AvatarFallback>{userName[0]}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
