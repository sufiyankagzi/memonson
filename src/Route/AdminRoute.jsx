import {  Routes, Route } from "react-router-dom";
import AdminLogin from "../Components/AdminLogin";
import AdminDashboard from "./AdminDashboard";
import { Navigate } from "react-router-dom";

function AdminRoute() {
  const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

  return (
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      </Routes>
    
  );
}

export default AdminRoute;