import { Outlet } from "react-router-dom";
import BottomNavigation from "./ui/BottomNavigation";

function Layout() {
  return (
    <div>
      <Outlet />
      <BottomNavigation />
    </div>
  );
}

export default Layout;
