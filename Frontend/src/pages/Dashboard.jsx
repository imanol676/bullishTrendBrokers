import { Routes, Route } from "react-router-dom";
import MainPanel from "./MainPanel";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      {/* Main content */}
      <div className="flex-1 bg-zinc-900 text-white p-4 overflow-y-auto">
        <Routes>
          <Route path="/" element={<MainPanel />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
