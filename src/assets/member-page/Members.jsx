import React, { use } from "react";
import MemberTable from "./MemberTable";

const Members = ({ memberDataPromise }) => {
  const memberData = use(memberDataPromise);
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto min-h-[100vh]">
      <h1 className="text-4xl font-bold my-10">Mess Member Management</h1>
      <div className="space-x-2 ">
        <button className="btn bg-[#4CAF50] text-white">Add New Member</button>
        <label className="input">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" required placeholder="Search by name" />
        </label>
        <button className="btn bg-[#4CAF50] text-white">Search</button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-sm my-5 bg-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#2D2D2D] text-white">
              <th></th>
              <th>Name</th>
              <th>Number</th>
              <th>Status</th>
              <th>Role</th>
              <th>Member Since</th>
              <th>Action</th>
            </tr>
          </thead>
            
            {
                memberData.map(member => <MemberTable member={member} key={member.id} ></MemberTable> )
            }
          
        </table>
      </div>
    </div>
  );
};

export default Members;
