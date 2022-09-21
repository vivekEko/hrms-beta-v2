// Routing
import { Outlet, Navigate } from "react-router-dom";

// State Management (Recoil Js)
import { useRecoilState } from "recoil";
import userInfoAtom from "../../recoil/auth/userInfoAtom";

const ProtectedRoutes = () => {
  const [userInfo] = useRecoilState(userInfoAtom);

  return userInfo?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
