import Portfolio from "../components/Portfolio";
import WelcomePanel from "../components/WelcomePanel";

const MainPanel = () => {
  const Name = "John Doe";
  const BalanceARS = 100000;
  const BalanceUSD = 1000;
  const portfolioChange = 3.5;
  return (
    <div>
      <WelcomePanel
        Name={Name}
        BalanceARS={BalanceARS}
        BalanceUSD={BalanceUSD}
        portfolioChange={portfolioChange}
      />
      <Portfolio />
    </div>
  );
};

export default MainPanel;
