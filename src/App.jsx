import "./App.css";
import Dashboard from "./home-page/Dashboard";
import Navbar from "./home-page/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#F5F6F7]  ">
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>
    </>
  );
}

export default App;
