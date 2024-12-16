import React, { useState } from "react";
import Header from "../../RatesDashboard/components/Header";
import Sidebar from "../../RatesDashboard/components/Sidebar";

const Materials = () => {
  const [activeTab, setActiveTab] = useState("Materials");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const handlePopupToggle2 = () => {
    setIsPopupVisible2(!isPopupVisible2);
  };

  return (
    <>
      <div className="flex min-h-screen  bg-gray-100">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col   bg-gray-100">
          {/* Header */}
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="px-5 mt-3">
            <h1 className="text-3xl font-normal text-[#4c48a5] mb-6">
              Materials
            </h1>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md p-4 md:m-5 m-4">
            {/* Tab Content */}
            <div>
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
                  <button className="bg-[#3C3EC3] px-8  text-white py-2 rounded-md">
                    Add
                  </button>
                  <button className="bg-red-600 px-5 text-white py-2 rounded-md">
                    Cancel
                  </button>
                </div>

                <div className="flex justify-end md:pr-36">
                  <p className="text-black">
                    Click Here{" "}
                    <span
                      className="text-[#0070FF] cursor-pointer"
                      onClick={handlePopupToggle2}
                    >
                      To Add New Iteam
                    </span>{" "}
                  </p>
                </div>
                {isPopupVisible2 && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                      <h1 className="text-3xl font-light text-[#2A2493]">
                        Add New item
                      </h1>
                      <form className="py-3">
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="employee-name"
                            placeholder=" "
                            className="peer mt-5 w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
                          />
                          <label
                            htmlFor="employee-name"
                            className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                          >
                            Add New Item
                          </label>
                        </div>

                        <div className="flex justify-center items-center py-7 gap-5">
                          <button
                            type="submit"
                            className="bg-[#3C3EC3] text-white py-2 px-8 rounded-lg"
                          >
                            Add
                          </button>
                          <button
                            type="button"
                            className="bg-red-600 text-white py-2 px-4 rounded-lg mr-2"
                            onClick={handlePopupToggle2}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

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
                    <div className="flex justify-end md:pl-30">
                      <p className="text-black">
                        Click Here{" "}
                        <span
                          className="text-[#0070FF] cursor-pointer"
                          onClick={handlePopupToggle}
                        >
                          To Add New Materails
                        </span>{" "}
                      </p>
                    </div>
                    {isPopupVisible && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                          <h1 className="text-3xl font-light text-[#2A2493]">
                            Add New Materials
                          </h1>
                          <form className="py-3">
                            <div className="relative w-full">
                              <input
                                type="text"
                                id="employee-name"
                                placeholder=" "
                                className="peer mt-5 w-full border border-gray-300 rounded-lg p-2 pt-5 focus:outline-none focus:ring focus:ring-blue-300"
                              />
                              <label
                                htmlFor="employee-name"
                                className="absolute left-2 -top-2 text-blue-600 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                              >
                                Enter material name
                              </label>
                            </div>

                            <div className="flex justify-center items-center py-7 gap-5">
                              <button
                                type="submit"
                                className="bg-[#3C3EC3] text-white py-2 px-8 rounded-lg"
                              >
                                Add
                              </button>
                              <button
                                type="button"
                                className="bg-red-600 text-white py-2 px-4 rounded-lg mr-2"
                                onClick={handlePopupToggle}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
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
                      <button className="bg-[#3C3EC3] px-8 py-2 text-white rounded-md">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Materials;
