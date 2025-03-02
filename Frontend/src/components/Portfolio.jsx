import PortfolioStock from "./PortfolioStock";

const Portfolio = () => {
  const investments = [
    { stock: "AAPL", shares: 10, currentValue: 175.3, change: 1.2 },
    { stock: "TSLA", shares: 5, currentValue: 240.75, change: -0.8 },
    { stock: "GOOGL", shares: 8, currentValue: 135.5, change: 2.5 },
  ];

  return (
    <div className="mt-5 bg-gradient-to-b from-zinc-800 to-zinc-600 rounded-md text-white p-6 overflow-y-auto">
      <h2 className="text-xl md:text-xl font-bold">Tus inversiones:</h2>

      <table className="w-full mt-4 text-left">
        <thead>
          <tr className="border-b border-zinc-600">
            <th className="py-2">Acción</th>
            <th className="py-2">Cantidad</th>
            <th className="py-2">Valor Actual</th>
            <th className="py-2">Cambio (%)</th>
          </tr>
        </thead>

        <tbody>
          {investments.map((investment) => (
            <PortfolioStock
              key={investment.stock}
              stock={investment.stock}
              shares={investment.shares}
              currentValue={investment.currentValue}
              change={investment.change}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
