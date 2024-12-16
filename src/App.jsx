import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDasboard/Dashboard/AdminDashboard";
import Customers from "./AdminDasboard/pages/Customers";
import AddnewClients from "./AdminDasboard/pages/AddnewClients";
import Employees from "./AdminDasboard/pages/Employees";
import AddnewEmployee from "./AdminDasboard/pages/AddnewEmployee";
import Projects from "./AdminDasboard/pages/Projects";
import Estimate from "./AdminDasboard/pages/Estimate";
import Rates from "./AdminDasboard/pages/Rates";
import ProductsAdding from "./AdminDasboard/pages/ProductsAdding";
import CostAdding from "./AdminDasboard/pages/CostAdding";
import Settings from "./AdminDasboard/pages/Settings";
import Materials from "./RatesDashboard/pages/Materials";
import ThicknessRate from "./RatesDashboard/pages/ThicknessRate";
import EditThicknessRate from "./RatesDashboard/pages/EditThicknessRate";
import Transportation from "./RatesDashboard/pages/Transportation";

import SettingsRate from "./RatesDashboard/pages/SettingsRate";
import SalesDashboard from "./SalesDashboard/pages/SalesDashboard";
import SalesAddnewClient from "./SalesDashboard/pages/SalesAddnewClient";
import SalesCustomers from "./SalesDashboard/pages/SalesCustomers";
import QuickEstimate from "./SalesDashboard/pages/QuickEstimate";
import FinalEstimate from "./SalesDashboard/pages/FinalEstimate";
import SalesSettings from "./SalesDashboard/pages/SalesSettings";
import ViewQuotation from "./SalesDashboard/pages/ViewQuotation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/addnewclient" element={<AddnewClients />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addnewemployee" element={<AddnewEmployee />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/productsadding" element={<ProductsAdding />} />
        <Route path="/costadding" element={<CostAdding />} />
        <Route path="/settings" element={<Settings />} />
        {/* -----------------------rates----------------------- */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/thicknessrate" element={<ThicknessRate />} />
        <Route path="/editthicknessrate" element={<EditThicknessRate />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/ratesettings" element={<SettingsRate />} />
        {/* -----------------------sales-------------------------------- */}
        <Route path="/salesdashboard" element={<SalesDashboard />} />
        <Route path="/salesaddnewclient" element={<SalesAddnewClient />} />
        <Route path="/salescustomers" element={<SalesCustomers />} />
        <Route path="/quickestimate" element={<QuickEstimate />} />
        <Route path="/finalestimate" element={<FinalEstimate />} />
        <Route path="/salessettings" element={<SalesSettings />} />
        <Route path="/viewquotation" element={<ViewQuotation />} />
        {/* ---------------------------------------------------------- */}
      </Routes>
    </>
  );
}

export default App;
