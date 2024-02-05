import BottomNavigation from "./BottomNavigation";
import UserAvatar from "./UserAvatar";

function Layout({ children }) {
  return (
    <div>
      <div className="px-4 pt-5 pb-10">
        <UserAvatar />
      </div>
      {children}
      <BottomNavigation />
    </div>
  );
}

export default Layout;
