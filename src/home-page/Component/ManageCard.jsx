import React from "react";

const ManageCard = ({ cardData }) => {
  const { icon, title, description, btnText, color } = cardData;
  // console.log(color);

  return (
    <div className="p-8 shadow-lg bg-white space-y-2 rounded-xl">
      <div className="flex gap-2 items-center ">
        <i className={`${icon} text-2xl `} style={{ color: `#${color}` }}></i>

        <h4 style={{ color: `#${color}` }} className={`text-2xl mb-2  `}>
          {title}
        </h4>
      </div>
      <p className="text-lg">{description}</p>
      <div className="flex justify-end mt-6 ">
        <button
          style={{ backgroundColor: `#${color}` }}
          className="btn rounded-4xl border-none "
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default ManageCard;
