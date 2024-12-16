import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideNav";
import { useState } from "react";
import addnew from "../assets/icons/adduser.png";
import plussquare from "../assets/icons/plussquare.png";

// import addnew from "../assets/images";

function CostAdding() {
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
          <h1 className="text-3xl font-normal text-[#4c48a5]">Cost Adding</h1>
          {/* Action Cards */}
          <div className="bg-white p-6 rounded-md shadow-md mb-6 ">
            <h2 className="text-2xl font-normal mb-4 text-[#2A2493]">
              Travel Expense
            </h2>
            <form className="space-y-6">
              {/* Row 1 - 3 Columns */}
              <div className="col md:flex gap-10 px-5 ">
                <div className="flex flex-col ">
                  <label className="text-sm font-medium text-[#15164A]">
                    Kilometer
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md w-64"
                    placeholder="Car Porch"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-[#15164A]">
                    Cost
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md w-64"
                    placeholder="Normal Cantilevel"
                  />
                </div>
              </div>

              {/* Row 2 - 2 Columns */}

              {/* Row 3 - 3 Columns */}

              <div className="flex justify-center gap-5 px-10 ">
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
          {/* ------------------ */}
          <h1 className="text-3xl font-normal text-[#4c48a5]">Labour Cost</h1>
          <div className="bg-white p-6 rounded-md shadow-md mb-6  ">
            <div className="border border-gray-100 p-5">
              <h2 className="text-2xl font-normal mb-4 text-[#2A2493]">
                Sheeting
              </h2>
              <form className="space-y-6">
                {/* Row 1 - 3 Columns */}
                <div className="col md:flex gap-10 px-5 ">
                  <div className="flex flex-col ">
                    <label className="text-sm font-medium text-[#15164A]">
                      Local Work
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-64"
                      placeholder="₹500/-"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-[#15164A]">
                      Site Work
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-64"
                      placeholder="₹800/-"
                    />
                  </div>
                </div>

                {/* Row 2 - 2 Columns */}

                {/* Row 3 - 3 Columns */}

                <div className="flex justify-center gap-5 px-10 ">
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

            <div className="border border-gray-100 p-5 md:my-6">
              <h2 className="text-2xl font-normal mb-4 text-[#2A2493]">
                Welding
              </h2>
              <form className="space-y-6">
                {/* Row 1 - 3 Columns */}
                <div className="col md:flex gap-10 px-5 ">
                  <div className="flex flex-col ">
                    <label className="text-sm font-medium text-[#15164A]">
                      Local Work
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-64"
                      placeholder="₹500/-"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-[#15164A]">
                      Site Work
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-64"
                      placeholder="₹800/-"
                    />
                  </div>
                </div>

                {/* Row 2 - 2 Columns */}

                {/* Row 3 - 3 Columns */}

                <div className="flex justify-center gap-5 px-10 ">
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
          </div>

          {/* ------------------------ */}
          <h1 className="text-3xl font-normal text-[#4c48a5]">GST</h1>
          <div className="bg-white p-6 rounded-md shadow-md mb-6 ">
            <h2 className="text-2xl font-normal mb-4 text-[#2A2493]">
              Products
            </h2>
            <form className="space-y-6">
              {/* Row 1 - 3 Columns */}
              <div className="col md:flex gap-10 px-5 ">
                <div className="flex flex-col ">
                  <label className="text-sm font-medium text-[#15164A]">
                    GST%
                  </label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md w-64"
                    placeholder="18%"
                  />
                </div>
              </div>

              {/* Row 2 - 2 Columns */}

              {/* Row 3 - 3 Columns */}

              <div className="flex justify-center gap-5 px-10 ">
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

export default CostAdding;
