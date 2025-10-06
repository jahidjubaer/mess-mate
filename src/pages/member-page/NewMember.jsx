import React from "react";

const NewMember = ({ setShow }) => {
  return (
    <div className="fixed inset-0 flex items-center  justify-center  backdrop-brightness-50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 sm:w-1/3 p-6  ">
        <h3 className="font-bold text-lg mb-3">Add New Member</h3>
        <p className="text-gray-600 mb-6">Fill in the member details.</p>

        <input
          value={""}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-3"
        />

        <input
          value={""}
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full mb-3"
        />
        <select
          defaultValue="Role"
          className="select select-neutral border-gray-300 w-full mb-3"
        >
          <option disabled={true}>Role</option>
          <option>Manager</option>
          <option>Member</option>
        </select>
        <input type="date" className="input input-bordered  w-full mb-3" />
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend">Upload a Image</legend>
          <input type="file" className="file-input" />
          <label className="label">Max size 2MB</label>
        </fieldset>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setShow(false)}
            className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => setShow(false)}
            className="btn bg-[#4CAF50] text-white hover:bg-[#43a047]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMember;
