import React from 'react'
import { useDispatch } from "react-redux";
import { clearauth } from '../Store/Slices/auth_slice'
import { useNavigate } from 'react-router-dom';
import { showToast } from "../Store/Slices/toast_slice";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const logout = () => {
    localStorage.removeItem("token");
    dispatch(clearauth())
    localStorage.removeItem("adminToken"); // ✅ remove token
    dispatch(showToast({ message: "User Successfully Logout.", type: "success" }))
  // window.location.href = "/admin/login";
  navigate("/admin/login");

    
    

  }
  return (
    <>
      this is admin AdminDashboard
      <button onClick={() => logout() } className='p-4 bg-brand-back text-white'>Logout</button>
    </>
  )
}

export default AdminDashboard