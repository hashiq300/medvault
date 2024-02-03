import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

function Layout() {
  return (
    <div>
      <Outlet />
      <BottomNavigation />
    </div>
  );
}

export default Layout;
