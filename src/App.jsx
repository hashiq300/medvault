import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DocumentsPage from "./pages/DocumentsPage";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import StepsPage from "./pages/ActivityPage/StepsPage";
import VitalsPage from "./pages/ActivityPage/VitalsPage";
import SleepPage from "./pages/ActivityPage/SleepPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "activity", element: <ActivityPage /> },
      { path: "steps", element: <StepsPage /> },
      { path: "vitals", element: <VitalsPage /> },
      { path: "sleep", element: <SleepPage /> },
    ],
  },
  { path: "/profile", element: <ProfilePage/> },
  { path: "/edit-profile", element: <EditProfilePage/> },
  { path: "*", element: <div>Page not found</div> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
