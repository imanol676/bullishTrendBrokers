import { Routes, Route } from "react-router-dom";
import WelcomePanel from "../components/WelcomePanel";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const Name = "John Doe";
  const BalanceARS = 100000;
  const BalanceUSD = 1000;
  const portfolioChange = 3.5;
  return (
    <div className="flex h-screen">
      <SideBar />
      {/* Main content */}
      <div className="flex-1 bg-zinc-900 text-white p-4 overflow-y-auto">
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePanel
                Name={Name}
                BalanceARS={BalanceARS}
                BalanceUSD={BalanceUSD}
                portfolioChange={portfolioChange}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
