import { useState } from "react";
import "./App.css";
import Home from "./home-page/home";
import Navbar from "./Navbar";
import Meals from "./pages/meals-page/Meals";
import Bazar from "./pages/bazar-page/Bazar";
import DueCollection from "./pages/due-collection-page/DueCollection";
import FundCosting from "./pages/fund-and-costing-page/Fund&Costing";
import Members from "./pages/member-page/Members";
import MonthlyBillsUpdate from "./pages/monthly-bill-update-page/MonthlyBillsUpdate";
import Login from "./auth/Login";

// manageCard data load and function call for manage promise
const loadManageData = async () => {
  const res = await fetch("./manage.json");
  return res.json();
};
const ManagePromise = loadManageData();

// member data load
const memberDataLoad = async () => {
  const res = await fetch("./member.json");
  return res.json();
};
const memberDataPromise = memberDataLoad();

function App() {
  // for toggling page ;
  const [pageToggle, setPageToggle] = useState("Home");
  const components = {
    Home,
    Meals,
    Bazar,
    DueCollection,
    FundCosting,
    Members,
    MonthlyBillsUpdate,
  };

  // Pick component dynamically
  const PageComponent = components[pageToggle];

  // logout btn
  const [logOut, setLogout] = useState(false);

  return (
    <>
      <div className="bg-[#F5F6F7]  ">
        <Navbar
          logOut={logOut}
          setLogout={setLogout}
          setPageToggle={setPageToggle}
        ></Navbar>

        {logOut ? (
          <Login></Login>
        ) : PageComponent ? (
          <PageComponent
            memberDataPromise={memberDataPromise}
            ManagePromise={ManagePromise}
          />
        ) : (
          <h2 className="text-center mt-10 text-red-500 font-bold">
            Page not found or loading...
          </h2>
        )}
      </div>
    </>
  );
}

export default App;
