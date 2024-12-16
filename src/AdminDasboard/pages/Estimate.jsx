import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideNav";
import { useState } from "react";
import addnew from "../assets/icons/adduser.png";
import plussquare from "../assets/icons/plussquare.png";

// import addnew from "../assets/images";

function Estimate() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

  // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

  // --------------------------

  // ---//---//---//---//---//---//---//---//---//---//---//---//---//
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const createCustomer = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  // ---//---//---//---//---//---//---//---//---//---//---//---//-

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
          <h1 className="text-3xl font-medium text-[#2A2493]">
            Create Estimate
          </h1>

          {/* Action Cards */}

          {/* Area Details */}
          <div className="  ">
            <h2 className="text-xl font-medium mb-4 text-[#2A2493]">Area 1</h2>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5">
              <div className="flex justify-center items-center gap-5">
                <label className="block text-sm font-medium text-[#15164A]">
                  Roof Type
                </label>
                <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                  <option>Select Type</option>
                </select>
              </div>
              <div className="flex justify-center items-center gap-5">
                <label className="block text-sm font-medium text-[#15164A]">
                  Roof Model
                </label>
                <select className="mt-1 block w-52 p-2 border border-gray-300 rounded-md">
                  <option>Select Model</option>
                </select>
              </div>
              <div className="flex justify-center items-center gap-4">
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
              <div>
                <select className=" p-2 border border-gray-300 rounded-md md:mt-4">
                  <option>Material</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5 ">
                <div className="flex justify-center items-center gap-4">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Span
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                    placeholder="meter"
                  />
                </div>
                <div className="flex justify-center items-center gap-5">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Length
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                    placeholder="meter"
                  />
                </div>
                <div className="flex justify-center items-center gap-4">
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
              <div>
                <select className=" p-2 border border-gray-300 rounded-md md:mt-4">
                  <option>Materials</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5 ">
                <div className="flex justify-center items-center gap-3">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Span
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                    placeholder="meter"
                  />
                </div>
                <div className="flex justify-center items-center gap-5">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Length
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                    placeholder="meter"
                  />
                </div>
                <div className="flex justify-center items-center gap-4">
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
              <div>
                <select className=" p-2 border border-gray-300 rounded-md md:mt-4">
                  <option>Material</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5 ">
                <div className="flex justify-center items-center gap-3">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Span
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                    placeholder="meter"
                  />
                </div>
                <div className="flex justify-center items-center gap-5">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Length
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                    placeholder="meter"
                  />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Height
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                    placeholder="meter"
                  />
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="flex md:py-3 items-center justify-between  gap-5">
                <label className="block text-sm font-medium text-[#15164A]">
                  Comments
                </label>
                <textarea
                  name=""
                  id=""
                  className="border border-gray-300 rounded-md w-full md:w-[90%]"
                ></textarea>
              </div>

              <div className="flex items-center justify-between w-full md:px-10">
                {/* Upload Field */}
                <div className="flex items-center">
                  {/* <label className="flex flex-col items-center max-w-sm p-2 bg-gray-100 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mb-1 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 16l4-4m0 0l4 4m-4-4v12m12 0h-4m4 0a4 4 0 01-4-4m0-4l-4 4m0 0l4-4m0 0v12"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">Choose File</span>
                    <input type="file" className="hidden" />
                  </label> */}
                  {/* <span className="ml-4 text-sm text-gray-500">
                    No file chosen
                  </span> */}
                </div>

                {/* H1 Element */}
                <div className="flex items-center gap-1">
                  <h1 className="text-lg font-semibold underline">
                    Add New Area
                  </h1>
                  <img src={plussquare} alt="" />
                </div>
              </div>

              {/* --------------------------------- */}

              {/* Material2 Dropdown */}
            </div>
            {/* ---------------------------------------- */}
          </div>
          <h2 className="text-xl font-medium mb-4 text-[#2C2393]"> Estimate</h2>

          <form className="col md:flex gap-6">
            <div className="flex justify-center items-center gap-5">
              <label className="block text-sm font-medium text-[#15164A]">
                Total sq. ft
              </label>
              <input
                className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                placeholder="1023.54"
              />
            </div>
            <div className="flex justify-center items-center gap-5">
              <label className="block text-sm font-medium text-[#15164A]">
                Total Cost
              </label>
              <input
                className="mt-1 block w-52 p-2 border border-gray-300 rounded-md "
                placeholder="₹57800/-"
              />
            </div>
          </form>

          <div className="flex md:pt-6 gap-12">
            <div className="flex  justify-center items-center">
              <label className="w-1/4 text-sm font-medium text-[#15164A]">
                Comments
              </label>
              <textarea
                type="text"
                className="flex-1 p-2 md:w-96 border border-gray-300 rounded-md w-96 "
                placeholder="Comments"
              />
            </div>
          </div>
          <hr className="border-t border-gray-300 my-4" />

          <div>
            <h2 className="text-xl font-medium mb-4"> Add Customer ?</h2>
            <div className="flex gap-5 px-10">
              <button
                className="bg-blue-600 p-2 rounded-md text-white"
                onClick={createCustomer}
              >
                Create
              </button>
              <button className="bg-red-600 p-2 rounded-md text-white">
                {" "}
                Cancel
              </button>
            </div>
          </div>

          {/* Tables */}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-6xl p-6 rounded-lg relative bg-white shadow-md max-h-screen overflow-y-auto md:mt-24 md:ml-64 md:py-10">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <div className="bg-white p-6 rounded-md shadow-md mb-6">
              <h2 className="text-xl font-medium mb-4 text-[#2A2493]">
                Add New Client
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Row 1 */}
                <div className="flex  justify-center items-center">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="Name"
                  />
                </div>
                <div className="flex  justify-center items-center">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="Phone No"
                  />
                </div>
                <div className="flex  justify-center items-center">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Place
                  </label>
                  <input
                    type="text"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="Place"
                  />
                </div>

                {/* Row 2 */}
                <div className="flex  justify-center items-center">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    District
                  </label>
                  <input
                    type="text"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="District"
                  />
                </div>

                <div className="flex  justify-center items-center">
                  <label className="w-1/4 text-sm font-medium text-[#15164A]">
                    Comments
                  </label>
                  <textarea
                    type="text"
                    className="flex-1 p-2 md:w-96 border border-[#1D1E66] rounded-md"
                    placeholder="Comments"
                  />
                </div>

                {/* Row 2 */}
              </form>
              {/*  */}{" "}
              <h2 className="text-xl font-medium mb-4 text-[#2A2493] md:py-3">
                Schedule Site Visit
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Row 1 */}
                <div className="flex  justify-center items-center">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="date"
                  />
                </div>
                <div className="flex  justify-center items-center">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Time
                  </label>
                  <input
                    type="time"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="Time"
                  />
                </div>
                <div className="flex  justify-center items-center">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Status
                  </label>
                  <select
                    type="select"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="status"
                  />
                </div>

                {/* Row 2 */}

                <div className="flex  justify-center items-center ">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Comments
                  </label>
                  <input
                    type="text"
                    className="flex-1 p-2 border border-[#1D1E66] rounded-md"
                    placeholder="District"
                  />
                </div>

                <div className="flex  justify-center items-center ">
                  <label className="w-1/4 text-sm font-medium text-[#15164A]">
                    Assign To
                  </label>
                  <select
                    type="text"
                    className="flex-1 p-2 md:w-96 border border-[#1D1E66] rounded-md"
                    placeholder="Comments"
                  />
                </div>

                {/* Row 3 */}
              </form>
              <div className="flex justify-center items-center gap-4 md:pt-10">
                <button className="bg-blue-600 px-5  text-white py-2 rounded-md">
                  Add
                </button>
                <button className="bg-red-600 px-5 text-white py-2 rounded-md">
                  Cancel
                </button>
              </div>
              {/* Area Details */}
              <div className=" md:py-6 ">
                <h2 className="text-xl font-medium mb-4 text-[#2A2493] md:py-3">
                  Estimate
                </h2>
                <h2 className="text-xl font-medium mb-4">Area 1</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5">
                  <div className="flex justify-center items-center gap-5">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Roof Type
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md">
                      <option>Select Type</option>
                    </select>
                  </div>
                  <div className="flex justify-center items-center gap-5">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Roof Model
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md">
                      <option>Select Model</option>
                    </select>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Height
                    </label>
                    <select className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md">
                      <option>Select Preference</option>
                    </select>
                  </div>
                </form>
                <div className="space-y-2">
                  {/* Material Dropdown */}
                  <div>
                    <select className=" p-2 border border-[#1D1E66] rounded-md md:mt-4">
                      <option>Material</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5 ">
                    <div className="flex justify-center items-center gap-4">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Span
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Length
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Height
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                  </div>
                  {/* Material2 Dropdown */}
                </div>
                <div className="space-y-2">
                  {/* Material Dropdown */}
                  <div>
                    <select className=" p-2 border border-[#1D1E66] rounded-md md:mt-4">
                      <option>Materials</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5 ">
                    <div className="flex justify-center items-center gap-3">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Span
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Length
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Height
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                  </div>
                  {/* Material2 Dropdown */}
                </div>
                <div className="space-y-2">
                  {/* Material Dropdown */}
                  <div>
                    <select className=" p-2 border border-[#1D1E66] rounded-md md:mt-4">
                      <option>Material</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-5 ">
                    <div className="flex justify-center items-center gap-3">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Span
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Length
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <label className="block text-sm font-medium text-[#15164A]">
                        Height
                      </label>
                      <input
                        className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                        placeholder="meter"
                      />
                    </div>
                  </div>
                  {/* ----------------------------- */}
                  <div className="flex md:py-3 items-center justify-between  gap-5">
                    <label className="block text-sm font-medium text-[#15164A]">
                      Comments
                    </label>
                    <textarea
                      name=""
                      id=""
                      className="border border-[#1D1E66] rounded-md w-full md:w-[90%]"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between w-full md:px-10">
                    {/* Upload Field */}
                    <div className="flex items-center">
                      <label className="flex flex-col items-center max-w-sm p-2 bg-gray-100 border-2 border-[#1D1E66] border-dashed rounded-md cursor-pointer hover:bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mb-1 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 16l4-4m0 0l4 4m-4-4v12m12 0h-4m4 0a4 4 0 01-4-4m0-4l-4 4m0 0l4-4m0 0v12"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">
                          Choose File
                        </span>
                        <input type="file" className="hidden" />
                      </label>
                      <span className="ml-4 text-sm text-gray-500">
                        No file chosen
                      </span>
                    </div>

                    {/* H1 Element */}
                    <div className="flex items-center gap-1">
                      <h1 className="text-lg font-semibold underline">
                        Add New Area
                      </h1>
                      <img src={plussquare} alt="" />
                    </div>
                  </div>

                  {/* --------------------------------- */}

                  {/* Material2 Dropdown */}
                </div>
                {/* ---------------------------------------- */}
              </div>
              <h2 className="text-xl font-medium mb-4 text-[#2C2393]">
                {" "}
                Estimate
              </h2>
              <form className="col md:flex gap-6">
                <div className="flex justify-center items-center gap-5">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Total sq. ft
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                    placeholder="1023.54"
                  />
                </div>
                <div className="flex justify-center items-center gap-5">
                  <label className="block text-sm font-medium text-[#15164A]">
                    Total Cost
                  </label>
                  <input
                    className="mt-1 block w-52 p-2 border border-[#1D1E66] rounded-md "
                    placeholder="₹57800/-"
                  />
                </div>
              </form>
              <div className="flex md:pt-6 gap-12">
                <div className="flex  justify-center items-center">
                  <label className="w-1/4 text-sm font-medium text-[#15164A]">
                    Comments
                  </label>
                  <textarea
                    type="text"
                    className="flex-1 p-2 md:w-96 border border-[#1D1E66] rounded-md w-96 "
                    placeholder="Comments"
                  />
                </div>
                <div className="flex  justify-center items-center gap-2">
                  <label className="w-1/3 text-sm font-medium text-[#15164A]">
                    Status
                  </label>
                  <select className=" p-2 border border-[#1D1E66] rounded-md ">
                    <option className="text-[#15164A]">Site Visit</option>
                  </select>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Estimate;
