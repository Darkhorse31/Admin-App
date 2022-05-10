import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/ToolBar";
import "./app.scss";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
