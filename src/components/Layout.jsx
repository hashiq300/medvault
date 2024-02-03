import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import UserAvatar from "./UserAvatar";

function Layout() {
  return (
    <div>
      <div className="px-4 pt-5 pb-10">
        <UserAvatar />
      </div>
      <Outlet />
      <BottomNavigation />
    </div>
  );
}

export default Layout;
