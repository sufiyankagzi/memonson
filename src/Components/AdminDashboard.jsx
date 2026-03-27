import React from 'react'

const AdminDashboard = () => {
  return (
    <>
    <div className="space-y-6">

      {/* Title */}
      <h2 className="text-2xl font-bold font-roboto text-gray-800">
        Dashboard
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Total Items</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">120</h3>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Categories</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">10</h3>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Orders</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">75</h3>
        </div>

      </div>

    </div>
    </>
  )
}

export default AdminDashboard