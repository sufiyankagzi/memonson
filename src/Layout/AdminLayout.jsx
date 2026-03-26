import Sidebar from "../Components/SidebarAdmin";
import HeaderAdmin from "../Header/HeaderAdmin";
import { Outlet } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { setCollapsed, toggleCollapsed } from "../store/Slices/SidebarSlice";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="">
      {/* Sidebar - Desktop */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="">
        <HeaderAdmin />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
