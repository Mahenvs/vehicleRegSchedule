import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
