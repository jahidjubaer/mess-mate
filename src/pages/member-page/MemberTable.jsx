import React, { useState } from "react";

const MemberTable = ({ member }) => {
  let { id, Name, Number, Status, Role, Member_Since } = member;

//   status 
    const [statusUpt , setStatusUpt] = useState(Status); 

    const handelStatus = () => {
        if(Status === "Active") {
            setStatusUpt("Inactive");
        }
        else{
            setStatusUpt("Active");
        }
    }
    Status = statusUpt;
  return (
    <tbody>
      <tr>
        <th>{id}</th>
        <td>{Name}</td>
        <td>{Number}</td>
        <td>
          <button
            className={`${
              Status === "Inactive"
                ? "bg-base-300 text-black"
                : "bg-[#4CAF50] text-white"
            } btn  rounded-4xl`}
          >
            {Status}
          </button>
        </td>
        <td>{Role}</td>
        <td>{Member_Since}</td>
        <td className="space-x-2">
          <button className="btn p-0 bg-white border-none hover:shadow-none">
            <i
          onClick={() => handelStatus()}
            class={`fa-solid ${
              Status == "Active"
                ? "text-[#4CAF50] fa-toggle-on"
                : "fa-toggle-off "
            }  text-2xl`}
          ></i>
          </button>

          <button className="btn p-0 border-none bg-white"><i class="fa-solid fa-trash text-2xl"></i></button>
        </td>
      </tr>
    </tbody>
  );
};

export default MemberTable;
