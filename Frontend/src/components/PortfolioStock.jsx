import PropTypes from "prop-types";

const PortfolioStock = ({ stock, shares, currentValue, change }) => {
  return (
    <tr className="border-b border-zinc-600 hover:bg-zinc-700">
      <td className="py-2">{stock}</td>
      <td className="py-2">{shares}</td>
      <td className="py-2">{currentValue}</td>
      <td className="py-2">{change}</td>

      <td className={`py-2 ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
        {change > 0 && "+"}
        {change}%
      </td>
    </tr>
  );
};

PortfolioStock.propTypes = {
  stock: PropTypes.string.isRequired,
  shares: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
};

export default PortfolioStock;
