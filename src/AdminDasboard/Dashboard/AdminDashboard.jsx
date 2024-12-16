import { useState } from "react";

import Header from "../components/Header";
import addnew from "../assets/icons/adduser.png";
import addclients from "../assets/icons/addclients.png";
import addestimate from "../assets/icons/addestimate.png";
import SideNav from "../components/SideNav";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const OngoingProject = [
    {
      id: 1,
      name: "Kevin",
      phone: "+91 9867 5433 33",
      location: "Kochi",
      roof: "Car Porch",
      status: "On-going",
    },
    {
      id: 2,
      name: "Marley",
      phone: "+91 8990 3444 89",
      location: "Kollam",
      roof: "Warehouse",
      status: "On-going",
    },
    {
      id: 3,
      name: "Gustavo",
      phone: "+91 9867 5433 33",
      location: "Thrissur",
      roof: "Car Porch",
      status: "On-going",
    },
    {
      id: 4,
      name: "Chance",
      phone: "+91 8843 8943 32",
      location: "Palakkad",
      roof: "Car Porch",
      status: "Pending",
    },
    {
      id: 5,
      name: "Marley",
      phone: "+91 9867 5433 33",
      location: "Aluva",
      roof: "Auditorium",
      status: "Pending",
    },
    {
      id: 6,
      name: "Miracle",
      phone: "+91 7887 6464 55",
      location: "Kochi",
      roof: "Auditorium",
      status: "Pending",
    },
    {
      id: 7,
      name: "Ashlynn",
      phone: "+91 9876 6789 23",
      location: "Kochi",
      roof: "Car Porch",
      status: "Pending",
    },
    {
      id: 8,
      name: "James",
      phone: "+91 9867 5433 33",
      location: "Kochi",
      roof: "Auditorium",
      status: "Pending",
    },
    {
      id: 9,
      name: "george",
      phone: "+91 9867 5433 33",
      location: "Kochi",
      roof: "Auditorium",
      status: "Pending",
    },
    {
      id: 10,
      name: "xavi",
      phone: "+91 9867 5433 33",
      location: "Kochi",
      roof: "Auditorium",
      status: "Pending",
    },
    {
      id: 11,
      name: "pedri",
      phone: "+91 9867 5433 33",
      location: "Kochi",
      roof: "Auditorium",
      status: "Pending",
    },
    {
      id: 12,
      name: "rodrigo",
      phone: "+91 9867 5433 33",
      location: "Kochi",
      roof: "Auditorium",
      status: "Pending",
    },
  ];
  // --------------------------------------------------

  // ------------------------------------------------

  const CompletedProjects = [
    {
      id: 1,
      name: "Kevin",
      date: "9-10-22",
      location: "Kochi",
      roof: "Car Porch",
      amount: "14,500",
      payment: "paid",
    },
    {
      id: 2,
      name: "Marley",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 3,
      name: "Gustavo",
      date: "20-10-22",
      location: "tsr",
      roof: "car Porch",
      amount: "10,000",
      payment: "unpaid",
    },
    {
      id: 4,
      name: "Chance",
      date: "12-10-22",
      location: "kochi",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 5,
      name: "Marley",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 6,
      name: "Miracle",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 7,
      name: "Ashlynn",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 8,
      name: "James",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 9,
      name: "george",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 10,
      name: "xavi",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 11,
      name: "pedri",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
    {
      id: 12,
      name: "rodrigo",
      date: "9-10-22",
      location: "kollam",
      roof: "ware Porch",
      amount: "20,000",
      payment: "paid",
    },
  ];
  // ---------------------------------------------

  const EmployeeDetails = [
    {
      id: 1,
      empID: "S123456",
      name: "Kevin",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 2,
      empID: "E65346",
      name: "marley",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 3,
      empID: "T23423",
      name: "merin",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 4,
      empID: "F123456",
      name: "john",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 5,
      empID: "K54456",
      name: "tintu",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 6,
      empID: "V34456",
      name: "Raju",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 7,
      empID: "f23443",
      name: "gomas",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 8,
      empID: "G123456",
      name: "jerry",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 9,
      empID: "N123456",
      name: "david",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 10,
      empID: "U186756",
      name: "khaliya",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 11,
      empID: "K123456",
      name: "Bheem",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
    {
      id: 12,
      empID: "X123456",
      name: "jude",
      phone: "+91 7887 6464 55",
      role: "sales",
      status: "active",
    },
  ];

  // ----------------------
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [data, setData] = useState(OngoingProject);
  const [data2, setData2] = useState(CompletedProjects);
  const [data3, setData3] = useState(EmployeeDetails);

  const [searchOngoing, setSearchOngoing] = useState("");
  const [searchCompleted, setSearchCompleted] = useState("");
  const [searchEmployee, setSearchEmployee] = useState("");
  // const [search3, setSearch3] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // --------------------------
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchOngoing.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // -------------------------
  const filteredData2 = data2.filter((item) =>
    item.name.toLowerCase().includes(searchCompleted.toLowerCase())
  );
  const paginatedData2 = filteredData2.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // ----------------------------
  const filteredData3 = data3.filter((item) =>
    item.name.toLowerCase().includes(searchEmployee.toLowerCase())
  );
  const paginatedData3 = filteredData3.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleDelete2 = (id) => {
    setData2(data.filter((item) => item.id !== id));
  };
  const handleDelete3 = (id) => {
    setData3(data.filter((item) => item.id !== id));
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const totalPages2 = Math.ceil(filteredData2.length / itemsPerPage);
  const totalPages3 = Math.ceil(filteredData3.length / itemsPerPage);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchOngoing = (event) => {
    setSearchOngoing(event.target.value);
  };

  const handleSearchCompleted = (event) => {
    setSearchCompleted(event.target.value);
  };

  const handleSearchEmploye = (event) => {
    setSearchEmployee(event.target.value);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const handleToggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  return (
    <div className="min-h-screen flex bg-gray-100  ">
      {/* Sidebar */}
      <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col  ">
        <Header toggleSidebar={toggleSidebar} />

        {/* Dashboard Content */}
        <div className=" space-y-8 bg-gray-100 p-5 ">
          {/* Dashboard Header */}
          <h1 className="text-3xl font-bold text-[#4c48a5]">Dashboard</h1>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="p-4 bg-white rounded-2xl shadow-md flex items-center space-x-4 py-5">
              <div className="text-blue-500 text-3xl">
                <img src={addnew} alt="" />
              </div>
              <div
                onClick={() => navigate("/addnewclient")}
                className="cursor-pointer"
              >
                <h2 className="text-lg font-normal">Add New Clients</h2>
                <p className="text-gray-600">To register new clients</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-md flex items-center space-x-4 py-5">
              <div className="text-green-500 text-3xl">
                <img src={addclients} alt="" />
              </div>
              <div>
                <h2 className="text-lg font-normal">Existing Clients</h2>
                <p className="text-gray-600">View existing clients</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-md flex items-center space-x-4 py-5">
              <div className="text-orange-500 text-3xl">
                <img src={addestimate} alt="" />
              </div>
              <div
                onClick={() => navigate("/estimate")}
                className="cursor-pointer"
              >
                <h2 className="text-lg font-normal">Create an Estimate</h2>
                <p className="text-gray-600">Generate client estimates</p>
              </div>
            </div>
          </div>

          {/* Tables */}
          <div className="space-y-8">
            {/* Ongoing Projects */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#4c48a5]">
                  Ongoing Projects
                </h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchOngoing}
                    onChange={handleSearchOngoing}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                    Filter
                  </button>

                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                    Export
                  </button>
                </div>
              </div>
              <table className="w-full border-collapse border-t border-b border-gray-300 text-left">
                <thead>
                  <tr>
                    <th className="p-2 border-b border-gray-300"></th>
                    <th className="p-2 border-b border-gray-300">SL No</th>
                    <th className="p-2 border-b border-gray-300">
                      Client Name
                    </th>
                    <th className="p-2 border-b border-gray-300">
                      Phone Number
                    </th>
                    <th className="p-2 border-b border-gray-300">Location</th>
                    <th className="p-2 border-b border-gray-300">Roof Type</th>
                    <th className="p-2 border-b border-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {(isExpanded ? filteredData : filteredData.slice(0, 2)).map(
                    (item, index) => (
                      <tr key={item.id} className="border-b border-gray-300">
                        <td className="p-2">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                          />
                        </td>
                        <td className="p-2">
                          {index + 1 + (currentPage - 1) * itemsPerPage}
                        </td>
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">{item.phone}</td>
                        <td className="p-2">{item.location}</td>
                        <td className="p-2">{item.roof}</td>
                        <td
                          className={`p-2 ${
                            item.status === "On-going"
                              ? "text-green-500"
                              : "text-yellow-500"
                          }`}
                        >
                          {item.status}
                        </td>
                        <td className="p-2">
                          <button className="bg-blue-500 text-white px-3 py-1 rounded">
                            See Details
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <button
                onClick={handleToggleExpand}
                className="mt-2 text-blue-500 underline"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
              <div className="flex justify-between items-center mt-4">
                <div>
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex space-x-2">
                  {[...Array(totalPages)].map((_, pageIndex) => (
                    <button
                      key={pageIndex}
                      onClick={() => handlePageChange(pageIndex + 1)}
                      className={`px-3 py-1 rounded ${
                        currentPage === pageIndex + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {pageIndex + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* -------------------------------------------------- */}
            {/* Completed Projects */}
            {/* Completed Projects */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#4c48a5]">
                  Completed Projects
                </h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchCompleted}
                    onChange={handleSearchCompleted}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                  <button
                    onClick={() => handleDelete2(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                    Filter
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                    Export
                  </button>
                </div>
              </div>
              <table className="w-full border-collapse border-t border-b border-gray-300 text-left">
                <thead>
                  <tr>
                    <th className="p-2 border-b border-gray-300"></th>
                    <th className="p-2 border-b border-gray-300">SL No</th>
                    <th className="p-2 border-b border-gray-300">
                      Client Name
                    </th>
                    <th className="p-2 border-b border-gray-300">Date</th>
                    <th className="p-2 border-b border-gray-300">Location</th>
                    <th className="p-2 border-b border-gray-300">Roof Type</th>
                    <th className="p-2 border-b border-gray-300">Amount</th>
                    <th className="p-2 border-b border-gray-300">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {(isExpanded2
                    ? paginatedData2
                    : paginatedData2.slice(0, 2)
                  ).map((item, index) => (
                    <tr key={item.id} className="border-b border-gray-300">
                      <td className="p-2">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </td>
                      <td className="p-2">
                        {index + 1 + (currentPage - 1) * itemsPerPage}
                      </td>
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{item.date}</td>
                      <td className="p-2">{item.location}</td>
                      <td className="p-2">{item.roof}</td>
                      <td className="p-2">{item.amount}</td>
                      <td
                        className={`p-2 ${
                          item.payment === "paid"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {item.payment}
                      </td>
                      <td className="p-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
                          See Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={handleToggleExpand2}
                className="mt-2 text-blue-500 underline"
              >
                {isExpanded2 ? "Show Less" : "Show More"}
              </button>
              <div className="flex justify-between items-center mt-4">
                <div>
                  Page {currentPage} of {totalPages2}
                </div>
                <div className="flex space-x-2">
                  {[...Array(totalPages2)].map((_, pageIndex) => (
                    <button
                      key={pageIndex}
                      onClick={() => handlePageChange(pageIndex + 1)}
                      className={`px-3 py-1 rounded ${
                        currentPage === pageIndex + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {pageIndex + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------------------------Employee Details------------------------------- */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#4c48a5]">
                  Employee Details
                </h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchEmployee}
                    onChange={handleSearchEmploye}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                  <button
                    onClick={() => handleDelete2()}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                    Filter
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                    Export
                  </button>
                </div>
              </div>

              <table className="w-full border-collapse border-t border-b border-gray-300 text-left">
                <thead>
                  <tr>
                    <th className="p-2 border-b border-gray-300"></th>
                    <th className="p-2 border-b border-gray-300">SL No</th>
                    <th className="p-2 border-b border-gray-300">
                      Employee ID
                    </th>
                    <th className="p-2 border-b border-gray-300">Name</th>
                    <th className="p-2 border-b border-gray-300">Phone No</th>
                    <th className="p-2 border-b border-gray-300">Role</th>
                    <th className="p-2 border-b border-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {(isExpanded3
                    ? paginatedData3
                    : paginatedData3.slice(0, 2)
                  ).map((item, index) => (
                    <tr key={item.id} className="border-b border-gray-300">
                      <td className="p-2">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </td>
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{item.empID}</td>
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{item.phone}</td>
                      <td className="p-2">{item.role}</td>
                      <td className="p-2">{item.status}</td>
                      <td className="p-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
                          See Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={handleToggleExpand3}
                className="mt-2 text-blue-500 underline"
              >
                {isExpanded3 ? "Show Less" : "Show More"}
              </button>

              <div className="flex justify-between items-center mt-4">
                <div>
                  Page {1} of {totalPages3}
                </div>
                <div className="flex space-x-2">
                  {[...Array(totalPages3)].map((_, pageIndex) => (
                    <button
                      key={pageIndex}
                      onClick={() => handlePageChange(pageIndex + 1)}
                      className={`px-3 py-1 rounded ${
                        pageIndex + 1 === 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {pageIndex + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* ---------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
