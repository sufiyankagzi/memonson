import { useNavigate, useLocation } from "react-router-dom";
import {
  FaLayerGroup,
  FaTags,
  FaBox,
  FaPalette,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
     { name: "Dashboard", path: "/admin/dashboard", icon: <FaLayerGroup /> },
    { name: "Main Group", path: "/admin/maingroup", icon: <FaLayerGroup /> },
    { name: "Gender", path: "/admin/gender", icon: <FaTags /> },
    { name: "Group", path: "/admin/group", icon: <FaBox /> },
    { name: "Category", path: "/admin/category", icon: <FaBox /> },
    { name: "Size Group", path: "/admin/sizegroup", icon: <FaBox /> },
    { name: "Size Color", path: "/admin/size-color", icon: <FaPalette /> },
    { name: "Item Master", path: "/admin/item-master", icon: <FaBox /> },
  ];

  return (
    <div className="w-64 h-screen bg-brand-back text-gray-100 flex flex-col border-r border-gray-300">

      {/* Logo */}
      <div className="flex items-center justify-center p-3 border-b border-gray-800">
        <img src="/assets/img/img.png" alt=""  className="w-32"/>
      </div>

      {/* Menu */}
      <div className="flex-1 px-3 py-4 space-y-1">

        {menuItems.map((item, index) => {
          const active = location.pathname === item.path;

          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center font-roboto gap-3 w-full px-3 py-2.5  text-sm transition
                ${
                  active
                    ? "bg-gray-800 text-white"
                    : "hover:bg-white hover:text-black"
                }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          );
        })}

      </div>

      {/* Footer */}
      <div className="px-6 py-3 text-xs text-white border-t border-gray-800">
        v1.0 Admin Panel
      </div>
    </div>
  );
};

export default Sidebar;