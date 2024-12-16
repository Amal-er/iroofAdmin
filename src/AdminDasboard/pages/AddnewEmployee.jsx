import { useState } from "react";
import Sidebar from "../components/SideNav";
import Header from "../components/Header";

function AddnewEmployee() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#4c48a5] mb-6">
            Add New Employee
          </h1>

          <div className="grid grid-cols-3 gap-6">
            {/* Employee Name */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee Name
              </label>
            </div>

            {/* Employee ID */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee ID
              </label>
            </div>

            {/* Employee Phone Number */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee Phone Number
              </label>
            </div>

            {/* Employee Email ID */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee Mail ID
              </label>
            </div>

            {/* Employee Designation */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee Designation
              </label>
            </div>

            {/* Employee Password */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee Password
              </label>
            </div>

            {/* Employee Location */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee Location
              </label>
            </div>

            {/* Employee Address */}
            <div className="relative w-full">
              <input
                type="text"
                id="employee-name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <label
                htmlFor="employee-name"
                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Employee Address
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center items-center gap-10">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Save
            </button>
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddnewEmployee;
