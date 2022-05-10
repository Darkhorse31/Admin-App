import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/ToolBar";
import "./app.scss"
const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="otherpages">
        </div>
      </div>
    </div>
  );
};

export default App;
