import { useState } from "react";
import Sidebar from "../components/SideNav";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import newemployee from "../assets/icons/newemploye.png";

function Employees() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const navigate = useNavigate();
  const OngoingProject = [
    {
      id: 1,
      empId: "S12321",
      Name: "raju",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 2,
      empId: "B19321",
      Name: "bheem",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 3,
      empId: "C12321",
      Name: "khaliya",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 4,
      empId: "D12321",
      Name: "chutki",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 5,
      empId: "E12321",
      Name: "james",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 6,
      empId: "F12321",
      Name: "rodri",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 7,
      empId: "G12321",
      Name: "ronaldo",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 8,
      empId: "H12321",
      Name: "kroos",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 9,
      empId: "I12321",
      Name: "lewandoski",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 10,
      empId: "J12321",
      Name: "messi",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 11,
      empId: "K23321",
      Name: "bale",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
    {
      id: 12,
      empId: "L12321",
      Name: "Marcelo",
      phoneno: "Kochi",
      role: "Car Porch",
      status: "active",
    },
  ];

  const [data, setData] = useState(OngoingProject);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = data.filter((item) =>
    item.Name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
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
          <div className="flex justify-end items-end">
            <button
              className=" font-bold text-white bg-[#0D99FF] rounded-md p-2 cursor-pointer flex justify-center items-center gap-2"
              onClick={() => navigate("/addnewemployee")}
            >
              <img src={newemployee} alt="" />
              Add New Employee
            </button>
          </div>

          {/* Action Cards */}

          {/* Tables */}
          <div className="space-y-8">
            {/*-----------------------Ongoing Projects----------------------- */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#3e37bc]">
                  Employee Details
                </h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearch}
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
                {/* ---//---//---//---//---//---//---//---//---//---//---//---//---//---//---//---//---//---//------------------ */}
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
                    <th className="p-2 border-b border-gray-300">
                      Phone Number
                    </th>
                    <th className="p-2 border-b border-gray-300">Role</th>
                    <th className="p-2 border-b border-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item, index) => (
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
                      <td className="p-2">{item.empId}</td>
                      <td className="p-2">{item.Name}</td>
                      <td className="p-2">{item.phoneno}</td>
                      <td className="p-2">{item.role}</td>
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
                  ))}
                </tbody>
              </table>
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

            {/* Employee Details--- --- --- --- --- --- ------------------------------- */}

            {/* ---------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
