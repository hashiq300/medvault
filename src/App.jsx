import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DocumentsPage from "./pages/DocumentsPage";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "documents", element: <DocumentsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
