import React, { useState } from "react";
import Sidebar from "../components/SideNav";
import Header from "../components/Header";

const Rates = () => {
  const [activeTab, setActiveTab] = useState("Materials");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const tabs = ["Materials", "Thickness Rate", "Transportation"];

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

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md p-4 md:m-5 m-4">
          <div className="flex gap-4 sm:gap-6 mb-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-lg font-semibold ${
                  activeTab === tab
                    ? "text-[#4c48a5] border-b-2 border-[#4c48a5]"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "Materials" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Items</h2>
                <form className="grid sm:grid-cols-6 grid-cols-1 gap-2 px-6">
                  <div className="border rounded-lg p-3 shadow flex justify-center items-center">
                    <p className="text-sm font-medium">Ms-Beam</p>
                  </div>
                  <div className="border rounded-lg p-3 shadow flex justify-center items-center">
                    <p className="text-sm font-medium">GI</p>
                  </div>
                  <div className="border rounded-lg p-3 shadow flex justify-center items-center">
                    <p className="text-sm font-medium">Ms-Sheet</p>
                  </div>
                  <div className="border rounded-lg p-3 shadow flex justify-center items-center">
                    <p className="text-sm font-medium">Ms-Channel</p>
                  </div>
                  <div className="border rounded-lg p-3 shadow flex justify-center items-center">
                    <p className="text-sm font-medium">MS Sq Tube/pip</p>
                  </div>
                  <div className="border rounded-lg p-3 shadow flex justify-center items-center">
                    <p className="text-sm font-medium">GP</p>
                  </div>
                </form>

                <form className="grid grid-cols-1 md:grid-cols-3  md:pt-10 gap-3 ">
                  {/* Row 1 */}
                  <div className="flex flex-col gap-3  ">
                    <label className="text-sm font-medium text-[#15164A]">
                      Rate Per Meter
                    </label>
                    <input
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-md w-80"
                      placeholder="1"
                    />
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <label className="text-sm font-medium text-[#15164A]">
                      Including Tax
                    </label>
                    <input
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-md w-80"
                      placeholder="1"
                    />
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <label className="text-sm font-medium text-[#15164A]">
                      Last Updated Date
                    </label>
                    <input
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-md w-80"
                      placeholder="1"
                    />
                  </div>

                  {/* Row 2 */}
                </form>
                <div className="flex justify-left items-center  md:pt-5 gap-28 ">
                  <div className="flex flex-col ">
                    <label className="text-sm font-medium text-[#15164A]">
                      Bending Cost For C Channel Per Meter
                    </label>
                    <input
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-md w-[480px] mt-3 "
                      placeholder="District"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-[#15164A]">
                      Bending Cost For Gutter Per Meter
                    </label>
                    <input
                      type="text"
                      className="flex-1 p-2  border border-gray-300 rounded-md w-[480px]"
                      placeholder="District"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 md:pt-10">
                  <button className="bg-blue-600 px-5  text-white py-2 rounded-md">
                    Add
                  </button>
                  <button className="bg-red-600 px-5 text-white py-2 rounded-md">
                    Cancel
                  </button>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                {/* Items List */}
                {/* <div className="mt-6 grid sm:grid-cols-2 grid-cols-1 gap-2">
                  <div className="border p-4 rounded-lg">
                    <label className="block mb-2">
                      <input type="radio" name="item" className="mr-2" />
                      ISA 25*25*6mm
                    </label>
                  </div>
                </div> */}

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* First Column */}
                  <div className="col-span-1 space-y-3">
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISA 25*25*6mm</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISA 40*40*6mm</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISA 50*50*6mm</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISA 65*65*6mm</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISA 75*75*6mm</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISA 90*90*6mm</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 100</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 100</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 125</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 150</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 200</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 300</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 350</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 400</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 450</label>
                    </div>
                    <div className="border rounded-lg p-3 shadow flex items-center gap-2">
                      <input type="radio" name="material" />
                      <label>ISMB 500</label>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="col-span-1 space-y-10">
                    <div className="flex flex-col gap-2">
                      <label>Quantity</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    {/* <div className="flex flex-col gap-2">
                      <label>Rate Per Meter</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div> */}
                    <div className="flex flex-col gap-2">
                      <label>Std.Kg</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Kg/Meter</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Surface Area Per Meter</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Painting Cost/Zink Dipping Cost</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex gap-4 mt-4 md:pl-72">
                      <button className="bg-blue-600 px-4 py-2 text-white rounded-md">
                        Add
                      </button>
                      <button className="bg-red-600 px-4 py-2 text-white rounded-md">
                        Cancel
                      </button>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className="col-span-1 md:space-y-36 ">
                    <div className="flex flex-col gap-2">
                      <label>Surface Area Per Meter</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:pt-2">
                      <label>Painting Cost/Zinc Dipping Cost</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Thickness Rate" && (
              <div className="bg-white rounded-xl shadow-md p-4 md:m-5 m-4">
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="px-4 py-2 border border-gray-300">
                          Thickness
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          Base Rate Per Weight
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          18% Tax
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          Transportation
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          Loading & Unloading
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          Final Rate Per Kg
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          Rate Per Sq.ft
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          Round Off
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                          Selling Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Example Row */}
                      {[...Array(10)].map((_, index) => (
                        <tr key={index} className="text-center">
                          <td className="px-4 py-2 border border-gray-300">
                            0.{index + 5}
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            00
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            00
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            05
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            1.5
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            8.5
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            6.29
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            07
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            07
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Add Rates Section */}
                <div className="mt-6">
                  <h2 className="text-2xl font-normal text-[#2A2493]">
                    Add Rates
                  </h2>
                  <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {/* Input Fields */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Thickness
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>0.5</option>
                        <option>0.6</option>
                        <option>0.7</option>
                      </select>
                    </div>
                    <div className="">
                      <label className="text-sm font-medium text-gray-700 ">
                        18% Tax
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="00"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Margin
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="00"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Base Rate Per Weight
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="00"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Final Rate Per Kg
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="1.5"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Transportation
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="1.5"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Loading & Unloading
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="8.5"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Round Off
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="1.5"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Selling Price
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="07"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Rate Per Sq.Ft
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="07"
                      />
                    </div>
                  </form>
                  <div className="flex gap-4 mt-4 justify-center">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                      Add
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Transportation" && (
              <div className="bg-white rounded-xl shadow-md p-4 md:m-5 m-4">
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
                        <td className="px-4 py-2 border border-gray-300">
                          2500
                        </td>
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
                        <td className="px-4 py-2 border border-gray-300">
                          150
                        </td>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
