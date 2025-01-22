import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Login from "./Login";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto border-b border-zinc-600 px-4">
      {/* Logo */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
        Bullish Trend Brokers
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className="p-4 hover:text-orange-400 transition">
          <a href="#inversion">Inversión</a>
        </li>
        <li className="p-4 hover:text-orange-400 transition">
          <a href="#herramientas">Herramientas</a>
        </li>
        <li className="p-4 hover:text-orange-400 transition">
          <a href="#nosotros">Nosotros</a>
        </li>
      </ul>

      {/* Login Button */}
      <div className="hidden md:block">
        <Login />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={handleNav}
        aria-label={nav ? "Cerrar menú" : "Abrir menú"}
        className="block md:hidden z-20"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`fixed left-0 top-0 w-[60%] h-full bg-gradient-to-b from-zinc-900 to-zinc-600 border-r border-zinc-600 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-10`}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent m-4">
          Bullish Trend Brokers
        </h1>
        <li className="p-4 border-b border-gray-600 hover:text-orange-400 transition">
          <a href="#inversion" onClick={handleNav}>
            Inversión
          </a>
        </li>
        <li className="p-4 border-b border-gray-600 hover:text-orange-400 transition">
          <a href="#herramientas" onClick={handleNav}>
            Herramientas
          </a>
        </li>
        <li className="p-4 border-b border-gray-600 hover:text-orange-400 transition">
          <a href="#nosotros" onClick={handleNav}>
            Nosotros
          </a>
        </li>
        <div className="m-4">
          <Login />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
