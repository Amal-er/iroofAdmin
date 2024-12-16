/* eslint-disable react/prop-types */
import logo from "../../SalesDashboard/assets/images/logo.png";
import square from "../../SalesDashboard/assets/icons/square.png";
import profile from "../../SalesDashboard/assets/icons/profile.png";
import file from "../../SalesDashboard/assets/icons/file.png";
import settings from "../../SalesDashboard/assets/icons/settings.png";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 bg-[#2a2291] text-white min-h-screen w-64 px-4 py-6 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:translate-x-0 md:relative md:min-h-screen`}
    >
      <div className="flex justify-center items-center">
        <img src={logo} className="w-40" alt="Logo" />

        {/* Close button for mobile view */}
        <button className="text-white md:hidden" onClick={toggleSidebar}>
          ✕
        </button>
      </div>
      <div className="flex justify-center items-center">
        <ul className="space-y-4 py-6 flex flex-col items-start">
          {/* Menu Items */}
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("dashboard")}
            >
              <div className="w-8 flex justify-center">
                <img src={square} alt="Dashboard Icon" className="w-6 h-6" />
              </div>
              <Link to="/salesdashboard">
                <span>Dashboard</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("salescustomers")}
            >
              <div className="w-8 flex justify-center">
                <img src={profile} alt="salescustomers" className="w-6 h-6" />
              </div>
              <Link to="/salescustomers">Customers</Link>{" "}
              {/* Replace the a tag with Link */}
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("transportation")}
            >
              <div className="w-8 flex justify-center">
                <img src={file} alt="Employees Icon" className="w-6 h-6" />
              </div>
              <Link to="/quickestimate">
                <span>Quick Estimate</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("transportation")}
            >
              <div className="w-8 flex justify-center">
                <img src={file} alt="Employees Icon" className="w-6 h-6" />
              </div>
              <Link to="/finalestimate">
                <span>Final Estimate</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("ratesettings")}
            >
              <div className="w-8 flex justify-center">
                <img src={square} alt="Projects Icon" className="w-6 h-6" />
              </div>
              <Link to="/salessettings">
                <span>Settings</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
