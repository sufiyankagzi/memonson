import {  Routes, Route } from "react-router-dom";
import AdminLogin from "../Components/AdminLogin";
import AdminDashboard from "../Components/AdminDashboard";
import AdminLayout from "../Layout/AdminLayout";
import { Navigate } from "react-router-dom";
import Maingroup from "../Components/MainGroup";
import Gender from "../Components/Gender";
import SizeGroup from "../Components/SizeGroup";

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
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route path="dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/maingroup" element={<ProtectedRoute><Maingroup /></ProtectedRoute>} />
        <Route path="/admin/gender" element={<ProtectedRoute><Gender /></ProtectedRoute>} />
        <Route path="/admin/sizegroup" element={<ProtectedRoute><SizeGroup /></ProtectedRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      </Route>
    </Routes>

      // <Routes>
      //   <Route path="/admin/login" element={<AdminLogin />} />
      //   <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      // </Routes>
    
  );
}

export default AdminRoute;