// react
import { useEffect, useState } from "react";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// State menagement(Recoil JS)
import { useRecoilState } from "recoil";
import userInfoAtom from "./recoil/auth/userInfoAtom";
import overlayStatusAtom from "./recoil/overlay/overlayStatusAtom";
import Employee_task_overlay_container from "./components/employee_overlays/employee_task_overlays/Employee_task_overlay_container";

// Components and pages
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EmployeeDashboardPage from "./pages/employee/EmployeeDashboardPage";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./utils/routing/ProtectedRoutes";
import ProtectedFromUser from "./utils/routing/ProtectedFromUser";

function App() {
  // Global variables
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [overlayStatus, setOverlayStatus] = useRecoilState(overlayStatusAtom);

  useEffect(() => {
    setUserInfo({
      user_type: localStorage.getItem("user_type"),
      token: localStorage.getItem("token"),
      emp_id: localStorage.getItem("emp_id"),
    });
  }, [localStorage.getItem("user_type")]);

  return (
    <div className="cursor-default bg-gradient-to-t from-[#f8f8fc] to-[#f3f3fc] min-h-screen relative">
      {/* Modal overlay */}

      {overlayStatus && (
        <div
          className="fixed  bg-[#0000007a] inset-0 z-[90] flex justify-center items-center"
          onClick={() => setOverlayStatus(false)}
        >
          <Employee_task_overlay_container />
        </div>
      )}

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
        <Route element={<ProtectedFromUser />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
