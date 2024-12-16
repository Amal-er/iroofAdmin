import React from "react";
import Header from "../../SalesDashboard/components/Header";
import Sidebar from "../../SalesDashboard/components/Sidebar";
import { useState } from "react";
import addnew from "../../SalesDashboard/assets/icons/adduser.png";
import plussquare from "../assets/icons/plussquare.png";
import eye from "../../SalesDashboard/assets/icons/eye.png";
import { Link } from "react-router-dom";

function FinalEstimate() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
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
          <div className="bg-white p-6 rounded-md shadow-md mb-6">
            <h1 className="text-3xl font-medium mb-4 text-[#2A2493]">
              Create Final Estimate
            </h1>
            <h2 className="text-xl font-medium mb-4 text-[#2A2493] pt-4">
              Select Client
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 ">
              {/* Row 1 */}
              <div className="flex flex-col px-10 ">
                <label className="text-sm font-medium text-[#15164A]">
                  Client Name
                </label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-full md:w-96 md:mt-2"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#15164A]">
                  Client ID
                </label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-full md:w-96 md:mt-2"
                  placeholder="Phone No"
                />
              </div>

              {/* Row 2 */}
            </form>

            <h2 className="text-xl font-medium mb-4 text-[#2A2493] pt-4 ">
              Client details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
              <div className="flex flex-col ">
                <label className="text-sm font-medium text-[#15164A]">
                  Phone no
                </label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-full md:mt-2"
                  placeholder="District"
                />
              </div>

              <div className="flex flex-col ">
                <label className="text-sm font-medium text-[#15164A]">
                  Place
                </label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-full md:mt-2"
                  placeholder="District"
                />
              </div>

              <div className="flex flex-col ">
                <label className="text-sm font-medium text-[#15164A]">
                  District
                </label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-full md:mt-2"
                  placeholder="District"
                />
              </div>
            </div>

            {/* Area Details */}
            <div className=" md:py-6 ">
              <h2 className="text-xl font-medium mb-4 text-[#2A2493]">
                Area 1
              </h2>

              <div className="border border-gray-200 px-3 py-5">
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                  <div className="flex flex-col ">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Roof Type
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                      <option className="text-[#F8FDFD]">Car Porch</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Roof Model
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                      <option className="text-[#F8FDFD]">
                        Normal Candiliver
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Height
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                      <option>Select Preference</option>
                    </select>
                  </div>
                </form>
                <div className="space-y-2">
                  {/* Material Dropdown */}
                  <div className="flex flex-col pt-5 ">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Material
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                      ISMb 150/ISM
                      <option>ISMb 150/ISM</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
                    <div className="flex flex-col  gap-4">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Span
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex flex-col  gap-5">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Length
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex flex-col  gap-4">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Height
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                  </div>
                  {/* Material2 Dropdown */}
                </div>
                <div className="space-y-2">
                  {/* Material Dropdown */}
                  <div className="flex flex-col pt-5">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Material
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                      <option>ISMb 150/ISM</option>
                    </select>
                  </div>

                  {/* ---------------- */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
                    <div className="flex  flex-col">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Span
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex  flex-col">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Length
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Height
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                  </div>
                  {/* Material2 Dropdown */}
                </div>
                <div className="space-y-2">
                  {/* Material Dropdown */}
                  <div className="flex flex-col pt-5 ">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Material
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                      <option>ISMb 150/ISM</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
                    <div className="flex flex-col ">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Span
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flexflex-col ">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Length
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Height
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                        placeholder="meter"
                      />
                    </div>
                  </div>
                </div>
                {/* ----------------------------- */}

                {/* --------------------------------- */}

                {/* Material2 Dropdown */}
              </div>
              {/* ---------------------------------------- */}
            </div>
            <h2 className="text-xl font-medium mb-4 text-[#2C2393]">
              Create Estimate
            </h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Total sq. ft
                </label>
                <input
                  className="mt-1 block w-full p-2 bg-gray-200 border border-gray-300 rounded-md"
                  placeholder="1023.54"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Total Cost
                </label>
                <input
                  className="mt-1 block w-full p-2 bg-gray-200 border border-gray-300 rounded-md"
                  placeholder="₹57800/-"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Work Status
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="₹1500/-"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Total Distance
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="₹500/-"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Sheeting(Labour)
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="₹59300/-"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Welding(Labour)
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="₹1000/-"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Trip type
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  <option>Local Trip</option>
                </select>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Total Trip
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Total Trip"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <label className="block text-sm font-medium text-[#15164A]">
                  Transportation Cost
                </label>
                <input
                  className="mt-1 block w-full p-2 border bg-gray-200 border-gray-300 rounded-md"
                  placeholder="State Name"
                />
              </div>
            </form>

            {/*  */}

            <div className="flex justify-center items-center gap-4 md:pt-10">
              <button
                className="bg-[#3C3EC3] px-5  text-white py-2 rounded-xl"
                onClick={toggleBoxVisibility}
              >
                Create Final Estimate
              </button>
            </div>
          </div>

          {/* Tables */}
        </div>
        {isBoxVisible && (
          <div className="p-6 space-y-8 bg-gray-100">
            {/* Dashboard Header */}

            {/* Action Cards */}
            <div className="bg-white p-6 rounded-md shadow-md mb-6">
              <h1 className="text-3xl font-medium mb-4 text-[#2A2493]">
                Final Estimate
              </h1>
              <div className="flex flex-row px-10 gap-10 py-6 ">
                <label className="flex items-center gap-2 text-[#15164A]">
                  <input
                    type="radio"
                    name="option"
                    value="quotation"
                    className="form-radio "
                  />
                  Quotation
                </label>
                <label className="flex items-center gap-2 text-[#15164A]">
                  <input
                    type="radio"
                    name="option"
                    value="estimate"
                    className="form-radio text-[#15164A]"
                  />
                  Estimate
                </label>
              </div>

              <form className="space-y-6">
                {/* Row 1: 3 Equal Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      To
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Client Address
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Phone No
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>

                {/* Row 2: 2 Fields, First Smaller */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 md:col-span-1">
                    <label className="text-sm font-medium text-[#15164A]">
                      Project Name
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Number"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#15164A]">
                      Quotation number/ Financial year
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Project Name"
                    />
                  </div>
                </div>

                {/* Row 3: 3 Equal Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Thickness
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Thickness"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Sheet Profile
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Profile"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Color
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Color"
                    />
                  </div>
                </div>

                {/* Row 4: 1 Large Field */}
                <div className="grid grid-cols-1">
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Add Notes
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Notes"
                    />
                  </div>
                </div>

                {/* Row 5: 3 Equal Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Total Span
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Span"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Total Length
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Length"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Total Height
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Height"
                    />
                  </div>
                </div>

                {/* Row 6: 3 Equal Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Total Area
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Area"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Total Sheeting
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Sheeting"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#15164A]">
                      Total Cost
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full mt-2 bg-[#EEEEEE]"
                      placeholder="Enter Cost"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-center gap-3">
                  <Link to="/viewquotation">
                    <button className="border border-gray-100 p-2 flex justify-center items-center gap-1 text-[#5B5B5B]">
                      <img src={eye} alt="" />
                      view quatation
                    </button>
                  </Link>
                  <button className="border border-gray-100 p-2">
                    Download
                  </button>
                </div>
              </form>

              {/* Area Details */}

              {/*  */}
            </div>

            {/* Tables */}
          </div>
        )}
      </div>
    </div>
  );
}

export default FinalEstimate;
