// Routing
import { Outlet, Navigate } from "react-router-dom";
// State menagement(Recoil JS)
import { useRecoilState } from "recoil";
import userAtom from "../../recoil/auth/userAtom";
import userLoginResponseAtom from "../../recoil/auth/userLoginResponseAtom";

const ProtectedRoutes = () => {
  // Global variables
  const [user, setUser] = useRecoilState(userAtom);
  const [userLoginResponse, setUserLoginResponseAtom] = useRecoilState(
    userLoginResponseAtom
  );

  return userLoginResponse?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
