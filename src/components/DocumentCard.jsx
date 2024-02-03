import React from "react";

const DocumentCard = ({ type, name, date}) => {
  return (
    <div className="w-full h-fit p-5 rounded-2xl bg-[#1C1E27] flex justify-between items-center">
      <div className="flex gap-2">
        <img src="/icons/document.svg" alt="document-icon" />
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-medium">{type}</h4>
          <p className="text-xs">{name} {date ? `| Dated: ${date}` : ""}</p>
        </div>
      </div>
      <button>
        <img src="/icons/dots.svg" alt="dots" />
      </button>
    </div>
  );
};

export default DocumentCard;
