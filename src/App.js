// react
import { useEffect, useState } from "react";

// Routing
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
// State menagement(Recoil JS)
import { useRecoilState } from "recoil";
import userAtom from "./recoil/auth/userAtom";
import userInfoAtom from "./recoil/auth/userInfoAtom";
import userLoginResponseAtom from "./recoil/auth/userLoginResponseAtom";

// Components and pages
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EmployeeDashboardPage from "./pages/employee/EmployeeDashboardPage";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./utils/routing/ProtectedRoutes";

function App() {
  // Global variables
  const [userLoginResponse, setUserLoginResponseAtom] = useRecoilState(
    userLoginResponseAtom
  );
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_type")) {
    } else {
      setUserInfo({
        user_type: localStorage.getItem("user_type"),
        token: localStorage.getItem("token"),
        emp_id: localStorage.getItem("emp_id"),
      });
    }
  }, [localStorage.getItem("user_type")]);

  return (
    <div className="cursor-default bg-gradient-to-t from-[#f8f8fc] to-[#f3f3fc] min-h-screen">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="*"
            element={
              userInfo?.user_type === "S" ? (
                <AdminDashboardPage />
              ) : (
                <EmployeeDashboardPage />
              )
            }
          />
          <Route
            path="/"
            element={
              userInfo?.user_type === "S" ? (
                <AdminDashboardPage />
              ) : (
                <EmployeeDashboardPage />
              )
            }
          />

          <Route path="/admin" element={<EmployeeDashboardPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
