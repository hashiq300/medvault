import Layout from "@/components/Layout";
import userStore from "@/store/userStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProtectedLayout() {
  const { user, isLoaded } = userStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && user === null) {
      navigate("/getting-started");
    }
  }, [user, navigate, isLoaded]);
  if (user === null) {
    return null;
  }
  return (
     <Layout>
          <Outlet />
     </Layout>
  );
}

export default ProtectedLayout;
