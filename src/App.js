// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components and pages
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EmployeeDashboardPage from "./pages/employee/EmployeeDashboardPage";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./utils/routing/ProtectedRoutes";

function App() {
  let auth = {
    token: false,
    isAdmin: false,
  };
  return (
    <div className="cursor-default">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route
              path="*"
              element={
                auth?.isAdmin ? (
                  <AdminDashboardPage />
                ) : (
                  <EmployeeDashboardPage />
                )
              }
            />
            <Route
              path="/"
              element={
                auth?.isAdmin ? (
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
