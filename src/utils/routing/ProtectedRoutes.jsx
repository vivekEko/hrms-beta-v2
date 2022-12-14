// Routing
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  return localStorage.getItem("user_type")?.includes("U" || "S") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
