import { MdOutlineClose } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../Store/Slices/toast_slice";
import axios from "axios";

const Gender = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [gendername, setGenderName] = useState("");
  const [gender, setGenders] = useState([]);

  const fetchGenders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/gender/getgender");
      setGenders(res.data);
    } catch (err) {
      console.error(err);
      dispatch(showToast({ message: "Failed to fetch gender", type: "error" }));
    }
  };

  useEffect(() => {
    fetchGenders();
  }, []);

  // 🔥 Add new group
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gendername.trim()) {
      dispatch(showToast({ message: "Gender name is required", type: "error" }));
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/gender/newgender", {
        genderid: 1,
        gendername: gendername,
      });
      if (res.data.data.insertId) {
        dispatch(showToast({ message: "Gender Successfully Created", type: "success" }));
        setGenderName("");
        
        fetchGenders(); // refresh table
      }
    } catch (err) {
      console.error(err);
      const errMsg = err?.response?.data?.message || "Something went wrong";
      dispatch(showToast({ message: errMsg, type: "error" }));
    }
  };

  // 🔥 Delete group
  const deleteGender = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/gender/deletegender/${id}`);
      dispatch(showToast({ message: res.data.message, type: "error" }));
      fetchGenders();
    } catch (err) {
      console.error(err);
      dispatch(showToast({ message: "Failed to delete gender", type: "error" }));
    }
  };

  // 🔥 Modal auto focus
  useEffect(() => {
    if (showModal) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [showModal]);

  useEffect(() => {
      const handleEsc = (e) => {
          if (e.key === "Escape" && showModal) {
              setShowModal(false);
          }
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-roboto">Gender</h2>
        <button
          className="font-roboto text-sm bg-brand-back text-white px-4 py-2 hover:bg-black hover:text-white"
          onClick={() => setShowModal(true)}
        >
          + Add Gender
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow border">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gender.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{item.gendername}</td>
                <td className="p-3 flex gap-2">
                  <button className="px-3 py-1 bg-yellow-400 rounded text-white">Edit</button>
                  <button
                    className="px-3 py-1 bg-red-500 rounded text-white"
                    onClick={() => deleteGender(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white p-5 rounded-3xl shadow w-96">
              <div className="flex items-center justify-between px-2 pb-4">
                <div className="flex items-center gap-3">
                  <FaLayerGroup className="text-xl" />
                  <h3 className="text-lg font-bold font-roboto">Gender</h3>
                </div>
                <MdOutlineClose
                  className="cursor-pointer text-xl text-red-600 hover:text-red-800"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Enter name"
                  value={gendername}
                  onChange={(e) => setGenderName(e.target.value)}
                  className="font-roboto w-full border p-2 mb-4"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 font-roboto text-sm hover:border"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-black hover:bg-brand-back text-white px-6 py-2 font-roboto text-sm">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gender;