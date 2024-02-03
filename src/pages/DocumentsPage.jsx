import React, { useState } from "react";
import DocumentCard from "@/components/DocumentCard";
import PageTitle from "@/components/PageTitle";
import { Plus, ChevronRight, Type, Scan } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DocumentsPage = () => {
  const [drawerContent, setDrawerContent] = useState(null);
  const [drawerTitle, setDrawerTitle] = useState("Add files")

  const resetDrawerContent = () => {
    setDrawerTitle("Add files")
    setDrawerContent(
      <div>
        <button
          onClick={() => setDrawerContentToDocs()}
          className="flex items-center justify-between py-6 w-full"
        >
          <p className=" font-medium text-xl">Document</p>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />

        <button onClick={() => setDrawerContentToPrescription()} className="flex items-center justify-between py-6 w-full">
          <p className=" font-medium text-xl">Prescription</p>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />
      </div>
    );
  };

  const setDrawerContentToDocs = () => {
    setDrawerContent(
      <div>
        <button className="flex items-center justify-between py-6 w-full">
          <p className="text-base">Insurance</p>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />

        <button className="flex items-center justify-between py-6 w-full">
          <p className="text-base">Hospital Report</p>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />

        <button className="flex items-center justify-between py-6 w-full">
          <p className="text-base">Other Documents</p>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />
      </div>
    );
  };

  const setDrawerContentToPrescription = () => {
    setDrawerTitle("Add prescription")
    setDrawerContent(
      <div>
        <h4 className=" text-lg font-medium pt-5">Choose input</h4>
        <div className="flex justify-evenly items-center pt-10">
            <button className=" w-28 h-28 bg-[#2F2F40] rounded-lg flex flex-col justify-center items-center">
                <Type size={35} />
                <p className=" text-sm">Type</p>
            </button>
            <button className=" w-28 h-28 bg-[#2F2F40] rounded-lg flex flex-col justify-center items-center">
                <Scan size={35} />
                <p className=" text-sm">Scan</p>
            </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" px-4 pb-44">
        <PageTitle title="Documents" />
        <div className="flex flex-col gap-5 pt-6">
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
          <DocumentCard type="Life Insurance" name="Aster MIMS" />
        </div>

        <Drawer>
          <DrawerTrigger>
            <button
              onClick={resetDrawerContent}
              className=" bg-[#1A4CD3] w-14 h-14 flex justify-center place-items-center rounded fixed bottom-24 right-4"
            >
              <Plus size={30} />
            </button>
          </DrawerTrigger>

          <DrawerContent className="bg-[#1C1E27] rounded-2xl h-[50%] border-none">
            <DrawerHeader>
              <DrawerTitle className=" text-left">
                <PageTitle title={drawerTitle}/>
              </DrawerTitle>
              <DrawerDescription>{drawerContent}</DrawerDescription>
            </DrawerHeader>
            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default DocumentsPage;
