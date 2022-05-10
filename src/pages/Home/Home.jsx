import React from "react";
import Chart from "../../components/Charts/Chart";
import Info from "../../components/Featuredinfo";
import "./Home.scss";
import Userdata from "../../dummydata"
const Home = () => {
  return (
    <div className="home">
      <Info />
      <Chart data={Userdata} title={"User Analytics"} grid dataKey={"Active users"}/>
    </div>
  );
};

export default Home;
