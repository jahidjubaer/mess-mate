import React, { use } from "react";
import ManageCard from "./ManageCard";

const Manage = ({ ManagePromise }) => {
  const ManageData = use(ManagePromise);
//   console.log(ManageData);

  return (
    <div className="lg:w-10/12 mx-auto w-11/12 my-20">
      <h1 className="text-4xl font-bold mb-7">Manage & Account</h1>
      <div className=" lg:grid grid-cols-3 gap-4 space-y-4 lg:space-y-0">
        {ManageData.map((cardData) => (
          <ManageCard cardData={cardData} key={cardData.title} ></ManageCard>
        ))}
      </div>
    </div>
  );
};

export default Manage;
