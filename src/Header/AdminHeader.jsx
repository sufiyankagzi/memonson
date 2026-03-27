import React from 'react'
import { useDispatch } from "react-redux";
import { clearauth } from '../Store/Slices/auth_slice'
import { useNavigate } from 'react-router-dom';
import { showToast } from "../Store/Slices/toast_slice";

const AdminHeader = () => {
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
      <div className="h-[79px] bg-brand-block border-b flex flex-row items-center justify-between">

        <h1 className=" text-black font-bebasneu text-[35px] px-5 m-0  ">
          Welcome To Memon & Sons
        </h1>

        
        <button className='p-3' onClick={logout}> logout</button>

      </div>
    </>
  )
}

export default AdminHeader