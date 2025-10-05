import React from "react";

const Dashboard = () => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto lg:my-20 my-10  ">
      <h2 className=" font-bold text-4xl  mb-5 ">DashBoard</h2>
      <div className="lg:grid grid-cols-4 gap-5 space-y-4 lg:space-y-0">
        <div className="p-4 shadow-lg bg-white space-y-2 rounded-xl">
          <h4>Total Meals Consumed</h4>
          <div className="text-[#00A651] flex justify-between text-4xl font-bold">
            <h1>234</h1>
            <i className="fa-solid fa-utensils"></i>
          </div>
          <p className="text-[#00A651]">Last update 3 min ago</p>
        </div>
        <div className="p-4 shadow-lg bg-white space-y-2 rounded-xl">
          <h4>Total Bazar Expense</h4>
          <div className="text-[#F44336] flex justify-between text-4xl font-bold">
            <h1>
              <i className="fa-solid fa-bangladeshi-taka-sign"></i>18,200
            </h1>
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
          <p className="text-[#F44336]">
            Avg: Expense :<i className="fa-solid fa-bangladeshi-taka-sign"></i>
            4000 / member
          </p>
        </div>
        <div className="p-4 shadow-lg bg-white space-y-2 rounded-xl">
          <h4>Current Meal Rate</h4>
          <div className="text-[#FFC107] flex justify-between text-4xl font-bold">
            <h1>
              <i className="fa-solid fa-bangladeshi-taka-sign"></i>18,200
            </h1>
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
          <p className="text-[#FFC107] "> Target MealRate : 33.50 </p>
        </div>
        <div className="p-4 shadow-lg bg-white text-center  space-y-2 rounded-xl">
          <h4>Total Due / Remaining </h4>
          <h4 className="text-4xl font-bold">
            <i className="fa-solid fa-bangladeshi-taka-sign text-red-500 "></i>
            <span className="text-red-500 ">18,200 /</span>
            <i className="fa-solid fa-bangladeshi-taka-sign text-amber-500 "></i>
            <span className="text-amber-500 ">18,200</span>
          </h4>
          <p className="text-red-500">Pay within 5/10/25 please</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
