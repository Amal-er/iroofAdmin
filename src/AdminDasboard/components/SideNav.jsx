/* eslint-disable react/prop-types */
import logo from "../assets/images/logo.png";
import square from "../assets/icons/square.png";
import profile from "../assets/icons/profile.png";
import file from "../assets/icons/file.png";
import settings from "../assets/icons/settings.png";
import { Link } from "react-router-dom";

const SideNav = ({ isOpen, toggleSidebar }) => {
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
              <Link to="/">
                <span>Dashboard</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("customers")}
            >
              <div className="w-8 flex justify-center">
                <img src={profile} alt="Customers Icon" className="w-6 h-6" />
              </div>
              <Link to="/customers">Customers</Link>{" "}
              {/* Replace the a tag with Link */}
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("employees")}
            >
              <div className="w-8 flex justify-center">
                <img src={file} alt="Employees Icon" className="w-6 h-6" />
              </div>
              <Link to="/employees">
                <span>Employees</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("projects")}
            >
              <div className="w-8 flex justify-center">
                <img src={square} alt="Projects Icon" className="w-6 h-6" />
              </div>
              <Link to="/projects">
                <span>Projects</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("estimate")}
            >
              <div className="w-8 flex justify-center">
                <img src={file} alt="Estimate Icon" className="w-6 h-6" />
              </div>
              <Link to="/estimate">
                <span>Estimate</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("rates")}
            >
              <div className="w-8 flex justify-center">
                <img src={square} alt="Rates Icon" className="w-6 h-6" />
              </div>
              <Link to="/rates">
                <span>Rates</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("productsAdding")}
            >
              <div className="w-8 flex justify-center">
                <img
                  src={file}
                  alt="Products Adding Icon"
                  className="w-6 h-6"
                />
              </div>
              <Link to="/productsadding">
                <span>Products Adding</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("costAdding")}
            >
              <div className="w-8 flex justify-center">
                <img src={square} alt="Cost Adding Icon" className="w-6 h-6" />
              </div>
              <Link to="/costadding">
                <span>Cost Adding</span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded w-full"
              onClick={() => toggleMenu("settings")}
            >
              <div className="w-8 flex justify-center">
                <img src={settings} alt="Settings Icon" className="w-6 h-6" />
              </div>
              <Link to="/settings">
                <span>Settings</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
