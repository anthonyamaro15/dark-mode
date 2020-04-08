import React from "react";
import { useRouteMatch } from "react-router-dom";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  const { url } = useRouteMatch();

  return (
    <div className="charts">
      {url === "/europe" ? <h1>europe</h1> : <h1>us</h1>}
      {coinData.map((coin) => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
