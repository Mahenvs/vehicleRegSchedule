import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen">
        <div className="flex flex-col flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default App;
