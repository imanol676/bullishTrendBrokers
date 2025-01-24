import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineWallet,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="h-screen  w-64 bg-gradient-to-b from-zinc-900 to-zinc-700 text-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-zinc-600">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
          BullishTrend
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
        >
          <AiOutlineHome size={20} />
          <span>Home</span>
        </Link>

        <Link
          to="/wallet"
          className="flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
        >
          <AiOutlineWallet size={20} />
          <span>Wallet</span>
        </Link>

        <Link
          to="/investments"
          className="flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
        >
          <FaMoneyCheckAlt size={20} />
          <span>Investments</span>
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
        >
          <AiOutlineSetting size={20} />
          <span>Settings</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-zinc-600">
        <button className="flex items-center gap-4 w-full p-2 rounded-md hover:bg-orange-600">
          <AiOutlineLogout size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
