import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { showToast } from "../Store/Slices/toast_slice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errMsg = data?.message || data?.data?.message || "Something went wrong";
        alert(errMsg);
        return;
      }

      // Save token in localStorage
      localStorage.setItem("adminToken", data.token);
      // Verify token immediately
      const verifyRes = await fetch("http://localhost:5000/login/authverify", {
        method: "POST", // backend POST route
        headers: {
          "Content-Type": "application/json",
          Authorization: data.data.token,
        },
      });
      console.log("Huma Token:", data.data.token);
      const verifyData = await verifyRes.json();

      if (verifyRes.ok && verifyData.status) {
        alert("Login successful & token verified!");
        dispatch(showToast({ message: "Login successful & token verified!", type: "success" }))
        // Redirect to admin dashboard
        // window.location.href = "/admin/dashboard";
        navigate("/admin/dashboard")

      } else {
        alert("Token verification failed. Please login again.");
        localStorage.removeItem("adminToken");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-back">
  <form
    onSubmit={handleLogin}
    className="bg-white p-8 rounded-3xl  w-full max-w-md flex flex-col items-center shadow-2xl"
  >
    <img src="/assets/img/logo.png" className="w-36 mb-2" alt="Logo" />
    <h2 className="text-lg font-bold p-3 text-center font-roboto">Welcome To</h2>
    <h2 className="text-4xl font-thin mb-6 text-center font-bebasneu">Admin Login</h2>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="font-roboto w-full p-3 mb-4 border "
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="font-roboto w-full p-3 mb-4 border"
    />
    <button
      type="submit"
      className="w-full bg-brand-btn text-white py-3 hover:bg-brand-block hover:text-brand-btn font-roboto transition shadow-2xl"
    >
      Login
    </button>
    <p className="text-sm pt-5 text-black">Designed & Developed By{" "}<span className="font-semibold text-black font-roboto">Sufiyan Kagzi</span></p>
  </form>
</div>
  );
};

export default AdminLogin;