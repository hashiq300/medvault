import { createBrowserRouter } from 'react-router-dom'
import HomePage from "@/pages/HomePage";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
