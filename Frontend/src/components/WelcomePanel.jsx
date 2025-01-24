import { FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";

const welcomePanel = ({ Name, BalanceARS, BalanceUSD, portfolioChange }) => {
  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-600 p-6 rounded-md text-white">
      <h1 className="text-2xl md:text-4xl font-bold">
        Hola, <span className="text-orange-400">{Name}</span>
      </h1>

      <p>
        Bienvenido a tu dashboard de inversiones en
        <span className="text-orange-400"> Bullish Trend Brokers</span>.
      </p>

      {/* cartera */}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ARS */}
        <div className="bg-zinc-700 p-4 rounded-md flex items-center justify-between">
          <p className="text-sm text-gray-400">Saldo en Pesos</p>
          <h2 className="text-xl md:text-2xl font-bold">
            ${BalanceARS.toLocaleString("es-AR")}
          </h2>
        </div>
      </div>

      {/* USD */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-zinc-700 p-4 rounded-md flex items-center justify-between">
          <p className="text-sm text-gray-400">Saldo en Dólares</p>
          <h2 className="text-xl md:text-2xl font-bold">
            ${BalanceUSD.toLocaleString("en-US")}
          </h2>
        </div>
      </div>

      {/* Rendimento */}

      <div className="p-4 mt-6 bg-zinc-800 rounded-md flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Cambio en Portafolio</p>
          <h2 className="text-xl md:text-2xl font-bold">
            {portfolioChange > 0 ? (
              <span className="text-green-400">
                +{portfolioChange.toLocaleString("es-AR")}%
              </span>
            ) : (
              <span className="text-red-400">
                {portfolioChange.toLocaleString("es-AR")}%
              </span>
            )}
          </h2>
        </div>
        {portfolioChange >= 0 ? (
          <FaArrowUp size={30} className="text-green-400" />
        ) : (
          <FaArrowDown size={30} className="text-red-400" />
        )}
      </div>
    </div>
  );
};

export default welcomePanel;
