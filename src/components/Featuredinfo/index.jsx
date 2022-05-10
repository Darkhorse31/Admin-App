import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./index.scss";
const Info = () => {
  return (
    <div className="feature">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney"> $ 2,444</span>
          <span className="featureMoneyRate">
            -11 <ArrowDownward className="ficon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney"> $ 2,444</span>
          <span className="featureMoneyRate">
            + 11 <ArrowUpward className="positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney"> $ 2,444</span>
          <span className="featureMoneyRate">
            -11 <ArrowDownward  className=" negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default Info;
