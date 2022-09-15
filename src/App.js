// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// State menagement(Recoil JS)
import { useRecoilState } from "recoil";
import userAtom from "./recoil/auth/userAtom";
// Components and pages
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EmployeeDashboardPage from "./pages/employee/EmployeeDashboardPage";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./utils/routing/ProtectedRoutes";
import userLoginResponseAtom from "./recoil/auth/userLoginResponseAtom";

function App() {
  // Global variables
  const [user, setUser] = useRecoilState(userAtom);
  const [userLoginResponse, setUserLoginResponseAtom] = useRecoilState(
    userLoginResponseAtom
  );

  return (
    <div className="cursor-default">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route
              path="*"
              element={
                userLoginResponse?.isAdmin ? (
                  <AdminDashboardPage />
                ) : (
                  <EmployeeDashboardPage />
                )
              }
            />
            <Route
              path="/"
              element={
                userLoginResponse?.isAdmin ? (
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
      </Router>
    </div>
  );
}

export default App;
