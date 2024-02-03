import BottomNavigation from "@/components/ui/BottomNavigation";
import DocumentCard from "@/components/ui/DocumentCard";
import React from "react";

const DocumentsPage = () => {
  return (
    <div className=" px-6">
      <div className="flex flex-col gap-5">
        <DocumentCard
          type="Life Insurance"
          name="Aster MIMS"
          date="03-10-2023"
        />
        <DocumentCard type="Life Insurance" name="Aster MIMS" />
        <DocumentCard
          type="Life Insurance"
          name="Aster MIMS"
          date="03-10-2023"
        />
        <DocumentCard
          type="Life Insurance"
          name="Aster MIMS"
          date="03-10-2023"
        />
        <DocumentCard type="Life Insurance" name="Aster MIMS" />
      </div>
    </div>
  );
};

export default DocumentsPage;
