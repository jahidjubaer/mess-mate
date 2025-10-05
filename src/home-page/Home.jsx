import React from "react";
import Dashboard from "./Component/Dashboard";
import Footer from "./Component/Footer";
import Manage from "./Component/Manage";

const Home = ({ ManagePromise }) => {
  return (
    <div>
      <Dashboard></Dashboard>
      <Manage ManagePromise={ManagePromise}></Manage>
      <Footer></Footer>
    </div>
  );
};

export default Home;
