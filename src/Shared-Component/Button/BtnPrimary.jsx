import React from "react";

const BtnPrimary = ({ link, name }) => {
  return (
    <div>
      <a
        href={link}
        className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
      >
        {name}
      </a>
    </div>
  );
};

export default BtnPrimary;
