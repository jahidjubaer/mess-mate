import "./App.css";
import Dashboard from "./home-page/Dashboard";
import Footer from "./home-page/footer";
import Manage from "./home-page/Manage";
import Navbar from "./home-page/Navbar";

const loadManageData = async () => {
  const res = await fetch("./manage.json");
  return res.json();
};

const ManagePromise = loadManageData();

function App() {
  return (
    <>
      <div className="bg-[#F5F6F7]  ">
        <Navbar></Navbar>
        <Dashboard></Dashboard>
        <Manage ManagePromise={ManagePromise} ></Manage>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
