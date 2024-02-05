import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import { RouterProvider } from "react-router-dom";
import GettingStartedPage from "./pages/GettingStartedPage";
import { useEffect } from "react";
import { auth } from "./config/firebase";
import userStore from "./store/userStore";
import ProtectedLayout from "./layouts/ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    layout: <ProtectedLayout />,
    element: <HomePage />,
  },
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
