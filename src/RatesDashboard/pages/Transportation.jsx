import React, { useState } from "react";
import Header from "../../RatesDashboard/components/Header";
import Sidebar from "../../RatesDashboard/components/Sidebar";

const Transportation = () => {
  const [activeTab, setActiveTab] = useState("Materials");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col  bg-gray-100">
        {/* Header */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="px-5 mt-3">
          <h1 className="text-3xl font-normal text-[#4c48a5] mb-6">
            Transportation
          </h1>
        </div>
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md p-4 m-4 ">
          {/* Tab Content */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-4   ">
              {/* Table Section */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse border border-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th
                        className="px-4 py-2 border border-gray-300"
                        colSpan="2"
                      >
                        Minimum Charge
                      </th>
                      <th className="px-4 py-2 border border-gray-300">
                        Minimum Km Covered
                      </th>
                      <th className="px-4 py-2 border border-gray-300">
                        Per Km
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="px-4 py-2 border border-gray-300">2500</td>
                      <td className="px-4 py-2 border border-gray-300">
                        Trailer
                      </td>
                      <td className="px-4 py-2 border border-gray-300">20</td>
                      <td className="px-4 py-2 border border-gray-300">35</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border border-gray-300">
                        2,500/-
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        Eicher
                      </td>
                      <td className="px-4 py-2 border border-gray-300">20</td>
                      <td className="px-4 py-2 border border-gray-300">150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Petrol Charge Section */}
              <div className="mt-6 flex items-center gap-10">
                <h2 className="text-lg font-bold text-gray-800">
                  Petrol Charge
                </h2>
                <input
                  type="text"
                  className="mt-2 w-64 p-2 border border-gray-300 rounded-md"
                  value="115/-"
                  readOnly
                />
              </div>

              {/* Edit Rates Section */}
              <div className="mt-6">
                <h2 className="text-2xl font-normal text-[#2A2493]">
                  Edit Rates
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Select Person
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Trailer</option>
                      <option>Eicher</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Minimum Charge
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="2,500/-"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Minimum Km Covered
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="20km"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Per Km
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="35"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Petrol Charge
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="115/-"
                    />
                  </div>
                </form>
                <div className="flex gap-4 mt-4 justify-center items-center py-14">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Add
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
