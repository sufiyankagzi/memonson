import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://memonson.onrender.com/login/loginuser", {
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
      const verifyRes = await fetch("https://memonson.onrender.com/login/authverify", {
        method: "POST", // backend POST route
        headers: {
          "Content-Type": "application/json",
          Authorization: data.data.token,
        },
      });

      const verifyData = await verifyRes.json();

      if (verifyRes.ok && verifyData.status) {
        alert("Login successful & token verified!");
        // Redirect to admin dashboard
        window.location.href = "/admin/dashboard";
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;