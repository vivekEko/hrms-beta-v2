// Routing
import { Outlet, Navigate } from "react-router-dom";

const ProtectedFromUser = () => {
  return localStorage.getItem("user_type")?.includes("U" || "S") ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export default ProtectedFromUser;
