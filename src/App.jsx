import { useState } from "react";
import "./App.css";
import Home from "./home-page/home";
import Navbar from "./Navbar";
import Meals from "./assets/meals-page/Meals";
import Bazar from "./assets/bazar-page/Bazar";
import DueCollection from "./assets/due-collection-page/DueCollection";
import FundCosting from "./assets/fund-and-costing-page/Fund&Costing";
import Members from "./assets/member-page/Members";
import MonthlyBillsUpdate from "./assets/monthly-bill-update-page/MonthlyBillsUpdate";

// manageCard data load and function call for manage promise
const loadManageData = async () => {
  const res = await fetch("./manage.json");
  return res.json();
};
const ManagePromise = loadManageData();

// member data load 
const memberDataLoad = async() => {
  const res = await fetch("./member.json");
  return res.json(); 
}
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

  return (
    <>
      <div className="bg-[#F5F6F7]  ">
        <Navbar setPageToggle={setPageToggle}></Navbar>
        

        {PageComponent ? (
          <PageComponent memberDataPromise={memberDataPromise} ManagePromise={ManagePromise} />
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
