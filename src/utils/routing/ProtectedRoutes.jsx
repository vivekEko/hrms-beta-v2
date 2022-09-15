import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = {
    token: false,
    isAdmin: true,
  };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
