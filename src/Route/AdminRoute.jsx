import {  Routes, Route } from "react-router-dom";
import AdminLogin from "../Components/AdminLogin";
import AdminDashboard from "./AdminDashboard";
// import AdminDashboard from "./pages/AdminDashboard";

function AdminRoute() {
  return (
    
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    
  );
}

export default AdminRoute;