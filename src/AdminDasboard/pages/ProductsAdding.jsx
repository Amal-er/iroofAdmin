import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideNav";
import { useState } from "react";
import addnew from "../assets/icons/adduser.png";
import plussquare from "../assets/icons/plussquare.png";

// import addnew from "../assets/images";

function ProductsAdding() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

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

        {/* Dashboard Content */}
        <div className="p-6 space-y-8 bg-gray-100">
          {/* Dashboard Header */}

          {/* Action Cards */}
          <div className="bg-white p-6 rounded-md shadow-md mb-6 ">
            <h2 className="text-2xl font-medium mb-4 text-[#2A2493]">
              Product Adding
            </h2>
            <form className="space-y-6">
              {/* Row 1 - 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#15164A]">
                    Roof Type
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Car Porch"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#15164A]">
                    Roof Model
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Normal Cantilevel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#15164A]">
                    Roof Preference
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Double car Parking"
                  />
                </div>
              </div>

              {/* Row 2 - 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col ">
                  <label className="text-sm font-medium text-[#15164A]">
                    Material
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md md:w-[350px]"
                    placeholder="ISMb 150/ISM"
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="text-sm font-medium text-[#15164A]">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="p-2 border border-gray-300 rounded-md md:w-[350px]"
                  />
                </div>
              </div>

              {/* Row 3 - 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#15164A]">
                    Span
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="200m"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#15164A]">
                    Length
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="250m"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#15164A]">
                    Height
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="300m"
                  />
                </div>
              </div>
              <div className="flex items-end justify-end gap-1">
                <h1 className="text-lg font-medium underline ">
                  Add New Material
                </h1>
                <img src={plussquare} alt="" />
              </div>

              <div className="flex justify-center gap-5 px-10 md:py-20">
                <button className="bg-blue-600 p-2 rounded-md text-white px-5">
                  Add
                </button>
                <button className="bg-red-600 p-2 rounded-md text-white">
                  {" "}
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Tables */}
        </div>
      </div>
    </div>
  );
}

export default ProductsAdding;
