import Sidebar from "../Components/Sidebar";
import AdminHeader from '../Header/AdminHeader'
import { Outlet } from "react-router-dom";
import { setCollapsed, toggleCollapsed } from "../store/Slices/SidebarSlice";


const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <div className="p-4 bg-white/80 flex-1">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;
