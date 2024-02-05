import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DocumentsPage from "./pages/DocumentsPage";
import { RouterProvider } from "react-router-dom";
import GettingStartedPage from "./pages/GettingStartedPage";
import { useEffect } from "react";
import { auth } from "./config/firebase";
import userStore from "./store/userStore";
import ProtectedLayout from "./layouts/ProtectedLayout";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import StepsPage from "./pages/ActivityPage/StepsPage";
import VitalsPage from "./pages/ActivityPage/VitalsPage";
import SleepPage from "./pages/ActivityPage/SleepPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedLayout withAvatar={true} />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "activity", element: <ActivityPage /> },
      { path: "steps", element: <StepsPage /> },
      { path: "vitals", element: <VitalsPage /> },
      { path: "sleep", element: <SleepPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  {
    path: "/profile",
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <ProfilePage /> },
      { path: "edit", element: <EditProfilePage /> },
    ],
  },
  { path: "*", element: <div>Page not found</div> },
  {
    path: "/getting-started",
    element: <GettingStartedPage />,
  },
]);

function App() {
  const { setIsLoaded, setUser } = userStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("User is signed in");
      } else {
        setUser(null);
        console.log("User is signed out");
      }
      setIsLoaded(true);
    });

    return () => unsubscribe();
  }, [setUser, setIsLoaded]);

  return <RouterProvider router={router} />;
}

export default App;
